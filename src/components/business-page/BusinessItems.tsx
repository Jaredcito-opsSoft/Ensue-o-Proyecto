import type { Business } from "@/types";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { formatPrice } from "@/lib/format";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

export function BusinessItems({ business }: { business: Business }) {
  const items = business.items.filter((item) => item.isVisible).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Reveal>
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
                Catalogo
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em]">Servicios y productos</h2>
            </div>
            <p className="max-w-md text-[var(--pde-muted)]">
              Revisa opciones, precios de referencia y escribe por WhatsApp para confirmar disponibilidad.
            </p>
          </div>
          {items.length === 0 ? (
            <div className="mt-8 rounded-[24px] border border-dashed border-[var(--pde-border)] bg-[var(--pde-surface)] p-8 text-center">
              <h3 className="text-2xl font-semibold">Catalogo en preparacion</h3>
              <p className="mt-2 text-[var(--pde-muted)]">Este negocio pronto agregara servicios o productos.</p>
            </div>
          ) : null}
          <AnimatedCards className="mt-8 grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <Card data-card key={item.id} className="p-5">
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
                {item.isFeatured ? (
                  <p className="mt-5 inline-flex rounded-full bg-[var(--pde-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    Destacado
                  </p>
                ) : null}
              </Card>
            ))}
          </AnimatedCards>
        </div>
      </section>
    </Reveal>
  );
}
