import { ArrowRight, CheckCircle2, MapPin, MessageCircle, QrCode, Smartphone } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { LandingAnimations } from "@/components/motion/LandingAnimations";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero una mini pagina profesional para mi negocio."
  );

  return (
    <LandingAnimations>
      <section className="relative overflow-hidden px-4 pb-10 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <nav
            data-hero-line
            className="flex min-h-14 items-center justify-between rounded-full border border-white/70 bg-[var(--pde-glass)] px-4 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-5"
            aria-label="Navegacion principal"
          >
            <a className="text-sm font-black uppercase tracking-[0.12em]" href="#">
              PDE
            </a>
            <div className="hidden items-center gap-6 text-sm font-semibold text-[var(--pde-muted)] md:flex">
              <a className="hover:text-[var(--pde-ink)]" href="#demos">Demos</a>
              <a className="hover:text-[var(--pde-ink)]" href="#paquetes">Paquetes</a>
              <a className="hover:text-[var(--pde-ink)]" href="#proceso">Proceso</a>
            </div>
            <ButtonLink href={whatsappHref} className="min-h-10 px-4 py-2 text-xs sm:text-sm">
              Empezar <ArrowRight size={16} />
            </ButtonLink>
          </nav>

          <div className="grid gap-8 pt-12 sm:pt-16 lg:min-h-[calc(100svh-94px)] lg:grid-rows-[auto_1fr]">
            <div className="mx-auto max-w-5xl text-center">
              <p
                data-hero-line
                className="mx-auto inline-flex rounded-full border border-white/70 bg-[var(--pde-glass)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[var(--pde-accent)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
              >
                Mini paginas para negocios locales
              </p>
              <h1 className="mt-5 text-balance text-[3.2rem] font-semibold leading-[0.9] text-[var(--pde-ink)] sm:text-7xl lg:text-[7.2rem]">
                Presencia digital para el{" "}
                <span className="font-serif italic font-normal">mundo real.</span>
              </h1>
              <p
                data-hero-line
                className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-[var(--pde-muted)] sm:text-xl sm:leading-8"
              >
                Ordenamos servicios, horarios, ubicacion, WhatsApp y QR en un
                link claro. Tu negocio se ve listo para compartir desde el celular.
              </p>
              <div data-hero-line className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href={whatsappHref}>
                  Solicitar pagina <ArrowRight size={18} />
                </ButtonLink>
                <ButtonLink href="#demos" variant="secondary">
                  Ver demos
                </ButtonLink>
              </div>
              <div data-hero-line className="mx-auto mt-7 grid max-w-2xl gap-3 text-left text-sm font-medium text-[var(--pde-muted)] sm:grid-cols-3">
              {["Sin aprender tecnologia", "Listo para QR", "Pensado para celular"].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <CheckCircle2 size={17} className="text-[var(--pde-teal)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

            <div data-hero-card className="relative">
              <div data-hero-chip className="absolute -left-2 top-14 z-10 hidden w-36 rounded-[24px] border border-white/70 bg-[var(--pde-glass)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl lg:block">
              <QrCode className="text-[var(--pde-accent)]" size={28} />
              <p className="mt-5 font-mono text-3xl font-semibold">QR</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--pde-muted)]">
                listo para mostrador
              </p>
            </div>
              <div className="rounded-[34px] border border-white/70 bg-[var(--pde-glass)] p-2 shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-3">
                <div className="overflow-hidden rounded-[26px] border border-[var(--pde-border)] bg-[var(--pde-paper)]">
                <Image
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1300&q=80"
                  alt="Duena de negocio local atendiendo desde celular"
                  width={1300}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                    className="h-56 w-full object-cover grayscale contrast-125 saturate-0 sm:h-80 lg:h-[24rem]"
                />
                  <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                    <div className="flex items-center justify-between gap-4 lg:block">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--pde-muted)]">
                        Demo publicado
                      </p>
                        <p className="mt-1 text-2xl font-semibold sm:text-3xl">Bella Imagen Tuxtla</p>
                    </div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--pde-ink)] text-white">
                      <QrCode size={26} />
                    </div>
                  </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
                    <div className="rounded-2xl bg-[var(--pde-surface-strong)] p-4 text-[var(--pde-ink)]">
                      <MessageCircle size={20} />
                      <p className="mt-3 text-sm font-semibold">WhatsApp</p>
                    </div>
                    <div className="rounded-2xl bg-[var(--pde-surface-strong)] p-4 text-[var(--pde-teal)]">
                      <MapPin size={20} />
                      <p className="mt-3 text-sm font-semibold">Ubicacion</p>
                    </div>
                    <div className="rounded-2xl bg-[var(--pde-ink)] p-4 text-white">
                      <Smartphone size={20} />
                      <p className="mt-3 text-sm font-semibold">Link unico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </LandingAnimations>
  );
}
