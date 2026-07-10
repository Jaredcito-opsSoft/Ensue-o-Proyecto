import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const businessStatusEnum = pgEnum("business_status", ["draft", "published", "hidden"]);

export const serviceStatusEnum = pgEnum("service_status", [
  "new",
  "pending_info",
  "in_progress",
  "review",
  "delivered",
  "changes_requested",
  "finished",
  "suspended",
]);

export const adminUsers = pgTable("admin_users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("admin"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const businesses = pgTable(
  "businesses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    category: text("category").notNull(),
    shortDescription: text("short_description").notNull(),
    longDescription: text("long_description").notNull().default(""),
    whatsapp: text("whatsapp").notNull(),
    phone: text("phone"),
    email: text("email"),
    address: text("address").notNull(),
    mapsUrl: text("maps_url"),
    facebookUrl: text("facebook_url"),
    instagramUrl: text("instagram_url"),
    tiktokUrl: text("tiktok_url"),
    websiteUrl: text("website_url"),
    logoUrl: text("logo_url"),
    coverImageUrl: text("cover_image_url"),
    primaryColor: text("primary_color").notNull().default("#0F3D2E"),
    accentColor: text("accent_color").notNull().default("#8A5A44"),
    status: businessStatusEnum("status").notNull().default("draft"),
    serviceStatus: serviceStatusEnum("service_status").notNull().default("new"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index("businesses_slug_idx").on(table.slug)]
);

export const businessHours = pgTable(
  "business_hours",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    businessId: uuid("business_id")
      .references(() => businesses.id, { onDelete: "cascade" })
      .notNull(),
    dayOfWeek: text("day_of_week").notNull(),
    opensAt: text("opens_at"),
    closesAt: text("closes_at"),
    isClosed: boolean("is_closed").notNull().default(false),
    notes: text("notes"),
  },
  (table) => [index("business_hours_business_idx").on(table.businessId)]
);

export const businessItems = pgTable(
  "business_items",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    businessId: uuid("business_id")
      .references(() => businesses.id, { onDelete: "cascade" })
      .notNull(),
    name: text("name").notNull(),
    description: text("description").notNull().default(""),
    price: text("price"),
    category: text("category"),
    imageUrl: text("image_url"),
    isVisible: boolean("is_visible").notNull().default(true),
    isFeatured: boolean("is_featured").notNull().default(false),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index("business_items_business_idx").on(table.businessId)]
);

export const businessImages = pgTable(
  "business_images",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    businessId: uuid("business_id")
      .references(() => businesses.id, { onDelete: "cascade" })
      .notNull(),
    imageUrl: text("image_url").notNull(),
    altText: text("alt_text").notNull().default("Imagen del negocio"),
    caption: text("caption"),
    type: text("type").notNull().default("gallery"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index("business_images_business_idx").on(table.businessId)]
);

export const serviceRequests = pgTable("service_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  contactName: text("contact_name").notNull(),
  businessName: text("business_name").notNull(),
  businessType: text("business_type").notNull(),
  whatsapp: text("whatsapp").notNull(),
  message: text("message"),
  hasGoogleMaps: boolean("has_google_maps").notNull().default(false),
  hasWhatsappBusiness: boolean("has_whatsapp_business").notNull().default(false),
  hasCatalog: boolean("has_catalog").notNull().default(false),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
