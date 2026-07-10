"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

export function LandingAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-hero-line]", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      });
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
