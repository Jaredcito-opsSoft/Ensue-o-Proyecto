import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--ens-border-subtle)] bg-[var(--ens-glass-light)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ens-amber)] shadow-[var(--ens-shadow-soft)] backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
