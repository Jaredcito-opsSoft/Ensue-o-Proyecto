import type { Metadata } from "next";
import { ColetaPage } from "@/components/demos/ColetaPage";

export const metadata: Metadata = {
  title: "Coleta | Cocina de origen",
  description: "Cocina contemporánea en Chiapas que honra el producto, el territorio y el tiempo.",
  robots: { index: false, follow: false },
};

export default function ComidaDemoPage() {
  return <ColetaPage />;
}
