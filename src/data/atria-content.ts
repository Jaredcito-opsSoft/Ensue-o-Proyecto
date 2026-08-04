export type ContactContext = "atria-web" | "ensueno-momentos" | "localpos-pilot" | "no-se-que-necesito";

export const CONTACT_CONTEXTS: Array<{
  id: ContactContext;
  label: string;
  prompt: string;
}> = [
  {
    id: "atria-web",
    label: "Atria Web",
    prompt:
      "Hola, conocí Atria desde su página. Quiero información para crear o mejorar la página web de mi negocio.",
  },
  {
    id: "ensueno-momentos",
    label: "Ensueño Momentos",
    prompt:
      "Hola, conocí Ensueño Momentos desde Atria. Estoy preparando un evento y quiero crear una experiencia digital.",
  },
  {
    id: "localpos-pilot",
    label: "Piloto LocalPOS",
    prompt:
      "Hola, conocí LocalPOS desde Atria. Me interesa participar en el piloto para mi negocio.",
  },
  {
    id: "no-se-que-necesito",
    label: "No sé qué necesito",
    prompt:
      "Hola, conocí Atria desde su página. Tengo una idea o problema para mi negocio, pero todavía no sé qué solución necesito.",
  },
];

export const ATRIA_FAQ = [
  {
    question: "¿Necesito tener un dominio?",
    answer:
      "No. Podemos ayudarte a elegirlo y configurarlo. Si ya tienes uno, revisamos cómo conectarlo al proyecto.",
  },
  {
    question: "¿El dominio quedará a mi nombre?",
    answer:
      "Sí. El dominio debe registrarse a nombre del cliente. Atria puede acompañar la configuración y administración técnica según la propuesta.",
  },
  {
    question: "¿Qué ocurre después del primer año?",
    answer:
      "El cliente cubre la renovación del dominio y los servicios que continúen activos. Las fechas y costos se informan antes de contratar.",
  },
  {
    question: "¿Qué incluye el mantenimiento?",
    answer:
      "Depende del plan. Puede cubrir actualizaciones técnicas y un tiempo mensual definido para cambios menores de texto, imágenes o información. No significa rediseño o funciones ilimitadas.",
  },
  {
    question: "¿Qué pasa si dejo de pagar?",
    answer:
      "Cuando Atria administra el hosting o mantenimiento, el servicio puede suspenderse después del periodo acordado. La condición exacta se define por escrito antes de comenzar.",
  },
  {
    question: "¿Puedo llevarme el proyecto con otro proveedor?",
    answer:
      "Tu marca, contenido, cuentas y dominio son tuyos. La modalidad de entrega, migración o acceso al repositorio se acuerda antes de iniciar y puede implicar un costo adicional.",
  },
  {
    question: "¿Qué contenido debo entregar?",
    answer:
      "Normalmente necesitamos logotipo, textos, fotografías, servicios o productos, datos de contacto y referencias. El calendario comienza cuando el alcance y el material están completos.",
  },
  {
    question: "¿Cuánto tarda una página?",
    answer:
      "Una landing puede tomar entre 1 y 3 días hábiles y un sitio de varias páginas entre 3 y 6. Son referencias sujetas al alcance, anticipo, revisiones y entrega completa del contenido.",
  },
  {
    question: "¿Apareceré inmediatamente en Google?",
    answer:
      "No podemos prometer una posición ni una fecha exacta. Configuramos una base técnica correcta y Search Console cuando corresponde, pero Google decide el rastreo, indexación y posición.",
  },
  {
    question: "¿Atria crea Google Business para cualquier negocio?",
    answer:
      "Solo para negocios elegibles y con información real. La verificación requiere la participación del propietario y depende de las políticas de Google.",
  },
  {
    question: "¿Puedo editar mi página?",
    answer:
      "Puede incluirse un panel limitado cuando el alcance lo necesita. No todos los planes requieren o incluyen autogestión.",
  },
  {
    question: "¿LocalPOS está incluido en Atria Web?",
    answer:
      "No. LocalPOS es un producto independiente con configuración, mensualidad y soporte propios.",
  },
  {
    question: "¿Ensueño Momentos tiene mensualidad?",
    answer:
      "La modalidad depende de la experiencia, dominio y vigencia contratados. Se cotiza el alcance antes de comenzar y no usamos un configurador automático.",
  },
  {
    question: "¿Puedo contratar desde fuera de Chiapas?",
    answer:
      "Sí. Atria trabaja de forma remota con negocios y proyectos de México y otros países.",
  },
  {
    question: "¿Qué proyectos no acepta Atria?",
    answer:
      "No ofrecemos como capacidad estándar e-commerce completo, ERP, logística avanzada ni sistemas empresariales grandes. Primero revisamos si la necesidad está dentro de nuestro alcance actual.",
  },
] as const;

export const ATRIA_WEB_PLANS = [
  {
    name: "Atria Web Esencial",
    audience: "Negocios que necesitan comenzar con una presencia profesional.",
    implementation: "Implementación cotizada según alcance",
    maintenance: "Mantenimiento orientativo desde $299–$499 MXN al mes",
    time: "Referencia de entrega: 1–3 días hábiles",
    features: [
      "Landing y diseño móvil",
      "WhatsApp, ubicación y redes existentes",
      "Hosting y SEO técnico inicial",
      "Dominio el primer año cuando forme parte de la cotización",
      "Hasta 90 minutos de mantenimiento mensual según contrato",
    ],
    context: "atria-web" as ContactContext,
  },
  {
    name: "Atria Web Crecimiento",
    audience: "Negocios con más contenido, catálogo, integraciones o necesidad de control.",
    implementation: "Implementación cotizada después de revisar el proyecto",
    maintenance: "Mantenimiento orientativo de $599–$899 MXN al mes",
    time: "Referencia de entrega: 3–6 días hábiles",
    features: [
      "Sitio de varias páginas o catálogo simple",
      "Mayor personalización visual",
      "Formularios e integraciones de alcance controlado",
      "Panel limitado cuando realmente se requiera",
      "Hasta 150 minutos de mantenimiento mensual según contrato",
    ],
    context: "atria-web" as ContactContext,
  },
  {
    name: "Atria Profesional",
    audience: "Proyectos con diseño, animación, paneles o funciones especiales.",
    implementation: "Propuesta y calendario a medida",
    maintenance: "Soporte definido según alcance",
    time: "Entrega acordada en la propuesta",
    features: [
      "Dirección visual personalizada",
      "Animaciones avanzadas con propósito",
      "Paneles e integraciones acordadas",
      "Funciones especiales de complejidad controlada",
      "Documentación y modalidad de entrega definidas",
    ],
    context: "no-se-que-necesito" as ContactContext,
  },
] as const;

