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
    name: "Sitio para tu Pareja",
    icon: HeartHandshake,
    badge: "Regalo Romántico & Exclusivo",
    copy: "Sorprende a tu pareja con un sitio web privado y romántico: su historia de amor, contador de tiempo juntos, fotos inolvidables, lugares especiales y su canción favorita.",
    isHighlight: true,
  },
  {
    id: "bodas",
    name: "Bodas",
    icon: Heart,
    badge: "Romántico & Elegante",
    copy: "Experiencias digitales inolvidables con itinerario, mapa, mesa de regalos y confirmación de asistencia en 1-clic.",
    isHighlight: false,
  },
  {
    id: "xv",
    name: "XV Años",
    icon: Sparkles,
    badge: "Moderno & Juvenil",
    copy: "Diseños espectaculares para compartir cada detalle de tus 15 años con tus amigos y familiares desde WhatsApp o QR.",
    isHighlight: false,
  },
  {
    id: "cumple",
    name: "Cumpleaños",
    icon: PartyPopper,
    badge: "Celebración Única",
    copy: "Invitaciones web dinámicas y memorables para fiestas de cualquier edad con pase digital y ubicación.",
    isHighlight: false,
  },
  {
    id: "graduacion",
    name: "Graduaciones",
    icon: ShieldCheck,
    badge: "Gala & Generación",
    copy: "Presenta la ceremonia de graduación, itinerario de la cena de gala y recuerdos de tu generación.",
    isHighlight: false,
  },
];

const coupleHighlights = [
  { icon: Clock3, label: "Tiempo juntos en vivo (Años, Meses, Días)" },
  { icon: MessageSquareHeart, label: "Carta de amor digital interactiva" },
  { icon: Compass, label: "Mapa 'Nuestros Lugares' (1ra cita, viajes)" },
  { icon: Music, label: "Su canción especial / Spotify integrado" },
  { icon: Images, label: "Línea del tiempo fotográfica por etapas" },
  { icon: Sparkles, label: "Ideal para Aniversarios, Noviazgos & Sorpresas" },
];

const detailedModules = [
  {
    icon: HeartHandshake,
    title: "Sitio para Parejas & Aniversarios",
    description:
      "Un espacio íntimo y romántico creado exclusivamente para ustedes dos. Incluye contador de tiempo juntos, carta digital, lugares especiales y sus mejores fotografías.",
    category: "pareja",
  },
  {
    icon: CalendarDays,
    title: "Itinerario Interactivo de Evento",
    description:
      "Cronograma detallado con horas exactas para la misa, recepción, vals, cena y fiesta. Sincronización a calendarios de Google y Apple en 1-clic.",
    category: "evento",
  },
  {
    icon: Clock3,
    title: "Contador Regresivo o de Historia",
    description:
      "Temporizador animado en tiempo real que calcula días y minutos exactos para el evento o cuántos días llevan construyendo su historia juntos.",
    category: "ambos",
  },
  {
    icon: MapPin,
    title: "GPS & Ubicación / Mapa de Lugares",
    description:
      "Navegación 1-clic a Google Maps y Waze para eventos o mapa interactivo con los lugares más significativos de la pareja (1ra cita, propuesta, viajes).",
    category: "ambos",
  },
  {
    icon: UserCheck,
    title: "Confirmación de Asistencia (RSVP)",
    description:
      "Formulario intuitivo donde tus invitados confirman asistencia, número de acompañantes y restricciones alimenticias vía WhatsApp.",
    category: "evento",
  },
  {
    icon: Images,
    title: "Galería & Álbum de Recuerdos",
    description:
      "Sección especial con las mejores fotos antes del evento o cronología romántica de la pareja con espacio para comentarios y recuerdos.",
    category: "ambos",
  },
  {
    icon: Gift,
    title: "Mesa de Regalos & Cuenta Bancaria",
    description:
      "Enlaces directos a tiendas (Amazon, Liverpool, Palacio) o información de tarjeta bancaria para obsequios en efectivo de forma discreta.",
    category: "evento",
  },
  {
    icon: Shirt,
    title: "Código de Vestimenta (Dress Code)",
    description:
      "Indicación clara del tipo de vestimenta (Formal, Etiqueta, Guayabera, Casual) con paleta sugerida de colores para lucir espectaculares.",
    category: "evento",
  },
  {
    icon: Music,
    title: "Música & Sugerencia de Canciones",
    description:
      "Reproduce la canción especial de la pareja de fondo o permite a los invitados recomendar canciones para que el DJ las ponga en la fiesta.",
    category: "ambos",
  },
  {
    icon: Hotel,
    title: "Hospedaje & Recomendaciones",
    description:
      "Sección útil para invitados foráneos con lista de hoteles cercanos, tarifas preferenciales y sugerencias turísticas de la ciudad.",
    category: "evento",
  },
];

