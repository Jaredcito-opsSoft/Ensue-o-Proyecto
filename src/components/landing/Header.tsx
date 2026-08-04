"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { AtriaLogo } from "@/components/ui/AtriaLogo";

const navLinks = [
  { label: "Estudio", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Atria Web", href: "#atria-web" },
  { label: "Ensueño", href: "#momentos" },
  { label: "LocalPOS", href: "#localpos" },
  { label: "Proceso", href: "#proceso" },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero comenzar un proyecto con Atria."
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateOffset = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--atria-nav-offset", `${height + 12}px`);
    };
    const observer = new ResizeObserver(updateOffset);

    updateOffset();
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;

    const alignHashTarget = () => {
      const target = document.querySelector<HTMLElement>(window.location.hash);
      if (!target) return;
      if (window.location.hash === "#inicio") {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      const headerHeight = headerRef.current
        ? Math.ceil(headerRef.current.getBoundingClientRect().height)
        : 60;
      const contentHeading =
        target.querySelector<HTMLElement>("p, h1, h2, h3, .atria-eyebrow, [id$='-title']") || target;
      const top = contentHeading.getBoundingClientRect().top + window.scrollY - (headerHeight + 20);
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };

    const timers = [120, 850].map((delay) => window.setTimeout(alignHashTarget, delay));
    document.fonts.ready.then(alignHashTarget);
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const handleAnchorNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    setMobileOpen(false);

    window.history.pushState(null, "", href);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }

    const headerHeight = headerRef.current
      ? Math.ceil(headerRef.current.getBoundingClientRect().height)
      : 60;
    const contentHeading =
      target.querySelector<HTMLElement>("p, h1, h2, h3, .atria-eyebrow, [id$='-title']") || target;
    const top = contentHeading.getBoundingClientRect().top + window.scrollY - (headerHeight + 20);

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div
        className={`atria-liquid-nav pointer-events-auto relative mx-auto flex max-w-[1080px] items-center px-2 transition-[min-height,transform] duration-300 ${
          scrolled || mobileOpen ? "min-h-12" : "min-h-14"
        }`}
      >
        <a
          href="#inicio"
          onClick={(event) => handleAnchorNavigation(event, "#inicio")}
          className="group inline-flex min-h-11 shrink-0 items-center rounded-full px-2 text-[var(--atria-ink)]"
          aria-label="Atria — Estudio Digital, ir al inicio"
        >
          <AtriaLogo showSlogan={!scrolled} sloganText="Estudio Digital" />
        </a>

        <nav className="mx-auto hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorNavigation(event, link.href)}
              className="atria-nav-link text-[13px] font-semibold text-[#55565a] transition-colors hover:text-[var(--atria-accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          className="atria-float-action group ml-auto hidden min-h-10 items-center gap-3 rounded-full bg-[var(--atria-accent)] pl-5 pr-1.5 text-[13px] font-bold text-white hover:bg-[var(--atria-accent-hover)] sm:inline-flex"
        >
          Comenzar proyecto
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        <button
          type="button"
          className="ml-auto grid h-11 w-11 place-items-center rounded-full text-[var(--atria-ink)] transition-colors hover:bg-black/5 lg:hidden"
          aria-label={mobileOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="atria-liquid-menu absolute left-0 right-0 top-[calc(100%+8px)] rounded-[20px] p-3 lg:hidden"
          >
            <nav className="grid" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleAnchorNavigation(event, link.href)}
                  className="atria-menu-item flex min-h-12 items-center border-b border-black/8 px-3 font-semibold text-[var(--atria-ink)] last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappHref}
                onClick={() => setMobileOpen(false)}
                className="atria-float-action mt-3 inline-flex min-h-12 items-center justify-between rounded-full bg-[var(--atria-accent)] px-5 font-bold text-white sm:hidden"
              >
                Comenzar proyecto <ArrowUpRight size={17} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
