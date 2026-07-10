import type { Business } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

export function BusinessInfo({ business }: { business: Business }) {
  return (
    <Reveal>
      <section className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
            Sobre el negocio
          </p>
          <p className="mt-4 text-pretty text-2xl font-medium leading-10 text-[var(--pde-ink)]">
            {business.longDescription}
          </p>
        </div>
      </section>
    </Reveal>
  );
}
