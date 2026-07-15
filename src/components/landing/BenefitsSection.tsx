import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const benefits = [
  "Reduce preguntas repetidas por WhatsApp.",
  "Da una primera impresión más profesional.",
  "Permite compartir un solo link.",
  "Funciona bien desde celular.",
  "Se entrega con QR listo para usar.",
];

export function BenefitsSection() {
  return (
    <Reveal>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--pde-border)] shadow-[var(--shadow-card)]">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1300&q=80"
            alt="Equipo revisando información de negocio local"
            width={1300}
            height={920}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-72 w-full object-cover saturate-125 sm:h-[520px]"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#121f63]/85 p-5 backdrop-blur-xl"><p className="font-serif text-2xl text-white">Tu negocio se ve tan cuidado como tu servicio.</p></div>
          </div>
          <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-coral)]">
              Beneficios
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[0.98] sm:text-6xl">
              Menos explicaciones sueltas.{" "}
              <span className="font-serif italic font-normal text-[var(--pde-coral)]">Más claridad</span> para comprar.
            </h2>
            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div className="group flex gap-3 rounded-2xl border border-[var(--pde-border)] bg-[#1c337f]/50 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#ffb5cd]/65 hover:bg-[#ff6f9f]/15 hover:shadow-[0_14px_28px_rgba(255,111,159,0.14)]" key={benefit}>
                  <CheckCircle2 className="mt-0.5 text-[var(--pde-coral)] transition-transform duration-300 group-hover:scale-110" size={22} />
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
