export type ScrollStage = {
  id: string;
  label: string;
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  eyebrow: string;
  title: string;
  description: string;
  align: "left" | "right";
  details?: string[];
  cta?: {
    text: string;
    href: string;
    external?: boolean;
  };
};

const imageSet = (name: string) => ({
  desktop: `/media/atria-scroll/desktop/${name}.avif`,
  tablet: `/media/atria-scroll/tablet/${name}.avif`,
  mobile: `/media/atria-scroll/mobile/${name}.avif`,
});

export const SCROLL_STAGES: ScrollStage[] = [
  {
    id: "atria",
    label: "Atria",
    images: imageSet("stage-01-planning"),
    eyebrow: "Atria · Estudio digital",
    title: "Una idea toma forma.",
    description:
      "Partimos de las necesidades reales del negocio y definimos la solución adecuada antes de diseñar.",
    align: "left",
    details: ["Escuchar", "Dar dirección", "Construir lo necesario"],
  },
  {
    id: "web",
    label: "Atria Web",
    images: imageSet("stage-02-web"),
    eyebrow: "Atria Web",
    title: "La idea se convierte en una presencia profesional.",
    description:
      "Un sitio propio organiza la información, comunica el valor del negocio y facilita el contacto.",
    align: "right",
    details: ["Diseño por giro", "Experiencia móvil", "Contenido claro"],
  },
  {
    id: "presencia",
    label: "Presencia online",
    images: imageSet("stage-03-presence"),
    eyebrow: "Presencia online incluida",
    title: "Tu sitio se conecta con los canales correctos.",
    description:
      "Google Business, Maps, WhatsApp, dominio y datos de contacto trabajan alrededor de una misma presencia.",
    align: "left",
    details: ["Ubicación", "Horarios", "WhatsApp", "SEO local"],
  },
  {
    id: "momentos",
    label: "Ensueño",
    images: imageSet("stage-04-moments"),
    eyebrow: "Ensueño Momentos",
    title: "El diseño también acompaña momentos especiales.",
    description:
      "Creamos experiencias digitales para celebraciones, invitados e información del evento.",
    align: "right",
    details: ["Invitación", "Confirmación", "Itinerario", "Galería"],
  },
  {
    id: "localpos",
    label: "LocalPOS",
    images: imageSet("stage-05-localpos"),
    eyebrow: "LocalPOS",
    title: "La tecnología pasa de comunicar a ayudar en la operación.",
    description:
      "LocalPOS organiza ventas, productos, clientes e inventario desde una herramienta especializada.",
    align: "left",
    details: ["Ventas", "Caja", "Inventario", "Reportes"],
    cta: {
      text: "Conocer LocalPOS",
      href: "https://localpos-marketing.vercel.app/",
      external: true,
    },
  },
  {
    id: "growth",
    label: "Crecimiento",
    images: imageSet("stage-06-growth"),
    eyebrow: "Una relación que puede crecer contigo",
    title: "Comienza con una solución y avanza cuando la necesites.",
    description:
      "Atria acompaña distintas etapas sin obligarte a contratar todo desde el inicio.",
    align: "right",
    details: ["Atria Web", "Ensueño Momentos", "LocalPOS", "Proyectos a medida"],
    cta: {
      text: "Comenzar un proyecto",
      href: "#contacto",
    },
  },
];

export const STAGE_COUNT = SCROLL_STAGES.length;
export const STAGE_BREAKPOINTS = [0, 0.18, 0.36, 0.54, 0.72, 0.88] as const;
