import { ArrowDownRight, Laptop, MessageCircle, Sparkles } from "lucide-react";

export function StudioSection() {
  return (
    <section id="estudio" className="scroll-mt-24 bg-[var(--atria-page)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="studio-title">
      <div className="mx-auto max-w-[1320px] border-y border-black/12 py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">El estudio detrás de Alebrije Tech</p>
            <h2 id="studio-title" className="mt-4 max-w-4xl font-serif text-5xl font-medium leading-[0.94] sm:text-6xl lg:text-7xl">
              Un equipo pequeño, atención directa y tecnología actual.
            </h2>
          </div>
          <div>
            <ArrowDownRight size={28} className="text-[var(--atria-accent)]" aria-hidden />
            <p className="mt-5 text-base leading-7 text-[var(--atria-ink-soft)]">
              Alebrije Tech es un estudio digital independiente impulsado por un equipo pequeño de estudiantes de desarrollo de software de la Universidad Autónoma de Chiapas.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--atria-ink-soft)]">
              Aplicamos diseño, programación e inteligencia artificial en proyectos reales y accesibles para negocios que necesitan avanzar sin asumir la estructura de una agencia tradicional.
            </p>
          </div>
        </div>
        <div className="mt-12 grid border-t border-black/12 sm:grid-cols-3">
          {[
            [Laptop, "Trabajo remoto", "Coordinamos proyectos en línea con negocios de México y otros países."],
            [MessageCircle, "Contacto directo", "La conversación ocurre con quienes definen y construyen la solución."],
            [Sparkles, "Alcance honesto", "Aceptamos proyectos que podemos atender con claridad y calidad."],
          ].map(([Icon, title, copy]) => {
            const ItemIcon = Icon as typeof Laptop;
            return (
              <article key={String(title)} className="border-b border-black/12 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0">
                <ItemIcon size={20} className="text-[var(--atria-accent)]" aria-hidden />
                <h3 className="mt-6 font-serif text-3xl font-medium">{String(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--atria-ink-soft)]">{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

