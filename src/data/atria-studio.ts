export type StudioRouteId =
  | "atria-web"
  | "work"
  | "ensueno"
  | "localpos"
  | "different";

export type StudioRoute = {
  id: StudioRouteId;
  label: string;
  title: string;
  description: string;
  note: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const STUDIO_ROUTES: StudioRoute[] = [
  {
    id: "atria-web",
    label: "Alebrije Web",
    title: "Necesito una página para mi negocio.",
    description: "Sitios web y presencia online organizados alrededor de una necesidad real.",
    note: "Servicio principal",
    cta: "Explorar Alebrije Web",
    href: "#atria-web",
    image: "/media/atria-scroll/desktop/stage-02-web.avif",
    imageAlt: "Proceso de construcción de una presencia web profesional",
  },
  {
    id: "work",
    label: "Archivo vivo",
    title: "Quiero explorar proyectos y demostraciones.",
    description: "Abre un caso real, dos demostraciones navegables y un producto en piloto.",
    note: "Trabajo comprobable",
    cta: "Abrir el archivo",
    href: "#proyectos",
    image: "/images/landing/cellab-project.avif",
    imageAlt: "Vista del proyecto CelLab Tuxtla en producción",
  },
  {
    id: "ensueno",
    label: "Ensueño Momentos",
    title: "Estoy preparando un momento especial.",
    description: "Experiencias digitales para compartir la información y memoria de una celebración.",
    note: "Una línea de Alebrije Tech",
    cta: "Conocer Ensueño",
    href: "#momentos",
    image: "/images/landing/ensueno-momentos-event.jpg",
    imageAlt: "Celebración compartida alrededor de una mesa",
  },
  {
    id: "localpos",
    label: "LocalPOS",
    title: "Necesito organizar ventas e inventario.",
    description: "Un producto independiente para pequeños negocios que quieren dejar atrás la libreta.",
    note: "Piloto activo",
    cta: "Conocer LocalPOS",
    href: "#localpos",
    image: "/media/atria-scroll/desktop/stage-05-localpos.avif",
    imageAlt: "Interfaz del producto LocalPOS",
  },
  {
    id: "different",
    label: "Proyecto diferente",
    title: "Tengo una idea que no cabe en una categoría.",
    description: "Revisamos primero el contexto, la complejidad y nuestra capacidad para atenderla bien.",
    note: "Evaluación de alcance",
    cta: "Contar mi idea",
    href: "#contacto",
    image: "/media/atria-scroll/desktop/stage-01-planning.avif",
    imageAlt: "Mesa de planeación para una solución digital",
  },
];

export const ATRIA_WEB_LAYERS = [
  {
    id: "business",
    number: "01",
    label: "Negocio",
    title: "Partimos de una necesidad concreta.",
    description: "Qué ofreces, a quién atiendes y qué acción debe facilitar el sitio.",
    image: "/media/atria-scroll/desktop/stage-01-planning.avif",
    artifact: "Objetivo y alcance",
  },
  {
    id: "information",
    number: "02",
    label: "Información",
    title: "Ordenamos lo que hoy está disperso.",
    description: "Servicios, productos, horarios, contacto, ubicación y contenido entregado por el cliente.",
    image: "/media/atria-scroll/desktop/stage-01-planning.avif",
    artifact: "Arquitectura de contenido",
  },
  {
    id: "identity",
    number: "03",
    label: "Identidad",
    title: "Definimos una dirección reconocible.",
    description: "Jerarquía, tipografía, color, fotografía y tono ajustados al negocio.",
    image: "/images/landing/beauty-la.jpg",
    artifact: "Sistema visual",
  },
  {
    id: "interface",
    number: "04",
    label: "Interfaz",
    title: "La información se convierte en una experiencia.",
    description: "Diseñamos la navegación y las acciones para móvil, tableta y escritorio.",
    image: "/images/landing/coleta.jpg",
    artifact: "Versión funcional",
  },
  {
    id: "presence",
    number: "05",
    label: "Presencia online",
    title: "Conectamos el sitio con los canales correctos.",
    description: "Dominio, Google, Maps, WhatsApp, Search Console y redes existentes según alcance.",
    image: "/media/atria-scroll/desktop/stage-03-presence.avif",
    artifact: "Canales conectados",
  },
  {
    id: "publish",
    number: "06",
    label: "Publicación",
    title: "Probamos, publicamos y dejamos una base preparada.",
    description: "El proyecto sale con alcance, propiedad, soporte y próximos pasos definidos.",
    image: "/media/atria-scroll/desktop/stage-06-growth.avif",
    artifact: "Sitio publicado",
  },
] as const;

export const PROJECT_STATES = [
  {
    number: "01",
    title: "Solicitud recibida",
    atria: "Revisa la necesidad y confirma si está dentro de su capacidad.",
    client: "Comparte contexto, objetivo y una idea inicial.",
    deliverable: "Primera orientación.",
    gate: "La necesidad es viable.",
  },
  {
    number: "02",
    title: "Alcance definido",
    atria: "Propone modalidad, entregables, costo y calendario.",
    client: "Aclara prioridades y aprueba la propuesta.",
    deliverable: "Propuesta de trabajo.",
    gate: "Anticipo del 50%.",
  },
  {
    number: "03",
    title: "Contenido entregado",
    atria: "Organiza textos, recursos y accesos recibidos.",
    client: "Entrega información completa y confirma datos.",
    deliverable: "Base de contenido.",
    gate: "Material completo.",
  },
  {
    number: "04",
    title: "Diseño en revisión",
    atria: "Construye la dirección visual y la experiencia.",
    client: "Revisa y concentra comentarios dentro del alcance.",
    deliverable: "Diseño y navegación.",
    gate: "Dirección aprobada.",
  },
  {
    number: "05",
    title: "Versión funcional",
    atria: "Desarrolla, prueba y prepara la publicación.",
    client: "Valida contenido y funciones acordadas.",
    deliverable: "Versión navegable.",
    gate: "Pago restante.",
  },
  {
    number: "06",
    title: "Publicado",
    atria: "Conecta dominio, entrega y activa el soporte acordado.",
    client: "Recibe accesos y próximos pasos.",
    deliverable: "Proyecto en línea.",
    gate: "Mantenimiento opcional.",
  },
] as const;
