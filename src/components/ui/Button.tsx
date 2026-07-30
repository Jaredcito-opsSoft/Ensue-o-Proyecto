import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--ens-amber)]/60 bg-[var(--ens-amber)]/18 text-[var(--ens-ivory)] shadow-[0_12px_28px_rgba(167,98,44,0.2)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[var(--ens-gold-soft)] hover:bg-[var(--ens-amber)]/32 hover:shadow-[0_16px_34px_rgba(167,98,44,0.32)]",
  secondary:
    "border border-[var(--ens-border-subtle)] bg-[var(--ens-surface-elevated)]/50 text-[var(--ens-text-primary)] shadow-[var(--ens-shadow-soft)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[var(--ens-copper)]/50 hover:bg-[var(--ens-copper)]/15",
  ghost:
    "text-[var(--ens-text-primary)] hover:bg-[var(--ens-copper)]/12",
  dark:
    "border border-[var(--ens-border-subtle)] bg-[var(--ens-surface-dark)]/72 text-[var(--ens-text-primary)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[var(--ens-copper)]/40 hover:bg-[var(--ens-copper)]/18",
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,transform,color,box-shadow] duration-300 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ens-amber)] active:scale-[0.98]";

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
