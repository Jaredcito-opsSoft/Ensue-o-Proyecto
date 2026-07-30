import { Globe, Search, Smartphone, Wrench } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const features = [
  { icon: Globe, title: "Diseño por nicho", text: "Una dirección visual coherente con el negocio y su público." },
  { icon: Smartphone, title: "Experiencia móvil", text: "Decisiones pensadas primero para la pantalla que más usan tus clientes." },
  { icon: Search, title: "SEO local", text: "Bases claras para aparecer cuando alguien busca lo que ofreces." },
  { icon: Wrench, title: "Mantenimiento", text: "Cambios y acompañamiento para que el sitio no se quede atrás." },
];

export function EnsuenoWebSection() {
  return (
    <SectionReveal>
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ens-gold-soft)]">Ensueño Web</p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">Tu marca merece un espacio propio.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--ens-text-secondary)]">
              Creamos sitios modernos, rápidos y alineados con la identidad de cada negocio. La forma acompaña al contenido; nunca al revés.
            </p>
          </div>
          <div className="border-t border-[var(--ens-border-subtle)]">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="grid gap-5 border-b border-[var(--ens-border-subtle)] py-8 sm:grid-cols-[64px_1fr] sm:items-start">
                <div className="flex items-center gap-3 text-[var(--ens-gold-soft)]"><span className="font-mono text-[10px]">0{index + 1}</span><Icon size={19} /></div>
                <div><h3 className="font-serif text-3xl text-[var(--ens-text-primary)]">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[var(--ens-text-secondary)]">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
