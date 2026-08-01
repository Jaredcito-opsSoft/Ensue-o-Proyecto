import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const problems = [
  ["No tienes un sitio propio.", "Atria Web", "#atria-web"],
  ["Tus datos están dispersos.", "Presencia online incluida", "#atria-web"],
  ["No saben cómo encontrarte.", "Búsqueda, datos y contacto", "#atria-web"],
  ["Tu evento necesita un espacio central.", "Ensueño Momentos", "#momentos"],
  ["Administras ventas manualmente.", "LocalPOS", "#localpos"],
  ["Necesitas una función particular.", "Proyecto personalizado", "#contacto"],
];

export function ProblemsSection() {
  return (
    <SectionReveal>
      <section className="bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                Problemas concretos
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
                Una buena presencia no solo se ve bien.
              </h2>
            </div>
            <p className="max-w-xl font-serif text-4xl font-medium leading-[0.98] text-[var(--atria-ink)] lg:justify-self-end sm:text-5xl">
              También debe ayudarte a{" "}
              <em className="font-medium text-[var(--atria-accent)]">trabajar mejor.</em>
            </p>
          </div>

          <div className="mt-12 border-t border-black/14">
            {problems.map(([problem, solution, href], index) => (
              <a
                key={problem}
                href={href}
                className="atria-problem-row group grid min-h-20 items-center gap-3 border-b border-black/12 py-4 sm:grid-cols-[64px_1fr_1fr_auto] sm:gap-6"
              >
                <span className="atria-problem-number hidden text-xs font-bold text-[var(--atria-muted)] sm:block">
                  0{index + 1}
                </span>
                <span className="text-sm text-[var(--atria-ink-soft)] sm:text-base">
                  {problem}
                </span>
                <span className="font-serif text-2xl font-medium leading-tight sm:text-3xl">
                  {solution}
                </span>
                <span className="atria-problem-arrow grid h-10 w-10 place-items-center rounded-full border border-black/14 transition-colors group-hover:border-[var(--atria-accent)] group-hover:bg-[var(--atria-accent)] group-hover:text-white">
                  <ArrowRight size={16} aria-hidden />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
