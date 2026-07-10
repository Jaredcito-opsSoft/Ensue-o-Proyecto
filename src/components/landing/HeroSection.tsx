import { ArrowRight, CheckCircle2, MapPin, MessageCircle, QrCode, Smartphone } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LandingAnimations } from "@/components/motion/LandingAnimations";
import { StaggerText } from "@/components/motion/StaggerText";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero una mini pagina profesional para mi negocio."
  );

  return (
    <LandingAnimations>
      <section className="relative overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="py-6 lg:py-16">
            <Badge data-hero-line>Presencia digital para negocios locales</Badge>
            <h1 className="mt-6 max-w-4xl text-balance text-[3.35rem] font-semibold leading-[0.94] tracking-[-0.035em] text-[var(--pde-ink)] sm:text-7xl lg:text-[6.7rem]">
              <StaggerText text="Tu negocio listo para compartir." />
            </h1>
            <p
              data-hero-line
              className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[var(--pde-muted)] sm:text-xl"
            >
              Creamos una mini pagina profesional con tus servicios, horarios,
              ubicacion, WhatsApp y QR para que tus clientes encuentren todo en
              un solo link.
            </p>
            <div data-hero-line className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappHref}>
                Solicitar por WhatsApp <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="#demos" variant="secondary">
                Ver demos
              </ButtonLink>
            </div>
            <div data-hero-line className="mt-6 grid gap-3 text-sm font-medium text-[var(--pde-muted)] sm:grid-cols-3">
              {["Sin aprender tecnologia", "Listo para QR", "Pensado para celular"].map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <CheckCircle2 size={17} className="text-[var(--pde-blue)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div data-hero-card className="relative lg:pl-8">
            <div data-hero-chip className="absolute -left-2 top-10 hidden w-36 rounded-[24px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-4 shadow-[var(--shadow-card)] lg:block">
              <QrCode className="text-[var(--pde-plum)]" size={28} />
              <p className="mt-5 font-mono text-3xl font-semibold">QR</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--pde-muted)]">
                listo para mostrador
              </p>
            </div>
            <div className="rounded-[38px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-3 shadow-[var(--shadow-card)] sm:p-4">
              <div className="overflow-hidden rounded-[30px] border border-[var(--pde-border)] bg-[var(--pde-paper)]">
                <Image
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1300&q=80"
                  alt="Duena de negocio local atendiendo desde celular"
                  width={1300}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="h-64 w-full object-cover grayscale contrast-125 saturate-0 sm:h-[27rem]"
                />
                <div className="grid gap-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--pde-muted)]">
                        Demo publicado
                      </p>
                      <p className="mt-1 text-2xl font-semibold">Bella Imagen Tuxtla</p>
                    </div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--pde-ink)] text-white">
                      <QrCode size={26} />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-[var(--pde-surface-strong)] p-4">
                      <MessageCircle size={20} />
                      <p className="mt-3 text-sm font-semibold">WhatsApp</p>
                    </div>
                    <div className="rounded-2xl bg-[var(--pde-brass)] p-4 text-[var(--pde-ink)]">
                      <MapPin size={20} />
                      <p className="mt-3 text-sm font-semibold">Ubicacion</p>
                    </div>
                    <div className="rounded-2xl bg-[var(--pde-blue)] p-4 text-white">
                      <Smartphone size={20} />
                      <p className="mt-3 text-sm font-semibold">Link unico</p>
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
