import type { Business } from "@/types";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { formatPrice } from "@/lib/format";

export function BusinessItems({ business }: { business: Business }) {
  const items = business.items.filter((item) => item.isVisible).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Reveal>
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold tracking-[-0.02em]">Servicios y productos</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <Card key={item.id} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--pde-muted)]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{item.name}</h3>
                  </div>
                  <p className="rounded-full bg-[var(--pde-paper-strong)] px-3 py-1 font-mono text-sm font-semibold">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <p className="mt-4 leading-7 text-[var(--pde-muted)]">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
