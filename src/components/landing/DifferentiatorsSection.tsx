import { HeartHandshake, LayoutTemplate, Link2, Palette, TrendingUp, Wrench } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const differentiators = [
  { icon: Palette, title: "Diseño por nicho", text: "Cada industria recibe un lenguaje visual propio." },
  { icon: LayoutTemplate, title: "Base profesional", text: "Estructuras probadas, adaptadas a la identidad real de tu marca." },
  { icon: Wrench, title: "Mantenimiento continuo", text: "Tu presencia se mantiene vigente después de publicar." },
  { icon: HeartHandshake, title: "Atención cercana", text: "Conversaciones claras con un equipo que entiende negocios locales." },
  { icon: TrendingUp, title: "Crecimiento gradual", text: "Empieza con lo esencial y suma capacidades cuando tengan sentido." },
  { icon: Link2, title: "Servicios conectados", text: "Web, presencia, eventos y operación comparten una misma visión." },
];

export function DifferentiatorsSection() {
  return (
    <SectionReveal>
      <section className="bg-[var(--ens-ivory)] px-5 py-20 text-[#21150d] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-7 border-b border-[#633719]/20 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ens-copper)]">Por qué Ensueño</p>
            <h2 className="max-w-4xl font-serif text-5xl font-medium leading-[0.96] sm:text-6xl lg:text-7xl">
              Tecnología con criterio, diseñada para sentirse tuya.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, text }) => (
              <article key={title} className="border-b border-[#633719]/20 py-8 sm:px-6 sm:first:pl-0 lg:min-h-52 lg:border-r lg:last:border-r-0">
                <Icon size={22} className="text-[var(--ens-copper)]" aria-hidden />
                <h3 className="mt-7 text-lg font-bold">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#6f5e50]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
