"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_VISIBLE_PAGES = 3;

export function ExpandableDemoGrid({ children }: { children: ReactNode[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMorePages = children.length > INITIAL_VISIBLE_PAGES;
  const visibleChildren = expanded ? children : children.slice(0, INITIAL_VISIBLE_PAGES);

  return (
    <>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visibleChildren}</div>
      {hasMorePages ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-bold text-[var(--atria-ink)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[var(--atria-accent)] hover:bg-[var(--atria-accent-soft)]"
          >
            {expanded ? "Ver menos" : "Ver más páginas"}
            {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
          </button>
        </div>
      ) : null}
    </>
  );
}
