import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-[22px] border border-white/70 bg-[var(--pde-glass)] shadow-[var(--shadow-card)] backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
