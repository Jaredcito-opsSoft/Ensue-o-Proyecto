import { MapPin, MessageSquare, Share2 } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const channels = [
  { icon: MapPin, title: "Google Negocios", text: "Información correcta, reseñas y una ubicación lista para encontrarte." },
  { icon: MessageSquare, title: "WhatsApp Business", text: "Contacto inmediato, respuestas ordenadas y seguimiento sin fricción." },
  { icon: Share2, title: "Redes sociales", text: "Una presencia coherente que lleva cada publicación hacia una acción clara." },
];

export function PresenciaOnlineSection() {
  return (
    <SectionReveal>
      <section className="border-y border-[var(--ens-border-subtle)] bg-[var(--ens-surface-dark)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ens-gold-soft)]">Presencia Online</p>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">Presencia donde tus clientes ya están.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--ens-text-secondary)]">Conectamos los canales que generan visibilidad, confianza y oportunidades alrededor de una marca consistente.</p>
          </div>

          <div className="relative mt-14 grid gap-px bg-[var(--ens-border-subtle)] lg:grid-cols-3">
            <span className="pointer-events-none absolute left-1/2 top-[-38px] hidden h-[38px] w-px bg-[var(--ens-copper)] lg:block" aria-hidden />
            {channels.map(({ icon: Icon, title, text }) => (
              <article key={title} className="min-h-64 bg-[var(--ens-bg-secondary)] p-7 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center border border-[var(--ens-border-strong)] text-[var(--ens-gold-soft)]"><Icon size={22} aria-hidden /></div>
                <h3 className="mt-7 font-serif text-3xl text-[var(--ens-text-primary)]">{title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[var(--ens-text-secondary)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
