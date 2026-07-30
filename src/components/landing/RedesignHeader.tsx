"use client";

import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { label: "Demos", href: "#demos" },
  { label: "Qué incluye", href: "#incluye" },
  { label: "Proceso", href: "#proceso" },
  { label: "Paquetes", href: "#paquetes" },
];

export function RedesignHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contactHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero crear la presencia digital de mi negocio con Ensueño."
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color] duration-300 ${scrolled || open ? "border-white/14 bg-[#07164b]/94 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex min-h-[74px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#inicio" className="inline-flex items-center gap-2 text-xl font-semibold text-white">
          <Sparkles size={17} className="text-[#ff7bab]" aria-hidden="true" />
          Ensueño
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex" aria-label="Navegación principal">
          {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-white">{link.label}</a>)}
        </nav>

        <a href={contactHref} className="group hidden min-h-11 items-center gap-3 rounded-full border border-[#ffbdd5]/45 bg-[#ff6f9f]/18 px-5 text-sm font-semibold text-white transition-[transform,background-color,border-color] hover:-translate-y-0.5 hover:border-[#ffd1e1] hover:bg-[#ff6f9f]/30 md:inline-flex">
          Empezar <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/12 bg-[#07164b] px-5 pb-7 pt-5 md:hidden" aria-label="Navegación móvil">
          <div className="mx-auto grid max-w-[1400px] gap-1">
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-serif text-3xl text-white">{link.label}</a>)}
            <a href={contactHref} onClick={() => setOpen(false)} className="mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#ff6f9f] px-5 font-semibold text-[#07164b]">Quiero mi página <ArrowUpRight size={17} /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
