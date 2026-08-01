import { BeautyLaPage } from "@/components/demos/BeautyLaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty LA | Estudio de belleza boutique",
  description:
    "Belleza con carácter y calma con estilo. Faciales, cabello, manicure y maquillaje en Los Ángeles.",
  robots: { index: false, follow: false },
};

export default function EsteticaDemoPage() {
  return <BeautyLaPage />;
}
