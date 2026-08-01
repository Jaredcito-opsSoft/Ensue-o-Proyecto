"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Compass,
  Gift,
  Heart,
  HeartHandshake,
  Hotel,
  Images,
  MapPin,
  MessageSquareHeart,
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
  {
    id: "parejas",
    name: "Parejas & Aniversarios",
    icon: HeartHandshake,
    badge: "Historias & Aniversarios",
    copy: "Un sitio web privado y pensado para tu pareja: la cronología de su historia, tiempo juntos, momentos significativos, mapa de recuerdos y su canción favorita.",
  },
  {
    id: "bodas",
    name: "Bodas",
    icon: Heart,
    badge: "Elegancia & Detalle",
    copy: "Experiencias digitales cuidadas para compartir el itinerario, ubicación, mesa de regalos y confirmación de asistencia del día de tu boda.",
  },
  {
    id: "xv",
    name: "XV Años",
    icon: Sparkles,
    badge: "Juventud & Estilo",
    copy: "Diseños estructurados para compartir la recepción, gala y detalles con tus invitados a través de WhatsApp o código QR.",
  },
  {
    id: "cumple",
    name: "Cumpleaños",
    icon: PartyPopper,
    badge: "Celebración",
    copy: "Invitaciones web dinámicas y ordenadas para celebraciones especiales con pase digital y mapa de llegada.",
  },
  {
    id: "graduacion",
    name: "Graduaciones",
    icon: ShieldCheck,
    badge: "Generación",
    copy: "Presenta la ceremonia de graduación, itinerario de la cena de gala y recuerdos de tu generación.",
  },
];

const coupleHighlights = [
  { icon: Clock3, label: "Tiempo juntos (Años, Meses, Días)" },
  { icon: MessageSquareHeart, label: "Mensaje o carta digital de aniversario" },
  { icon: Compass, label: "Mapa con lugares importantes (1ra cita, viajes)" },
  { icon: Music, label: "Canción especial / Playlist integrada" },
  { icon: Images, label: "Galería fotográfica por etapas" },
  { icon: Sparkles, label: "Detalle permanente para compartir" },
];

const detailedModules = [
  {
    icon: HeartHandshake,
    title: "Sitios para Parejas & Aniversarios",
    description:
      "Un espacio reservado para la historia de la pareja. Incluye tiempo juntos en vivo, carta o mensaje especial, lugares significativos y galería de recuerdos.",
  },
  {
    icon: CalendarDays,
    title: "Itinerario Interactivo",
    description:
      "Cronograma estructurado con horarios para la ceremonia, recepción, cena y baile. Sincronización a calendarios de Google y Apple en un toque.",
  },
  {
    icon: Clock3,
    title: "Contador de Tiempo / Regresivo",
    description:
      "Reloj en tiempo real que calcula los días y minutos exactos para la fecha del evento o los días compartidos en pareja.",
  },
  {
    icon: MapPin,
    title: "Ubicación & GPS Directo",
    description:
      "Botones directos para abrir la ubicación en Google Maps y Waze, o mapa con los sitios representativos de la pareja.",
  },
  {
    icon: UserCheck,
    title: "Confirmación de Asistencia (RSVP)",
    description:
      "Formulario claro donde los invitados confirman asistencia, número de pases y detalles de llegada vía WhatsApp.",
  },
  {
    icon: Images,
    title: "Galería & Álbum de Recuerdos",
    description:
      "Selección fotográfica previa al evento o línea del tiempo fotográfica con espacio para comentarios y recuerdos.",
  },
  {
    icon: Gift,
    title: "Mesa de Regalos & Datos Bancarios",
    description:
      "Enlaces directos a tiendas departamentales o datos de cuenta bancaria para obsequios en efectivo de forma discreta.",
  },
  {
    icon: Shirt,
    title: "Código de Vestimenta (Dress Code)",
    description:
      "Indicación clara del tipo de vestimenta sugerida con paleta de tonos para la celebración.",
  },
  {
    icon: Music,
    title: "Música & Canción Especial",
    description:
      "Reproduce la canción representativa de la pareja o permite a los invitados sugerir canciones para la lista de la fiesta.",
  },
  {
    icon: Hotel,
    title: "Hospedaje & Recomendaciones",
    description:
      "Sección informativa para invitados foráneos con lista de hoteles recomendados y referencias útiles de la ciudad.",
  },
];

