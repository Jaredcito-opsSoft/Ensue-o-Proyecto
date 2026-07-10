import { MapPin, MessageCircle } from "lucide-react";
import type { Business } from "@/types";
import { ButtonLink } from "@/components/ui/Button";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { getMapsHref } from "@/lib/maps";

export function BusinessActions({ business }: { business: Business }) {
  const message = `Hola, vi la pagina digital de ${business.name} y me gustaria mas informacion.`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <ButtonLink href={createWhatsAppLink(business.whatsapp, message)}>
        <MessageCircle size={18} /> Escribir por WhatsApp
      </ButtonLink>
      <ButtonLink href={getMapsHref(business.address, business.mapsUrl)} variant="secondary">
        <MapPin size={18} /> Abrir ubicacion
      </ButtonLink>
    </div>
  );
}
