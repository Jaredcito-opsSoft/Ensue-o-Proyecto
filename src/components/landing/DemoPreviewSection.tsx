import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { demoBusinesses } from "@/lib/demo-data";
import { Reveal } from "@/components/motion/Reveal";

const routes: Record<string, string> = {
  "bella-imagen-tuxtla": "/demo/estetica",
  "sazon-coleta": "/demo/comida",
  "celfix-tuxtla": "/demo/taller",
};

export function DemoPreviewSection() {
  return (
    <Reveal>
      <section id="demos" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-earth)]">
                Demos
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                Tres nichos para validar rapido.
              </h2>
            </div>
            <Link className="font-semibold text-[var(--pde-accent)]" href="/negocio/bella-imagen-tuxtla">
              Ver mini pagina real
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {demoBusinesses.map((business) => (
              <Link
                href={routes[business.slug]}
                key={business.id}
                className="group overflow-hidden rounded-[28px] border border-[var(--pde-border)] bg-[var(--pde-surface)] shadow-[var(--shadow-card)]"
              >
                <img
                  src={business.coverImageUrl}
                  alt={business.name}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pde-muted)]">
                        {business.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">{business.name}</h3>
                    </div>
                    <ArrowUpRight className="text-[var(--pde-accent)]" />
                  </div>
                  <p className="mt-4 leading-7 text-[var(--pde-muted)]">{business.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
