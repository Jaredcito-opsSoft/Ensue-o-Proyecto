import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/landing/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de los servicios de Atria.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Información legal"
      title="Términos y condiciones"
      description="Aquí se definirán el alcance general, los entregables, los tiempos y las condiciones aplicables a los proyectos contratados con Atria."
      pendingItems={[
        "Identidad legal de la persona prestadora del servicio.",
        "Condiciones de contratación, pagos, cancelaciones y entregas.",
        "Alcance de soporte, propiedad intelectual y responsabilidades.",
      ]}
    />
  );
}