export function EnsuenoEventosSection() {
  const [selectedEventType, setSelectedEventType] = useState("parejas");
  const activeEvent = eventTypes.find((e) => e.id === selectedEventType) || eventTypes[0];

  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    activeEvent.id === "parejas"
      ? "Hola, quiero regalarle un sitio web exclusivo y romántico a mi pareja con Ensueño."
      : `Hola, quiero diseñar una experiencia de Ensueño Momentos para un evento de tipo: ${activeEvent.name}.`
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
              <div className="flex items-center gap-2">
                <span className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-gold)]">
                  Ensueño Momentos & Parejas
                </span>
                <span className="rounded-full bg-[#ef8b72]/20 px-3 py-0.5 text-[10px] font-bold text-[#ef8b72]">
                  ¡Nuevo! Páginas para Parejas
                </span>
              </div>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
                Espacios únicos para tu pareja{" "}
                <span className="block italic text-[#ef8b72]">y tus momentos especiales.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-[#c8beb5]">
                Crea un sitio web romántico como regalo para tu pareja, o una invitación
                interactiva para tu boda, XV años o celebración. Un espacio pensado para compartir.
              </p>

              {/* Event & Couple Filter Selector */}
              <div className="mt-6 flex flex-wrap gap-2">
                {eventTypes.map(({ id, name, icon: Icon, isHighlight }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedEventType(id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      selectedEventType === id
                        ? isHighlight
                          ? "bg-gradient-to-r from-[#ef8b72] to-[var(--atria-gold)] text-black shadow-lg scale-[1.03]"
                          : "bg-[var(--atria-gold)] text-[var(--atria-dark)] shadow-md"
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

          {/* Featured Dynamic Banner */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/12 bg-[#17110e] lg:grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <span className="inline-block rounded-full bg-[var(--atria-gold)]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--atria-gold)]">
                  {activeEvent.badge}
                </span>
                <h3 className="mt-4 font-serif text-3xl font-medium text-white sm:text-4xl">
                  {activeEvent.id === "parejas"
                    ? "Una Página Web Inolvidable para tu Pareja"
                    : `Invitaciones & Experiencias para ${activeEvent.name}`}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#c8beb5]">{activeEvent.copy}</p>

                {/* Specific Highlight List for Couple vs Event */}
                {activeEvent.id === "parejas" ? (
                  <div className="mt-8 border-t border-white/12 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#ef8b72]">
                      ¿Qué incluye la página de tu pareja?
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-[#d9cec4]">
                      {coupleHighlights.map(({ icon: Icon, label }) => (
                        <span key={label} className="flex items-center gap-2">
                          <Icon size={14} className="shrink-0 text-[#ef8b72]" />
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 border-t border-white/12 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--atria-gold)]">
                      Ventajas clave de Ensueño Momentos
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#d9cec4]">
                      <span className="flex items-center gap-2">
                        <Sparkles size={14} className="text-[var(--atria-gold)]" /> Dominio propio
                      </span>
                      <span className="flex items-center gap-2">
                        <Sparkles size={14} className="text-[var(--atria-gold)]" /> RSVP WhatsApp
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
                className="atria-float-action group mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-white/25 bg-gradient-to-r from-[#ef8b72] to-[var(--atria-gold)] px-6 text-sm font-bold text-black transition-all hover:scale-[1.02] shadow-lg"
              >
                {activeEvent.id === "parejas"
                  ? "Regalar una página a mi pareja"
                  : `Diseñar mi evento de ${activeEvent.name}`}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="relative min-h-[380px] bg-[#241c18] sm:min-h-[500px]">
              <Image
                src="/images/landing/ensueno-momentos-event.jpg"
                alt="Momentos especiales y celebraciones en pareja"
                fill
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-[#17110e]/90 p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-7 sm:right-7 sm:max-w-sm">
                <p className="font-serif text-2xl font-medium text-white">
                  {activeEvent.id === "parejas"
                    ? "Tu historia de amor en un enlace."
                    : "La historia sigue siendo tuya."}
                </p>
                <p className="mt-2 text-xs leading-5 text-[#d9cec4]">
                  {activeEvent.id === "parejas"
                    ? "Sorprende a tu pareja en su aniversario, cumpleaños o fecha especial con un detalle digital permanente."
                    : "El diseño organiza todos los detalles sin quitarle emoción ni intimidad al momento."}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Feature Modules Grid */}
          <div className="mt-16">
            <div className="border-b border-white/12 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h3 className="font-serif text-3xl font-medium text-white sm:text-4xl">
                  Módulos y funciones que puedes incluir
                </h3>
                <p className="mt-2 text-sm text-[#c8beb5]">
                  Combina módulos para eventos o para la página de tu pareja.
                </p>
              </div>
              <span className="text-xs font-bold text-[var(--atria-gold)]">
                10 Módulos Disponibles · Configuración a Medida
              </span>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {detailedModules.map(({ icon: Icon, title, description, category }) => (
                <div
                  key={title}
                  className={`atria-feature-chip group flex flex-col justify-between rounded-xl border p-6 transition-all ${
                    category === "pareja"
                      ? "border-[#ef8b72]/40 bg-[#ef8b72]/5 hover:bg-[#ef8b72]/10"
                      : "border-white/10 bg-white/5 hover:border-[var(--atria-gold)]/40 hover:bg-white/8"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                          category === "pareja"
                            ? "bg-[#ef8b72]/20 text-[#ef8b72]"
                            : "bg-[var(--atria-gold)]/12 text-[var(--atria-gold)]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      {category === "pareja" && (
                        <span className="rounded-full bg-[#ef8b72]/20 px-3 py-1 text-[10px] font-bold text-[#ef8b72]">
                          Especial Parejas
                        </span>
                      )}
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
