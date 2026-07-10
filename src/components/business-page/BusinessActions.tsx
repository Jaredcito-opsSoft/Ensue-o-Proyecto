import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { Business } from "@/types";
import { ButtonLink } from "@/components/ui/Button";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { getMapsHref } from "@/lib/maps";

export function BusinessActions({ business }: { business: Business }) {
  const message = `Hola, vi la pagina digital de ${business.name} y me gustaria mas informacion.`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <ButtonLink href={createWhatsAppLink(business.whatsapp, message)} className="bg-[var(--pde-ink)] text-white hover:bg-[var(--pde-muted)]">
        <MessageCircle size={18} /> Escribir por WhatsApp
      </ButtonLink>
      <ButtonLink href={getMapsHref(business.address, business.mapsUrl)} variant="secondary">
        <MapPin size={18} /> Abrir ubicacion
      </ButtonLink>
      {business.phone ? (
        <ButtonLink href={`tel:${business.phone.replace(/\D/g, "")}`} variant="ghost">
          <Phone size={18} /> Llamar
        </ButtonLink>
      ) : null}
    </div>
  );
}
