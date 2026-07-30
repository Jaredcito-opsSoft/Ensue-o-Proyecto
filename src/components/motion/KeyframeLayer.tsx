"use client";

import { forwardRef } from "react";
import { getImageProps } from "next/image";

type KeyframeLayerProps = {
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  alt: string;
  priority?: boolean;
  load?: boolean;
  initialVisible?: boolean;
  className?: string;
};

export const KeyframeLayer = forwardRef<HTMLDivElement, KeyframeLayerProps>(
  function KeyframeLayer(
    { images, alt, priority = false, load = true, initialVisible = false, className = "" },
    ref
  ) {
    if (!load) {
      return (
        <div
          ref={ref}
          className={`absolute inset-0 ${className}`}
          style={{ opacity: 0 }}
          aria-hidden="true"
        />
      );
    }

    const common = {
      alt,
      unoptimized: true,
      loading: priority ? ("eager" as const) : ("lazy" as const),
    };
    const { props: desktopProps } = getImageProps({
      ...common,
      src: images.desktop,
      width: 1600,
      height: 900,
      fetchPriority: priority ? "high" : "auto",
    });
    const {
      props: { srcSet: tabletSrcSet },
    } = getImageProps({
      ...common,
      src: images.tablet,
      width: 1200,
      height: 900,
    });
    const {
      props: { srcSet: mobileSrcSet },
    } = getImageProps({
      ...common,
      src: images.mobile,
      width: 720,
      height: 960,
    });

    return (
      <div
        ref={ref}
        className={`absolute inset-0 ${className}`}
        style={{ opacity: initialVisible ? 1 : 0 }}
        aria-hidden="true"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
          <source media="(max-width: 1023px)" srcSet={tabletSrcSet} />
          {/* The picture element provides art-directed crops that next/image cannot express alone. */}
          <img
            {...desktopProps}
            alt={alt}
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
        </picture>
        <span className="absolute inset-0 bg-[#2a160d]/20 mix-blend-multiply" aria-hidden />
      </div>
    );
  }
);
