"use client";

import { type ImgHTMLAttributes } from "react";

type ParallaxImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export function ParallaxImage({ alt, className = "", ...props }: ParallaxImageProps) {
  return (
    // Kept as a thin img wrapper because this generic motion helper may receive arbitrary image attrs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      className={`transition-transform duration-500 hover:scale-[1.03] ${className}`}
    />
  );
}
