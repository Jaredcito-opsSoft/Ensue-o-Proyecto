"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function DrawLine({
  className = "",
  direction = "horizontal",
  color = "var(--ens-copper)",
  thickness = 1,
}: {
  className?: string;
  direction?: "horizontal" | "vertical";
  color?: string;
  thickness?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const line = ref.current.querySelector("line");
      if (!line) return;

      const length = line.getTotalLength();
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  const isH = direction === "horizontal";

  return (
    <svg
      ref={ref}
      className={className}
      width={isH ? "100%" : `${thickness}px`}
      height={isH ? `${thickness}px` : "100%"}
      viewBox={isH ? "0 0 100 1" : "0 0 1 100"}
      preserveAspectRatio="none"
      aria-hidden
    >
      <line
        x1={0}
        y1={isH ? 0.5 : 0}
        x2={isH ? 100 : 0.5}
        y2={isH ? 0.5 : 100}
        stroke={color}
        strokeWidth={thickness}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
