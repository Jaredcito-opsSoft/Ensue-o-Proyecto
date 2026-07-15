import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

const steps = [
  {
    title: "Nos mandas la informacion",
    text: "Fotos, horarios, servicios y datos de contacto en el formato que ya tengas.",
  },
  {
    title: "Ordenamos el mensaje",
    text: "Convertimos lo disperso en una estructura clara para que el cliente entienda rapido.",
  },
  {
    title: "Publicamos la mini pagina",
    text: "Creamos el link, revisamos mobile y dejamos las acciones principales visibles.",
  },
  {
    title: "Entregamos QR y guia",
    text: "Te damos el QR listo para mostrador, redes o mensajes de WhatsApp.",
  },
];

export function ProcessSection() {
  return (
    <Reveal>
      <section id="proceso" className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-coral)]">
                Proceso
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[0.98] sm:text-6xl">
                Corto, guiado y pensado para negocios ocupados.
              </h2>
            </div>
            <p className="text-pretty text-lg leading-8 text-[var(--pde-muted)]">
              La experiencia evita formularios largos y decisiones tecnicas. El negocio aporta lo que ya tiene; nosotros lo convertimos en un punto de entrada listo para compartir.
            </p>
          </div>
          <AnimatedCards className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div
                data-card
                key={step.title}
                className="rounded-[20px] border border-[var(--pde-border)] bg-[#1c337f]/55 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <p className="grid h-8 w-8 place-items-center rounded-full border border-[#f1b3d1]/60 font-mono text-sm text-[var(--pde-coral)]">{index + 1}</p>
                  <CheckCircle2 className="text-[var(--pde-teal)]" size={20} />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-7">{step.title}</h3>
                <p className="mt-3 leading-7 text-[var(--pde-muted)]">{step.text}</p>
              </div>
            ))}
          </AnimatedCards>
        </div>
      </section>
    </Reveal>
  );
}
