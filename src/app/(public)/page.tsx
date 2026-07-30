import type { Metadata } from "next";
import { CinematicLanding } from "@/components/landing/CinematicLanding";

export const metadata: Metadata = {
  title: "Atria — Estudio Digital para Negocios",
  description:
    "Diseño web, experiencias interactivas y desarrollo a medida para marcas que buscan una presencia digital de alto impacto.",
  openGraph: {
    title: "Atria — Estudio Digital para Negocios",
    description:
      "Diseño web, experiencias interactivas y desarrollo a medida para marcas que buscan una presencia digital de alto impacto.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atria — Estudio Digital para Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atria — Estudio Digital para Negocios",
    description:
      "Diseño web, experiencias interactivas y desarrollo a medida para marcas que buscan una presencia digital de alto impacto.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return <CinematicLanding />;
}
