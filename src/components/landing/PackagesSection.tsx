import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

const packages = [
  {
    name: "Basico",
    text: "Para aparecer profesional y compartir informacion esencial.",
    label: "Ideal para empezar",
    items: ["Mini pagina", "WhatsApp", "Ubicacion", "Horarios", "QR"],
  },
  {
    name: "Catalogo",
    text: "Para negocios que necesitan mostrar productos, servicios o menu.",
    label: "Cotizacion inicial",
    items: ["Todo lo del basico", "Productos o servicios", "Precios", "Fotos", "Categorias"],
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
      <section className="bg-[var(--pde-paper-strong)] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
            Paquetes piloto
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Alcance claro para vender sin prometer de mas.
          </h2>
          <AnimatedCards className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((pack) => (
              <Card data-card key={pack.name} className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--pde-earth)]">
                  {pack.label}
                </p>
                <h3 className="mt-4 text-3xl font-semibold">{pack.name}</h3>
                <p className="mt-4 min-h-14 leading-7 text-[var(--pde-muted)]">{pack.text}</p>
                <ul className="mt-7 grid gap-3">
                  {pack.items.map((item) => (
                    <li className="flex items-center gap-3 font-medium" key={item}>
                      <span className="h-2 w-2 rounded-full bg-[var(--pde-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </AnimatedCards>
        </div>
      </section>
    </Reveal>
  );
}
