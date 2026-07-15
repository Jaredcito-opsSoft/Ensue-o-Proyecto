"use client";

import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

const contactUrl =
  "https://wa.me/529612345678?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20equipo%20en%20Cellux.";

const slides = [
  {
    image: "/images/cellux/hero-phones.png",
    alt: "Dos smartphones premium Cellux en acabado titanio",
    kicker: "Tecnología que te conecta.",
    title: ["Lo último.", "Lo mejor.", "Para ti."],
    description: "Descubre smartphones, accesorios premium y soluciones de reparación en un solo lugar.",
    action: "Explorar productos",
    href: "#productos",
    light: false,
    imageClass: "object-[68%_center] sm:object-[64%_center] lg:object-center",
  },
  {
    image: "/images/cellux/repair-phone.png",
    alt: "Smartphone abierto para servicio técnico de precisión",
    kicker: "Servicio técnico especializado.",
    title: ["Diagnóstico claro.", "Reparación precisa.", "Como nuevo."],
    description: "Reparamos pantalla, batería y componentes con atención experta y garantía.",
    action: "Cotizar reparación",
    href: contactUrl,
    light: false,
    imageClass: "object-[67%_center] lg:object-[72%_center]",
  },
  {
    image: "/images/cellux/accessories.png",
    alt: "Cargador y cable USB-C premium",
    kicker: "Energía para todo tu día.",
    title: ["Carga más.", "Espera menos.", "Sigue."],
    description: "Accesorios esenciales, materiales resistentes y compatibilidad para tus equipos.",
    action: "Ver accesorios",
    href: "#accesorios",
    light: true,
    imageClass: "object-[72%_center] lg:object-center",
  },
] as const;

export function CelluxHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = slides[active];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [active, paused]);

  const showPrevious = () => setActive((index) => (index - 1 + slides.length) % slides.length);
  const showNext = () => setActive((index) => (index + 1) % slides.length);

  return (
    <section
      id="inicio"
      aria-roledescription="carrusel"
      aria-label="Novedades de Cellux"
      className={`relative min-h-[760px] overflow-hidden transition-colors duration-700 lg:min-h-[700px] ${current.light ? "bg-[#eeeeec] text-[#0a0b0d]" : "bg-[#08090b] text-white"}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          aria-hidden={active !== index}
          className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${active === index ? "scale-100 opacity-100" : "pointer-events-none scale-[1.015] opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={active === index ? slide.alt : ""}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${slide.imageClass} ${slide.light ? "opacity-78 sm:opacity-90 lg:opacity-100" : "opacity-72 sm:opacity-84 lg:opacity-100"}`}
          />
          {!slide.light && <div className="absolute inset-0 bg-black/24 lg:bg-black/8" />}
        </div>
      ))}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <nav className="flex min-h-24 items-center justify-between gap-6" aria-label="Navegación de Cellux">
          <a href="#inicio" className="text-2xl font-bold tracking-[-0.02em]">Cellux.</a>
          <div className={`hidden items-center gap-9 text-xs font-medium lg:flex ${current.light ? "text-black/68" : "text-white/78"}`}>
            <a className="transition-colors hover:text-current hover:opacity-55" href="#productos">Tienda</a>
            <a className="transition-colors hover:text-current hover:opacity-55" href="#accesorios">Accesorios</a>
            <a className="transition-colors hover:text-current hover:opacity-55" href="#reparaciones">Reparaciones</a>
            <a className="transition-colors hover:text-current hover:opacity-55" href="#nosotros">Nosotros</a>
            <a className="transition-colors hover:text-current hover:opacity-55" href="#contacto">Contacto</a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <a className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-current/10" href="#productos" aria-label="Buscar productos"><Search size={21} /></a>
            <a className="hidden h-11 w-11 place-items-center rounded-full transition-colors hover:bg-current/10 sm:grid" href={contactUrl} aria-label="Hablar con un asesor"><UserRound size={21} /></a>
            <a className="hidden h-11 w-11 place-items-center rounded-full transition-colors hover:bg-current/10 sm:grid" href="#productos" aria-label="Ver bolsa de compra"><ShoppingBag size={20} /></a>
            <a className="grid h-11 w-11 place-items-center rounded-full border border-current/20 transition-colors hover:bg-current/10 lg:hidden" href="#productos" aria-label="Abrir menú"><Menu size={20} /></a>
          </div>
        </nav>

        <div className="relative min-h-[620px] pb-16 lg:min-h-[575px]">
          {slides.map((slide, index) => (
            <div
              key={slide.kicker}
              aria-hidden={active !== index}
              aria-live={active === index ? "polite" : "off"}
              className={`absolute inset-0 flex items-start pt-16 transition-[opacity,transform] duration-500 sm:pt-20 lg:items-center lg:pt-0 ${active === index ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-5 opacity-0"}`}
            >
              <div className="max-w-[480px]">
                <p className={`text-sm ${slide.light ? "text-black/62" : "text-white/72"}`}>{slide.kicker}</p>
                {index === 0 ? (
                  <h1 className="mt-5 text-[4.15rem] font-semibold leading-[0.92] tracking-[-0.04em] sm:text-[5rem] lg:text-[5.35rem]">
                    {slide.title[0]}<br />{slide.title[1]}<br /><span className={slide.light ? "text-black/42" : "text-white/46"}>{slide.title[2]}</span>
                  </h1>
                ) : (
                  <h2 className="mt-5 text-[3.55rem] font-semibold leading-[0.94] tracking-[-0.04em] sm:text-[4.5rem] lg:text-[4.75rem]">
                    {slide.title[0]}<br />{slide.title[1]}<br /><span className={slide.light ? "text-black/42" : "text-white/46"}>{slide.title[2]}</span>
                  </h2>
                )}
                <p className={`mt-7 max-w-sm text-sm leading-6 sm:text-base ${slide.light ? "text-black/62" : "text-white/72"}`}>{slide.description}</p>
                <a
                  href={slide.href}
                  className={`group mt-8 inline-flex min-h-12 items-center justify-center gap-8 rounded-[6px] border px-6 py-3 text-sm font-semibold shadow-[0_12px_32px_rgba(0,0,0,.15)] transition-[transform,background-color,color,box-shadow] duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] ${slide.light ? "border-black bg-black text-white hover:bg-[#252628]" : "border-white bg-white text-[#0a0b0d] hover:bg-[#e7e7e7]"}`}
                >
                  {slide.action}<ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-7">
          <button type="button" onClick={showPrevious} aria-label="Ver diapositiva anterior" className="mr-2 grid h-10 w-10 place-items-center rounded-full border border-current/22 bg-current/6 transition-[transform,background-color] hover:-translate-x-0.5 hover:bg-current/12"><ChevronLeft size={18} /></button>
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.kicker}
              onClick={() => setActive(index)}
              aria-label={`Ver diapositiva ${index + 1}: ${slide.kicker}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-[3px] rounded-full transition-[width,background-color] duration-300 ${active === index ? "w-10 bg-current" : "w-7 bg-current/24 hover:bg-current/45"}`}
            />
          ))}
          <button type="button" onClick={showNext} aria-label="Ver diapositiva siguiente" className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-current/22 bg-current/6 transition-[transform,background-color] hover:translate-x-0.5 hover:bg-current/12"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
