import Image from "next/image";
import { ArrowUpRight, MoveRight } from "lucide-react";

const demos = [
  {
    name: "Beauty LA",
    field: "Belleza y bienestar",
    question: "¿Cómo puede sentirse una marca íntima, editorial y fácil de reservar?",
    details: ["Ritmo visual", "Servicios", "Galería", "Reserva"],
    image: "/images/landing/beauty-la.jpg",
    href: "/demo/estetica",
  },
  {
    name: "Coleta",
    field: "Gastronomía",
    question: "¿Cómo puede una fotografía conducir del deseo a la reserva?",
    details: ["Producto", "Menú", "Ambiente", "Reserva"],
    image: "/images/landing/coleta.jpg",
    href: "/demo/comida",
  },
] as const;

export function DemoLabSection() {
  return (
    <section className="bg-[var(--atria-page)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="demo-lab-title">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">Laboratorio de demos</p>
            <h2 id="demo-lab-title" className="mt-4 font-serif text-5xl font-medium leading-[.94] sm:text-6xl">Una base técnica. Dos lenguajes opuestos.</h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-[var(--atria-ink-soft)]">Las demos no prometen resultados comerciales. Sirven para recorrer decisiones de diseño aplicadas a contextos concretos.</p>
            <p className="mt-4 inline-flex items-center gap-3 text-xs font-bold uppercase text-[var(--atria-accent)]"><MoveRight size={18} aria-hidden /> Ábrelas, compáralas y pruébalas en móvil</p>
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-black/12 bg-black/12 lg:grid-cols-2">
          {demos.map((demo, index) => (
            <article key={demo.name} className="group bg-white">
              <a href={demo.href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--atria-accent)]">
                <div className={`relative overflow-hidden bg-[#ddd9d4] ${index === 0 ? "aspect-[5/4] lg:aspect-[6/5]" : "aspect-[5/4] lg:aspect-[6/5]"}`}>
                  <Image src={demo.image} alt={`Vista previa de ${demo.name}`} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  <span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[10px] font-bold uppercase text-[var(--atria-ink)] backdrop-blur-md">Demo navegable · 0{index + 1}</span>
                </div>
                <div className="grid gap-6 p-6 sm:grid-cols-[.7fr_1.3fr_auto] sm:items-start sm:p-8">
                  <div><p className="text-[10px] font-bold uppercase text-[var(--atria-accent)]">{demo.field}</p><h3 className="mt-2 font-serif text-4xl font-medium">{demo.name}</h3></div>
                  <div><p className="font-serif text-2xl font-medium leading-[1.06]">{demo.question}</p><p className="mt-4 text-xs font-semibold text-[var(--atria-muted)]">{demo.details.join(" · ")}</p></div>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-black/14 transition-all group-hover:border-[var(--atria-accent)] group-hover:bg-[var(--atria-accent)] group-hover:text-white"><ArrowUpRight size={17} aria-hidden /></span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
