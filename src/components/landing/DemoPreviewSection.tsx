import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { demoBusinesses } from "@/lib/demo-data";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

const routes: Record<string, string> = {
  "bella-imagen-tuxtla": "/demo/estetica",
  "sazon-coleta": "/demo/comida",
  "celfix-tuxtla": "/demo/taller",
};

const demoBenefits: Record<string, string> = {
  "bella-imagen-tuxtla": "Servicios visuales, agenda por mensaje y fotos cuidadas.",
  "sazon-coleta": "Menu claro para pedir sin preguntar plato por plato.",
  "celfix-tuxtla": "Confianza tecnica, servicios claros y ubicacion directa.",
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
          <AnimatedCards className="mt-10 grid gap-5 lg:grid-cols-3">
            {demoBusinesses.map((business) => (
              <Link
                data-card
                href={routes[business.slug]}
                key={business.id}
                className="group overflow-hidden rounded-[30px] border border-white/70 bg-[var(--pde-glass)] shadow-[var(--shadow-card)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <Image
                    src={business.coverImageUrl}
                    alt={business.name}
                    width={900}
                    height={620}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="h-72 w-full object-cover grayscale contrast-125 saturate-0 transition-transform duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:saturate-100"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-[var(--pde-glass)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--pde-accent)] backdrop-blur-xl">
                    Demo
                  </span>
                </div>
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
                  <p className="mt-4 rounded-2xl bg-[var(--pde-surface-strong)] p-4 text-sm font-semibold leading-6 text-[var(--pde-ink)]">
                    {demoBenefits[business.slug]}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedCards>
        </div>
      </section>
    </Reveal>
  );
}
