import { MapPin, MessageCircle } from "lucide-react";
import type { Business } from "@/types";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { getMapsHref } from "@/lib/maps";

export function MobileActionBar({ business }: { business: Business }) {
  const message = `Hola, vi la pagina digital de ${business.name} y me gustaria mas informacion.`;

  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 grid grid-cols-2 gap-2 rounded-full border border-[var(--pde-ink)] bg-[var(--pde-surface)]/95 p-2 shadow-[var(--shadow-soft)] backdrop-blur md:hidden">
      <a
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--pde-blue)] px-4 text-sm font-semibold text-white"
        href={createWhatsAppLink(business.whatsapp, message)}
      >
        <MessageCircle size={17} /> WhatsApp
      </a>
      <a
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--pde-ink)] bg-[var(--pde-brass)] px-4 text-sm font-semibold text-[var(--pde-ink)]"
        href={getMapsHref(business.address, business.mapsUrl)}
      >
        <MapPin size={17} /> Ubicacion
      </a>
    </div>
  );
}
