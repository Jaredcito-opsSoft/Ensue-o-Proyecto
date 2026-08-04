import type { Metadata } from "next";
import { CinematicLanding } from "@/components/landing/CinematicLanding";
import { AtriaStructuredData } from "@/components/seo/AtriaStructuredData";
import { absoluteUrl, atriaSite } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: atriaSite.homeTitle },
  description: atriaSite.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: atriaSite.homeTitle,
    description: atriaSite.description,
    url: absoluteUrl("/"),
    siteName: atriaSite.name,
    locale: atriaSite.locale,
    type: "website",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Atria, diseño web y soluciones digitales para negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: atriaSite.homeTitle,
    description: atriaSite.description,
    images: ["/og-image"],
  },
};

export default function HomePage() {
  return (
    <>
      <AtriaStructuredData />
      <CinematicLanding />
    </>
  );
}
