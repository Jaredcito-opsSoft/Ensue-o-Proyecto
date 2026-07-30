import { SCROLL_STAGES } from "@/lib/scroll-stages";

export function ScrollProgress({ activeIndex }: { activeIndex: number }) {
  return (
    <nav
      className="absolute right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
      aria-label="Progreso de la experiencia"
    >
      {SCROLL_STAGES.map((stage, index) => {
        const active = index === activeIndex;
        return (
          <div key={stage.id} className="flex items-center gap-3">
            <span className={`text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--ens-cream)] transition-opacity ${active ? "opacity-100" : "opacity-0"}`}>
              {stage.label}
            </span>
            <span
              className={`block border transition-[width,height,background-color,border-color] ${active ? "h-2.5 w-2.5 border-[var(--ens-gold-soft)] bg-[var(--ens-amber)]" : "h-2 w-2 border-[var(--ens-border-strong)] bg-[var(--ens-surface-elevated)]"}`}
              aria-current={active ? "step" : undefined}
            />
          </div>
        );
      })}
    </nav>
  );
}
