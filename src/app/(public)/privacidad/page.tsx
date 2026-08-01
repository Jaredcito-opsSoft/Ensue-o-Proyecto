import type { Metadata } from "next";
import { LegalPlaceholderPage, type LegalSection } from "@/components/landing/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Aviso de Privacidad · Atria Studio Digital",
  description: "Aviso de privacidad y protección de datos personales de Atria Studio Digital.",
  robots: { index: true, follow: true },
};

const privacySections: LegalSection[] = [
  {
    id: "responsable",
    title: "1. Identidad y Domicilio del Responsable",
    content: [
      "Atria Studio Digital (en lo sucesivo 'Atria'), con atención inicial y remota desde Tuxtla Gutiérrez, Chiapas, México, es responsable del tratamiento de sus datos personales conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
      "Nos comprometemos a garantizar la privacidad, confidencialidad y uso adecuado de la información de nuestros clientes, prospectos y visitantes de nuestro sitio web.",
    ],
  },
  {
    id: "datos-recopilados",
    title: "2. Datos Personales que Recopilamos",
    content: [
      "Para llevar a cabo las finalidades descritas en el presente aviso, Atria puede recopilar los siguientes datos personales de forma directa a través de WhatsApp, formularios web o correo electrónico:",
      "· Nombre completo y nombre del negocio o marca.",
      "· Información de contacto: número telefónico de WhatsApp, correo electrónico y ciudad de origen.",
      "· Datos del proyecto: giro comercial, necesidades de diseño, requerimientos de catálogo y referencias de marca.",
      "Atria no solicita ni trata datos personales sensibles (como origen étnico, estado de salud o datos financieros sensibles a través de nuestro sitio web).",
    ],
  },
  {
    id: "finalidades",
    title: "3. Finalidades del Tratamiento de Datos",
    content: [
      "Sus datos personales son utilizados para las siguientes finalidades primarias y necesarias para el servicio:",
      "1. Cotizar, coordinar y dar seguimiento al diseño y desarrollo de su sitio web o solución digital.",
      "2. Gestionar el registro de dominios, hosting y configuración técnica a su nombre.",
      "3. Enviar propuestas visuales, avances del proyecto e itinerarios de entrega.",
      "4. Brindar soporte técnico y atención a clientes.",
      "Como finalidad secundaria (opcional), podemos utilizar sus datos para enviarle actualizaciones sobre nuevos módulos, consejos de diseño web y noticias de nuestros productos (como Ensueño Momentos o LocalPOS).",
    ],
  },
  {
    id: "derechos-arco",
    title: "4. Derechos ARCO y Revocación del Consentimiento",
    content: [
      "Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales, así como a revocar el consentimiento que nos haya otorgado.",
      "Para ejercer cualquiera de sus derechos ARCO, basta con enviar un mensaje directo a nuestro canal de soporte formal vía WhatsApp (+52 961 285 8828) indicando su solicitud y nombre de contacto.",
      "Atria atenderá y responderá su solicitud en un plazo máximo de 5 días hábiles.",
    ],
  },
  {
    id: "transferencias",
    title: "5. Transferencias de Datos",
    content: [
      "Atria no vende, alquila ni comparte sus datos personales con terceros para fines publicitarios. Sus datos únicamente pueden compartirse con proveedores de infraestructura tecnológica estrictamente necesarios para la prestación del servicio (como proveedores de dominios y servicios de hospedaje seguro como Vercel o AWS), siempre bajo estándares de confidencialidad.",
    ],
  },
  {
    id: "cookies",
    title: "6. Uso de Cookies y Tecnologías de Rastreo",
    content: [
      "Nuestro sitio web utiliza tecnologías estándar de medición y rendimiento estrictamente necesarias para garantizar una navegación rápida, segura y la correcta visualización de nuestros componentes visuales y carruseles en dispositivos móviles.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Protección de Datos Personales"
      title="Aviso de Privacidad"
      subtitle="Conoce cómo Atria resguarda, utiliza y protege la información de tu negocio y proyecto digital."
      lastUpdated="Agosto 2026"
      sections={privacySections}
    />
  );
}
