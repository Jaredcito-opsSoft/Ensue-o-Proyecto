import type { Business } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

export function BusinessInfo({ business }: { business: Business }) {
  return (
    <Reveal>
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[30px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-6 shadow-[var(--shadow-card)] lg:grid-cols-[0.35fr_0.65fr] lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
            Sobre el negocio
          </p>
          <p className="text-pretty text-2xl font-medium leading-10 text-[var(--pde-ink)]">
            {business.longDescription}
          </p>
        </div>
      </section>
    </Reveal>
  );
}
