import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const benefits = [
  "Reduce preguntas repetidas por WhatsApp.",
  "Da una primera impresion mas profesional.",
  "Permite compartir un solo link.",
  "Funciona bien desde celular.",
  "Se entrega con QR listo para usar.",
];

export function BenefitsSection() {
  return (
    <Reveal>
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1300&q=80"
            alt="Equipo revisando informacion de negocio local"
            className="h-[520px] w-full rounded-[30px] border border-[var(--pde-border)] object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
              Beneficios
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Menos explicaciones sueltas. Mas claridad para comprar.
            </h2>
            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div className="flex gap-3 rounded-2xl bg-[var(--pde-surface)] p-4" key={benefit}>
                  <CheckCircle2 className="mt-0.5 text-[var(--pde-accent)]" size={22} />
                  <p className="text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
