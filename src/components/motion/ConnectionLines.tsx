import { Globe2, MapPin, MessageCircle } from "lucide-react";

const channels = [
  {
    icon: MapPin,
    title: "Datos consistentes",
    copy: "Información clara para búsqueda y confianza digital.",
    className: "left-[3vw] top-[18%] lg:left-[18vw] lg:top-[15%]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    copy: "Contacto directo y conversaciones mejor organizadas.",
    className: "left-1/2 top-[8%] -translate-x-1/2 lg:top-[7%]",
  },
  {
    icon: Globe2,
    title: "Sitio propio",
    copy: "Un punto central para explicar, mostrar y convertir.",
    className: "right-[3vw] top-[18%] lg:right-[18vw] lg:top-[15%]",
  },
];

export function ConnectionLines({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-30 hidden md:block ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full text-[var(--ens-copper)]/55"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="js-connection-line" d="M300 230 C335 290 390 305 455 350" fill="none" stroke="currentColor" strokeWidth="1" />
        <path className="js-connection-line" d="M500 170 C500 235 500 285 500 350" fill="none" stroke="currentColor" strokeWidth="1" />
        <path className="js-connection-line" d="M700 230 C665 290 610 305 545 350" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="500" cy="350" r="4" fill="currentColor" />
      </svg>

      {channels.map(({ icon: Icon, title, copy, className: position }) => (
        <article
          key={title}
          className={`absolute w-[160px] border border-[var(--ens-border-subtle)] bg-[#120d09]/95 p-3 backdrop-blur-md lg:w-[270px] lg:p-4 ${position}`}
        >
          <Icon size={18} className="text-[var(--ens-gold-soft)]" aria-hidden />
          <h4 className="mt-3 font-serif text-xl text-[var(--ens-text-primary)]">{title}</h4>
          <p className="mt-1.5 hidden text-xs leading-5 text-[var(--ens-text-secondary)] lg:block">{copy}</p>
        </article>
      ))}
    </div>
  );
}
