import type { Business } from "@/types";
import { appConfig } from "@/lib/constants";

export function DeliveryCard({ business }: { business: Business }) {
  const url = `${appConfig.baseUrl}/negocio/${business.slug}`;
  const message = `Hola, este es nuestro catalogo digital. Aqui puedes ver servicios, horarios, ubicacion y escribirnos directo por WhatsApp: ${url}`;

  return (
    <div className="grid gap-5 rounded-[24px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pde-muted)]">Link publico</p>
        <p className="mt-2 break-all font-mono text-sm">{url}</p>
      </div>
      <img className="w-48 rounded-2xl border border-[var(--pde-border)] bg-white p-3" src={`/api/qr/${business.slug}`} alt={`QR de ${business.name}`} />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pde-muted)]">Mensaje sugerido</p>
        <p className="mt-2 leading-7">{message}</p>
      </div>
    </div>
  );
}
