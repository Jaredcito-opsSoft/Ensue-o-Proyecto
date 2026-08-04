export type WorkType = "case-study" | "demo" | "product";

export type AtriaWork = {
  slug: string;
  name: string;
  type: WorkType;
  label: string;
  status: string;
  niche: string;
  description: string;
  explores: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  external: boolean;
  featured?: boolean;
};

export const ATRIA_WORK: AtriaWork[] = [
  {
    slug: "cellab-tuxtla",
    name: "CelLab Tuxtla",
    type: "case-study",
    label: "Caso real · Negocio en operación",
    status: "En producción",
    niche: "Telefonía y reparación",
    description:
      "Sitio y solución digital desarrollados para un negocio de telefonía, accesorios y reparación de celulares.",
    explores: "Una presencia especializada alrededor de servicios, catálogo, contacto y experiencia móvil.",
    capabilities: ["Servicios", "Catálogo", "Contacto", "Experiencia móvil"],
    image: "/images/landing/cellab-project.avif",
    imageAlt: "Vista del proyecto CelLab Tuxtla en producción",
    href: "https://localpos-cellab.vercel.app/",
    cta: "Abrir CelLab en producción",
    external: true,
    featured: true,
  },
  {
    slug: "beauty-la",
    name: "Beauty LA",
    type: "demo",
    label: "Demostración",
    status: "Demo navegable",
    niche: "Belleza y bienestar",
    description:
      "Dirección editorial para presentar servicios, galería, horarios y reservaciones con claridad.",
    explores: "Cómo una marca de belleza puede sentirse íntima, editorial y fácil de reservar.",
    capabilities: ["Servicios", "Galería", "Horarios", "Reservación"],
    image: "/images/landing/beauty-la.jpg",
    imageAlt: "Vista previa de la demostración Beauty LA",
    href: "/demo/estetica",
    cta: "Ver demo",
    external: false,
  },
  {
    slug: "coleta",
    name: "Coleta",
    type: "demo",
    label: "Demostración",
    status: "Demo navegable",
    niche: "Gastronomía",
    description:
      "Propuesta gastronómica enfocada en el producto, el menú, el ambiente y la reserva de mesa.",
    explores: "Cómo fotografía, ritmo y tipografía pueden convertir un menú en una experiencia.",
    capabilities: ["Menú", "Chef", "Reservas", "Ubicación"],
    image: "/images/landing/coleta.jpg",
    imageAlt: "Vista previa de la demostración gastronómica Coleta",
    href: "/demo/comida",
    cta: "Ver demo",
    external: false,
  },
  {
    slug: "localpos",
    name: "LocalPOS",
    type: "product",
    label: "Producto · Piloto activo",
    status: "Piloto para 3–5 negocios",
    niche: "Operación de negocios",
    description:
      "Producto independiente desarrollado por Atria para organizar ventas, productos, clientes e inventario.",
    explores: "Una interfaz operativa precisa, distinta del lenguaje editorial de los sitios web.",
    capabilities: ["Ventas", "Productos", "Inventario", "Reportes"],
    image: "/media/atria-scroll/desktop/stage-05-localpos.avif",
    imageAlt: "Vista del producto LocalPOS",
    href: "https://localpos-marketing.vercel.app/",
    cta: "Conocer LocalPOS",
    external: true,
  },
];

export function getWorkBySlug(slug: string) {
  return ATRIA_WORK.find((work) => work.slug === slug);
}
