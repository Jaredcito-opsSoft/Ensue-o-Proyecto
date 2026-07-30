import type { Metadata } from "next";
import { CinematicLanding } from "@/components/landing/CinematicLanding";

export const metadata: Metadata = {
  title: "Atria — Estudio Digital para Negocios",
  description:
    "Diseño web, experiencias interactivas y desarrollo a medida para marcas que buscan una presencia digital de alto impacto.",
};

export default function HomePage() {
  return <CinematicLanding />;
}
