"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { ReactNode } from "react";

const INITIAL_VISIBLE_PAGES = 3;

export function ExpandableDemoGrid({ children }: { children: ReactNode[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMorePages = children.length > INITIAL_VISIBLE_PAGES;
  const visibleChildren = expanded ? children : children.slice(0, INITIAL_VISIBLE_PAGES);

  return (
    <>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{visibleChildren}</div>
      {hasMorePages ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#ffb5cd]/55 bg-[#ff6f9f]/16 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(255,111,159,0.14)] backdrop-blur-xl transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#ffd0de] hover:bg-[#ff6f9f]/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb5cd]"
          >
            {expanded ? "Ver menos" : "Ver más páginas"}
            {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
          </button>
        </div>
      ) : null}
    </>
  );
}
