import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

const packages = [
  {
    name: "Básico",
    text: "Para aparecer profesional y compartir información esencial.",
    label: "Ideal para empezar",
    items: ["Mini página", "WhatsApp", "Ubicación", "Horarios", "QR"],
  },
  {
    name: "Catálogo",
    text: "Para negocios que necesitan mostrar productos, servicios o menú.",
    label: "Cotizacion inicial",
    items: ["Todo lo del básico", "Productos o servicios", "Precios", "Fotos", "Categorías"],
  },
  {
    name: "Plus",
    text: "Para ordenar tambien sus canales digitales principales.",
    label: "Desde precio piloto",
    items: ["Todo lo anterior", "WhatsApp Business", "Google Maps", "Capacitacion breve", "Cambios limitados"],
  },
];

export function PackagesSection() {
  return (
    <Reveal>
      <section id="paquetes" className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-coral)]">
            Paquetes piloto
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[0.98] sm:text-6xl">
            Alcance claro para vender sin prometer de mas.
          </h2>
          <AnimatedCards className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((pack, index) => (
              <article data-card key={pack.name} className={`relative rounded-[24px] border p-7 shadow-[var(--shadow-card)] backdrop-blur-xl ${index === 1 ? "border-[#ffb2cd]/65 bg-[#6b4ab2]/75" : "border-[var(--pde-border)] bg-[#1b347f]/54"}`}>
                {index === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--pde-accent)] px-4 py-1 text-xs font-bold text-[#2d124d]">MAS ELEGIDO</span>}
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--pde-coral)]">
                  {pack.label}
                </p>
                <h3 className="mt-4 text-3xl font-semibold">{pack.name}</h3>
                <p className="mt-4 min-h-14 leading-7 text-[var(--pde-muted)]">{pack.text}</p>
                <ul className="mt-7 grid gap-3">
                  {pack.items.map((item) => (
                    <li className="flex items-center gap-3 font-medium" key={item}>
                      <Check size={16} className="text-[var(--pde-coral)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="#contacto" variant={index === 1 ? "primary" : "secondary"} className="mt-8 w-full">Elegir este plan <ArrowRight size={16} /></ButtonLink>
              </article>
            ))}
          </AnimatedCards>
        </div>
      </section>
    </Reveal>
  );
}
