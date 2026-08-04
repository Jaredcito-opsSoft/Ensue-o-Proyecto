import { AtSign, Globe2, MapPin, MessageCircle, Search, Share2 } from "lucide-react";

const connections = [
  [Globe2, "Dominio", "Propiedad del cliente"],
  [Search, "Google", "Business y Search Console"],
  [MapPin, "Maps", "Ubicación confirmada"],
  [MessageCircle, "WhatsApp", "Contacto directo"],
  [Share2, "Redes", "Canales existentes"],
  [AtSign, "Datos", "Horarios y contacto"],
] as const;

export function OnlinePresenceSection() {
  return (
    <section className="bg-[var(--atria-surface-warm)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="online-presence-title">
      <div className="mx-auto max-w-[1320px] border-y border-black/12 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div>
            <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Presencia online</p>
            <h2 id="online-presence-title" className="mt-4 font-serif text-5xl font-medium leading-[.94] sm:text-6xl">El sitio es el centro, no una isla.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">Conectamos una fuente clara de información con los canales que el negocio ya utiliza. Cada conexión depende del alcance, los datos y la elegibilidad del propietario.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div className="border border-black/12 bg-white p-7 sm:p-9">
            <p className="text-[10px] font-bold uppercase text-[var(--atria-accent)]">Fuente principal</p>
            <div className="mt-9 flex items-end justify-between gap-6">
              <div><p className="font-serif text-5xl font-medium sm:text-6xl">Tu sitio</p><p className="mt-3 max-w-sm text-sm leading-6 text-[var(--atria-ink-soft)]">Servicios, productos, horarios, ubicación y contacto organizados en una experiencia propia.</p></div>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--atria-ink)] text-white"><Globe2 size={21} aria-hidden /></span>
            </div>
            <div className="mt-9 h-px bg-[linear-gradient(to_right,var(--atria-accent),rgba(239,90,47,0))]" aria-hidden />
            <p className="mt-4 text-[10px] font-semibold uppercase text-[var(--atria-muted)]">Una sola referencia para mantener coherencia</p>
          </div>

          <div className="relative grid grid-cols-2 border-l border-t border-black/12 sm:grid-cols-3">
            {connections.map(([Icon, title, copy], index) => (
              <article key={title} className="group min-h-[170px] border-b border-r border-black/12 bg-transparent p-5 transition-colors hover:bg-white sm:p-6">
                <div className="flex items-start justify-between gap-4"><Icon size={19} className="text-[var(--atria-accent)] transition-transform group-hover:-translate-y-0.5" aria-hidden /><span className="font-mono text-[9px] text-[var(--atria-muted)]">0{index + 1}</span></div>
                <h3 className="mt-8 font-serif text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--atria-ink-soft)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-4 text-xs leading-5 text-[var(--atria-muted)] sm:grid-cols-2">
          <p>El cliente entrega y confirma sus datos. Las verificaciones de Google requieren la participación del propietario.</p>
          <p>Google decide la indexación y posición. La administración mensual de redes no forma parte del servicio estándar.</p>
        </div>
      </div>
    </section>
  );
}
