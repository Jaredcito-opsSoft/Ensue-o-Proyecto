import { MapPin } from "lucide-react";
import type { Business } from "@/types";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { getMapsHref } from "@/lib/maps";

export function BusinessLocation({ business }: { business: Business }) {
  return (
    <Card className="p-6">
      <MapPin className="text-[var(--pde-accent)]" />
      <h2 className="mt-5 text-2xl font-semibold">Ubicacion</h2>
      <p className="mt-3 leading-7 text-[var(--pde-muted)]">{business.address}</p>
      <ButtonLink className="mt-6 w-full" href={getMapsHref(business.address, business.mapsUrl)} variant="secondary">
        Abrir Google Maps
      </ButtonLink>
    </Card>
  );
}
