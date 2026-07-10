import { MessageCircleQuestion } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

const problems = [
  "Mis clientes me preguntan siempre lo mismo.",
  "No tengo catalogo facil de enviar.",
  "Mi negocio no se ve profesional en internet.",
  "Solo tengo Facebook o WhatsApp.",
  "No tengo un link con toda mi informacion.",
];

export function ProblemSection() {
  return (
    <Reveal>
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
                Problema real
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                El negocio existe, pero su informacion vive regada.
              </h2>
            </div>
            <AnimatedCards className="grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <div
                  data-card
                  key={problem}
                  className="rounded-[24px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-5 shadow-[var(--shadow-card)]"
                >
                  <MessageCircleQuestion className="text-[var(--pde-accent)]" size={22} />
                  <p className="mt-5 text-lg font-semibold leading-7">{problem}</p>
                </div>
              ))}
            </AnimatedCards>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
