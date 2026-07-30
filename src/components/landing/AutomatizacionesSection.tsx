import { Bell, MessageSquare, RefreshCw, Zap } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const automations = [
  { icon: MessageSquare, title: "Respuestas", text: "Mensajes útiles cuando una persona muestra interés." },
  { icon: Bell, title: "Notificaciones", text: "Alertas de ventas, reservas o confirmaciones importantes." },
  { icon: RefreshCw, title: "Sincronización", text: "Información que avanza entre canales sin capturarla dos veces." },
  { icon: Zap, title: "Flujos propios", text: "Automatizaciones construidas alrededor de tu operación real." },
];

export function AutomatizacionesSection() {
  return (
    <SectionReveal>
      <section className="bg-[var(--ens-ivory)] px-5 py-20 text-[#21150d] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ens-copper)]">Automatizaciones</p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">Menos trabajo manual. Más continuidad.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#6f5e50]">La automatización no sustituye la atención cercana; elimina tareas repetitivas para que puedas ofrecerla mejor.</p>
          </div>
          <div className="border-t border-[#633719]/20">
            {automations.map(({ icon: Icon, title, text }) => (
              <article key={title} className="grid gap-4 border-b border-[#633719]/20 py-7 sm:grid-cols-[48px_180px_1fr] sm:items-center">
                <Icon size={21} className="text-[var(--ens-copper)]" aria-hidden />
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="text-sm leading-6 text-[#6f5e50]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
