import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--pde-ink)] bg-[var(--pde-brass)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--pde-ink)] ${className}`}
      {...props}
    />
  );
}
