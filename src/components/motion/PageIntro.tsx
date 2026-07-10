"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

export function PageIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current.children, {
        opacity: 0,
        y: 16,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.06,
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
