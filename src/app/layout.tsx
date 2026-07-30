import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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
  metadataBase: new URL("https://atria-designstudio.vercel.app"),
  title: {
    default: "Atria — Estudio Digital | Diseño, Código & Presencia Web",
    template: "%s | Atria — Estudio Digital",
  },
  description:
    "Estudio digital especializado en presencia online, sitios web a medida, experiencias digitales para eventos y soluciones tecnológicas para negocios.",
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
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Atria — Estudio Digital para Negocios",
    description:
      "Diseño web, experiencias interactivas y soluciones digitales creadas a medida para tu marca.",
    url: "https://atria-designstudio.vercel.app",
    siteName: "Atria — Estudio Digital",
    locale: "es_MX",
    type: "website",
  },
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
