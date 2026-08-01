import type { MetadataRoute } from "next";
import { absoluteUrl, isProductionDeployment, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/panel"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
