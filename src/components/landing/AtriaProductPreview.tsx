import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Atria Web",
    detail: "Sitios para negocios",
    image: "/images/landing/beauty-la.jpg",
    href: "#atria-web",
    cta: "Ver sitios",
  },
  {
    name: "Ensueño Momentos",
    detail: "Experiencias para celebrar",
    image: "/images/landing/ensueno-momentos-event.jpg",
    href: "#momentos",
    cta: "Conocer Ensueño Momentos",
  },
  {
    name: "LocalPOS",
    detail: "Ventas y operación sencilla",
    image: "/media/ensueno-scroll/keyframe-05-pos.webp",
    href: "https://localpos-marketing.vercel.app/",
    cta: "Explorar LocalPOS",
    external: true,
  },
];

export function AtriaProductPreview() {
  return (
    <div className="mx-auto w-full max-w-[1040px]">
      <div className="overflow-hidden rounded-[16px] border border-black/10 bg-[#f7f5f1]/96 shadow-[0_24px_70px_rgba(17,18,20,.16)] backdrop-blur-md sm:rounded-[22px]">
        <div className="flex h-8 items-center gap-2 border-b border-black/8 px-3 sm:h-9 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-[var(--atria-accent)]" />
          <span className="h-2 w-2 rounded-full bg-[#e7b978]" />
          <span className="h-2 w-2 rounded-full bg-[#c9c7c2]" />
          <span className="ml-1 truncate text-[9px] font-semibold uppercase text-[#77777a] sm:ml-2 sm:text-[10px]">
            Un estudio, distintas formas de crecer
          </span>
        </div>
        <div className="grid grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target={product.external ? "_blank" : undefined}
              rel={product.external ? "noopener noreferrer" : undefined}
              aria-label={`${product.cta}${product.external ? ", abre en una pestaña nueva" : ""}`}
              className="group min-w-0 border-r border-black/8 p-1.5 transition-colors last:border-r-0 hover:bg-white/75 sm:p-3"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[7px] bg-[#ddd9d4] sm:aspect-[16/8] sm:rounded-[10px] lg:aspect-[16/7]">
                <Image
                  src={product.image}
                  alt={`Vista previa de ${product.name}`}
                  fill
                  sizes="(min-width: 640px) 30vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/8" aria-hidden />
              </div>
              <div className="flex min-h-[46px] items-start justify-between gap-1 px-0.5 pb-0.5 pt-2 sm:min-h-[62px] sm:gap-3 sm:px-1 sm:pb-1 sm:pt-3">
                <div className="min-w-0">
                  <h2 className="line-clamp-2 text-[9px] font-bold leading-tight text-[var(--atria-ink)] min-[380px]:text-[10px] sm:text-sm">
                    {product.name}
                  </h2>
                  <p className="mt-0.5 hidden text-xs text-[var(--atria-ink-soft)] sm:block">
                    {product.detail}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-[var(--atria-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
