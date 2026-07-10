import { QrCode } from "lucide-react";
import type { Business } from "@/types";
import { Card } from "@/components/ui/Card";
import { appConfig } from "@/lib/constants";

export function BusinessQR({ business }: { business: Business }) {
  const publicUrl = `${appConfig.baseUrl}/negocio/${business.slug}`;

  return (
    <Card className="p-6">
      <QrCode className="text-[var(--pde-accent)]" />
      <h2 className="mt-5 text-2xl font-semibold">QR</h2>
      <p className="mt-3 leading-7 text-[var(--pde-muted)]">Escanea para abrir esta pagina.</p>
      <img
        className="mt-5 rounded-2xl border border-[var(--pde-border)] bg-white p-3"
        src={`/api/qr/${business.slug}`}
        alt={`QR de ${business.name}`}
      />
      <p className="mt-4 break-all font-mono text-xs text-[var(--pde-muted)]">{publicUrl}</p>
    </Card>
  );
}
