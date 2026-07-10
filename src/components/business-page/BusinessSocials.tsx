import type { Business } from "@/types";
import { Card } from "@/components/ui/Card";

export function BusinessSocials({ business }: { business: Business }) {
  const links = [
    ["Facebook", business.facebookUrl],
    ["Instagram", business.instagramUrl],
    ["TikTok", business.tiktokUrl],
    ["Sitio web", business.websiteUrl],
  ].filter(([, href]) => href);

  if (!links.length) return null;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold">Redes</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {links.map(([label, href]) => (
          <a className="rounded-full border border-[var(--pde-border)] px-4 py-2 font-semibold" href={href} key={label}>
            {label}
          </a>
        ))}
      </div>
    </Card>
  );
}
