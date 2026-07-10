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
      <section id="proceso" className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[0.98] sm:text-6xl">
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
