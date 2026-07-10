import { BusinessTable } from "@/components/panel/BusinessTable";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";
import { ButtonLink } from "@/components/ui/Button";
import { listBusinessesForPanel } from "@/features/businesses/queries";

export default async function BusinessesPage() {
  const businesses = await listBusinessesForPanel();

  return (
    <ProtectedPanel>
    <>
      <PanelHeader title="Negocios" eyebrow="Paginas publicas" />
      <div className="p-6">
        <div className="mb-5 flex justify-end">
          <ButtonLink href="/panel/negocios/nuevo">Crear negocio</ButtonLink>
        </div>
        <BusinessTable businesses={businesses} />
      </div>
    </>
    </ProtectedPanel>
  );
}
