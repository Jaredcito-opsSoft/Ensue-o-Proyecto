import type { Metadata } from "next";
import { LegalPlaceholderPage, type LegalSection } from "@/components/landing/LegalPlaceholderPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones · Atria Studio Digital",
  description: "Términos y condiciones de contratación de servicios de diseño y desarrollo en Atria Studio Digital.",
  robots: { index: true, follow: true },
};

const termsSections: LegalSection[] = [
  {
    id: "general",
    title: "1. Acepetación de los Términos",
    content: [
      "El presente documento regula los términos y condiciones aplicables a la contratación de servicios de diseño web, desarrollo de experiencias digitales y soluciones tecnológicas proporcionadas por Atria Studio Digital (en adelante 'Atria').",
      "Al solicitar una cotización o contratar cualquiera de nuestros paquetes (Atria Web Esencial, Crecimiento, Profesional o Ensueño Momentos), el cliente acepta íntegramente los términos aquí descritos.",
    ],
  },
  {
    id: "alcance",
    title: "2. Alcance del Servicio y Entregables",
    content: [
      "Cada proyecto contratado incluye los entregables especificados explícitamente en la propuesta aprobada:",
      "· Diseño responsive mobile-first adaptado al giro del negocio.",
      "· Dominio (.com o .mx) registrado por el primer año y hospedaje web seguro.",
      "· Integración de canales de contacto (WhatsApp, mapa de ubicación y redes sociales).",
      "· Optimización básica para motores de búsqueda (SEO local y datos estructurados).",
      "Cualquier requerimiento adicional no incluido en la propuesta inicial será cotizado de forma independiente como adición al alcance.",
    ],
  },
  {
    id: "pagos",
    title: "3. Proceso de Contratación y Pagos",
    content: [
      "1. Para iniciar el proyecto se requiere el anticipo o confirmación del paquete acordado.",
      "2. Los tiempos de entrega (de 3 a 8 días hábiles según el plan) comienzan a contarse una vez recibido el material inicial del cliente (logotipo, imágenes y textos clave).",
      "3. En proyectos con pago mensual (Atria Web Esencial y Crecimiento), la mensualidad cubre el hospedaje, mantenimiento, actualizaciones de seguridad y el paquete de microcambios mensuales incluidos.",
      "4. El servicio Ensueño Momentos es de pago único y no requiere mensualidades obligatorias.",
    ],
  },
  {
    id: "propiedad",
    title: "4. Propiedad Intelectual y Dominios",
    content: [
      "El cliente conserva en todo momento la propiedad absoluta de su marca, logotipos, imágenes y contenido proporcionado para el proyecto.",
      "El dominio registrado a través de Atria pertenece legalmente al cliente. En caso de solicitar la transferencia de dominio a otro proveedor, Atria facilitará los códigos de autorización sin penalizaciones.",
    ],
  },
  {
    id: "mantenimiento",
    title: "5. Mantenimiento y Modificaciones Incluidas",
    content: [
      "Los planes mensuales de Atria Web incluyen soporte técnico continuo para garantizar que el sitio se mantenga activo, rápido y seguro.",
      "Los microcambios mensuales incluidos abarcan actualizaciones de texto, cambio de imágenes en galerías, actualización de precios o teléfonos. No incluyen el rediseño total de la estructura o la programación de sistemas complejos no contratados previamente.",
    ],
  },
  {
    id: "garantia",
    title: "6. Garantía de Funcionamiento y Soporte",
    content: [
      "Atria garantiza un 99.9% de disponibilidad en la infraestructura de hospedaje y brinda soporte directo vía WhatsApp para atender cualquier eventualidad técnica en menos de 24 horas hábiles.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPlaceholderPage
      eyebrow="Condiciones de Servicio"
      title="Términos y Condiciones"
      subtitle="Conoce el marco de trabajo, garantías y condiciones operativas que aplican a los proyectos diseñados por Atria."
      lastUpdated="Agosto 2026"
      sections={termsSections}
    />
  );
}
