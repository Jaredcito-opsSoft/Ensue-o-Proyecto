import type { Metadata } from "next";
import { CinematicLanding } from "@/components/landing/CinematicLanding";

export const metadata: Metadata = {
  title: "Atria — Estudio digital para negocios",
  description:
    "Creamos sitios web, presencia online, experiencias digitales para eventos y herramientas para pequeños negocios en Tuxtla Gutiérrez.",
};

export default function HomePage() {
  return <CinematicLanding />;
}
