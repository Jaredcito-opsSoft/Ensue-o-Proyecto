import { BusinessItemForm } from "@/components/panel/BusinessItemForm";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";

export default function BusinessServicesPage() {
  return (
    <ProtectedPanel>
    <>
      <PanelHeader title="Servicios y productos" eyebrow="Catalogo" />
      <div className="p-6">
        <BusinessItemForm />
      </div>
    </>
    </ProtectedPanel>
  );
}
