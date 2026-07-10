import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-[22px] border border-[var(--pde-border)] bg-[var(--pde-surface)] shadow-[var(--shadow-card)] ${className}`}
      {...props}
    />
  );
}
