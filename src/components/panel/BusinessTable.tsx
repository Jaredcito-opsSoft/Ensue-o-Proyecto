import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Business } from "@/types";
import { StatusBadge } from "./StatusBadge";

export function BusinessTable({ businesses }: { businesses: Business[] }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[var(--pde-border)] bg-[var(--pde-surface)]">
      <div className="grid grid-cols-[1fr_130px_130px_120px] border-b border-[var(--pde-border)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--pde-muted)] max-md:hidden">
        <span>Negocio</span>
        <span>Publico</span>
        <span>Servicio</span>
        <span>Entrega</span>
      </div>
      {businesses.map((business) => (
        <div
          className="grid gap-4 border-b border-[var(--pde-border)] px-5 py-4 last:border-b-0 md:grid-cols-[1fr_130px_130px_120px] md:items-center"
          key={business.id}
        >
          <div>
            <Link className="text-lg font-semibold hover:text-[var(--pde-accent)]" href={`/panel/negocios/${business.id}`}>
              {business.name}
            </Link>
            <p className="mt-1 text-sm text-[var(--pde-muted)]">/{business.slug} · {business.category}</p>
          </div>
          <StatusBadge status={business.status} />
          <StatusBadge status={business.serviceStatus} />
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pde-accent)]"
            href={`/negocio/${business.slug}`}
          >
            Ver <ExternalLink size={15} />
          </Link>
        </div>
      ))}
    </div>
  );
}
