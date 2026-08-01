"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Globe,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const packages = [
  {
    id: "esencial",
    name: "Atria Web Esencial",
    badge: "Para iniciar bien",
    tagline: "Presencia digital limpia y profesional para pequeños negocios",
    price: "$299 - $499",
    period: "MXN / mes",
    implementation: "Implementación inicial accesible según alcance",
    deliveryTime: "3 a 5 días hábiles",
    highlight: false,
    whatsappMsg: "Hola, me interesa solicitar información sobre el plan Atria Web Esencial.",
    features: [
      "Landing page 100% personalizada",
      "Experiencia mobile-first optimizada",
      "Dominio (.com o .mx) incluido 1er año",
      "Hosting rápido y certificado SSL",
      "Botón directo a WhatsApp y Mapa",
      "Optimización SEO local inicial",
      "Mantenimiento continuo y soporte",
      "Hasta 15 microcambios mensuales",
    ],
  },
  {
    id: "crecimiento",
    name: "Atria Web Crecimiento",
    badge: "Más Popular",
    tagline: "Sitio multipágina o catálogo para vender y posicionar mejor",
    price: "$599 - $899",
    period: "MXN / mes",
    implementation: "Implementación inicial: $3,200 - $3,900 MXN",
    deliveryTime: "5 a 8 días hábiles",
    highlight: true,
    whatsappMsg: "Hola, me interesa cotizar el plan Atria Web Crecimiento.",
    features: [
      "Sitio multipágina o landing avanzada",
      "Diseño visual de alta identidad",
      "Catálogo de productos o servicios",
      "Presencia online y SEO avanzado",
      "Integración de formularios e integraciones",
      "Panel de administración básico (si aplica)",
      "Dominio, hosting y seguridad empresarial",
      "Mantenimiento y soporte prioritario",
    ],
  },
  {
    id: "profesional",
    name: "Atria Profesional",
    badge: "Solución A Medida",
    tagline: "Experiencias exclusivas, paneles e integraciones especiales",
    price: "A medida",
    period: "Cotización por proyecto",
    implementation: "Diseño y arquitectura personalizada",
    deliveryTime: "Según alcance del proyecto",
    highlight: false,
    whatsappMsg: "Hola, quiero cotizar un proyecto especial personalizado con Atria.",
    features: [
      "Dirección visual y diseño único",
      "Animaciones avanzadas e interactivas",
      "Integración con APIs o sistemas externos",
      "Paneles administrativos a medida",
      "Optimización de rendimiento extrema",
      "Estrategia de conversión personalizada",
      "Acompañamiento técnico directo",
      "Mantenimiento y escalabilidad garantizada",
    ],
  },
];

const includedInAll = [
  { icon: ShieldCheck, title: "SSL y Seguridad", desc: "Conexión cifrada HTTPS para generar máxima confianza." },
  { icon: Globe, title: "Dominio & Hosting", desc: "Infraestructura rápida sin configuraciones complejas para ti." },
  { icon: Clock, title: "Respuesta Rápida", desc: "Entrega guiada y comunicación fluida en cada avance." },
  { icon: Zap, title: "Velocidad Extrema", desc: "Páginas optimizadas que cargan al instante en celulares." },
];

