import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Gift,
  Images,
  MapPin,
  Shirt,
  UserCheck,
} from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const features = [
  { icon: CalendarDays, label: "Fecha e itinerario" },
  { icon: Clock3, label: "Cuenta regresiva" },
  { icon: MapPin, label: "Ubicación" },
  { icon: UserCheck, label: "Confirmación" },
  { icon: Images, label: "Galería" },
  { icon: Gift, label: "Mesa de regalos" },
  { icon: Shirt, label: "Código de vestimenta" },
];

export function EnsuenoEventosSection() {
  return (
    <SectionReveal>
      <section
        id="momentos"
        className="bg-[var(--atria-dark)] px-4 py-18 text-[#f8f3ec] sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-lg border border-white/12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-gold)]">
              Ensueño Momentos · Una línea de Atria
            </p>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Momentos que merecen
              <span className="block italic text-[#ef8b72]">un lugar propio.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#c8beb5]">
              Creamos experiencias digitales para bodas, cumpleaños, XV años,
              graduaciones, parejas, familias y celebraciones especiales. Toda la
              información vive en un espacio pensado para compartir.
            </p>

            <div className="mt-8 grid grid-cols-2 border-l border-t border-white/12">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="atria-feature-chip flex min-h-16 items-center gap-2 border-b border-r border-white/12 px-3 text-[11px] font-semibold"
                >
                  <Icon size={15} className="shrink-0 text-[var(--atria-gold)]" aria-hidden />
                  {label}
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="atria-float-action group mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-white/25 px-5 text-sm font-bold hover:bg-white hover:text-[var(--atria-dark)]"
            >
              Diseñar mi momento
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>

          <div className="relative min-h-[430px] bg-[#241c18] sm:min-h-[620px]">
            <Image
              src="/images/landing/ensueno-momentos-event.jpg"
              alt="Familiares y amigos reunidos alrededor de una mesa durante una celebración"
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/24" aria-hidden />
            <div className="absolute inset-x-5 bottom-5 border border-white/24 bg-[#17110e]/88 p-5 sm:inset-x-auto sm:bottom-7 sm:right-7 sm:max-w-xs">
              <p className="font-serif text-2xl font-medium">La historia sigue siendo tuya.</p>
              <p className="mt-2 text-xs leading-5 text-[#d9cec4]">
                El diseño organiza los detalles sin quitarle intimidad al momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
