import { Plus } from "lucide-react";
import { ATRIA_FAQ } from "@/data/atria-content";

export function FaqSection() {
  return (
    <section id="preguntas" className="scroll-mt-24 bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Antes de comenzar</p>
          <h2 id="faq-title" className="mt-4 font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">Preguntas claras para tomar una decisión.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--atria-ink-soft)]">
            Las condiciones exactas se confirman en la propuesta. Aquí explicamos los criterios que aplican de forma general.
          </p>
        </div>
        <div className="border-t border-black/14">
          {ATRIA_FAQ.map(({ question, answer }) => (
            <details key={question} className="group border-b border-black/12">
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-semibold marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--atria-accent)]">
                <span>{question}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center border border-black/14 transition-colors group-open:border-[var(--atria-accent)] group-open:bg-[var(--atria-accent)] group-open:text-white">
                  <Plus size={16} className="transition-transform group-open:rotate-45" aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 text-sm leading-7 text-[var(--atria-ink-soft)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
