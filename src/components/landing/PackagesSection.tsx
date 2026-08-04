import { ArrowRight, Check, Layers3 } from "lucide-react";
import { ATRIA_WEB_PLANS, CONTACT_CONTEXTS } from "@/data/atria-content";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const levelNames = ["Presencia esencial", "Estructura para crecer", "Intervención especial"] as const;
const levelNotes = ["Una necesidad central", "Más contenido y control", "Diseño o función particular"] as const;

export function PackagesSection() {
  return (
    <SectionReveal>
      <section id="planes" className="scroll-mt-24 bg-[var(--atria-page)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 border-t border-black/12 pt-9 lg:grid-cols-[.86fr_1.14fr] lg:items-end">
            <div><p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Niveles de intervención</p><h2 className="mt-4 font-serif text-5xl font-medium leading-[.94] sm:text-6xl">La solución crece con el problema, no con una tabla de extras.</h2></div>
            <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">Estos niveles orientan la conversación. La implementación, la continuidad y los tiempos se confirman después de revisar el alcance real.</p>
          </div>

          <div className="mt-12 border-y border-black/12">
            {ATRIA_WEB_PLANS.map((plan, index) => {
              const context = CONTACT_CONTEXTS.find((item) => item.id === plan.context) ?? CONTACT_CONTEXTS[0];
              const href = createWhatsAppLink(appConfig.whatsappSalesNumber, context.prompt);
              return (
                <article key={plan.name} className="group grid border-b border-black/12 py-7 last:border-b-0 lg:grid-cols-[90px_.72fr_1.28fr_190px] lg:items-start lg:gap-7 lg:py-9">
                  <div className="flex items-center justify-between lg:block"><span className="font-mono text-xs font-bold text-[var(--atria-accent)]">0{index + 1}</span><Layers3 size={18} className="text-black/30 lg:mt-8" aria-hidden /></div>
                  <div className="mt-5 lg:mt-0"><p className="text-[10px] font-bold uppercase text-[var(--atria-muted)]">{levelNotes[index]}</p><h3 className="mt-2 font-serif text-4xl font-medium leading-none">{levelNames[index]}</h3><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--atria-ink-soft)]">{plan.audience}</p></div>
                  <div className="mt-6 lg:mt-0"><ul className="grid gap-x-7 sm:grid-cols-2">{plan.features.map((feature) => <li key={feature} className="flex min-h-12 items-center gap-3 border-b border-black/10 py-2 text-xs font-semibold leading-5"><Check size={13} className="shrink-0 text-[var(--atria-accent)]" aria-hidden />{feature}</li>)}</ul><div className="mt-5 grid gap-2 text-xs text-[var(--atria-muted)] sm:grid-cols-2"><p>{plan.implementation}</p><p>{plan.time}</p></div></div>
                  <a href={href} className="group/link mt-7 inline-flex min-h-11 items-center justify-between border border-black/16 px-4 text-xs font-bold transition-colors hover:border-[var(--atria-accent)] hover:bg-white lg:mt-0">Conversar sobre este nivel <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" aria-hidden /></a>
                </article>
              );
            })}
          </div>
          <p className="mt-5 max-w-4xl text-xs leading-5 text-[var(--atria-muted)]">El dominio se registra a nombre del cliente. Renovaciones, propiedad, entrega, respaldos y migración se definen por escrito antes de comenzar. Las referencias no sustituyen una propuesta.</p>
        </div>
      </section>
    </SectionReveal>
  );
}
