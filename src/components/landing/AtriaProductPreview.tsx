import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "CelLab Tuxtla",
    detail: "Caso real · En producción",
    image: "/images/landing/cellab-project.avif",
    href: "https://localpos-cellab.vercel.app/",
    cta: "Abrir CelLab",
    external: true,
  },
  {
    name: "Coleta",
    detail: "Demo · Gastronomía",
    image: "/images/landing/coleta.jpg",
    href: "/demo/comida",
    cta: "Abrir Coleta",
    external: false,
  },
  {
    name: "Ensueño Momentos",
    detail: "Experiencias para celebrar",
    image: "/images/landing/ensueno-momentos-event.jpg",
    href: "#momentos",
    cta: "Conocer Ensueño",
    external: false,
  },
  {
    name: "LocalPOS",
    detail: "Producto en piloto",
    image: "/media/atria-scroll/desktop/stage-05-localpos.avif",
    href: "https://localpos-marketing.vercel.app/",
    cta: "Conocer LocalPOS",
    external: true,
  },
] as const;

export function AtriaProductPreview() {
  return (
    <div className="mx-auto w-full max-w-[1040px]">
      <div className="overflow-hidden rounded-[16px] border border-black/10 bg-[#f7f5f1]/96 shadow-[0_24px_70px_rgba(17,18,20,.16)] backdrop-blur-md sm:rounded-[22px]">
        <div className="flex min-h-10 items-center gap-2 border-b border-black/10 px-4">
          <span className="h-2 w-2 rounded-full bg-[var(--atria-accent)]" />
          <span className="h-2 w-2 rounded-full bg-[#e5a257]" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <p className="ml-2 text-[9px] font-bold uppercase text-black/42 sm:text-[10px]">
            Archivo abierto · trabajo real, demostraciones y productos
          </p>
          <span className="ml-auto hidden text-[9px] font-semibold uppercase text-black/38 sm:block">
            Explora cada pieza
          </span>
        </div>
        <div className="atria-workbench-track grid grid-cols-[82%_82%_82%_82%] gap-3 overflow-x-auto p-3 [scrollbar-width:none] sm:grid-cols-4 sm:overflow-visible sm:p-4 [&::-webkit-scrollbar]:hidden">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target={product.external ? "_blank" : undefined}
              rel={product.external ? "noopener noreferrer" : undefined}
              className="group min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--atria-accent)]"
              aria-label={`${product.cta}${product.external ? ", abre en una pestaña nueva" : ""}`}
            >
              <span className="relative block aspect-[16/7.2] overflow-hidden rounded-[8px] bg-[#ddd9d4] sm:aspect-[16/8.5]">
                <Image
                  src={product.image}
                  alt={`Vista previa de ${product.name}`}
                  fill
                  sizes="(max-width: 639px) 82vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </span>
              <span className="flex items-center justify-between gap-3 px-1 py-3 text-left">
                <span>
                  <span className="block text-[13px] font-bold text-[var(--atria-ink)]">{product.name}</span>
                  <span className="mt-0.5 block text-[11px] text-[var(--atria-muted)]">{product.detail}</span>
                </span>
                <ArrowUpRight size={16} className="shrink-0 text-[var(--atria-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
      <p className="mt-2 text-center text-[10px] font-semibold text-black/48 sm:hidden">Desliza para abrir el archivo</p>
    </div>
  );
}
