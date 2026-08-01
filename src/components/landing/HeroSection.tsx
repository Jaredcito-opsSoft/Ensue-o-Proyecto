"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AtriaProductPreview } from "@/components/landing/AtriaProductPreview";
import { HeroButterflies } from "@/components/motion/HeroButterflies";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero comenzar un proyecto con Atria."
  );

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const revealItems = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]", root);
      const preview = root.querySelector<HTMLElement>("[data-hero-preview]");

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .fromTo(
          revealItems,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.065, clearProps: "transform" }
        )
        .fromTo(
          preview,
          { autoAlpha: 0, y: 34, scale: 0.985 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, clearProps: "transform" },
          "-=0.32"
        );

      return () => timeline.kill();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      id="inicio"
      className="bg-[var(--atria-page)] p-3 pb-0 sm:p-4 sm:pb-0"
    >
      <div className="relative flex min-h-[calc(100svh-44px)] w-full flex-col overflow-hidden rounded-[18px] bg-[#d9d9d7] sm:min-h-[calc(100svh-52px)] sm:rounded-[26px]">
        <Image
          src="/images/landing/atria-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="atria-hero-background object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-white/20" aria-hidden />
        <HeroButterflies />

        <div className="relative z-10 flex flex-1 flex-col items-center px-4 pb-5 pt-[92px] text-center sm:px-8 sm:pb-6 sm:pt-[112px] lg:pt-[118px]">
          <div
            data-hero-reveal
            className="inline-flex min-h-8 items-center gap-2 rounded-full border border-black/10 bg-white/92 px-4 text-[10px] font-bold uppercase text-[#55565a] shadow-sm sm:text-xs"
          >
            <span className="atria-dot-live h-2 w-2 rounded-full bg-[var(--atria-accent)]" />
            Atria · Estudio digital
          </div>

          <h1
            data-hero-reveal
            className="mt-4 max-w-[1040px] font-sans text-[clamp(2.35rem,6.2vw,5.4rem)] font-semibold leading-[0.95] text-[var(--atria-ink)] sm:mt-5"
          >
            Creamos el lugar digital
            <span className="block font-serif font-medium italic text-[var(--atria-accent)]">
              donde tu negocio puede crecer.
            </span>
          </h1>

          <p
            data-hero-reveal
            className="mt-4 max-w-[680px] text-sm leading-6 text-[#54555a] sm:mt-5 sm:text-base sm:leading-7"
          >
            Diseñamos sitios web para negocios, experiencias para momentos especiales
            y herramientas sencillas para trabajar mejor.
          </p>

          <div
            data-hero-reveal
            className="mt-5 flex w-full max-w-[430px] flex-col items-stretch gap-2.5 sm:mt-6 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3"
          >
            <a
              href="#servicios"
              className="atria-float-action group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--atria-ink)] pl-6 pr-2 text-sm font-bold text-white hover:bg-[#2b2c2f]"
            >
              Explorar soluciones
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/12">
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </a>
            <a
              href={whatsappHref}
              className="atria-float-action inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/16 bg-white/78 px-6 text-sm font-bold text-[var(--atria-ink)] hover:bg-white"
            >
              <MessageCircle size={17} />
              Comenzar un proyecto
            </a>
          </div>

          <div data-hero-preview className="mt-auto w-full pt-7 sm:pt-9">
            <AtriaProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
