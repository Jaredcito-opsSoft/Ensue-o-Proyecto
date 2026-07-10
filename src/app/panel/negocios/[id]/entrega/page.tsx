import { notFound } from "next/navigation";
import { DeliveryCard } from "@/components/panel/DeliveryCard";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";
import { demoBusinesses } from "@/lib/demo-data";

export default async function BusinessDeliveryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const business = demoBusinesses.find((item) => item.id === id);
  if (!business) notFound();

  return (
    <ProtectedPanel>
    <>
      <PanelHeader title="Entrega" eyebrow={business.name} />
      <div className="p-6">
        <DeliveryCard business={business} />
      </div>
    </>
    </ProtectedPanel>
  );
}
