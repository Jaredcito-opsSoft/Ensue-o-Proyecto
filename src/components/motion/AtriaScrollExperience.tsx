"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SCROLL_STAGES, STAGE_BREAKPOINTS } from "@/lib/scroll-stages";
import { AnimatedCopy } from "./AnimatedCopy";
import { KeyframeLayer } from "./KeyframeLayer";
import { ScrollProgress } from "./ScrollProgress";

gsap.registerPlugin(ScrollTrigger);

function StaticStageImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = imageRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className={`relative aspect-[4/5] overflow-hidden bg-[var(--atria-dark-soft)] sm:aspect-[16/10] ${className}`}
    >
      {shouldLoad && (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          loading="lazy"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      )}
      <span className="absolute inset-0 bg-[#2a160d]/18 mix-blend-multiply" aria-hidden />
    </div>
  );
}

export function AtriaScrollExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedStageCount, setLoadedStageCount] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setLoadedStageCount(SCROLL_STAGES.length);
      return;
    }

    const warmSecondFrame = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadedStageCount((current) => Math.max(current, 2));
          warmSecondFrame.disconnect();
        }
      },
      { rootMargin: "1400px 0px" }
    );
    const prepareSequence = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadedStageCount(SCROLL_STAGES.length);
          prepareSequence.disconnect();
        }
      },
      { rootMargin: "650px 0px" }
    );

    warmSecondFrame.observe(section);
    prepareSequence.observe(section);

    return () => {
      warmSecondFrame.disconnect();
      prepareSequence.disconnect();
    };
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const matchMedia = gsap.matchMedia();

      const createTimeline = (end: string, scrub: number, travel: number) => {
        const layers = gsap.utils.toArray<HTMLElement>(".js-keyframe-layer", section);
        const copies = gsap.utils.toArray<HTMLElement>(".js-copy-panel", section);

        if (layers.length !== SCROLL_STAGES.length || copies.length !== SCROLL_STAGES.length) {
          return;
        }

        gsap.set(layers, { autoAlpha: 0, scale: 1.04, xPercent: 0 });
        gsap.set(copies, { autoAlpha: 0, y: 24 });
        gsap.set(layers[0], { autoAlpha: 1, scale: 1 });
        gsap.set(copies[0], { autoAlpha: 1, y: 0 });

        let previousIndex = -1;
        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end,
            scrub,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              let nextIndex = 0;
              for (let index = STAGE_BREAKPOINTS.length - 1; index >= 0; index -= 1) {
                if (self.progress >= STAGE_BREAKPOINTS[index]) {
                  nextIndex = index;
                  break;
                }
              }
              if (nextIndex !== previousIndex) {
                previousIndex = nextIndex;
                setActiveIndex(nextIndex);
              }
            },
          },
        });

        STAGE_BREAKPOINTS.slice(1).forEach((point, offset) => {
          const previous = offset;
          const next = offset + 1;
          const transitionStart = point - 0.055;
          const direction = next % 2 === 0 ? -travel : travel;

          timeline
            .to(copies[previous], { autoAlpha: 0, y: -18, duration: 0.045 }, transitionStart)
            .to(
              layers[previous],
              { autoAlpha: 0, scale: 0.985, xPercent: direction * -0.4, duration: 0.085 },
              transitionStart
            )
            .fromTo(
              layers[next],
              { autoAlpha: 0, scale: 1.045, xPercent: direction },
              { autoAlpha: 1, scale: 1, xPercent: 0, duration: 0.09 },
              transitionStart + 0.012
            )
            .fromTo(
              copies[next],
              { autoAlpha: 0, y: 24 },
              { autoAlpha: 1, y: 0, duration: 0.06 },
              point + 0.018
            );
        });

        timeline.to({}, { duration: 0.01 }, 0.99);
        timeline.progress(0);

        const handleVisibility = () => {
          if (document.hidden) {
            timeline.pause();
          } else {
            timeline.resume();
            ScrollTrigger.update();
          }
        };
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
          document.removeEventListener("visibilitychange", handleVisibility);
          timeline.scrollTrigger?.kill();
          timeline.kill();
          gsap.set([...layers, ...copies], { clearProps: "all" });
        };
      };

      matchMedia.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, tablet, reduceMotion } = context.conditions ?? {};
          if (reduceMotion) return;
          if (desktop) return createTimeline("+=450%", 0.78, 1.5);
          if (tablet) return createTimeline("+=360%", 0.62, 0.8);
        }
      );

      return () => matchMedia.revert();
    },
    {
      scope: sectionRef,
      dependencies: [],
    }
  );

  return (
    <>
      <section className="bg-[var(--atria-page)] px-4 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12">
        <div className="mx-auto max-w-[1100px] border-t border-black/12 pt-10 text-center">
          <p className="text-[11px] font-bold uppercase text-[var(--atria-accent)]">
            Una historia en seis momentos
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl font-serif text-5xl font-medium leading-[0.94] sm:text-6xl lg:text-7xl">
            De una necesidad concreta a una solución que puede crecer.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--atria-ink-soft)]">
            Cada etapa responde a un momento distinto. Puedes comenzar con una sola y
            avanzar cuando tu proyecto lo necesite.
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        id="scroll-experience"
        className="relative scroll-mt-24 bg-[var(--atria-dark)]"
        aria-label="Cómo acompañan las soluciones de Atria a un proyecto"
      >
        <div className="ens-scroll-motion relative h-screen min-h-[620px] overflow-hidden">
          {SCROLL_STAGES.map((stage, index) => (
            <KeyframeLayer
              key={stage.id}
              className="js-keyframe-layer"
              images={stage.images}
              alt=""
              priority={index === 0}
              load={index < loadedStageCount}
              initialVisible={index === 0}
            />
          ))}

          <div
            className="pointer-events-none absolute inset-0 z-20 bg-black/28"
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-x-6 top-24 z-40 flex items-center justify-between border-b border-white/20 pb-4 text-[10px] font-bold uppercase text-white/80 lg:inset-x-10">
            <span>Atria · Estudio digital</span>
            <span>01 — 06</span>
          </div>

          {SCROLL_STAGES.map((stage, index) => (
            <AnimatedCopy
              key={`copy-${stage.id}`}
              className="js-copy-panel"
              eyebrow={stage.eyebrow}
              title={stage.title}
              description={stage.description}
              details={stage.details}
              align={stage.align}
              initialVisible={index === 0}
            >
              {stage.cta && (
                <a
                  href={stage.cta.href}
                  target={stage.cta.external ? "_blank" : undefined}
                  rel={stage.cta.external ? "noopener noreferrer" : undefined}
                  className="group mt-6 inline-flex min-h-11 items-center gap-3 bg-[var(--atria-gold)] px-5 text-xs font-bold uppercase text-[#160e09] transition-colors hover:bg-white"
                >
                  {stage.cta.text}
                  {stage.cta.external ? (
                    <ExternalLink size={15} aria-hidden />
                  ) : (
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  )}
                </a>
              )}
            </AnimatedCopy>
          ))}

          <ScrollProgress activeIndex={activeIndex} />
        </div>

        <div className="ens-scroll-static">
          {SCROLL_STAGES.map((stage, index) => (
            <article
              key={stage.id}
              className="border-b border-white/12 px-4 py-12 sm:px-8 sm:py-16"
            >
              <div className="mx-auto grid max-w-[1180px] gap-7 md:grid-cols-2 md:items-center">
                <StaticStageImage
                  src={stage.images.mobile}
                  alt={`Escena de ${stage.label}`}
                  className={index % 2 ? "md:order-2" : ""}
                />
                <div className={index % 2 ? "md:order-1" : ""}>
                  <p className="text-[10px] font-bold uppercase text-[var(--atria-gold)]">
                    {stage.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-4xl font-medium leading-none text-[#faf5ef] sm:text-5xl">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#c8beb5] sm:text-base sm:leading-7">
                    {stage.description}
                  </p>

                  {stage.details && (
                    <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/12 pt-4 text-[10px] font-semibold uppercase text-[#f1e4d3]">
                      {stage.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-[var(--atria-accent)]"
                            aria-hidden
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {stage.cta && (
                    <a
                      href={stage.cta.href}
                      target={stage.cta.external ? "_blank" : undefined}
                      rel={stage.cta.external ? "noopener noreferrer" : undefined}
                      className="mt-6 inline-flex min-h-11 items-center gap-3 bg-[var(--atria-gold)] px-5 text-sm font-bold text-[#160e09]"
                    >
                      {stage.cta.text}
                      {stage.cta.external ? (
                        <ExternalLink size={16} aria-hidden />
                      ) : (
                        <ArrowRight size={16} aria-hidden />
                      )}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
