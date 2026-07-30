import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/landing/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Términos y condiciones — Atria",
  description: "Términos y condiciones de los servicios de Atria.",
};

export default function TermsPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Información legal"
      title="Términos y condiciones"
      description="Aquí se definirán el alcance general, los entregables, los tiempos y las condiciones aplicables a los proyectos contratados con Atria."
    />
  );
}