export function PackagesSection() {
  const [activeTab, setActiveTab] = useState<"cards" | "features">("cards");

  return (
    <SectionReveal>
      <section
        id="planes"
        className="bg-[var(--atria-surface-soft)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1320px]">
          {/* Section Header */}
          <div className="grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                Planes y Soluciones Atria Web
              </p>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
                Empieza con lo necesario. Suma cuando tu negocio crezca.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)]">
                Cada plan integra el diseño, la infraestructura digital y el mantenimiento.
                Sin sorpresas ni cobros ocultos: sabrás exactamente qué incluye tu proyecto.
              </p>
              {/* Tab Selector */}
              <div className="mt-6 flex w-fit rounded-full border border-black/12 bg-white/80 p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveTab("cards")}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    activeTab === "cards"
                      ? "bg-[var(--atria-ink)] text-white shadow-sm"
                      : "text-[var(--atria-ink-soft)] hover:text-[var(--atria-ink)]"
                  }`}
                >
                  Vista de Planes
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("features")}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    activeTab === "features"
                      ? "bg-[var(--atria-ink)] text-white shadow-sm"
                      : "text-[var(--atria-ink-soft)] hover:text-[var(--atria-ink)]"
                  }`}
                >
                  ¿Qué incluye siempre?
                </button>
              </div>
            </div>
          </div>

          {/* Cards View */}
          {activeTab === "cards" && (
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {packages.map((pack) => {
                const whatsappHref = createWhatsAppLink(
                  appConfig.whatsappSalesNumber,
                  pack.whatsappMsg
                );

                return (
                  <article
                    key={pack.id}
                    className={`atria-package-card group relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-all duration-300 ${
                      pack.highlight
                        ? "atria-package-featured border-[var(--atria-accent)] bg-white shadow-[0_20px_50px_rgba(239,90,47,0.12)] lg:-translate-y-2"
                        : "border-black/10 bg-white hover:border-black/20 hover:shadow-xl"
                    }`}
                  >
                    {pack.highlight && (
                      <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-[var(--atria-accent)] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        <Sparkles size={12} /> {pack.badge}
                      </span>
                    )}

                    <div>
                      {!pack.highlight && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--atria-accent)]">
                          {pack.badge}
                        </span>
                      )}
                      <h3 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl text-[var(--atria-ink)]">
                        {pack.name}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-[var(--atria-ink-soft)] min-h-[40px]">
                        {pack.tagline}
                      </p>

                      <div className="my-6 border-y border-black/8 py-5">
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-4xl font-semibold text-[var(--atria-ink)] sm:text-5xl">
                            {pack.price}
                          </span>
                          <span className="text-xs font-bold text-[var(--atria-ink-soft)]">
                            {pack.period}
                          </span>
                        </div>
                        <p className="mt-2 text-xs font-medium text-[var(--atria-muted)]">
                          {pack.implementation}
                        </p>
                      </div>

                      <div className="mb-4 flex items-center gap-2 text-xs font-bold text-[var(--atria-ink)]">
                        <Clock size={14} className="text-[var(--atria-accent)]" />
                        <span>Entrega: {pack.deliveryTime}</span>
                      </div>

                      <ul className="grid gap-2.5">
                        {pack.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-xs leading-5 text-[var(--atria-ink-soft)]"
                          >
                            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[var(--atria-accent-soft)] text-[var(--atria-accent)]">
                              <Check size={10} strokeWidth={3} />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={whatsappHref}
                      className={`atria-float-action group/btn mt-8 flex min-h-12 w-full items-center justify-between rounded-full px-6 text-xs font-bold uppercase transition-all ${
                        pack.highlight
                          ? "bg-[var(--atria-accent)] text-white hover:bg-[var(--atria-accent-hover)] shadow-md"
                          : "border border-black/16 bg-[var(--atria-ink)] text-white hover:bg-[var(--atria-accent)]"
                      }`}
                    >
                      Cotizar este plan
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </a>
                  </article>
                );
              })}
            </div>
          )}

          {/* Included Features Tab */}
          {activeTab === "features" && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {includedInAll.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-black/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[var(--atria-accent)] hover:shadow-lg"
                >
                  <span className="atria-icon-wrapper mb-5">
                    <Icon size={22} className="text-[var(--atria-accent)]" />
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[var(--atria-ink)]">
                    {title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[var(--atria-ink-soft)]">{desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Guarantees & Notes */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <HelpCircle size={20} className="mt-1 shrink-0 text-[var(--atria-accent)]" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-[var(--atria-ink)]">
                    Sin sorpresas
                  </h4>
                  <p className="mt-1 text-xs text-[var(--atria-ink-soft)]">
                    Definimos el alcance exacto antes de iniciar. Todo queda por escrito.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="mt-1 shrink-0 text-[var(--atria-accent)]" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-[var(--atria-ink)]">
                    Tu dominio es tuyo
                  </h4>
                  <p className="mt-1 text-xs text-[var(--atria-ink-soft)]">
                    Tu marca conserva la propiedad absoluta de su dominio e información.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="mt-1 shrink-0 text-[var(--atria-accent)]" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-[var(--atria-ink)]">
                    Ensueño & LocalPOS
                  </h4>
                  <p className="mt-1 text-xs text-[var(--atria-ink-soft)]">
                    Ensueño Momentos es pago único. LocalPOS tiene sus propios planes independientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
