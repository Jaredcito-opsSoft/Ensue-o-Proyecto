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
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
