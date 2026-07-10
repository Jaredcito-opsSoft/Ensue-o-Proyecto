import type { Business } from "@/types";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

export function BusinessGallery({ business }: { business: Business }) {
  return (
    <Reveal>
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
            Galeria
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em]">Fotos reales del negocio</h2>
          {business.images.length === 0 ? (
            <div className="mt-8 rounded-[24px] border border-dashed border-[var(--pde-border)] bg-[var(--pde-surface)] p-8 text-center">
              <h3 className="text-2xl font-semibold">Sin imagenes todavia</h3>
              <p className="mt-2 text-[var(--pde-muted)]">La galeria se puede completar con fotos autorizadas.</p>
            </div>
          ) : null}
          <AnimatedCards className="mt-8 grid gap-4 sm:grid-cols-3">
            {business.images.map((image, index) => (
              <img
                data-card
                key={image.id}
                src={image.imageUrl}
                alt={image.altText}
                className={`h-72 w-full rounded-[24px] border border-[var(--pde-border)] object-cover shadow-[var(--shadow-card)] ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              />
            ))}
          </AnimatedCards>
        </div>
      </section>
    </Reveal>
  );
}
