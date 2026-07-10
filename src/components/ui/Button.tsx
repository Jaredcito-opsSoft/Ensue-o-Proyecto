import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--pde-accent)] text-[var(--pde-ink)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-[var(--pde-accent-strong)]",
  secondary:
    "border border-[var(--pde-border)] bg-[var(--pde-surface)] text-[var(--pde-ink)] hover:-translate-y-0.5 hover:border-[var(--pde-ink)] hover:bg-[var(--pde-paper-strong)]",
  ghost: "text-[var(--pde-ink)] hover:bg-[var(--pde-paper-strong)]",
  dark: "bg-[var(--pde-ink)] text-white hover:-translate-y-0.5 hover:bg-black",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,transform,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pde-accent)] active:scale-[0.98]";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function ButtonLink({
  className = "",
  variant = "primary",
  href,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (
    href.startsWith("http") ||
    href.startsWith("#") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  ) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
