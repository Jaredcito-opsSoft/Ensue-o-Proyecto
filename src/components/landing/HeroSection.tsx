import { ArrowRight, QrCode, Smartphone } from "lucide-react";
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
      <section className="relative overflow-hidden px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="py-8 lg:py-16">
            <Badge data-hero-line>Mini pagina + WhatsApp + QR</Badge>
            <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--pde-ink)] sm:text-7xl lg:text-8xl">
              <StaggerText text="Tu negocio listo para compartir en minutos." />
            </h1>
            <p
              data-hero-line
              className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--pde-muted)] sm:text-xl"
            >
              Creamos una mini pagina profesional con tus servicios, horarios,
              ubicacion, WhatsApp y QR para que tus clientes encuentren todo en
              un solo link.
            </p>
            <div data-hero-line className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappHref}>
                Solicitar por WhatsApp <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="#demos" variant="secondary">
                Ver demos
              </ButtonLink>
            </div>
          </div>
          <div data-hero-line className="relative">
            <div className="rounded-[34px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-4 shadow-[var(--shadow-card)]">
              <div className="overflow-hidden rounded-[26px] border border-[var(--pde-border)] bg-[var(--pde-paper)]">
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1300&q=80"
                  alt="Duena de negocio local atendiendo desde celular"
                  className="h-72 w-full object-cover sm:h-96"
                />
                <div className="grid gap-3 p-5">
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
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[var(--pde-surface-strong)] p-4">
                      <Smartphone size={20} />
                      <p className="mt-3 text-sm font-medium">Link para WhatsApp</p>
                    </div>
                    <div className="rounded-2xl bg-[var(--pde-accent)] p-4 text-white">
                      <p className="font-mono text-2xl font-semibold">3</p>
                      <p className="mt-1 text-sm opacity-85">negocios demo listos</p>
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
