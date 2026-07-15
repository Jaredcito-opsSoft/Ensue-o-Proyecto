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
  "sazon-coleta": "Menú claro para pedir sin preguntar plato por plato.",
  "celfix-tuxtla": "Confianza técnica, servicios claros y ubicación directa.",
};

export function DemoPreviewSection() {
  return (
    <Reveal>
      <section id="demos" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-coral)]">
                Demos
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
                Tres nichos para validar rápido.
              </h2>
            </div>
            <Link className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--pde-border)] bg-[#283e92]/60 px-4 py-2 font-semibold text-white shadow-[var(--shadow-soft)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5" href="/negocio/bella-imagen-tuxtla">
              Ver una página real <ArrowUpRight size={16} />
            </Link>
          </div>
          <AnimatedCards className="mt-10 grid gap-5 lg:grid-cols-3">
            {demoBusinesses.map((business) => (
              <Link
                data-card
                href={routes[business.slug]}
                key={business.id}
                className="group overflow-hidden rounded-[24px] border border-[var(--pde-border)] bg-[#1d347f]/64 shadow-[var(--shadow-card)] backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#ffb5cd]/65 hover:shadow-[0_20px_42px_rgba(255,111,159,0.16)]"
              >
                <div className="relative">
                  <Image
                    src={business.coverImageUrl}
                    alt={business.name}
                    width={900}
                    height={620}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="h-72 w-full object-cover saturate-125 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#1c2d75]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-xl">
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
                    <ArrowUpRight className="text-[var(--pde-accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="mt-4 leading-7 text-[var(--pde-muted)]">{business.shortDescription}</p>
                  <p className="mt-4 rounded-2xl border border-white/15 bg-white/8 p-4 text-sm font-semibold leading-6 text-white/90">
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
