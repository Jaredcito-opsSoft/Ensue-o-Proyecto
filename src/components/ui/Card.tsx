import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-[22px] border border-[var(--ens-border-subtle)] bg-[var(--ens-surface-dark)]/80 shadow-[var(--ens-shadow-card)] backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
