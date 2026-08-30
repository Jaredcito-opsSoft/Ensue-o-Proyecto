import Image from "next/image";
import { ArrowUpRight, Check, CircleDot, Database, ReceiptText, ScanLine } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const capabilities = [
  [ReceiptText, "Venta", "Registra productos, clientes, pagos y tickets."],
  [Database, "Control", "Consulta inventario, caja y movimientos desde un mismo panel."],
  [ScanLine, "Lectura", "Revisa reportes simples para entender la operación cotidiana."],
] as const;

export function EnsuenoPOSSection() {
  const pilotHref = createWhatsAppLink(appConfig.whatsappSalesNumber, "Hola, conocí LocalPOS desde Alebrije Tech. Me interesa participar en el piloto para mi negocio.");

  return (
    <SectionReveal>
      <section id="localpos" className="scroll-mt-24 bg-white px-4 py-18 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-4"><p className="atria-eyebrow text-[11px] font-bold uppercase text-[var(--atria-accent)]">LocalPOS · Producto independiente</p><span className="inline-flex items-center gap-2 rounded-full border border-black/12 px-3 py-1.5 text-[10px] font-bold uppercase text-[var(--atria-muted)]"><CircleDot size={10} className="text-[var(--atria-accent)]" aria-hidden /> Piloto activo</span></div>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-[.94] sm:text-6xl">De la libreta a una operación consultable.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--atria-ink-soft)] lg:justify-self-end">LocalPOS organiza ventas, productos, clientes e inventario en una interfaz sobria. Su lenguaje es operativo porque su trabajo también lo es.</p>
          </div>

          <div className="mt-12 overflow-hidden border border-black/12 bg-[#111214] text-white">
            <div className="flex min-h-11 items-center gap-2 border-b border-white/12 px-5"><span className="h-2 w-2 rounded-full bg-[var(--atria-accent)]" /><span className="h-2 w-2 rounded-full bg-[#e5a257]" /><span className="h-2 w-2 rounded-full bg-white/18" /><span className="ml-auto text-[9px] font-semibold uppercase text-white/42">LocalPOS · Vista de producto</span></div>
            <div className="grid lg:grid-cols-[.72fr_1.28fr]">
              <div className="flex flex-col border-b border-white/12 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-[10px] font-bold uppercase text-[var(--atria-gold)]">Piloto para pequeños negocios</p>
                <h3 className="mt-5 font-serif text-4xl font-medium leading-[.98] sm:text-5xl">Registrar. Consultar. Decidir.</h3>
                <div className="mt-8 border-t border-white/12">{capabilities.map(([Icon, title, copy]) => <article key={title} className="grid grid-cols-[34px_1fr] gap-4 border-b border-white/12 py-5"><Icon size={17} className="mt-1 text-[var(--atria-gold)]" aria-hidden /><div><h4 className="font-semibold">{title}</h4><p className="mt-1 text-xs leading-5 text-white/55">{copy}</p></div></article>)}</div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="https://localpos-marketing.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-12 flex-1 items-center justify-between bg-white px-5 text-sm font-bold text-[#111214]">Abrir LocalPOS <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden /></a><a href={pilotHref} className="inline-flex min-h-12 items-center justify-center border border-white/24 px-5 text-sm font-bold hover:border-[var(--atria-gold)]">Solicitar piloto</a></div>
              </div>
              <div className="relative min-h-[430px] bg-[#0b0b0c] sm:min-h-[650px]"><Image src="/media/atria-scroll/desktop/stage-05-localpos.avif" alt="Panel de LocalPOS con ventas, productos e inventario" fill sizes="(max-width: 1023px) 100vw, 64vw" className="object-cover" /><div className="absolute inset-x-5 bottom-5 bg-black/76 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7"><div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold uppercase text-white/70">{["Ventas", "Productos", "Clientes", "Inventario", "Caja", "Tickets", "Reportes"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check size={11} className="text-[var(--atria-gold)]" aria-hidden />{item}</span>)}</div><p className="mt-4 text-xs leading-5 text-white/46">Configuración inicial y mensualidad. Soporte adicional y funciones exclusivas se cotizan por separado.</p></div></div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
