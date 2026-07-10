import { BusinessForm } from "@/components/panel/BusinessForm";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";

export default function NewBusinessPage() {
  return (
    <ProtectedPanel>
    <>
      <PanelHeader title="Nuevo negocio" eyebrow="Captura inicial" />
      <div className="p-6">
        <BusinessForm />
      </div>
    </>
    </ProtectedPanel>
  );
}