export function EnsuenoEventosSection() {
  const [selectedEventType, setSelectedEventType] = useState("parejas");
  const activeEvent = eventTypes.find((e) => e.id === selectedEventType) || eventTypes[0];

  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    activeEvent.id === "parejas"
      ? "Hola, me interesa crear un sitio web para mi pareja con Ensueño."
      : `Hola, me interesa información para un sitio de ${activeEvent.name} con Ensueño.`
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
                <span className="block italic text-[#ef8b72]">un lugar propio.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-[#c8beb5]">
                Diseñamos experiencias digitales para parejas, bodas, XV años y celebraciones.
                Información organizada, elegante y fácil de compartir.
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
                  {activeEvent.id === "parejas"
                    ? "Sitio Web para tu Pareja"
                    : `Sitios & Experiencias para ${activeEvent.name}`}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#c8beb5]">{activeEvent.copy}</p>

                {activeEvent.id === "parejas" ? (
                  <div className="mt-8 border-t border-white/12 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--atria-gold)]">
                      Contenido incluido en el sitio de pareja
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-[#d9cec4]">
                      {coupleHighlights.map(({ icon: Icon, label }) => (
                        <span key={label} className="flex items-center gap-2">
                          <Icon size={14} className="shrink-0 text-[var(--atria-gold)]" />
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 border-t border-white/12 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--atria-gold)]">
                      Detalles del servicio
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#d9cec4]">
                      <span className="flex items-center gap-2">
                        <Sparkles size={14} className="text-[var(--atria-gold)]" /> Dominio propio
                      </span>
                      <span className="flex items-center gap-2">
                        <Sparkles size={14} className="text-[var(--atria-gold)]" /> RSVP directo
                      </span>
                      <span className="flex items-center gap-2">
                        <Sparkles size={14} className="text-[var(--atria-gold)]" /> Código QR
                      </span>
                      <span className="flex items-center gap-2">
                        <Sparkles size={14} className="text-[var(--atria-gold)]" /> Pago único
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={whatsappHref}
                className="atria-float-action group mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white transition-all hover:bg-white hover:text-[var(--atria-dark)]"
              >
                {activeEvent.id === "parejas"
                  ? "Crear sitio para mi pareja"
                  : `Diseñar sitio de ${activeEvent.name}`}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="relative min-h-[380px] bg-[#241c18] sm:min-h-[500px]">
              <Image
                src="/images/landing/ensueno-momentos-event.jpg"
                alt="Momentos especiales y celebraciones"
                fill
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-[#17110e]/90 p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-7 sm:right-7 sm:max-w-sm">
                <p className="font-serif text-2xl font-medium text-white">
                  {activeEvent.id === "parejas"
                    ? "Su historia compartida en un enlace."
                    : "La historia sigue siendo tuya."}
                </p>
                <p className="mt-2 text-xs leading-5 text-[#d9cec4]">
                  {activeEvent.id === "parejas"
                    ? "Un detalle permanente para celebrar aniversarios, fechas especiales o momentos juntos."
                    : "El diseño organiza los detalles con estructura y claridad."}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Feature Modules Grid */}
          <div className="mt-16">
            <div className="border-b border-white/12 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="font-serif text-3xl font-medium text-white sm:text-4xl">
                  Módulos disponibles
                </h3>
                <p className="mt-2 text-sm text-[#c8beb5]">
                  Cada proyecto se configura con los elementos necesarios para tu celebración o espacio de pareja.
                </p>
              </div>
              <span className="text-xs font-bold text-[var(--atria-gold)]">
                10 Módulos de Estructura
              </span>
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
