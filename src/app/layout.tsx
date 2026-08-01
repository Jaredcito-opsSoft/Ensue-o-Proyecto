import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { atriaSite, isProductionDeployment, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: atriaSite.defaultTitle,
    template: "%s | Atria",
  },
  description: atriaSite.description,
  keywords: [
    "Atria",
    "Estudio Digital",
    "Diseño Web",
    "Desarrollo Web",
    "Presencia Online",
    "Tuxtla Gutiérrez",
    "LocalPOS",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: atriaSite.defaultTitle,
    description: atriaSite.description,
    url: siteUrl,
    siteName: atriaSite.name,
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Atria, estudio digital para negocios",
      },
    ],
    locale: atriaSite.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: atriaSite.defaultTitle,
    description: atriaSite.description,
    images: ["/og-image"],
  },
  robots: isProductionDeployment
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
        googleBot: { index: false, follow: false, noarchive: true },
      },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
