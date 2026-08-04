import Image from "next/image";
import { ArrowUpRight, CalendarDays, Check, Images, MapPin, MessageSquareText } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const moments = [
  {
    number: "01",
    label: "Antes",
    title: "Invitar y orientar.",
    copy: "La historia, la fecha y la información importante viven en un lugar fácil de compartir.",
    details: ["Invitación", "Fecha", "Ubicación", "Confirmación"],
    icon: CalendarDays,
  },
  {
    number: "02",
    label: "Durante",
    title: "Acompañar el momento.",
    copy: "Los invitados consultan itinerario, indicaciones, mensajes y detalles sin perderse entre conversaciones.",
    details: ["Itinerario", "Mapas", "Mensajes", "Detalles"],
    icon: MapPin,
  },
  {
    number: "03",
    label: "Después",
    title: "Guardar lo vivido.",
    copy: "La experiencia puede permanecer como archivo de fotografías, recuerdos y agradecimientos.",
    details: ["Galería", "Recuerdos", "Agradecimientos", "Vigencia"],
    icon: Images,
  },
] as const;

const eventTypes = ["Parejas", "Bodas", "Cumpleaños", "XV años", "Graduaciones", "Celebraciones especiales"];

export function EnsuenoEventosSection() {
  const whatsappHref = createWhatsAppLink(appConfig.whatsappSalesNumber, "Hola, conocí Ensueño Momentos desde Atria. Estoy preparando un evento y quiero crear una experiencia digital.");

  return (
    <SectionReveal>
      <section id="momentos" className="scroll-mt-24 bg-[var(--atria-dark)] px-4 py-18 text-[#f8f3ec] sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase text-[var(--atria-gold)]">Ensueño Momentos · Una línea de Atria</p>
              <h2 className="mt-4 max-w-4xl font-serif text-5xl font-medium leading-[.92] sm:text-6xl lg:text-7xl">Un lugar digital antes, durante y después de celebrar.</h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-7 text-[#c8beb5]">Experiencias digitales para comunicar cada detalle y conservar la memoria de bodas, cumpleaños, aniversarios y otros momentos importantes.</p>
              <a href={whatsappHref} className="group mt-7 inline-flex min-h-12 items-center gap-4 border-b border-white/25 pb-2 text-sm font-bold text-white hover:border-[var(--atria-gold)]">Contar mi celebración <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden /></a>
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden border border-white/14 lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative min-h-[440px] bg-[#261a16] sm:min-h-[650px]">
              <Image src="/images/landing/ensueno-momentos-event.jpg" alt="Celebración compartida alrededor de una mesa" fill sizes="(max-width: 1023px) 100vw, 42vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,10,8,.86),transparent_64%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <MessageSquareText size={21} className="text-[var(--atria-gold)]" aria-hidden />
                <p className="mt-5 font-serif text-3xl font-medium sm:text-4xl">No es una invitación aislada. Es el lugar al que todos pueden volver.</p>
                <ul className="mt-6 flex flex-wrap gap-2">{eventTypes.map((type) => <li key={type} className="border border-white/20 px-3 py-2 text-[10px] font-semibold uppercase text-white/68">{type}</li>)}</ul>
              </div>
            </div>

            <div className="grid lg:grid-rows-3">
              {moments.map(({ number, label, title, copy, details, icon: Icon }) => (
                <article key={label} className="group grid gap-6 border-b border-white/14 p-7 last:border-b-0 sm:grid-cols-[52px_1fr] sm:p-9">
                  <div><span className="grid h-12 w-12 place-items-center rounded-full border border-white/18 text-[var(--atria-gold)] transition-transform group-hover:-translate-y-1"><Icon size={18} aria-hidden /></span><span className="mt-4 block font-mono text-[10px] text-white/35">{number}</span></div>
                  <div><p className="text-[10px] font-bold uppercase text-[var(--atria-gold)]">{label}</p><h3 className="mt-2 font-serif text-3xl font-medium sm:text-4xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-white/65">{copy}</p><ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-semibold uppercase text-white/48">{details.map((detail) => <li key={detail} className="inline-flex items-center gap-2"><Check size={11} className="text-[var(--atria-gold)]" aria-hidden />{detail}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-white/48">Cada experiencia se define por alcance, dominio y vigencia. No utilizamos paquetes rígidos ni precios automáticos.</p>
        </div>
      </section>
    </SectionReveal>
  );
}
