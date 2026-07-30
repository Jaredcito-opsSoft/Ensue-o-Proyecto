"use client";

import { forwardRef, type ReactNode } from "react";

type AnimatedCopyProps = {
  eyebrow?: string;
  title: string;
  description: string;
  details?: string[];
  align: "left" | "right";
  children?: ReactNode;
  className?: string;
  initialVisible?: boolean;
};

export const AnimatedCopy = forwardRef<HTMLDivElement, AnimatedCopyProps>(
  function AnimatedCopy(
    {
      eyebrow,
      title,
      description,
      details,
      align,
      children,
      className = "",
      initialVisible = false,
    },
    ref
  ) {
    const positionClasses =
      align === "left"
        ? "left-[clamp(24px,5vw,84px)] border-l"
        : "right-[clamp(24px,5vw,84px)] border-r";

    return (
      <div
        ref={ref}
        className={`absolute top-1/2 z-40 w-[min(460px,calc(100vw-56px))] -translate-y-1/2 border-[var(--atria-gold)]/60 bg-[#11100f]/94 px-6 py-7 text-left shadow-[0_24px_70px_rgba(0,0,0,.22)] lg:px-8 lg:py-9 ${positionClasses} ${className}`}
        style={{ opacity: initialVisible ? 1 : 0 }}
      >
        {eyebrow && (
          <p className="text-[10px] font-bold uppercase text-[var(--atria-gold)]">
            {eyebrow}
          </p>
        )}
        <h3 className="mt-4 font-serif text-4xl font-medium leading-[0.98] text-[#faf5ef] lg:text-5xl">
          {title}
        </h3>
        <p className="mt-5 text-sm leading-6 text-[#c8beb5] lg:text-[15px] lg:leading-7">
          {description}
        </p>
        {details && details.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/12 pt-4 text-[10px] font-semibold uppercase text-[#f1e4d3]">
            {details.map((detail) => (
              <li key={detail} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--atria-accent)]" aria-hidden />
                {detail}
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    );
  }
);
