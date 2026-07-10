import type { Business } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { BusinessActions } from "./BusinessActions";
import { PageIntro } from "@/components/motion/PageIntro";
import { MapPin, MessageCircle, QrCode } from "lucide-react";

export function BusinessHero({ business }: { business: Business }) {
  return (
    <PageIntro>
      <section className="px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative rounded-[34px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{business.category}</Badge>
              <span className="rounded-full bg-[var(--pde-paper-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--pde-muted)]">
                Pagina digital
              </span>
            </div>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-none tracking-[-0.03em] sm:text-7xl">
              {business.name}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-[var(--pde-muted)]">
              {business.shortDescription}
            </p>
            <div className="mt-8">
              <BusinessActions business={business} />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--pde-muted)]">
              <span className="rounded-2xl bg-[var(--pde-paper-strong)] px-2 py-3">Servicios</span>
              <span className="rounded-2xl bg-[var(--pde-paper-strong)] px-2 py-3">Horarios</span>
              <span className="rounded-2xl bg-[var(--pde-paper-strong)] px-2 py-3">QR</span>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-[var(--pde-border)] shadow-[var(--shadow-card)]">
            <Image
              src={business.coverImageUrl}
              alt={business.name}
              width={1300}
              height={980}
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 grid gap-2 rounded-[24px] border border-white/30 bg-[var(--pde-surface)]/95 p-4 shadow-[var(--shadow-soft)] sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-[var(--pde-accent)]" />
                <span className="text-sm font-semibold">WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[var(--pde-accent)]" />
                <span className="text-sm font-semibold">Como llegar</span>
              </div>
              <div className="flex items-center gap-2">
                <QrCode size={18} className="text-[var(--pde-accent)]" />
                <span className="text-sm font-semibold">Compartir</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageIntro>
  );
}
