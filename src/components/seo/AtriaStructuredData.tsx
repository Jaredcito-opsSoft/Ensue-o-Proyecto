import { atriaSite, isProductionDeployment, siteUrl } from "@/lib/site";

const organizationId = `${siteUrl}/#organization`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: atriaSite.name,
      alternateName: atriaSite.alternateName,
      url: siteUrl,
      inLanguage: atriaSite.language,
      publisher: { "@id": organizationId },
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: atriaSite.name,
      alternateName: atriaSite.alternateName,
      url: siteUrl,
      description: atriaSite.description,
      telephone: atriaSite.phoneE164,
      email: atriaSite.email,
      areaServed: [
        { "@type": "City", name: "Tuxtla Gutiérrez" },
        { "@type": "AdministrativeArea", name: "Chiapas" },
        { "@type": "Country", name: "México" },
      ],
    },
    ...[
      "Diseño y desarrollo de sitios web",
      "Presencia online incluida en Atria Web",
      "Experiencias digitales mediante Ensueño Momentos",
      "Desarrollo de soluciones digitales personalizadas",
    ].map((name, index) => ({
      "@type": "Service",
      "@id": `${siteUrl}/#service-${index + 1}`,
      name,
      provider: { "@id": organizationId },
      areaServed: ["Tuxtla Gutiérrez", "Chiapas", "México"],
    })),
  ],
};

export function AtriaStructuredData() {
  if (!isProductionDeployment) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
