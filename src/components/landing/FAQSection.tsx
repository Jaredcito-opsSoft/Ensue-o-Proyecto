import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  ["¿Necesito saber usar una plataforma?", "No. En el MVP el equipo configura la información por ti."],
  ["¿El QR se puede imprimir?", "Sí. El QR apunta al enlace público del negocio."],
  ["¿Puedo compartirlo por WhatsApp?", "Sí. La página está pensada para enviarse en un solo mensaje."],
  ["¿Sirve si solo tengo Facebook?", "Sí. La mini página ordena tu información y puede enlazar a tus redes."],
  ["¿Puedo mostrar precios?", "Sí. También puedes usar textos como ‘Desde…’ o ‘Cotizar’."],
  ["¿Puedo pedir cambios?", "Sí. El alcance piloto debe definir rondas incluidas y cambios adicionales."],
  ["Incluye pagos o inventario?", "No en esta version. Primero validamos presencia digital."],
];

export function FAQSection() {
  return (
    <Reveal>
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 divide-y divide-[var(--pde-border)] rounded-[24px] border border-[var(--pde-border)] bg-[#142b76]/58 shadow-[var(--shadow-card)] backdrop-blur-xl">
            {faqs.map(([question, answer]) => (
              <details className="group p-6" key={question}>
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--pde-accent)]">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-[var(--pde-coral)] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-[var(--pde-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
