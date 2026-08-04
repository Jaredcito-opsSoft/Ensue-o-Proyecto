import { ArrowRight } from "lucide-react";

const outcomes = [
  ["Ser encontrado", "Datos consistentes, dominio, Google y SEO técnico."],
  ["Generar confianza", "Una experiencia clara, profesional y coherente con el negocio."],
  ["Facilitar contacto", "WhatsApp, formularios, llamadas, ubicación y horarios."],
  ["Mostrar lo que ofreces", "Servicios, catálogo, menú, galería o promociones."],
  ["Trabajar mejor", "LocalPOS o una solución específica cuando corresponda."],
];

export function OutcomesSection() {
  return (
    <section className="bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="outcomes-title">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Resultados que podemos buscar</p>
          <h2 id="outcomes-title" className="font-serif text-5xl font-medium leading-[0.94] sm:text-6xl lg:text-7xl">
            El diseño importa cuando ayuda a dar el siguiente paso.
          </h2>
        </div>
        <ol className="mt-12 border-t border-black/14">
          {outcomes.map(([title, description], index) => (
            <li key={title} className="group grid gap-3 border-b border-black/12 py-6 sm:grid-cols-[70px_.8fr_1.2fr_auto] sm:items-center">
              <span className="text-xs font-bold text-[var(--atria-muted)]">0{index + 1}</span>
              <h3 className="font-serif text-3xl font-medium sm:text-4xl">{title}</h3>
              <p className="max-w-xl text-sm leading-6 text-[var(--atria-ink-soft)]">{description}</p>
              <ArrowRight size={18} className="hidden text-[var(--atria-accent)] transition-transform group-hover:translate-x-1 sm:block" aria-hidden />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

