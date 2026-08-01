import { ArrowRight, Check } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const packages = [
  {
    name: "Atria Web Esencial",
    label: "Una presencia profesional para comenzar",
    price: "$299 a $499 MXN al mes",
    implementation: "Implementación inicial según alcance",
    items: [
      "Landing profesional",
      "Presencia online inicial incluida",
      "Datos consistentes para búsqueda",
      "WhatsApp y canales de contacto",
      "Dominio el primer año y hosting",
      "Mantenimiento",
      "Hasta 15 microcambios o 90 minutos mensuales",
    ],
  },
  {
    name: "Atria Web Crecimiento",
    label: "Más contenido, integración y personalización",
    price: "$599 a $899 MXN al mes",
    implementation: "Implementación aproximada de $3,200 a $3,900 MXN",
    items: [
      "Landing avanzada o páginas internas",
      "Mayor personalización visual",
      "Presencia online ampliada",
      "Integraciones básicas",
      "Panel limitado cuando aplique",
      "Dominio, hosting y mantenimiento",
    ],
  },
  {
    name: "Atria Profesional",
    label: "Una solución particular para el proyecto",
    price: "Cotización según proyecto",
    implementation: "Diseño y desarrollo personalizado",
    items: [
      "Dirección visual propia",
      "Animaciones avanzadas",
      "Integraciones",
      "Paneles",
      "Funciones específicas",
      "Acompañamiento según alcance",
    ],
  },
];

export function PackagesSection() {
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero conocer los planes de Atria Web."
  );

  return (
    <SectionReveal>
      <section
        id="planes"
        className="bg-[var(--atria-surface-soft)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase text-[var(--atria-accent)]">
                Planes de Atria Web
              </p>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
                Empieza con lo necesario. Suma cuando tenga sentido.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">
              Cada plan integra el sitio y su presencia online. El alcance final se
              define después de entender el negocio, el contenido y los objetivos.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-black/10 bg-white">
            {packages.map((pack, index) => (
              <article
                key={pack.name}
                className={`grid gap-7 border-b border-black/10 p-6 last:border-b-0 sm:p-8 lg:grid-cols-[.8fr_.75fr_1.25fr_auto] lg:items-center ${
                  index === 1 ? "bg-[var(--atria-surface-warm)]" : ""
                }`}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase text-[var(--atria-accent)]">
                    {pack.label}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-medium sm:text-4xl">
                    {pack.name}
                  </h3>
                </div>
                <div>
                  <p className="font-bold">{pack.price}</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--atria-ink-soft)]">
                    {pack.implementation}
                  </p>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {pack.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-5 text-[var(--atria-ink-soft)]"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[var(--atria-accent)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref}
                  className="atria-float-action group inline-flex min-h-11 items-center justify-between gap-5 rounded-full border border-black/16 px-5 text-xs font-bold uppercase hover:border-[var(--atria-accent)] hover:bg-[var(--atria-accent)] hover:text-white"
                >
                  Cotizar
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-2 text-xs leading-5 text-[var(--atria-ink-soft)] sm:grid-cols-2">
            <p>Los precios son iniciales y dependen del alcance, contenido e integraciones.</p>
            <p className="sm:text-right">
              Ensueño Momentos es pago único. LocalPOS documenta sus planes en su propia página.
            </p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
