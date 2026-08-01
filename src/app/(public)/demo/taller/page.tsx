import type { Metadata } from "next";
import { CelluxPage } from "@/components/demos/CelluxPage";

export const metadata: Metadata = {
  title: "Cellux | Tecnología y reparación premium",
  description: "Smartphones, accesorios premium y reparación especializada en un solo lugar.",
  robots: { index: false, follow: false },
};

export default function TallerDemoPage() {
  return <CelluxPage />;
}
