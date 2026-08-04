"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Blocks,
  GalleryHorizontalEnd,
  MonitorSmartphone,
  PartyPopper,
  Store,
} from "lucide-react";
import { STUDIO_ROUTES, type StudioRouteId } from "@/data/atria-studio";

const routeIcons = {
  "atria-web": MonitorSmartphone,
  work: GalleryHorizontalEnd,
  ensueno: PartyPopper,
  localpos: Store,
  different: Blocks,
} satisfies Record<StudioRouteId, typeof MonitorSmartphone>;

export function SolutionRouter() {
  const [activeId, setActiveId] = useState<StudioRouteId>("atria-web");
  const active = STUDIO_ROUTES.find((route) => route.id === activeId) ?? STUDIO_ROUTES[0];

  return (
    <section
      id="soluciones"
      className="scroll-mt-24 bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="solution-router-title"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-7 border-b border-black/12 pb-9 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">
              Índice del estudio
            </p>
            <h2 id="solution-router-title" className="mt-4 font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
              Entra por lo que necesitas resolver.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">
            Atria reúne servicios, productos y líneas propias. Este índice organiza el estudio por intención, no por una lista rígida de paquetes.
          </p>
        </div>

        <div className="grid border-b border-black/12 lg:grid-cols-[.92fr_1.08fr]">
          <div className="lg:border-r lg:border-black/12 lg:pr-8">
            {STUDIO_ROUTES.map(({ id, label, title }, index) => {
              const Icon = routeIcons[id];
              const selected = activeId === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveId(id)}
                  onMouseEnter={() => setActiveId(id)}
                  className="group grid min-h-[98px] w-full grid-cols-[36px_1fr_auto] items-center gap-4 border-b border-black/12 py-4 text-left last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--atria-accent)]"
                >
                  <span className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${selected ? "border-[var(--atria-accent)] bg-[var(--atria-accent)] text-white" : "border-black/14 text-[var(--atria-ink)] group-hover:-translate-y-0.5 group-hover:border-[var(--atria-accent)]"}`}>
                    <Icon size={16} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase text-[var(--atria-accent)]">0{index + 1} · {label}</span>
                    <span className="mt-1.5 block font-serif text-[1.55rem] font-medium leading-[1.02] sm:text-[1.8rem]">{title}</span>
                  </span>
                  <ArrowRight size={17} className={`transition-all duration-300 ${selected ? "translate-x-1 text-[var(--atria-accent)]" : "text-black/30"}`} aria-hidden />
                </button>
              );
            })}
          </div>

          <div className="flex min-h-[470px] flex-col py-8 lg:pl-8">
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[8px] bg-[#e7e4df]">
              <Image key={active.image} src={active.image} alt={active.imageAlt} fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover [animation:atria-route-image_.45s_ease_both]" />
              <div className="absolute inset-x-0 bottom-0 grid gap-3 bg-black/68 p-5 text-white backdrop-blur-md sm:grid-cols-[1fr_auto] sm:items-end sm:p-6">
                <div>
                  <p className="text-[10px] font-bold uppercase text-[var(--atria-gold)]">{active.note}</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/82">{active.description}</p>
                </div>
                <span className="text-[10px] font-semibold uppercase text-white/50">Ruta {String(STUDIO_ROUTES.findIndex((route) => route.id === active.id) + 1).padStart(2, "0")}</span>
              </div>
            </div>
            <a href={active.href} className="group mt-5 inline-flex min-h-12 items-center justify-between border-b border-black/18 pb-3 text-sm font-bold hover:border-[var(--atria-accent)]">
              {active.cta}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
