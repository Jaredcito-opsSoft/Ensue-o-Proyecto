import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  ["Necesito saber usar una plataforma?", "No. En el MVP el equipo configura la informacion por ti."],
  ["El QR se puede imprimir?", "Si. El QR apunta al link publico del negocio."],
  ["Puedo compartirlo por WhatsApp?", "Si. La pagina esta pensada para enviarse en un solo mensaje."],
  ["Sirve si solo tengo Facebook?", "Si. La mini pagina ordena tu informacion y puede enlazar a tus redes."],
  ["Puedo mostrar precios?", "Si. Tambien puedes usar textos como 'Desde...' o 'Cotizar'."],
  ["Puedo pedir cambios?", "Si. El alcance piloto debe definir rondas incluidas y cambios adicionales."],
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
          <div className="mt-8 divide-y divide-[var(--pde-border)] rounded-[24px] border border-[var(--pde-border)] bg-[var(--pde-surface)]">
            {faqs.map(([question, answer]) => (
              <details className="group p-6" key={question}>
                <summary className="cursor-pointer list-none text-lg font-semibold">{question}</summary>
                <p className="mt-3 leading-7 text-[var(--pde-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
