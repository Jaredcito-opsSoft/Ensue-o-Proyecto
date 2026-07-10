import type { Business } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

export function BusinessGallery({ business }: { business: Business }) {
  return (
    <Reveal>
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-semibold tracking-[-0.02em]">Fotos</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {business.images.map((image, index) => (
              <img
                key={image.id}
                src={image.imageUrl}
                alt={image.altText}
                className={`h-72 w-full rounded-[24px] border border-[var(--pde-border)] object-cover shadow-[var(--shadow-card)] ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
