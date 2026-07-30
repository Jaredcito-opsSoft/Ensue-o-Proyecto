"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SplitHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const words = ref.current.querySelectorAll("[data-word]");
      if (!words.length) return;

      gsap.fromTo(
        words,
        { opacity: 0, y: 20, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.04,
          immediateRender: false,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  const text = typeof children === "string" ? children : "";

  if (!text) {
    return (
      <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} data-word className="inline-block" style={{ perspective: "600px" }}>
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  );
}
