"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";
import { ATRIA_WEB_LAYERS } from "@/data/atria-studio";
import { SectionReveal } from "@/components/motion/SectionReveal";

const capabilities = [
  "Landing o sitio de varias páginas",
  "Catálogo simple sin pago en línea",
  "Diseño móvil y contenido por servicio",
  "Galería, WhatsApp y formularios",
  "Dominio, hosting y SEO técnico inicial",
  "Panel limitado cuando el alcance lo requiere",
];

const boundaries = [
  "Comercio electrónico completo",
  "ERP o logística avanzada",
  "Cambios o funciones ilimitadas",
  "Administración mensual de redes sociales",
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<(typeof ATRIA_WEB_LAYERS)[number]["id"]>("business");
  const active = ATRIA_WEB_LAYERS.find((layer) => layer.id === activeId) ?? ATRIA_WEB_LAYERS[0];

  return (
    <SectionReveal>
      <section id="servicios" className="scroll-mt-24 bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12">
        <div id="atria-web" className="mx-auto max-w-[1320px] scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
            <div>
              <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Atria Web · Servicio principal</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.94] sm:text-6xl lg:text-7xl">Un sitio no empieza en la pantalla.</h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-7 text-[var(--atria-ink-soft)]">Trabajamos en seis capas. Cada una convierte información dispersa en una presencia útil, reconocible y lista para publicarse.</p>
              <a href="#contacto" className="group mt-7 inline-flex min-h-12 items-center gap-4 border-b border-black/18 pb-2 text-sm font-bold hover:border-[var(--atria-accent)]">Hablar sobre Atria Web <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden /></a>
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden border border-black/12 lg:grid-cols-[.72fr_1.28fr]">
            <div className="border-b border-black/12 bg-[var(--atria-page)] lg:border-b-0 lg:border-r">
              {ATRIA_WEB_LAYERS.map((layer) => {
                const selected = activeId === layer.id;
                return (
                  <button key={layer.id} type="button" aria-pressed={selected} onClick={() => setActiveId(layer.id)} onMouseEnter={() => setActiveId(layer.id)} className={`group grid min-h-[90px] w-full grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-black/10 px-5 py-4 text-left transition-colors last:border-b-0 sm:px-7 ${selected ? "bg-white" : "hover:bg-white/65"}`}>
                    <span className={`font-mono text-xs font-bold ${selected ? "text-[var(--atria-accent)]" : "text-[var(--atria-muted)]"}`}>{layer.number}</span>
                    <span><span className="block text-[10px] font-bold uppercase text-[var(--atria-muted)]">Capa</span><span className="mt-1 block font-serif text-2xl font-medium">{layer.label}</span></span>
                    <span className={`h-2 w-2 rounded-full border transition-all ${selected ? "border-[var(--atria-accent)] bg-[var(--atria-accent)]" : "border-black/30"}`} aria-hidden />
                  </button>
                );
              })}
            </div>

            <div className="grid min-h-[660px] grid-rows-[1fr_auto] bg-[#171719] text-white">
              <div className="relative min-h-[430px] overflow-hidden">
                <Image key={active.image} src={active.image} alt="" fill sizes="(max-width: 1023px) 100vw, 64vw" className="object-cover opacity-88 [animation:atria-route-image_.45s_ease_both]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,18,20,.88),rgba(17,18,20,.03)_65%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-11">
                  <p className="text-[10px] font-bold uppercase text-[var(--atria-gold)]">{active.artifact}</p>
                  <h3 className="mt-3 max-w-2xl font-serif text-4xl font-medium leading-[.98] sm:text-5xl">{active.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">{active.description}</p>
                </div>
              </div>
              <div className="grid border-t border-white/12 sm:grid-cols-2">
                <div className="p-6 sm:p-8">
                  <p className="text-[10px] font-bold uppercase text-white/45">Puede incluir</p>
                  <ul className="mt-4 grid gap-2 text-xs text-white/75">{capabilities.map((item) => <li key={item} className="flex gap-2"><Check size={13} className="mt-0.5 shrink-0 text-[var(--atria-gold)]" aria-hidden />{item}</li>)}</ul>
                </div>
                <div className="border-t border-white/12 p-6 sm:border-l sm:border-t-0 sm:p-8">
                  <p className="text-[10px] font-bold uppercase text-white/45">Fuera del estándar</p>
                  <ul className="mt-4 grid gap-2 text-xs text-white/60">{boundaries.map((item) => <li key={item} className="flex gap-2"><Minus size={13} className="mt-0.5 shrink-0" aria-hidden />{item}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
