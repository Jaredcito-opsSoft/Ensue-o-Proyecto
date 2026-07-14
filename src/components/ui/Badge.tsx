import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/70 bg-[var(--pde-glass)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--pde-accent)] shadow-[var(--shadow-soft)] backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
