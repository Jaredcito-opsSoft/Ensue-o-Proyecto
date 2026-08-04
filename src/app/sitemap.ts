import type { MetadataRoute } from "next";
import { absoluteUrl, isProductionDeployment } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isProductionDeployment) return [];

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/privacidad"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: absoluteUrl("/terminos"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
