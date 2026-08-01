"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Clock3,
  Gift,
  Heart,
  Hotel,
  Images,
  MapPin,
  Music,
  PartyPopper,
  ShieldCheck,
  Shirt,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const eventTypes = [
  { id: "bodas", name: "Bodas", icon: Heart, badge: "Romántico & Elegante", copy: "Experiencias digitales para hacer inolvidable el día de tu boda." },
  { id: "xv", name: "XV Años", icon: Sparkles, badge: "Moderno & Juvenil", copy: "Diseños vibrantes para compartir cada detalle con tus amigos y familiares." },
  { id: "cumple", name: "Cumpleaños", icon: PartyPopper, badge: "Celebración Única", copy: "Invitaciones y espacios dinámicos para fiestas de cualquier edad." },
  { id: "graduacion", name: "Graduaciones", icon: ShieldCheck, badge: "Logro Especial", copy: "Presenta la gala, itinerario y recuerdos de tu generación." },
];

const detailedModules = [
  {
    icon: CalendarDays,
    title: "Itinerario Interactivo",
    description:
      "Cronograma detallado con horas exactas para la misa, recepción, vals, cena y fiesta. Integración con 1-clic a calendarios de Google y Apple.",
  },
  {
    icon: Clock3,
    title: "Contador Regresivo en Vivo",
    description:
      "Temporizador animado en tiempo real que calcula días, horas y minutos exactos para el gran momento, generando expectación.",
  },
  {
    icon: MapPin,
    title: "GPS & Ubicación en 1-Clic",
    description:
      "Botones directos para abrir la ubicación en Google Maps y Waze para la ceremonia y el salón, evitando que nadie se pierda.",
  },
  {
    icon: UserCheck,
    title: "Confirmación de Asistencia (RSVP)",
    description:
      "Formulario intuitivo donde tus invitados confirman asistencia, número de acompañantes y restricciones alimenticias vía WhatsApp.",
  },
  {
    icon: Images,
    title: "Galería & Álbum de Recuerdos",
    description:
      "Sección especial con las mejores fotos de los festejados antes del evento y espacio con código QR para que los invitados suban sus fotos.",
  },
  {
    icon: Gift,
    title: "Mesa de Regalos & Cuenta Bancaria",
    description:
      "Enlaces directos a tiendas (Amazon, Liverpool, Palacio) o información de tarjeta bancaria para obsequios en efectivo de forma discreta.",
  },
  {
    icon: Shirt,
    title: "Código de Vestimenta (Dress Code)",
    description:
      "Indicación clara del tipo de vestimenta (Formal, Etiqueta, Guayabera, Casual) con paleta sugerida de colores para lucir espectaculares.",
  },
  {
    icon: Music,
    title: "Música & Sugerencia de Canciones",
    description:
      "Permite a tus invitados recomendar las canciones que no pueden faltar en la pista para compartir directamente con el DJ.",
  },
  {
    icon: Hotel,
    title: "Hospedaje & Recomendaciones",
    description:
      "Sección útil para invitados foráneos con lista de hoteles cercanos, tarifas preferenciales y sugerencias turísticas de la ciudad.",
  },
];

export function EnsuenoEventosSection() {
  const [selectedEventType, setSelectedEventType] = useState("bodas");
  const activeEvent = eventTypes.find((e) => e.id === selectedEventType) || eventTypes[0];

  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    `Hola, quiero diseñar una experiencia de Ensueño Momentos para un evento de tipo: ${activeEvent.name}.`
  );

  return (
    <SectionReveal>
      <section
        id="momentos"
        className="bg-[var(--atria-dark)] px-4 py-18 text-[#f8f3ec] sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1320px]">
          {/* Header */}
          <div className="grid gap-7 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div>
              <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-gold)]">
                Ensueño Momentos · Una línea de Atria
              </p>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
                Momentos especiales que merecen{" "}
                <span className="block italic text-[#ef8b72]">un lugar propio en internet.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-[#c8beb5]">
                Reemplaza la invitación de papel o la imagen borrosa por una experiencia web
                interactiva, elegante y fácil de compartir desde WhatsApp, QR o redes.
              </p>

              {/* Event Filter Selector */}
              <div className="mt-6 flex flex-wrap gap-2">
                {eventTypes.map(({ id, name, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedEventType(id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      selectedEventType === id
                        ? "bg-[var(--atria-gold)] text-[var(--atria-dark)] shadow-md"
                        : "border border-white/16 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon size={14} />
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Banner Feature Card */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/12 bg-[#17110e] lg:grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <span className="inline-block rounded-full bg-[var(--atria-gold)]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--atria-gold)]">
                  {activeEvent.badge}
                </span>
                <h3 className="mt-4 font-serif text-3xl font-medium text-white sm:text-4xl">
                  Invitaciones & Experiencias para {activeEvent.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#c8beb5]">{activeEvent.copy}</p>

                <div className="mt-8 border-t border-white/12 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--atria-gold)]">
                    ¿Qué incluye tu página de evento?
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#d9cec4]">
                    <span className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[var(--atria-gold)]" /> Dominio
                      propio
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[var(--atria-gold)]" /> RSVP
                      WhatsApp
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[var(--atria-gold)]" /> Código QR
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[var(--atria-gold)]" /> Pago único
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={whatsappHref}
                className="atria-float-action group mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white transition-all hover:bg-white hover:text-[var(--atria-dark)]"
              >
                Diseñar mi evento de {activeEvent.name}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="relative min-h-[380px] bg-[#241c18] sm:min-h-[500px]">
              <Image
                src="/images/landing/ensueno-momentos-event.jpg"
                alt="Familiares y amigos reunidos alrededor de una mesa durante una celebración"
                fill
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-[#17110e]/90 p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-7 sm:right-7 sm:max-w-xs">
                <p className="font-serif text-2xl font-medium text-white">
                  La historia sigue siendo tuya.
                </p>
                <p className="mt-2 text-xs leading-5 text-[#d9cec4]">
                  El diseño organiza todos los detalles sin quitarle emoción ni intimidad al momento.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Feature Modules Grid */}
          <div className="mt-16">
            <div className="border-b border-white/12 pb-6">
              <h3 className="font-serif text-3xl font-medium text-white sm:text-4xl">
                Módulos interactivos que incluye tu sitio de evento
              </h3>
              <p className="mt-2 text-sm text-[#c8beb5]">
                Cada módulo se configura según lo que necesite tu celebración.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {detailedModules.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="atria-feature-chip group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[var(--atria-gold)]/40 hover:bg-white/8"
                >
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--atria-gold)]/12 text-[var(--atria-gold)]">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-serif text-2xl font-medium text-white">{title}</h4>
                    <p className="mt-3 text-xs leading-6 text-[#c8beb5]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
