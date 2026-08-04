const DEFAULT_SITE_URL = "https://atria-designstudio.vercel.app";

function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim() || DEFAULT_SITE_URL;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:") return DEFAULT_SITE_URL;

    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const isProductionDeployment = process.env.VERCEL_ENV === "production";

export const atriaSite = {
  name: "Atria",
  alternateName: "Atria Estudio Digital",
  defaultTitle: "Atria | Diseño web y soluciones digitales para negocios",
  homeTitle: "Atria | Diseño web y soluciones digitales para negocios",
  description:
    "Creamos sitios web, presencia online, experiencias digitales para eventos y herramientas para pequeños negocios. Trabajamos de forma remota desde Chiapas.",
  phone: "+52 961 285 8828",
  phoneE164: "+529612858828",
  email: "atriacontacto.mx@gmail.com",
  locale: "es_MX",
  language: "es-MX",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
