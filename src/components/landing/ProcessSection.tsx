import { ArrowRight, Clock3 } from "lucide-react";
import { PROJECT_STATES } from "@/data/atria-studio";
import { SectionReveal } from "@/components/motion/SectionReveal";

const times = [["Landing", "1–3 días hábiles"], ["Varias páginas", "3–6 días hábiles"], ["Ensueño Momentos", "2–5 días hábiles"], ["LocalPOS", "1–3 días hábiles"], ["Proyecto especial", "Según propuesta"]] as const;

export function ProcessSection() {
  return (
    <SectionReveal>
      <section id="proceso" className="scroll-mt-24 bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end"><div><p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Tablero de proyecto</p><h2 className="mt-4 font-serif text-5xl font-medium leading-[.94] sm:text-6xl">Cada etapa deja algo visible.</h2></div><p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">El proyecto avanza cuando Atria y el cliente completan su parte. Las condiciones de salida evitan que el proceso dependa de supuestos.</p></div>

          <div className="mt-12 overflow-hidden border border-black/12 bg-[var(--atria-page)]">
            <div className="flex min-h-11 items-center gap-2 border-b border-black/12 bg-white px-5"><span className="h-2 w-2 rounded-full bg-[var(--atria-accent)]" /><span className="h-2 w-2 rounded-full bg-[#e5a257]" /><span className="h-2 w-2 rounded-full bg-black/15" /><p className="ml-2 text-[9px] font-bold uppercase text-[var(--atria-muted)]">Flujo compartido · Atria + cliente</p><span className="ml-auto hidden text-[9px] font-semibold uppercase text-[var(--atria-muted)] sm:block">Desliza para recorrer</span></div>
            <ol className="atria-process-board flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:thin]">
              {PROJECT_STATES.map((state, index) => (
                <li key={state.number} className="group min-w-[82vw] snap-start border-r border-black/12 bg-white p-6 last:border-r-0 sm:min-w-[390px] lg:min-w-[360px] lg:p-7">
                  <div className="flex items-center justify-between"><span className="font-mono text-xs font-bold text-[var(--atria-accent)]">{state.number}</span>{index < PROJECT_STATES.length - 1 && <ArrowRight size={16} className="text-black/28 transition-transform group-hover:translate-x-1" aria-hidden />}</div>
                  <h3 className="mt-7 min-h-[72px] font-serif text-3xl font-medium leading-[1.02]">{state.title}</h3>
                  <dl className="mt-6 border-t border-black/12 text-xs leading-5">
                    <div className="border-b border-black/10 py-4"><dt className="font-bold uppercase text-[var(--atria-muted)]">Atria</dt><dd className="mt-2 text-[var(--atria-ink-soft)]">{state.atria}</dd></div>
                    <div className="border-b border-black/10 py-4"><dt className="font-bold uppercase text-[var(--atria-muted)]">Cliente</dt><dd className="mt-2 text-[var(--atria-ink-soft)]">{state.client}</dd></div>
                    <div className="border-b border-black/10 py-4"><dt className="font-bold uppercase text-[var(--atria-muted)]">Entregable</dt><dd className="mt-2 font-semibold">{state.deliverable}</dd></div>
                    <div className="pt-4"><dt className="font-bold uppercase text-[var(--atria-accent)]">Condición de salida</dt><dd className="mt-2 font-semibold">{state.gate}</dd></div>
                  </dl>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid gap-6 border-y border-black/12 py-6 lg:grid-cols-[.55fr_1.45fr] lg:items-center"><div className="flex items-center gap-3"><Clock3 size={18} className="text-[var(--atria-accent)]" aria-hidden /><p className="font-serif text-2xl font-medium">Referencias, no promesas automáticas.</p></div><dl className="flex flex-wrap gap-x-7 gap-y-3 text-xs">{times.map(([label, value]) => <div key={label} className="flex gap-2"><dt className="font-bold">{label}</dt><dd className="text-[var(--atria-muted)]">{value}</dd></div>)}</dl></div>
        </div>
      </section>
    </SectionReveal>
  );
}
