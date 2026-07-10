export const appConfig = {
  name: "Presencia Digital Express",
  shortName: "PDE",
  description:
    "Mini paginas profesionales con catalogo, WhatsApp, ubicacion y QR para negocios locales.",
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  whatsappSalesNumber: process.env.NEXT_PUBLIC_SALES_WHATSAPP || "529611234567",
};

export const serviceStatuses = {
  new: "Nuevo",
  pending_info: "Info pendiente",
  in_progress: "En configuracion",
  review: "En revision",
  delivered: "Entregado",
  changes_requested: "Cambios",
  finished: "Finalizado",
  suspended: "Suspendido",
} as const;

export const publicStatuses = {
  draft: "Borrador",
  published: "Publicado",
  hidden: "Oculto",
} as const;
