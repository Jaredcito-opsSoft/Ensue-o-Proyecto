"use client";

import { type ReactNode } from "react";

export function MagneticButton({ children }: { children: ReactNode }) {
  return <span className="inline-flex transition-transform duration-200 hover:-translate-y-0.5">{children}</span>;
}
