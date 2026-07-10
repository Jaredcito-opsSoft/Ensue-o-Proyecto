import { QrCode } from "lucide-react";
import Image from "next/image";
import type { Business } from "@/types";
import { Card } from "@/components/ui/Card";
import { appConfig } from "@/lib/constants";

export function BusinessQR({ business }: { business: Business }) {
  const publicUrl = `${appConfig.baseUrl}/negocio/${business.slug}`;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <QrCode className="text-[var(--pde-plum)]" />
          <h2 className="mt-5 text-2xl font-semibold">Comparte este negocio</h2>
        </div>
        <span className="rounded-full border border-[var(--pde-ink)] bg-[var(--pde-brass)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--pde-ink)]">
          listo para QR
        </span>
      </div>
      <p className="mt-3 leading-7 text-[var(--pde-muted)]">
        Escanea el QR o copia el link para abrir esta pagina desde WhatsApp, mostrador o redes.
      </p>
      <div className="mt-5 inline-flex rounded-[26px] border border-[var(--pde-ink)] bg-[var(--pde-surface)] p-3 shadow-[var(--shadow-soft)]">
        <Image
          className="rounded-2xl"
          src={`/api/qr/${business.slug}`}
          alt={`QR de ${business.name}`}
          width={220}
          height={220}
        />
      </div>
      <p className="mt-4 break-all font-mono text-xs text-[var(--pde-muted)]">{publicUrl}</p>
    </Card>
  );
}
