import {
  BriefcaseBusiness,
  Building2,
  Lightbulb,
  Puzzle,
  Store,
  TrendingUp,
} from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const profiles = [
  {
    icon: Lightbulb,
    name: "Emprendedores",
    need: "Una primera presencia que se sienta profesional desde el inicio.",
  },
  {
    icon: Building2,
    name: "Negocios locales",
    need: "Horarios, ubicación, servicios y contacto fáciles de encontrar.",
  },
  {
    icon: BriefcaseBusiness,
    name: "Profesionistas",
    need: "Explicar su experiencia y convertir visitas en conversaciones.",
  },
  {
    icon: Store,
    name: "Comercios",
    need: "Mostrar productos y conectar su presencia con la operación.",
  },
  {
    icon: TrendingUp,
    name: "Negocios en crecimiento",
    need: "Una base digital preparada para sumar nuevas funciones.",
  },
  {
    icon: Puzzle,
    name: "Proyectos especiales",
    need: "Una solución particular que no cabe en una plantilla genérica.",
  },
];

export function AudienceSection() {
  return (
    <SectionReveal>
      <section className="bg-[var(--atria-surface-warm)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-6 border-b border-black/12 pb-9 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                Para quién trabajamos
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
                Hecho para negocios que quieren avanzar con claridad.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">
              Nuestro enfoque inicial son emprendedores y negocios pequeños o medianos
              de Tuxtla Gutiérrez. Atendemos cada proyecto de forma remota y también
              podemos trabajar con otras localidades.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map(({ icon: Icon, name, need }) => (
              <article
                key={name}
                className="atria-profile-article min-h-48 border-b border-black/12 py-7 sm:border-r sm:px-7 sm:first:pl-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0"
              >
                <span className="atria-icon-wrapper">
                  <Icon size={20} className="text-[var(--atria-accent)]" aria-hidden />
                </span>
                <h3 className="mt-6 font-serif text-3xl font-medium">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--atria-ink-soft)]">{need}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
