import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Globe2,
  MapPin,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const deliverables = [
  "Diseño personalizado o sistema configurable",
  "Experiencia móvil",
  "Servicios, catálogo y galería",
  "WhatsApp y canales de contacto",
  "Datos consistentes para búsqueda",
  "Dominio, hosting y SEO técnico básico",
  "Mantenimiento según el plan",
];

const niches = ["Restaurantes", "Belleza", "Telefonía", "Profesionistas", "Talleres", "Comercios"];

export function ServicesSection() {
  return (
    <SectionReveal>
      <section
        id="servicios"
        className="bg-[var(--atria-page)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12"
      >
        <div id="atria-web" className="mx-auto max-w-[1320px]">
          <div className="grid overflow-hidden rounded-lg border border-black/10 bg-white lg:grid-cols-[.92fr_1.08fr]">
            <div className="flex flex-col p-7 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                  Atria Web
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--atria-accent-soft)] px-3 py-2 text-[10px] font-bold uppercase text-[var(--atria-accent-hover)]">
                  <Globe2 size={14} aria-hidden />
                  Presencia online incluida
                </span>
              </div>

              <h2 className="mt-8 max-w-2xl font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
                Un sitio con la forma real de tu negocio.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--atria-ink-soft)]">
                Diseñamos sitios adaptados a tu giro, a tus clientes y a la acción que
                necesitas: reservar, comprar, visitar, cotizar o conversar.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-[var(--atria-ink-soft)]"
                  >
                    <Check
                      size={15}
                      className="mt-1 shrink-0 text-[var(--atria-accent)]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#proyectos"
                className="atria-float-action group mt-9 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-[var(--atria-ink)] px-6 text-sm font-bold text-white"
              >
                Explorar proyectos
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>

            <div className="relative min-h-[460px] bg-[#ddd9d4] lg:min-h-[680px]">
              <Image
                src="/images/landing/coleta.jpg"
                alt="Sitio web para un restaurante, visto en una composición editorial"
                fill
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 border border-white/70 bg-white/92 p-4 shadow-lg sm:inset-x-6 sm:bottom-6 sm:p-5">
                <div className="grid grid-cols-3 gap-3 border-b border-black/10 pb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Smartphone size={15} className="text-[var(--atria-accent)]" aria-hidden />
                    Móvil
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <MapPin size={15} className="text-[var(--atria-accent)]" aria-hidden />
                    Ubicación
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <MessageCircle size={15} className="text-[var(--atria-accent)]" aria-hidden />
                    Contacto
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {niches.map((niche) => (
                    <span key={niche} className="text-[10px] font-bold uppercase text-[#5c5b5e]">
                      {niche}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
