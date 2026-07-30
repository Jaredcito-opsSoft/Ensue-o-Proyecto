"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const paths = [
  {
    y: [0.74, 0.71, 0.77, 0.73, 0.79],
    rotation: [-8, 9, -5, 7, 2],
    scale: [0.72, 0.88, 0.76, 0.92, 0.78],
    duration: 18,
    delay: 0,
    opacity: 0.24,
  },
  {
    y: [0.12, 0.09, 0.13, 0.1, 0.14],
    rotation: [7, -6, 11, -4, 5],
    scale: [0.58, 0.68, 0.62, 0.73, 0.6],
    duration: 21,
    delay: 4.5,
    opacity: 0.18,
  },
  {
    y: [0.77, 0.73, 0.79, 0.74, 0.8],
    rotation: [-4, 8, -9, 5, 0],
    scale: [0.46, 0.56, 0.5, 0.6, 0.48],
    duration: 24,
    delay: 9,
    opacity: 0.16,
  },
  {
    y: [0.09, 0.13, 0.1, 0.14, 0.11],
    rotation: [10, -8, 6, -10, 4],
    scale: [0.38, 0.5, 0.42, 0.54, 0.4],
    duration: 27,
    delay: 13,
    opacity: 0.13,
  },
];

export function HeroButterflies() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const wrappers = gsap.utils.toArray<HTMLElement>(".js-atria-butterfly", root);
      const icons = gsap.utils.toArray<HTMLElement>(".js-atria-butterfly-icon", root);
      const matchMedia = gsap.matchMedia();
      const runningAnimations = new Set<gsap.core.Animation>();

      const animate = (count: number) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const localAnimations: gsap.core.Animation[] = [];

        wrappers.forEach((wrapper, index) => {
          const visible = index < count;
          gsap.set(wrapper, {
            display: visible ? "block" : "none",
            x: -90,
            y: height * paths[index].y[0],
            autoAlpha: 0,
          });
          if (!visible) return;

          const path = paths[index];
          const travel = gsap.to(wrapper, {
            keyframes: [
              {
                x: width * 0.08,
                y: height * path.y[0],
                rotation: path.rotation[0],
                scale: path.scale[0],
                autoAlpha: path.opacity,
              },
              {
                x: width * 0.3,
                y: height * path.y[1],
                rotation: path.rotation[1],
                scale: path.scale[1],
              },
              {
                x: width * 0.53,
                y: height * path.y[2],
                rotation: path.rotation[2],
                scale: path.scale[2],
              },
              {
                x: width * 0.78,
                y: height * path.y[3],
                rotation: path.rotation[3],
                scale: path.scale[3],
              },
              {
                x: width * 1.12,
                y: height * path.y[4],
                rotation: path.rotation[4],
                scale: path.scale[4],
                autoAlpha: 0,
              },
            ],
            duration: path.duration,
            delay: path.delay,
            repeat: -1,
            repeatDelay: 1.5 + index,
            ease: "none",
          });
          const flutter = gsap.to(icons[index], {
            scaleX: 0.3,
            duration: 0.2 + index * 0.025,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          runningAnimations.add(travel);
          runningAnimations.add(flutter);
          localAnimations.push(travel, flutter);
        });

        return () => {
          localAnimations.forEach((animation) => {
            animation.kill();
            runningAnimations.delete(animation);
          });
          gsap.set(wrappers, { display: "none", clearProps: "transform,opacity,visibility" });
        };
      };

      matchMedia.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 640px) and (max-width: 1023px)",
          mobile: "(max-width: 639px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, tablet, mobile, reduceMotion } = context.conditions ?? {};
          if (reduceMotion) {
            gsap.set(wrappers, { display: "none" });
            return;
          }
          if (desktop) return animate(4);
          if (tablet) return animate(2);
          if (mobile) return animate(1);
        }
      );

      const handleVisibility = () => {
        runningAnimations.forEach((animation) => {
          if (document.hidden) animation.pause();
          else animation.resume();
        });
      };
      document.addEventListener("visibilitychange", handleVisibility);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibility);
        runningAnimations.forEach((animation) => animation.kill());
        runningAnimations.clear();
        matchMedia.revert();
      };
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      {paths.map((_, index) => (
        <span
          key={index}
          className="js-atria-butterfly absolute left-0 top-0 hidden h-8 w-12 will-change-transform sm:h-9 sm:w-14"
        >
          <span className="js-atria-butterfly-icon atria-butterfly-mask block h-full w-full origin-center" />
        </span>
      ))}
    </div>
  );
}
