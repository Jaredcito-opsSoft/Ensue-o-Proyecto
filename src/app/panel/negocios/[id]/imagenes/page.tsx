import { notFound } from "next/navigation";
import { ImageManager } from "@/components/panel/ImageManager";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ProtectedPanel } from "@/components/panel/ProtectedPanel";
import { demoBusinesses } from "@/lib/demo-data";

export default async function BusinessImagesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const business = demoBusinesses.find((item) => item.id === id);
  if (!business) notFound();

  return (
    <ProtectedPanel>
    <>
      <PanelHeader title="Imagenes" eyebrow={business.name} />
      <div className="p-6">
        <ImageManager business={business} />
      </div>
    </>
    </ProtectedPanel>
  );
}
