"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

export function AnimatedCards({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-card]", {
        opacity: 0,
        y: 18,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.05,
      });
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
