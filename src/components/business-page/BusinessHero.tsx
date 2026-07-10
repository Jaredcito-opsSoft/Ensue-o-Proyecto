import type { Business } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { BusinessActions } from "./BusinessActions";
import { PageIntro } from "@/components/motion/PageIntro";

export function BusinessHero({ business }: { business: Business }) {
  return (
    <PageIntro>
      <section className="px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="rounded-[30px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-6 shadow-[var(--shadow-card)]">
            <Badge>{business.category}</Badge>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-none tracking-[-0.03em] sm:text-7xl">
              {business.name}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-[var(--pde-muted)]">
              {business.shortDescription}
            </p>
            <div className="mt-8">
              <BusinessActions business={business} />
            </div>
          </div>
          <img
            src={business.coverImageUrl}
            alt={business.name}
            className="min-h-[420px] rounded-[30px] border border-[var(--pde-border)] object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>
    </PageIntro>
  );
}
