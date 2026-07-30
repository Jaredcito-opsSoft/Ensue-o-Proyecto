import { ArrowDownRight } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

export function AtriaIntroSection() {
  return (
    <SectionReveal>
      <section
        id="nosotros"
        className="bg-[var(--atria-page)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1320px] border-t border-black/12 pt-8 sm:pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                Acerca de Atria
              </p>
              <h2 className="mt-4 max-w-[780px] font-serif text-5xl font-medium leading-[0.94] sm:text-6xl lg:text-7xl">
                Lo digital funciona mejor cuando tiene una dirección.
              </h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-7 text-[var(--atria-ink-soft)]">
                Atria combina diseño y tecnología para que un negocio pueda verse
                profesional, ser encontrado, recibir contactos y utilizar herramientas
                adecuadas para su operación.
              </p>
              <div className="mt-6 flex gap-4 border-t border-black/12 pt-5">
                <ArrowDownRight
                  size={22}
                  className="mt-1 shrink-0 text-[var(--atria-accent)]"
                  aria-hidden
                />
                <p className="text-sm font-semibold leading-6 text-[var(--atria-ink)]">
                  No construimos únicamente páginas bonitas. Diseñamos soluciones que
                  informan, generan confianza y facilitan el siguiente paso.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid border-y border-black/12 sm:grid-cols-3">
            {[
              ["Diseño con intención", "Cada proyecto parte del negocio, su público y la acción que necesita facilitar."],
              ["Tecnología útil", "Elegimos herramientas que resuelven una necesidad real y pueden mantenerse en el tiempo."],
              ["Acompañamiento cercano", "Trabajamos desde Tuxtla Gutiérrez con comunicación directa durante cada etapa."],
            ].map(([title, description]) => (
              <article
                key={title}
                className="border-b border-black/12 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <h3 className="font-serif text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--atria-ink-soft)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
