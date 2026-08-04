import Image from "next/image";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { ATRIA_WORK, type AtriaWork } from "@/data/atria-work";

function WorkLink({ work, className = "" }: { work: AtriaWork; className?: string }) {
  return (
    <a href={work.href} target={work.external ? "_blank" : undefined} rel={work.external ? "noopener noreferrer" : undefined} className={`group inline-flex items-center gap-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--atria-accent)] ${className}`} aria-label={`${work.cta}${work.external ? ", abre en una pestaña nueva" : ""}`}>
      {work.cta}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
    </a>
  );
}

function WorkStatus({ work, dark = false }: { work: AtriaWork; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase ${dark ? "text-white/70" : "text-[var(--atria-muted)]"}`}>
      <CircleDot size={11} className={work.type === "demo" ? "text-[#e5a257]" : "text-[var(--atria-accent)]"} aria-hidden />
      {work.status}
    </span>
  );
}

export function WorkShowcase() {
  const featured = ATRIA_WORK.find((work) => work.featured) ?? ATRIA_WORK[0];
  const supporting = ATRIA_WORK.filter((work) => work.slug !== featured.slug);

  return (
    <section id="proyectos" className="scroll-mt-24 bg-[var(--atria-page)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="work-title">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 border-t border-black/12 pt-9 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Archivo vivo</p>
            <h2 id="work-title" className="mt-4 max-w-4xl font-serif text-5xl font-medium leading-[0.94] sm:text-6xl lg:text-7xl">Trabajo que puedes abrir, recorrer y distinguir.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">Un caso real ocupa el centro. A su alrededor, demostraciones y productos revelan distintos tipos de criterio, interfaz y alcance.</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <article id={`work-${featured.slug}`} className="group relative min-h-[610px] overflow-hidden bg-[#0f1012] text-white sm:min-h-[720px]">
            <Image src={featured.image} alt={featured.imageAlt} fill unoptimized sizes="(max-width: 1023px) 100vw, 68vw" className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.015]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,10,.94)_0%,rgba(8,9,10,.2)_58%,rgba(8,9,10,.08)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-[var(--atria-accent)] px-3 py-1.5 text-[10px] font-bold uppercase">{featured.label}</span>
                <WorkStatus work={featured} dark />
              </div>
              <h3 className="mt-7 font-serif text-5xl font-medium leading-none sm:text-7xl">{featured.name}</h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/78">{featured.explores}</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase text-white/55">{featured.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
              <WorkLink work={featured} className="mt-8 border-b border-white/35 pb-2 text-white hover:border-[var(--atria-gold)]" />
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {supporting.map((work, index) => (
              <article id={`work-${work.slug}`} key={work.slug} className={`group grid min-h-[286px] overflow-hidden border border-black/12 bg-white ${index === supporting.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <div className="relative min-h-[150px] overflow-hidden bg-[#ddd9d4]">
                  <Image src={work.image} alt={work.imageAlt} fill sizes="(max-width: 767px) 100vw, 34vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="flex flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-[10px] font-bold uppercase text-[var(--atria-accent)]">{work.label}</span><WorkStatus work={work} /></div>
                  <h3 className="mt-4 font-serif text-3xl font-medium leading-none">{work.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--atria-ink-soft)]">{work.explores}</p>
                  <WorkLink work={work} className="mt-5 border-t border-black/12 pt-4" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-xs leading-5 text-[var(--atria-muted)]">Las demostraciones son conceptos navegables creados por Atria. No representan clientes ni resultados comerciales.</p>
      </div>
    </section>
  );
}
