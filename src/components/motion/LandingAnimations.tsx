"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

export function LandingAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.from("[data-hero-line]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.out",
        stagger: 0.06,
      });

      gsap.from("[data-hero-title]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from("[data-hero-desc]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from("[data-hero-cta]", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        delay: 0.55,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.from("[data-hero-scroll-hint]", {
        opacity: 0,
        duration: 0.6,
        delay: 1.2,
        ease: "power2.out",
      });
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
