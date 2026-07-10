import { notFound } from "next/navigation";
import { BusinessForm } from "@/components/panel/BusinessForm";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";
import { demoBusinesses } from "@/lib/demo-data";

export default async function EditBusinessPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const business = demoBusinesses.find((item) => item.id === id);
  if (!business) notFound();

  return (
    <ProtectedPanel>
    <>
      <PanelHeader title={business.name} eyebrow="Editar negocio" />
      <div className="p-6">
        <BusinessForm business={business} />
      </div>
    </>
    </ProtectedPanel>
  );
}
