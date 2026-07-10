"use client";

export function StaggerText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word) => (
        <span className="inline-block" data-hero-line key={word}>
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
