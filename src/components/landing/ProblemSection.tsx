import { MessageCircleQuestion } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

const problems = [
  {
    title: "La informacion esta regada",
    text: "Horarios en una historia, catalogo en fotos, ubicacion en otro mensaje y precios por confirmar.",
  },
  {
    title: "El cliente pregunta antes de decidir",
    text: "Cuando no encuentra lo basico rapido, el negocio pierde tiempo respondiendo lo mismo.",
  },
  {
    title: "La primera impresion no ayuda",
    text: "El servicio puede ser bueno, pero el link que se comparte no transmite orden ni confianza.",
  },
];

export function ProblemSection() {
  return (
    <Reveal>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[32px] border border-white/70 bg-[var(--pde-glass)] p-5 shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
                Problema real
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[0.98] sm:text-6xl">
                El negocio existe, pero no tiene un punto de entrada.
              </h2>
            </div>
            <AnimatedCards className="divide-y divide-[var(--pde-border)] border-t border-[var(--pde-border)] lg:border-t-0">
              {problems.map((problem) => (
                <div
                  data-card
                  key={problem.title}
                  className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:items-start"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-[var(--pde-surface-strong)] text-[var(--pde-teal)]">
                    <MessageCircleQuestion size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{problem.title}</h3>
                    <p className="mt-2 leading-7 text-[var(--pde-muted)]">{problem.text}</p>
                  </div>
                </div>
              ))}
            </AnimatedCards>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
