import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const audiences = [
  ["Negocios sin página", "Necesitan un lugar propio para explicar qué hacen y cómo contactarlos."],
  ["Facebook y WhatsApp", "Dependen de conversaciones dispersas y quieren ordenar su información."],
  ["Operación en libretas", "Buscan una herramienta sencilla antes de adoptar sistemas más complejos."],
  ["Servicios profesionales", "Necesitan comunicar experiencia, proceso y confianza."],
  ["Comercio local", "Quiere mostrar productos, horarios, ubicación o promociones."],
  ["Proyectos especiales", "Tienen una necesidad concreta que no cabe en una plantilla estándar."],
];

export function AudienceSection() {
  return (
    <SectionReveal>
      <section className="bg-[var(--atria-surface-warm)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="audience-title">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[.86fr_1.14fr]">
            <div>
              <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Para quién es Alebrije Tech</p>
              <h2 id="audience-title" className="mt-4 font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
                Tecnología útil para negocios que quieren avanzar con claridad.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[var(--atria-ink-soft)]">
                Trabajamos de forma remota con negocios y proyectos de México y otros países, con especial interés en acercar tecnología útil a los negocios de Chiapas.
              </p>
            </div>
            <ol className="border-t border-black/14">
              {audiences.map(([title, copy], index) => (
                <li key={title} className="group grid gap-3 border-b border-black/12 py-5 sm:grid-cols-[46px_.72fr_1.28fr_auto] sm:items-center">
                  <span className="text-[10px] font-bold text-[var(--atria-muted)]">0{index + 1}</span>
                  <h3 className="font-serif text-2xl font-medium sm:text-3xl">{title}</h3>
                  <p className="text-sm leading-6 text-[var(--atria-ink-soft)]">{copy}</p>
                  <ArrowRight size={16} className="hidden text-[var(--atria-accent)] transition-transform group-hover:translate-x-1 sm:block" aria-hidden />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
