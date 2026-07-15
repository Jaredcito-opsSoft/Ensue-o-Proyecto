import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Heart,
  Leaf,
  Menu,
  Quote,
  Scissors,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const bookingUrl =
  "https://wa.me/13235550199?text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20Beauty%20LA.";

const services = [
  {
    name: "Faciales",
    description: "Tratamientos avanzados para una piel sana, luminosa y equilibrada.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=84",
    icon: Sparkles,
  },
  {
    name: "Cabello",
    description: "Color, corte y tratamientos personalizados para realzar tu esencia.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=84",
    icon: Scissors,
  },
  {
    name: "Manicure",
    description: "Uñas impecables con acabados de alto diseño y larga duración.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=84",
    icon: Sparkles,
  },
  {
    name: "Makeup",
    description: "Maquillaje profesional para cada ocasión, natural o atrevido.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=84",
    icon: Heart,
  },
  {
    name: "Rituales",
    description: "Experiencias de bienestar para renovar cuerpo, mente y espíritu.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=84",
    icon: Leaf,
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=82",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=82",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=82",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=82",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=82",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=82",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=82",
];

function BeautyButton({ children, href, light = false }: { children: ReactNode; href: string; light?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-6 border px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e1c19] ${
        light
          ? "border-[#1e1c19]/20 bg-white/24 text-[#1e1c19] hover:bg-white/60"
          : "border-[#1e1c19] bg-[#1e1c19] text-[#f7f2eb] hover:bg-[#332f2a]"
      }`}
    >
      {children} <ArrowRight size={16} />
    </a>
  );
}

export function BeautyLaPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] pb-20 text-[#1e1c19] md:pb-0">
      <header className="border-b border-[#1e1c19]/12 bg-[#f8f4ee]/92 px-5 backdrop-blur-lg sm:px-8 lg:px-12">
        <nav className="mx-auto flex min-h-20 max-w-[1320px] items-center justify-between gap-6" aria-label="Navegación de Beauty LA">
          <a href="#inicio" className="font-serif text-3xl leading-none sm:text-4xl">Beauty LA</a>
          <div className="hidden items-center gap-9 text-xs font-semibold uppercase tracking-[0.08em] lg:flex">
            <a className="hover:opacity-55" href="#servicios">Servicios</a>
            <a className="hover:opacity-55" href="#estudio">Estudio</a>
            <a className="hover:opacity-55" href="#galeria">Galería</a>
            <a className="hover:opacity-55" href="#resenas">Reseñas</a>
            <a className="hover:opacity-55" href="#contacto">Contacto</a>
          </div>
          <a href={bookingUrl} className="hidden min-h-12 items-center gap-6 bg-[#1e1c19] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex">
            Reservar cita <ArrowRight size={16} />
          </a>
          <a href="#servicios" className="grid h-12 w-12 place-items-center border border-[#1e1c19]/25 lg:hidden" aria-label="Ver servicios">
            <Menu size={20} />
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative border-b border-[#1e1c19]/12">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.84fr_1.16fr]">
          <div className="relative flex min-h-[580px] items-center px-6 py-14 sm:px-12 lg:min-h-[680px] lg:px-20 xl:px-28">
            <p className="absolute left-3 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3c3833]/70 xl:block">Beauty is an attitude</p>
            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#4d4740]"><span className="h-px w-7 bg-[#1e1c19]" /> Bienvenida a Beauty LA</p>
              <h1 className="mt-5 text-balance font-serif text-[3.7rem] leading-[0.91] sm:text-7xl lg:text-[5.6rem]">Belleza con carácter, calma con estilo.</h1>
              <p className="mt-7 max-w-md text-sm leading-6 text-[#514b45] sm:text-base sm:leading-7">Un estudio de belleza en Los Ángeles donde el diseño, la técnica y el bienestar se encuentran para realzar lo que te hace única.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BeautyButton href={bookingUrl}>Reservar cita</BeautyButton>
                <BeautyButton href="#estudio" light>Conoce el estudio</BeautyButton>
              </div>
            </div>
          </div>

          <div className="relative min-h-[540px] overflow-hidden lg:min-h-[680px]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1500&q=86"
              alt="Retrato editorial de una clienta de Beauty LA"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center sepia-[.16]"
            />
            <div className="absolute inset-0 bg-[#32281f]/12" />
            <div className="absolute bottom-5 right-5 grid w-[min(88%,270px)] gap-3 sm:bottom-8 sm:right-8">
              <div className="border border-white/45 bg-[#312b27]/58 p-5 text-white shadow-xl backdrop-blur-xl">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]"><Clock3 size={17} /> Horarios</p>
                <div className="mt-4 grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 text-xs text-white/86"><span>Lunes a viernes</span><span>10:00 - 19:00</span><span>Sábado</span><span>9:00 - 18:00</span><span>Domingo</span><span>Cerrado</span></div>
              </div>
              <div className="border border-white/45 bg-[#312b27]/58 p-5 text-white shadow-xl backdrop-blur-xl">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]"><Sparkles size={17} /> Consulta estética</p>
                <p className="mt-3 text-xs leading-5 text-white/82">Creamos un plan personalizado para tu piel, tu estilo y tus objetivos.</p>
                <a className="mt-4 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em]" href={bookingUrl}>Reservar consulta <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section id="servicios" className="border-b border-[#1e1c19]/12 bg-[#f8f4ee] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em]"><span className="h-px w-7 bg-[#1e1c19]" /> Nuestros servicios</p>
                <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">Arte. Técnica. Resultados.</h2>
              </div>
              <a href={bookingUrl} className="group inline-flex min-h-11 items-center gap-4 self-start border-b border-[#1e1c19]/30 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#1e1c19] sm:self-auto">Ver todos los servicios <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></a>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {services.map(({ name, description, image, icon: Icon }, index) => (
                <article key={name} className="group overflow-hidden border border-[#817568]/28 bg-[#fcfaf6] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#817568]/60 hover:shadow-[0_22px_44px_rgba(47,39,31,.12)]">
                  <div className="relative h-60 overflow-hidden sm:h-64">
                    <Image src={image} alt={`Servicio de ${name}`} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="relative flex min-h-[230px] flex-col px-5 pb-5 pt-10">
                    <span className="absolute -top-6 left-5 z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-[#fcfaf6] bg-[#292621] text-white shadow-[0_8px_18px_rgba(30,28,25,.18)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                      <Icon size={18} strokeWidth={1.7} aria-hidden />
                    </span>
                    <span className="absolute right-5 top-4 font-serif text-sm italic text-[#8a8076]">0{index + 1}</span>
                    <h3 className="font-serif text-2xl leading-none">{name}</h3>
                    <p className="mt-4 text-xs leading-5 text-[#5d5650]">{description}</p>
                    <a className="mt-auto inline-flex items-center justify-between border-t border-[#1e1c19]/12 pt-4 text-[10px] font-bold uppercase tracking-[0.12em]" href={bookingUrl}>Conocer servicio <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="estudio" className="border-b border-[#1e1c19]/12">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[430px] overflow-hidden"><Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1300&q=85" alt="Interior boutique de Beauty LA" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover sepia-[.24]" /><div className="absolute inset-x-0 bottom-0 bg-[#211f1c]/84 p-7 text-white"><p className="font-serif text-4xl">Beauty<br />LA</p></div></div>
            <div className="grid gap-8 px-6 py-12 sm:px-12 lg:grid-cols-[1fr_.82fr] lg:p-14">
              <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em]">Por qué Beauty LA</p><h2 className="mt-2 font-serif text-4xl leading-[1.02] sm:text-5xl">Un estudio boutique, una experiencia a tu medida.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-[#5a534d]">Combinamos técnicas de vanguardia con un trato personalizado en un ambiente íntimo, sereno y sofisticado.</p><div className="mt-9 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"><div><Heart size={22} /><h3 className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em]">Expertas</h3><p className="mt-2 text-xs leading-5 text-[#5a534d]">Formación constante y atención cuidadosa.</p></div><div><Leaf size={22} /><h3 className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em]">Productos premium</h3><p className="mt-2 text-xs leading-5 text-[#5a534d]">Selección curada de marcas responsables.</p></div><div><Sparkles size={22} /><h3 className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em]">Enfoque personal</h3><p className="mt-2 text-xs leading-5 text-[#5a534d]">Cada servicio está diseñado para ti.</p></div></div></div>
              <div className="grid content-start gap-3"><div className="border border-[#1e1c19]/15 bg-white/35 p-4"><div className="relative h-32"><Image src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=82" alt="Área de estilismo" fill sizes="320px" className="object-cover" /></div><p className="mt-4 text-xs font-bold uppercase tracking-[0.12em]">Tu tiempo, tu espacio</p><p className="mt-2 text-xs leading-5 text-[#5a534d]">Un ambiente privado y relajante.</p></div><div className="bg-[#24211d] p-5 text-white"><p className="text-xs font-bold uppercase tracking-[0.12em]">Belleza consciente</p><p className="mt-3 text-xs leading-5 text-white/72">Prácticas responsables y productos seleccionados.</p></div></div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="galeria" className="border-b border-[#1e1c19]/12 px-5 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1320px]"><div className="flex items-end justify-between gap-5"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em]">Trabajos destacados</p><h2 className="mt-1 font-serif text-4xl sm:text-5xl">Inspiración real.</h2></div><a href={bookingUrl} className="hidden items-center gap-4 text-xs font-bold uppercase tracking-[0.14em] sm:inline-flex">Ver galería completa <ArrowRight size={16} /></a></div><div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">{gallery.map((image, index) => <div key={image} className={`relative overflow-hidden ${index === 0 ? "col-span-2 sm:col-span-1" : ""} h-44 sm:h-52`}><Image src={image} alt={`Trabajo destacado ${index + 1} de Beauty LA`} fill sizes="(min-width: 1024px) 14vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-[1.04]" /></div>)}</div></div>
        </section>
      </Reveal>

      <section id="resenas" className="relative overflow-hidden bg-[#24211e] px-6 py-14 text-white sm:px-12">
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-35"><Image src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=82" alt="Clienta de Beauty LA" fill sizes="33vw" className="object-cover grayscale" /></div>
        <div className="relative mx-auto grid max-w-5xl gap-8 sm:grid-cols-[auto_1fr_auto] sm:items-center"><Quote size={38} className="text-white/55" /><blockquote className="max-w-2xl font-serif text-3xl italic leading-tight sm:text-4xl">No es solo cómo te ves al salir; es cómo te sientes contigo misma.</blockquote><div className="text-xs uppercase tracking-[0.16em]"><strong>Valeria M.</strong><br /><span className="text-white/55">Clienta frecuente</span></div></div>
      </section>

      <section id="contacto" className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]"><div className="flex flex-col gap-6 border-b border-[#1e1c19]/15 pb-8 sm:flex-row sm:items-center sm:justify-between"><p className="flex items-center gap-4 font-serif text-3xl"><CalendarDays size={26} /> Tu próxima versión empieza hoy.</p><BeautyButton href={bookingUrl}>Reservar mi cita</BeautyButton></div><footer className="grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.7fr_1fr]"><div><p className="font-serif text-3xl">Beauty LA</p><p className="mt-3 max-w-xs text-xs leading-5 text-[#5a534d]">Estudio de belleza boutique en Los Ángeles. Belleza con carácter, calma con estilo.</p><a className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.14em]" href="https://instagram.com" aria-label="Instagram de Beauty LA">Instagram</a></div><div><p className="text-[10px] font-bold uppercase tracking-[0.14em]">Navegación</p><div className="mt-4 grid gap-2 text-xs"><a href="#servicios">Servicios</a><a href="#estudio">Estudio</a><a href="#galeria">Galería</a><a href="#resenas">Reseñas</a></div></div><div><p className="text-[10px] font-bold uppercase tracking-[0.14em]">Servicios</p><div className="mt-4 grid gap-2 text-xs"><span>Faciales</span><span>Cabello</span><span>Manicure</span><span>Makeup</span></div></div><div><p className="text-[10px] font-bold uppercase tracking-[0.14em]">Contacto</p><div className="mt-4 grid gap-2 text-xs text-[#5a534d]"><span>8400 Melrose Ave.</span><span>Los Ángeles, CA 90069</span><a href="tel:+13235550199">(323) 555-0199</a><a href="mailto:hola@beautyla.com">hola@beautyla.com</a></div></div></footer></div>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-50 flex items-center gap-3 border border-[#1e1c19]/15 bg-[#f8f4ee]/94 p-2 shadow-[0_16px_36px_rgba(29,25,21,.18)] backdrop-blur-xl md:hidden"><a className="flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#1e1c19] px-4 text-xs font-bold uppercase tracking-[0.12em] text-white" href={bookingUrl}>Reservar cita <ArrowRight size={15} /></a></div>
    </main>
  );
}
