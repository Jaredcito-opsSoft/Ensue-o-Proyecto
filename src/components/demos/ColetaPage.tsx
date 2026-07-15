import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, Clock3, Leaf, MapPin, Menu, Plus, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const reservationUrl =
  "https://wa.me/529612345678?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20Coleta.";

const tastingMenu = [
  {
    name: "Trucha, pepino y cítricos",
    note: "Frescura · Equilibrio",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=86",
  },
  {
    name: "Lubina, beurre blanc y hierbas",
    note: "Profundidad · Mar",
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1000&q=86",
  },
  {
    name: "Res, betabel y cacao",
    note: "Bosque · Intensidad",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=86",
  },
  {
    name: "Higo, miel y mascarpone",
    note: "Dulzor · Textura",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=86",
  },
];

const ambience = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=84",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=84",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=84",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=84",
];

const serviceHours = [
  { day: "Martes a jueves", lunch: "13:30 - 16:00", dinner: "20:30 - 00:00" },
  { day: "Viernes y sábado", lunch: "13:30 - 16:00", dinner: "20:30 - 01:00" },
  { day: "Domingo", lunch: "13:30 - 16:30", dinner: "Sin servicio" },
  { day: "Lunes", lunch: "Cerrado", dinner: "Cerrado" },
];

function ColetaButton({ children, href, outline = false }: { children: ReactNode; href: string; outline?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-6 overflow-hidden border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-[transform,background-color,color,border-color,box-shadow] duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b79a5b] ${
        outline
          ? "border-white/50 bg-black/18 text-white backdrop-blur-md hover:border-[#c6a96c] hover:bg-white/10 hover:shadow-[0_14px_34px_rgba(0,0,0,.24)]"
          : "border-[#b79a5b] bg-[#b79a5b] text-[#171512] shadow-[0_10px_28px_rgba(183,154,91,.18)] hover:border-[#d4bd89] hover:bg-[#ceb77f] hover:shadow-[0_16px_36px_rgba(183,154,91,.3)]"
      }`}
    >
      {children} <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function ColetaPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] pb-20 text-[#25211c] md:pb-0">
      <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-[#0d0d0c] text-[#f3eee5] lg:min-h-[720px]">
        <Image
          src="https://images.unsplash.com/photo-1616669944447-d65d41a222bd?auto=format&fit=crop&w=1800&q=88"
          alt="Plato de autor de Coleta Cocina de Origen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-68"
        />
        <div className="absolute inset-0 bg-black/48" />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <nav className="flex min-h-24 items-center justify-between gap-6" aria-label="Navegación de Coleta">
            <a href="#inicio" className="flex flex-col text-center text-[#dfd2b8]">
              <span className="font-serif text-4xl leading-none">C</span>
              <span className="text-sm font-semibold uppercase tracking-[0.34em]">Coleta</span>
              <span className="mt-1 text-[8px] uppercase tracking-[0.38em] text-white/55">Cocina de origen</span>
            </a>
            <div className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/72 lg:flex">
              <a className="border-b border-[#b79a5b] pb-2 text-white" href="#inicio">Inicio</a>
              <a className="hover:text-white" href="#menu">Menú</a>
              <a className="hover:text-white" href="#experiencias">Experiencias</a>
              <a className="hover:text-white" href="#chef">El chef</a>
              <a className="hover:text-white" href="#reservas">Reservas</a>
              <a className="hover:text-white" href="#contacto">Contacto</a>
            </div>
            <a href={reservationUrl} className="group hidden min-h-12 items-center gap-5 border border-[#b79a5b] bg-[#b79a5b] px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#171512] shadow-[0_10px_28px_rgba(183,154,91,.16)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#ceb77f] hover:shadow-[0_16px_34px_rgba(183,154,91,.28)] active:translate-y-0 active:scale-[0.98] sm:inline-flex">Reservar mesa <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" /></a>
            <a href="#menu" className="grid h-12 w-12 place-items-center border border-white/35 text-white lg:hidden" aria-label="Ver el menú"><Menu size={20} /></a>
          </nav>

          <div className="flex min-h-[590px] items-center pb-16 pt-10 lg:min-h-[590px]">
            <div className="max-w-2xl">
              <h1 className="text-balance font-serif text-[4.1rem] leading-[0.91] sm:text-7xl lg:text-[6.2rem]">Esencia.<br />Técnica. Origen.</h1>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/76 sm:text-base">Cocina contemporánea que honra el producto, el territorio y el tiempo.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ColetaButton href={reservationUrl}>Reservar mesa</ColetaButton>
                <ColetaButton href="#menu" outline>Ver menú</ColetaButton>
              </div>
              <p className="mt-10 flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55"><span className="h-px w-8 bg-[#b79a5b]" /> Cocina de origen <span>·</span> Experiencia íntegra</p>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section id="menu" className="border-b border-[#2b261f]/12 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1160px]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746a5d]"><span className="h-px w-7 bg-[#b79a5b]" /> Nuestros platos</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Menú degustación</h2></div>
              <a href={reservationUrl} className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#61584d]">Ver menú completo <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tastingMenu.map((dish, index) => (
                <article key={dish.name} className="group border border-[#302a22]/12 bg-[#faf8f4] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(38,31,23,.11)]">
                  <div className="relative h-64 overflow-hidden"><Image src={dish.image} alt={dish.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" /></div>
                  <div className="flex items-start justify-between gap-4 p-4"><div><h3 className="font-serif text-xl">{dish.name}</h3><p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8b7e6d]">{dish.note}</p></div><span className="grid h-7 w-7 shrink-0 place-items-center border border-[#b79a5b]/45 text-[#917641] transition-[transform,background-color,color] duration-300 group-hover:rotate-90 group-hover:bg-[#b79a5b] group-hover:text-[#171512]"><Plus size={14} /><span className="sr-only">Ver plato {index + 1}</span></span></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="chef" className="border-b border-[#2b261f]/12">
          <div className="mx-auto grid max-w-[1160px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[430px] overflow-hidden"><Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=86" alt="Chef de Coleta en la cocina" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover grayscale-[.25]" /></div>
            <div className="flex items-center px-6 py-12 sm:px-12 lg:p-16"><div className="max-w-lg"><p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746a5d]">El chef <span className="h-px w-8 bg-[#b79a5b]" /></p><h2 className="mt-5 font-serif text-4xl leading-[0.98] sm:text-5xl">Una cocina que nace del respeto.</h2><p className="mt-6 text-sm leading-7 text-[#61594f]">Mateo Vargas presenta una visión personal de la cocina contemporánea, donde el producto local y la técnica se encuentran para emocionar.</p><a className="group mt-7 inline-flex items-center gap-4 border-b border-[#b79a5b]/60 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a6d34] transition-colors duration-300 hover:border-[#8a6d34] hover:text-[#5f481f]" href="#experiencias">Conoce su historia <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" /></a><p className="mt-12 font-serif text-3xl italic text-[#817464]">Mateo Vargas</p></div></div>
          </div>
        </section>
      </Reveal>

      <section id="reservas" className="border-b border-[#2b261f]/12 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-r-0 border-[#2b261f]/14 lg:border-r lg:pr-12"><p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746a5d]">Reservas <span className="h-px w-8 bg-[#b79a5b]" /></p><h2 className="mt-4 font-serif text-4xl">Tu mesa, a tu tiempo.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[#61594f]">Una experiencia íntima para quienes buscan cocina, territorio y conversación.</p><div className="mt-7"><ColetaButton href={reservationUrl}>Reservar mesa</ColetaButton></div><p className="mt-5 text-xs leading-5 text-[#61594f]">+52 961 234 5678<br />reservas@coleta.mx</p></div>
          <div>
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#746a5d]"><Clock3 size={15} /> Horarios</p>
            <div className="mt-6 border-y border-[#2b261f]/14 text-[#514a42]">
              <div className="hidden grid-cols-[1.15fr_.8fr_.8fr] gap-x-8 border-b border-[#2b261f]/14 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8a7d6c] sm:grid">
                <span>Día</span><span>Comida</span><span>Cena</span>
              </div>
              {serviceHours.map((service) => (
                <div key={service.day} className="grid gap-3 border-b border-[#2b261f]/10 py-4 last:border-b-0 sm:grid-cols-[1.15fr_.8fr_.8fr] sm:items-center sm:gap-x-8">
                  <span className="font-serif text-lg text-[#2f2922] sm:text-base">{service.day}</span>
                  <div className="grid grid-cols-2 gap-4 sm:contents">
                    <span className="text-sm tabular-nums"><span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.14em] text-[#9a8d7c] sm:hidden">Comida</span>{service.lunch}</span>
                    <span className="text-sm tabular-nums"><span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.14em] text-[#9a8d7c] sm:hidden">Cena</span>{service.dinner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencias" className="relative min-h-[430px] overflow-hidden bg-[#10100f] px-6 py-16 text-white sm:px-12">
        <Image src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=86" alt="Maridaje de vino en Coleta" fill sizes="100vw" className="object-cover opacity-48" />
        <div className="absolute inset-0 bg-black/42" />
        <div className="relative mx-auto flex min-h-[300px] max-w-[1160px] items-center"><div className="max-w-lg"><p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">Experiencias <span className="h-px w-8 bg-[#b79a5b]" /></p><h2 className="mt-5 font-serif text-4xl leading-none sm:text-5xl">Maridajes que elevan cada momento.</h2><p className="mt-5 text-sm leading-6 text-white/66">Vinos excepcionales y maridajes creados para acompañar cada plato y revelar nuevas capas.</p><a className="group mt-7 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d2b778] transition-colors duration-300 hover:text-[#f0d99f]" href={reservationUrl}>Ver experiencias <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" /></a></div></div>
      </section>

      <Reveal>
        <section id="ambiente" className="bg-[#171715] px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1260px]"><div className="flex items-end justify-between"><div><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">Ambiente</p><h2 className="mt-2 font-serif text-4xl">El espacio también cuenta.</h2></div><Leaf size={24} className="text-[#b79a5b]" /></div><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{ambience.map((image, index) => <div key={image} className={`relative h-64 overflow-hidden ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}><Image src={image} alt={`Ambiente ${index + 1} de Coleta`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover opacity-82 transition-[transform,opacity] duration-500 hover:scale-[1.03] hover:opacity-100" /></div>)}</div></div>
        </section>
      </Reveal>

      <section className="bg-[#0d0d0c] px-5 py-12 text-[#e8dfcf] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1160px]"><div className="grid gap-8 border-b border-white/12 pb-10 lg:grid-cols-[1fr_1.25fr]"><div className="flex items-start gap-5"><Quote size={30} className="mt-1 text-[#b79a5b]" /><p className="max-w-lg font-serif text-3xl italic leading-tight">Una mesa memorable empieza mucho antes del primer plato.</p></div><div className="grid gap-6 sm:grid-cols-2"><div><p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50"><MapPin size={14} /> Dónde estamos</p><p className="mt-4 text-sm leading-6 text-white/72">Centro histórico<br />San Cristóbal de Las Casas, Chiapas</p></div><div><p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50"><CalendarDays size={14} /> Reservas</p><a className="mt-4 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d2b778]" href={reservationUrl}>Reservar mesa <ArrowRight size={15} /></a></div></div></div>
          <footer id="contacto" className="grid gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_.8fr_.8fr_1fr]"><div><p className="font-serif text-4xl text-[#dfd2b8]">Coleta</p><p className="mt-2 text-[9px] uppercase tracking-[0.26em] text-white/42">Cocina de origen</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/42">Enlaces</p><div className="mt-4 grid gap-2 text-xs text-white/70"><a className="transition-colors hover:text-[#d2b778]" href="#menu">Menú</a><a className="transition-colors hover:text-[#d2b778]" href="#chef">El chef</a><a className="transition-colors hover:text-[#d2b778]" href="#reservas">Reservas</a></div></div><div><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/42">Contacto</p><div className="mt-4 grid gap-2 text-xs text-white/70"><a className="transition-colors hover:text-[#d2b778]" href="tel:+529612345678">+52 961 234 5678</a><a className="transition-colors hover:text-[#d2b778]" href="mailto:reservas@coleta.mx">reservas@coleta.mx</a></div></div><div><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/42">Horarios</p><p className="mt-4 text-xs leading-6 text-white/70">Martes a sábado<br />13:30 - 16:00 · 20:30 - cierre</p></div></footer>
        </div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-50 border border-[#b79a5b]/40 bg-[#11110f]/94 p-2 shadow-[0_16px_38px_rgba(0,0,0,.35)] backdrop-blur-xl md:hidden"><a href={reservationUrl} className="group flex min-h-12 items-center justify-center gap-5 bg-[#b79a5b] px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#171512] transition-[transform,background-color] duration-300 active:scale-[0.98]">Reservar mesa <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" /></a></div>
    </main>
  );
}
