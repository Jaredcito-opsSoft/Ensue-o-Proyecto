"use client";

import { type ImgHTMLAttributes } from "react";

type ParallaxImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export function ParallaxImage({ alt, className = "", ...props }: ParallaxImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      className={`transition-transform duration-500 hover:scale-[1.03] ${className}`}
    />
  );
}
