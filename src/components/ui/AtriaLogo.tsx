"use client";

import React from "react";

export function AtriaIconMark({
  className = "h-8 w-8",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="atria-grad-primary"
          x1="4"
          y1="36"
          x2="36"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e84d82" />
          <stop offset="0.5" stopColor="#2347c9" />
          <stop offset="1" stopColor="#ff7bab" />
        </linearGradient>
        <linearGradient
          id="atria-grad-glow"
          x1="20"
          y1="4"
          x2="20"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e84d82" stopOpacity="0.95" />
          <stop offset="1" stopColor="#2347c9" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Halo precision circle */}
      <circle
        cx="20"
        cy="20"
        r="18.5"
        stroke="url(#atria-grad-primary)"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        fill={light ? "rgba(255,255,255,0.06)" : "rgba(17,18,20,0.03)"}
      />

      {/* Architectural Monogram 'A' */}
      <path
        d="M20 6.5L31.5 31.5H25.4L20 18.5L14.6 31.5H8.5L20 6.5Z"
        fill="url(#atria-grad-glow)"
      />

      {/* Core vertex triangle cutout */}
      <path
        d="M15.8 23.5L20 14.5L24.2 23.5H15.8Z"
        fill={light ? "#08090b" : "#ffffff"}
      />

      {/* Atria Coral focal dot */}
      <circle cx="20" cy="21.5" r="2.2" fill="#e84d82" />
    </svg>
  );
}

export function AtriaLogo({
  variant = "full",
  light = false,
  showSlogan = true,
  sloganText = "Estudio Digital",
  className = "",
}: {
  variant?: "full" | "compact" | "icon";
  light?: boolean;
  showSlogan?: boolean;
  sloganText?: string;
  className?: string;
}) {
  if (variant === "icon") {
    return <AtriaIconMark light={light} className={className || "h-8 w-8"} />;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <AtriaIconMark
        light={light}
        className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif text-2xl font-bold tracking-tight ${
            light ? "text-white" : "text-[var(--atria-ink)]"
          }`}
        >
          Atria
        </span>
        {showSlogan && (
          <span
            className={`mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] ${
              light ? "text-white/70" : "text-[var(--atria-accent)]"
            }`}
          >
            {sloganText}
          </span>
        )}
      </div>
    </div>
  );
}
