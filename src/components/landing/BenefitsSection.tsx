import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
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
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1300&q=80"
            alt="Equipo revisando informacion de negocio local"
            width={1300}
            height={920}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-72 w-full rounded-[30px] border border-[var(--pde-ink)] object-cover grayscale contrast-125 saturate-0 shadow-[var(--shadow-card)] sm:h-[520px]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
              Beneficios
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[0.98] sm:text-6xl">
              Menos explicaciones sueltas.{" "}
              <span className="font-serif italic font-normal">Mas claridad</span> para comprar.
            </h2>
            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div className="flex gap-3 rounded-2xl border border-[var(--pde-border)] bg-[var(--pde-surface)] p-4" key={benefit}>
                  <CheckCircle2 className="mt-0.5 text-[var(--pde-blue)]" size={22} />
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
