import { EmptyState } from "@/components/panel/EmptyState";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";

export default function RequestsPage() {
  return (
    <ProtectedPanel>
    <>
      <PanelHeader title="Solicitudes" eyebrow="Prospectos" />
      <div className="p-6">
        <EmptyState />
      </div>
    </>
    </ProtectedPanel>
  );
}
