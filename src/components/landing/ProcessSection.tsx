import { SectionReveal } from "@/components/motion/SectionReveal";

const steps = [
  {
    title: "Te escuchamos",
    text: "Entendemos el negocio, sus clientes y el resultado que necesitas.",
  },
  {
    title: "Definimos la solución",
    text: "Elegimos el alcance, el contenido y el sistema visual adecuado.",
  },
  {
    title: "Diseñamos",
    text: "Construimos una experiencia clara, coherente y pensada primero para móvil.",
  },
  {
    title: "Implementamos",
    text: "Configuramos componentes, contenido e integraciones sin añadir complejidad innecesaria.",
  },
  {
    title: "Probamos",
    text: "Revisamos lectura, navegación, dispositivos y los caminos de contacto.",
  },
  {
    title: "Acompañamos",
    text: "Publicamos, explicamos lo esencial y dejamos una base preparada para crecer.",
  },
];

export function ProcessSection() {
  return (
    <SectionReveal>
      <section id="proceso" className="bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                Cómo trabajamos
              </p>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
                Un proceso claro, sin hacer el proyecto más complicado.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">
              Utilizamos sistemas visuales, componentes reutilizables, plantillas
              profesionales configurables y procesos definidos para reducir tiempos sin
              sacrificar calidad.
            </p>
          </div>

          <ol className="mt-12 grid border-l border-t border-black/12 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="atria-process-step min-h-56 border-b border-r border-black/12 p-6 sm:p-8">
                <span className="atria-step-number">
                  0{index + 1}
                </span>
                <h3 className="atria-step-title mt-4 font-serif text-3xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--atria-ink-soft)]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SectionReveal>
  );
}
