import { Building2, ClipboardCheck, QrCode } from "lucide-react";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { listBusinessesForPanel } from "@/features/businesses/queries";

export default async function PanelHomePage() {
  const businesses = await listBusinessesForPanel();
  const published = businesses.filter((business) => business.status === "published").length;

  return (
    <ProtectedPanel>
    <>
      <PanelHeader title="Dashboard" eyebrow="Operacion MVP" />
      <div className="p-6">
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <Building2 className="text-[var(--pde-accent)]" />
            <p className="mt-6 font-mono text-4xl font-semibold">{businesses.length}</p>
            <p className="mt-2 text-sm text-[var(--pde-muted)]">Negocios registrados</p>
          </Card>
          <Card className="p-6">
            <ClipboardCheck className="text-[var(--pde-accent)]" />
            <p className="mt-6 font-mono text-4xl font-semibold">{published}</p>
            <p className="mt-2 text-sm text-[var(--pde-muted)]">Publicados</p>
          </Card>
          <Card className="p-6">
            <QrCode className="text-[var(--pde-accent)]" />
            <p className="mt-6 font-mono text-4xl font-semibold">QR</p>
            <p className="mt-2 text-sm text-[var(--pde-muted)]">Entrega lista por negocio</p>
          </Card>
        </div>
        <div className="mt-8 flex gap-3">
          <ButtonLink href="/panel/negocios">Ver negocios</ButtonLink>
          <ButtonLink href="/panel/negocios/nuevo" variant="secondary">Crear negocio</ButtonLink>
        </div>
      </div>
    </>
    </ProtectedPanel>
  );
}
