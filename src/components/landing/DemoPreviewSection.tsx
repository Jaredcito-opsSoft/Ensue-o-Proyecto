"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Pause,
  Play,
} from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const projects = [
  {
    name: "CelLab Tuxtla",
    kind: "En producción",
    category: "Caso real",
    description:
      "Sitio y solución digital para un negocio de telefonía, accesorios y reparación de celulares, conectado con LocalPOS cuando la operación lo requiere.",
    image: "/images/cellux/hero-phones.png",
    href: "https://cellab-tuxtla.vercel.app/",
    cta: "Ver CelLab en producción",
    external: true,
  },
  {
    name: "LocalPOS",
    kind: "En producción",
    category: "Producto Atria",
    description:
      "Sistema de punto de venta para pequeños negocios, con ventas, productos, clientes, inventario y herramientas operativas.",
    image: "/media/ensueno-scroll/keyframe-05-pos.webp",
    href: "https://localpos-marketing.vercel.app/",
    cta: "Conocer LocalPOS",
    external: true,
  },
  {
    name: "Beauty LA",
    kind: "Demo de diseño",
    category: "Belleza y bienestar",
    description:
      "Una experiencia editorial para estudios de belleza que necesitan presentar servicios, galería, horarios y reservaciones con claridad.",
    image: "/images/landing/beauty-la.jpg",
    href: "/demo/estetica",
    cta: "Explorar Beauty LA",
    external: false,
  },
  {
    name: "Coleta",
    kind: "Demo de diseño",
    category: "Gastronomía",
    description:
      "Una propuesta gastronómica enfocada en el producto, la experiencia del restaurante, su menú y la reserva de mesa.",
    image: "/images/landing/coleta.jpg",
    href: "/demo/comida",
    cta: "Explorar Coleta",
    external: false,
  },
];

function MorphArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <span className={`atria-morph-arrow ${direction === "left" ? "is-left" : ""}`} aria-hidden>
      <span className="atria-morph-dots">
        <i />
        <i />
        <i />
        <i />
      </span>
      {direction === "left" ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
    </span>
  );
}

export function DemoPreviewSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);

  const updateCarousel = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const nextProgress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    setProgress(Math.min(1, Math.max(0, nextProgress)));
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= maxScroll - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateCarousel();
    const observer = new ResizeObserver(updateCarousel);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateCarousel]);

  const moveCarousel = useCallback((direction: -1 | 1, wrap = false) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.firstElementChild as HTMLElement | null;
    const gap = 20;
    const distance = firstCard
      ? firstCard.offsetWidth + gap
      : Math.max(280, track.clientWidth * 0.72);
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);

    let target: number;

    if (wrap) {
      if (direction > 0) {
        if (track.scrollLeft >= maxScroll - 10) {
          target = 0;
        } else {
          target = Math.min(maxScroll, track.scrollLeft + distance);
        }
      } else {
        if (track.scrollLeft <= 10) {
          target = maxScroll;
        } else {
          target = Math.max(0, track.scrollLeft - distance);
        }
      }
    } else {
      target = Math.min(maxScroll, Math.max(0, track.scrollLeft + direction * distance));
    }

    track.scrollTo({
      left: target,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  useEffect(() => {
    if (
      autoplayPaused ||
      interactionPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (!document.hidden) moveCarousel(1, true);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [autoplayPaused, interactionPaused, moveCarousel]);

  return (
    <SectionReveal>
      <section
        id="proyectos"
        className="overflow-hidden bg-[var(--atria-surface-soft)] py-18 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                Proyectos Atria
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.95] sm:text-6xl">
                Proyectos reales y demos con una dirección propia.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">
              Casos en producción y demostraciones que muestran cómo Atria adapta el
              diseño a distintos giros, objetivos y formas de trabajar.
            </p>
          </div>

          <div className="mt-10 flex items-end justify-between gap-5">
            <p className="max-w-lg text-xs leading-5 text-[var(--atria-muted)]">
              Desliza libremente para explorar. Cada proyecto conserva una identidad
              visual distinta.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => setAutoplayPaused((paused) => !paused)}
                className="atria-carousel-control group"
                aria-label={
                  autoplayPaused
                    ? "Reproducir carrusel automáticamente"
                    : "Pausar carrusel automático"
                }
                aria-pressed={autoplayPaused}
                title={autoplayPaused ? "Reproducir" : "Pausar"}
              >
                {autoplayPaused ? <Play size={17} aria-hidden /> : <Pause size={17} aria-hidden />}
              </button>
              <button
                type="button"
                onClick={() => moveCarousel(-1)}
                disabled={atStart}
                className="atria-carousel-control group"
                aria-label="Ver proyectos anteriores"
              >
                <MorphArrow direction="left" />
              </button>
              <button
                type="button"
                onClick={() => moveCarousel(1)}
                disabled={atEnd}
                className="atria-carousel-control group"
                aria-label="Ver proyectos siguientes"
              >
                <MorphArrow direction="right" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateCarousel}
          onMouseEnter={() => setInteractionPaused(true)}
          onMouseLeave={() => setInteractionPaused(false)}
          onTouchStart={() => setInteractionPaused(true)}
          onTouchEnd={() => setInteractionPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              moveCarousel(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              moveCarousel(1);
            }
          }}
          className="atria-project-track mt-7 flex gap-4 overflow-x-auto px-4 pb-8 sm:gap-5 sm:px-8 lg:px-[max(3rem,calc((100vw-1440px)/2+3rem))]"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Proyectos de Atria"
          tabIndex={0}
        >
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="atria-project-card min-w-[86vw] max-w-[620px] flex-[0_0_86vw] sm:min-w-[68vw] sm:basis-[68vw] lg:min-w-0 lg:basis-[clamp(440px,43vw,610px)]"
              aria-label={`${index + 1} de ${projects.length}: ${project.name}`}
            >
              <a
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                aria-label={`${project.cta}${project.external ? ", abre en una pestaña nueva" : ""}`}
                className="group grid h-full min-h-[500px] overflow-hidden rounded-lg border border-black/10 bg-white sm:grid-rows-[1fr_auto]"
              >
                <div className="relative min-h-72 overflow-hidden bg-[#dedbd6]">
                  <Image
                    src={project.image}
                    alt={`Vista previa de ${project.name}`}
                    fill
                    sizes="(min-width:1024px) 44vw, (min-width:640px) 68vw, 86vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/76 px-3 py-1.5 text-[10px] font-bold uppercase text-[var(--atria-ink)] shadow-sm backdrop-blur-md">
                    {project.kind}
                  </span>
                </div>
                <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-[var(--atria-accent)]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-serif text-4xl font-medium">{project.name}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--atria-ink-soft)]">
                      {project.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold">
                    {project.cta}
                    {project.external ? (
                      <ExternalLink
                        size={16}
                        className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    ) : (
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    )}
                  </span>
                </div>
              </a>
            </article>
          ))}
          <div className="w-px shrink-0" aria-hidden />
        </div>

        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="h-px overflow-hidden bg-black/10" aria-hidden>
            <span
              className="block h-full origin-left bg-[var(--atria-accent)] transition-transform duration-150"
              style={{ transform: `scaleX(${Math.max(0.06, progress)})` }}
            />
          </div>
          <a
            href="#contacto"
            className="atria-float-action group mt-7 inline-flex min-h-12 items-center gap-3 rounded-full border border-black/16 px-6 text-sm font-bold hover:border-[var(--atria-accent)] hover:bg-white"
          >
            Hablar sobre un proyecto especial
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </div>
      </section>
    </SectionReveal>
  );
}
