import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Plus,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CelluxHeroCarousel } from "@/components/demos/CelluxHeroCarousel";

const contactUrl =
  "https://wa.me/529612345678?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20equipo%20en%20Cellux.";

const benefits = [
  { title: "Productos originales", copy: "Garantía y calidad.", icon: BadgeCheck },
  { title: "Envíos rápidos", copy: "A todo el país.", icon: Truck },
  { title: "Compra segura", copy: "Tus datos protegidos.", icon: ShieldCheck },
  { title: "Soporte experto", copy: "Te ayudamos siempre.", icon: Headphones },
];

const products = [
  {
    name: "Cellux Pro Max",
    price: "$24,999 MXN",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=86",
    imageClass: "object-center",
  },
  {
    name: "AirPods Pro 2",
    price: "$5,499 MXN",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=86",
    imageClass: "object-center",
  },
  {
    name: "Watch Series 9",
    price: "$8,999 MXN",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=86",
    imageClass: "object-center",
  },
  {
    name: "Funda MagSafe",
    price: "$699 MXN",
    image: "/images/cellux/magsafe-case.png",
    imageClass: "object-center",
  },
];

function CelluxButton({ children, href, dark = false }: { children: ReactNode; href: string; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-8 rounded-[6px] border px-6 py-3 text-sm font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        dark
          ? "border-white/28 bg-white/6 text-white hover:border-white/55 hover:bg-white/12 focus-visible:outline-white"
          : "border-white bg-white text-[#0a0b0d] shadow-[0_12px_32px_rgba(0,0,0,.18)] hover:bg-[#e7e7e7] hover:shadow-[0_18px_40px_rgba(0,0,0,.24)] focus-visible:outline-black"
      }`}
    >
      {children}
      <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function CelluxPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f6] pb-20 text-[#0b0c0e] md:pb-0">
      <CelluxHeroCarousel />

      <section id="nosotros" className="border-b border-black/10 bg-white px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1220px] divide-y divide-black/10 py-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {benefits.map(({ title, copy, icon: Icon }) => (
            <div key={title} className="flex items-center gap-4 px-1 py-5 sm:px-6 lg:px-8">
              <Icon size={31} strokeWidth={1.6} className="shrink-0" />
              <div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-1 text-xs text-black/54">{copy}</p></div>
            </div>
          ))}
        </div>
      </section>

      <Reveal>
        <section id="productos" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1220px]">
            <div className="flex items-end justify-between gap-6 border-t border-black/10 pt-10">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/52">Destacados</p><h2 className="mt-3 max-w-xs text-4xl font-semibold leading-[0.94] tracking-[-0.035em] sm:text-5xl">Lo más popular.</h2></div>
              <a className="group hidden items-center gap-5 text-sm font-medium sm:inline-flex" href="#accesorios">Ver todos <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article key={product.name} className="group overflow-hidden rounded-[8px] bg-[#ededec] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.1)]">
                  <div className="relative aspect-[1.05] overflow-hidden bg-[#ececeb]">
                    <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${product.imageClass}`} />
                  </div>
                  <div className="flex items-end justify-between gap-4 p-5">
                    <div><h3 className="text-sm font-semibold">{product.name}</h3><p className="mt-2 text-xs">{product.price}</p></div>
                    <a href={contactUrl} aria-label={`Consultar ${product.name}`} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/15 transition-[transform,background-color,color] duration-300 hover:rotate-90 hover:bg-black hover:text-white"><Plus size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <div className="mx-auto grid max-w-[1220px] gap-4 lg:grid-cols-[1.12fr_1fr]">
            <article id="reparaciones" className="relative min-h-[540px] overflow-hidden rounded-[8px] bg-[#090a0c] p-7 text-white sm:p-10">
              <Image src="/images/cellux/repair-phone.png" alt="Smartphone Cellux abierto para reparación" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-[63%_center] opacity-84 transition-transform duration-700 hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-black/16" />
              <div className="relative flex h-full min-h-[470px] max-w-[260px] flex-col items-start">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">Reparaciones</p>
                <h2 className="mt-6 text-4xl font-medium leading-[1.03] tracking-[-0.035em]">Dejamos tu equipo como nuevo.</h2>
                <p className="mt-6 text-sm leading-6 text-white/68">Servicio técnico especializado con garantía.</p>
                <div className="mt-auto"><CelluxButton href={contactUrl}>Conocer más</CelluxButton></div>
              </div>
            </article>

            <div className="grid gap-4">
              <article id="accesorios" className="relative min-h-[255px] overflow-hidden rounded-[8px] bg-[#e9e9e8] p-7 sm:p-9">
                <Image src="/images/cellux/accessories.png" alt="Cargador y cable premium" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-center opacity-92 transition-transform duration-500 hover:scale-[1.03]" />
                <div className="relative max-w-[240px]"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/52">Accesorios</p><h2 className="mt-4 text-3xl font-semibold leading-none tracking-[-0.035em]">Diseñados para elevar tu día.</h2><a href="#productos" className="group mt-6 inline-flex items-center gap-5 text-sm font-medium">Ver accesorios <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a></div>
              </article>
              <article className="relative min-h-[255px] overflow-hidden rounded-[8px] bg-[#111214] p-7 text-white sm:p-9">
                <div className="absolute -right-4 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-white/8" /><div className="absolute right-7 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/8" />
                <div className="relative flex h-full min-h-[185px] items-center justify-between gap-6"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/68">Paga a meses</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.035em]">Hasta 12 MSI</h2><p className="mt-3 text-sm text-white/68">Con tarjetas participantes.</p><a href={contactUrl} className="group mt-6 inline-flex items-center gap-5 text-sm font-medium">Conocer más <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a></div><p className="text-right text-7xl font-light tracking-[-0.06em] text-white/82 sm:text-8xl">0<span className="text-4xl">%</span><span className="block text-base tracking-normal">interés</span></p></div>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <section id="contacto" className="border-t border-black/10 bg-white px-5 py-11 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-x-14 gap-y-7 text-lg font-semibold text-black/46 sm:justify-between">
          <span>APPLE</span><span>SAMSUNG</span><span className="text-base">mi</span><span>HUAWEI</span><span className="text-base">motorola</span><span>OPPO</span>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-50 rounded-[8px] border border-white/16 bg-[#0b0c0e]/94 p-2 shadow-[0_18px_40px_rgba(0,0,0,.28)] backdrop-blur-xl md:hidden">
        <a href={contactUrl} className="group flex min-h-12 items-center justify-center gap-5 rounded-[5px] bg-white px-5 text-xs font-semibold text-black transition-transform active:scale-[0.98]">Cotizar reparación <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
      </div>
    </main>
  );
}
