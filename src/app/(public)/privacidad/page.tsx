import type { Metadata } from "next";
import { LegalPlaceholderPage } from "@/components/landing/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Aviso de privacidad — Atria",
  description: "Aviso de privacidad de Atria.",
};

export default function PrivacyPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Información legal"
      title="Aviso de privacidad"
      description="Aquí se explicará qué información recibe Atria, para qué se utiliza y cómo pueden ejercerse los derechos relacionados con los datos personales."
    />
  );
}
