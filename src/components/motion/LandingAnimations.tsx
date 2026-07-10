"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

export function LandingAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-hero-word]", {
        y: 18,
        opacity: 0,
        duration: 0.48,
        ease: "power3.out",
        stagger: 0.025,
      });

      gsap.from("[data-hero-line]", {
        y: 16,
        opacity: 0,
        duration: 0.42,
        delay: 0.12,
        ease: "power3.out",
        stagger: 0.045,
      });

      gsap.from("[data-hero-card]", {
        y: 18,
        scale: 0.98,
        opacity: 0,
        duration: 0.65,
        delay: 0.2,
        ease: "back.out(1.4)",
      });

      gsap.from("[data-hero-chip]", {
        y: 10,
        scale: 0.92,
        opacity: 0,
        duration: 0.5,
        delay: 0.48,
        ease: "back.out(1.7)",
      });
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
