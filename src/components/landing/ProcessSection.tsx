import { Reveal } from "@/components/motion/Reveal";

const steps = [
  "Nos mandas la informacion.",
  "Organizamos tu negocio.",
  "Creamos tu mini pagina.",
  "Te entregamos link y QR.",
  "Lo compartes con tus clientes.",
];

export function ProcessSection() {
  return (
    <Reveal>
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Un proceso corto, pensado para negocios que no quieren complicarse.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="border-t border-[var(--pde-border)] pt-5">
                <p className="font-mono text-sm text-[var(--pde-muted)]">0{index + 1}</p>
                <p className="mt-6 text-xl font-semibold leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
