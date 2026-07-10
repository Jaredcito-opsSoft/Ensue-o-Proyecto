import { eq } from "drizzle-orm";
import { businesses } from "@/db/schema";
import { getDb } from "@/db";
import { demoBusinesses, getDemoBusinessBySlug } from "@/lib/demo-data";

export async function getPublishedBusinessBySlug(slug: string) {
  if (!process.env.DATABASE_URL) {
    return getDemoBusinessBySlug(slug);
  }

  const db = getDb();
  const [business] = await db
    .select()
    .from(businesses)
    .where(eq(businesses.slug, slug))
    .limit(1);

  if (!business || business.status !== "published") return undefined;

  return getDemoBusinessBySlug(slug) ?? {
    ...demoBusinesses[0],
    id: business.id,
    name: business.name,
    slug: business.slug,
    category: business.category,
    shortDescription: business.shortDescription,
    longDescription: business.longDescription,
    whatsapp: business.whatsapp,
    phone: business.phone ?? undefined,
    email: business.email ?? undefined,
    address: business.address,
    mapsUrl: business.mapsUrl ?? "",
    facebookUrl: business.facebookUrl ?? undefined,
    instagramUrl: business.instagramUrl ?? undefined,
    tiktokUrl: business.tiktokUrl ?? undefined,
    websiteUrl: business.websiteUrl ?? undefined,
    logoUrl: business.logoUrl ?? undefined,
    coverImageUrl: business.coverImageUrl ?? demoBusinesses[0].coverImageUrl,
    primaryColor: business.primaryColor,
    accentColor: business.accentColor,
    status: business.status,
    serviceStatus: business.serviceStatus,
  };
}

export async function listBusinessesForPanel() {
  if (!process.env.DATABASE_URL) return demoBusinesses;

  const db = getDb();
  const rows = await db.select().from(businesses);
  return rows.map((row) => ({
    ...demoBusinesses[0],
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    shortDescription: row.shortDescription,
    longDescription: row.longDescription,
    whatsapp: row.whatsapp,
    phone: row.phone ?? undefined,
    email: row.email ?? undefined,
    address: row.address,
    mapsUrl: row.mapsUrl ?? "",
    facebookUrl: row.facebookUrl ?? undefined,
    instagramUrl: row.instagramUrl ?? undefined,
    tiktokUrl: row.tiktokUrl ?? undefined,
    websiteUrl: row.websiteUrl ?? undefined,
    logoUrl: row.logoUrl ?? undefined,
    coverImageUrl: row.coverImageUrl ?? demoBusinesses[0].coverImageUrl,
    primaryColor: row.primaryColor,
    accentColor: row.accentColor,
    status: row.status,
    serviceStatus: row.serviceStatus,
  }));
}
