import type { Business } from "@/types";

export const demoBusinesses: Business[] = [
  {
    id: "demo-estetica",
    name: "Beauty LA",
    slug: "bella-imagen-tuxtla",
    category: "Belleza",
    shortDescription: "Estudio boutique de belleza, faciales, cabello, uñas y maquillaje.",
    longDescription:
      "Belleza con carácter y calma con estilo. Tratamientos personalizados en un ambiente íntimo y sofisticado.",
    whatsapp: "529611234567",
    phone: "(323) 555-0199",
    address: "Los Ángeles, California",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Melrose%20Avenue%20Los%20Angeles",
    instagramUrl: "https://instagram.com/",
    coverImageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=84",
    primaryColor: "#1E1C19",
    accentColor: "#B39A83",
    status: "published",
    serviceStatus: "delivered",
    hours: [
      { day: "Lunes a viernes", opensAt: "10:00", closesAt: "19:00" },
      { day: "Sabado", opensAt: "10:00", closesAt: "16:00" },
      { day: "Domingo", isClosed: true, notes: "Cerrado" },
    ],
    items: [
      { id: "corte", name: "Corte de cabello", description: "Corte, secado y recomendaciones de cuidado.", price: "$180", category: "Cabello", isVisible: true, isFeatured: true, sortOrder: 1 },
      { id: "tinte", name: "Tinte", description: "Aplicacion de color con diagnostico previo.", price: "Desde $650", category: "Color", isVisible: true, sortOrder: 2 },
      { id: "unas", name: "Unas acrilicas", description: "Aplicacion, retoque y disenos sobrios.", price: "Desde $300", category: "Unas", isVisible: true, sortOrder: 3 },
      { id: "maquillaje", name: "Maquillaje", description: "Social, evento o sesion fotografica.", price: "Desde $450", category: "Evento", isVisible: true, sortOrder: 4 },
      { id: "peinado", name: "Peinado para evento", description: "Peinados recogidos, ondas y acabado profesional.", price: "Desde $380", category: "Evento", isVisible: true, sortOrder: 5 },
    ],
    images: [
      { id: "salon", imageUrl: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=80", altText: "Interior de estetica", type: "gallery", sortOrder: 1 },
      { id: "nails", imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80", altText: "Servicio de unas", type: "service", sortOrder: 2 },
      { id: "makeup", imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80", altText: "Maquillaje profesional", type: "service", sortOrder: 3 },
    ],
  },
  {
    id: "demo-comida",
    name: "Coleta",
    slug: "sazon-coleta",
    category: "Comida",
    shortDescription: "Cocina contemporánea que honra el producto, el territorio y el tiempo.",
    longDescription:
      "Una experiencia de cocina de origen con menú degustación, maridajes y reservas directas.",
    whatsapp: "529612345678",
    phone: "961 234 5678",
    address: "San Cristóbal de Las Casas, Chiapas",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=San%20Cristobal%20de%20Las%20Casas%20Chiapas",
    facebookUrl: "https://facebook.com/",
    coverImageUrl:
      "https://images.unsplash.com/photo-1616669944447-d65d41a222bd?auto=format&fit=crop&w=1400&q=86",
    primaryColor: "#0D0D0C",
    accentColor: "#B79A5B",
    status: "published",
    serviceStatus: "delivered",
    hours: [
      { day: "Lunes a sabado", opensAt: "08:00", closesAt: "18:00" },
      { day: "Domingo", opensAt: "08:00", closesAt: "14:00" },
    ],
    items: [
      { id: "desayunos", name: "Desayunos", description: "Huevos, chilaquiles, cafe y fruta.", price: "Desde $95", category: "Desayunos", isVisible: true, isFeatured: true, sortOrder: 1 },
      { id: "antojitos", name: "Antojitos", description: "Tostadas, quesadillas y empanadas.", price: "Desde $35", category: "Menu", isVisible: true, sortOrder: 2 },
      { id: "bebidas", name: "Bebidas", description: "Aguas frescas, cafe y refrescos.", price: "Desde $25", category: "Bebidas", isVisible: true, sortOrder: 3 },
      { id: "familiares", name: "Paquetes familiares", description: "Ordenes para compartir con guarniciones.", price: "Desde $280", category: "Paquetes", isVisible: true, sortOrder: 4 },
      { id: "promos", name: "Promociones", description: "Combos semanales segun disponibilidad.", price: "Preguntar", category: "Promos", isVisible: true, sortOrder: 5 },
    ],
    images: [
      { id: "dish", imageUrl: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1000&q=80", altText: "Platillo servido", type: "gallery", sortOrder: 1 },
      { id: "table", imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80", altText: "Mesa con comida", type: "gallery", sortOrder: 2 },
      { id: "drink", imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=80", altText: "Bebida fria", type: "product", sortOrder: 3 },
    ],
  },
  {
    id: "demo-taller",
    name: "CelFix Tuxtla",
    slug: "celfix-tuxtla",
    category: "Reparaciones",
    shortDescription: "Reparacion de celulares con diagnostico claro y contacto directo.",
    longDescription:
      "Servicio tecnico para pantallas, baterias, centros de carga y fallas comunes. Recibe una orientacion inicial por WhatsApp antes de visitar el taller.",
    whatsapp: "529613456789",
    phone: "961 345 6789",
    address: "Tuxtla Gutierrez, Chiapas",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tuxtla%20Gutierrez%20Chiapas",
    websiteUrl: "https://example.com",
    coverImageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    primaryColor: "#17213A",
    accentColor: "#25B7A5",
    status: "published",
    serviceStatus: "delivered",
    hours: [
      { day: "Lunes a viernes", opensAt: "09:00", closesAt: "19:00" },
      { day: "Sabado", opensAt: "10:00", closesAt: "15:00" },
    ],
    items: [
      { id: "pantalla", name: "Cambio de pantalla", description: "Revision del modelo y cotizacion por WhatsApp.", price: "Cotizar", category: "Reparacion", isVisible: true, isFeatured: true, sortOrder: 1 },
      { id: "bateria", name: "Cambio de bateria", description: "Diagnostico de rendimiento y reemplazo.", price: "Desde $450", category: "Reparacion", isVisible: true, sortOrder: 2 },
      { id: "carga", name: "Centro de carga", description: "Limpieza, revision o cambio de pieza.", price: "Desde $350", category: "Reparacion", isVisible: true, sortOrder: 3 },
      { id: "bocinas", name: "Bocinas", description: "Revision de audio, llamadas y multimedia.", price: "Cotizar", category: "Audio", isVisible: true, sortOrder: 4 },
      { id: "diagnostico", name: "Diagnostico", description: "Revision inicial para detectar la falla.", price: "$100", category: "Revision", isVisible: true, sortOrder: 5 },
    ],
    images: [
      { id: "bench", imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80", altText: "Mesa de trabajo tecnico", type: "place", sortOrder: 1 },
      { id: "phone", imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80", altText: "Celular en reparacion", type: "service", sortOrder: 2 },
      { id: "tools", imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80", altText: "Herramientas de reparacion", type: "gallery", sortOrder: 3 },
    ],
  },
];

export function getDemoBusinessBySlug(slug: string) {
  return demoBusinesses.find((business) => business.slug === slug);
}
