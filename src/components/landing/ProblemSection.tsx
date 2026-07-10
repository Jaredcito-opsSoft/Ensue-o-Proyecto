import { MessageCircleQuestion } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";

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
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
                Problema real
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                El negocio existe, pero su informacion vive regada.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <Card key={problem} className="p-5">
                  <MessageCircleQuestion className="text-[var(--pde-accent)]" size={22} />
                  <p className="mt-5 text-lg font-medium leading-7">{problem}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
