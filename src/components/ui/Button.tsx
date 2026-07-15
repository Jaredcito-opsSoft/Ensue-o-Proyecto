import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-[#ffc2d6]/70 bg-[#ff6f9f]/28 text-white shadow-[0_12px_28px_rgba(255,111,159,0.2)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#ffd0df] hover:bg-[#ff6f9f]/48 hover:shadow-[0_16px_34px_rgba(255,111,159,0.32)]",
  secondary:
    "border border-[#d8c6ff]/38 bg-[#c49eff]/12 text-[var(--pde-ink)] shadow-[var(--shadow-soft)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#ffb5cd]/70 hover:bg-[#ff6f9f]/20",
  ghost: "text-[var(--pde-ink)] hover:bg-[#ff6f9f]/12",
  dark: "border border-[#ffbad1]/35 bg-[#192b72]/72 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#ffb5cd]/70 hover:bg-[#ff6f9f]/22",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,transform,color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb5cd] active:scale-[0.98]";

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
