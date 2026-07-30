import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CreditCard,
  MonitorSmartphone,
  PackageSearch,
  ReceiptText,
  Users,
  WalletCards,
} from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";

const capabilities = [
  { icon: ReceiptText, label: "Ventas" },
  { icon: PackageSearch, label: "Productos" },
  { icon: Users, label: "Clientes" },
  { icon: Boxes, label: "Inventario" },
  { icon: WalletCards, label: "Caja" },
  { icon: CreditCard, label: "Tickets" },
  { icon: BarChart3, label: "Reportes" },
  { icon: MonitorSmartphone, label: "Dispositivos compatibles" },
];

export function EnsuenoPOSSection() {
  return (
    <SectionReveal>
      <section
        id="localpos"
        className="bg-[var(--atria-page)] px-4 py-18 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase text-[var(--atria-accent)]">
              LocalPOS · Producto independiente
            </p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.94] sm:text-6xl">
              Herramientas sencillas para trabajar mejor.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--atria-ink-soft)]">
              Un punto de venta para pequeños negocios que necesitan registrar,
              consultar y ordenar su operación cotidiana con claridad.
            </p>

            <div className="mt-8 grid grid-cols-2 border-l border-t border-black/10">
              {capabilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex min-h-16 items-center gap-3 border-b border-r border-black/10 bg-white px-4 text-xs font-bold"
                >
                  <Icon size={17} className="shrink-0 text-[var(--atria-accent)]" aria-hidden />
                  {label}
                </div>
              ))}
            </div>

            <a
              href="https://localpos-marketing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conocer LocalPOS, abre en una pestaña nueva"
              className="atria-float-action group mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--atria-ink)] px-6 text-sm font-bold text-white"
            >
              Conocer LocalPOS
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-black/10 bg-[var(--atria-dark)] shadow-[0_28px_70px_rgba(17,18,20,.14)]">
            <Image
              src="/media/ensueno-scroll/keyframe-05-pos.webp"
              alt="Panel real de LocalPOS con ventas, inventario y reportes"
              fill
              sizes="(min-width:1024px) 58vw,100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
