"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function MotionTicker({ items }: { items: string[] }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const track = scope.current.querySelector("[data-ticker-track]");
      if (!track) return;

      gsap.to(track, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    },
    { scope }
  );

  const loopItems = [...items, ...items];

  return (
    <div
      ref={scope}
      className="overflow-hidden border-y border-[var(--pde-border)] bg-[var(--pde-surface)]"
      aria-label="Funciones incluidas"
    >
      <div data-ticker-track className="flex w-max items-center gap-3 py-3 will-change-transform">
        {loopItems.map((item, index) => (
          <div
            className="flex items-center gap-3 px-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pde-muted)]"
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
          >
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--pde-accent)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
