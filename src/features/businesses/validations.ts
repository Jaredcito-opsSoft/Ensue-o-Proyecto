import { z } from "zod";
import { isValidSlug } from "@/lib/slug";
import { isValidWhatsApp } from "@/lib/whatsapp";

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine((value) => !value || URL.canParse(value), "URL invalida");

export const businessSchema = z.object({
  name: z.string().trim().min(2, "Nombre requerido"),
  slug: z.string().trim().min(2).refine(isValidSlug, "Slug invalido"),
  category: z.string().trim().min(2, "Categoria requerida"),
  shortDescription: z.string().trim().min(10).max(180),
  longDescription: z.string().trim().max(1000).optional(),
  whatsapp: z.string().trim().refine(isValidWhatsApp, "WhatsApp invalido"),
  phone: z.string().trim().optional(),
  email: z.string().trim().email().optional().or(z.literal("")),
  address: z.string().trim().min(4, "Direccion requerida"),
  mapsUrl: optionalUrl,
  facebookUrl: optionalUrl,
  instagramUrl: optionalUrl,
  tiktokUrl: optionalUrl,
  websiteUrl: optionalUrl,
  logoUrl: optionalUrl,
  coverImageUrl: optionalUrl,
  primaryColor: z.string().trim().default("#000000"),
  accentColor: z.string().trim().default("#FFF546"),
  status: z.enum(["draft", "published", "hidden"]),
  serviceStatus: z.enum([
    "new",
    "pending_info",
    "in_progress",
    "review",
    "delivered",
    "changes_requested",
    "finished",
    "suspended",
  ]),
});

export const serviceItemSchema = z.object({
  name: z.string().trim().min(2, "Nombre requerido"),
  description: z.string().trim().max(500).optional(),
  price: z.string().trim().optional(),
  category: z.string().trim().optional(),
  imageUrl: optionalUrl,
  isVisible: z.coerce.boolean().default(true),
  isFeatured: z.coerce.boolean().default(false),
  sortOrder: z.coerce.number().int().default(0),
});
