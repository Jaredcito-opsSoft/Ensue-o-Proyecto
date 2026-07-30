import { ArrowRight, ArrowUpRight } from "lucide-react";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { AtriaLogo } from "@/components/ui/AtriaLogo";

const localPOSUrl = "https://localpos-marketing.vercel.app/";
const celLabUrl = "https://cellab-tuxtla.vercel.app/";

export function FinalCTASection() {
  const href = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero comenzar un proyecto con Atria."
  );

  return (
    <section id="contacto" className="bg-[var(--atria-page)] p-3 sm:p-4">
      <div className="overflow-hidden rounded-[18px] bg-[var(--atria-accent)] sm:rounded-[26px]">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-6 py-16 text-white sm:px-10 sm:py-20 lg:grid-cols-[1fr_.34fr] lg:items-end lg:px-14 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase text-white/75">El siguiente paso</p>
            <h2 className="mt-4 max-w-5xl font-serif text-5xl font-medium leading-[0.92] sm:text-7xl lg:text-[5.2rem]">
              Tu negocio no necesita hacerlo todo hoy. Necesita comenzar con la solución
              correcta.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/82">
              Atria puede ayudarte a construir una presencia profesional, crear una
              experiencia para un momento especial o mejorar la operación de tu negocio.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href={href}
              className="atria-float-action group inline-flex min-h-14 items-center justify-between gap-8 rounded-full bg-[var(--atria-ink)] px-6 text-sm font-bold text-white hover:bg-white hover:text-[var(--atria-ink)]"
            >
              Comenzar un proyecto
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden
              />
            </a>
            <a
              href="#proyectos"
              className="atria-float-action group inline-flex min-h-14 items-center justify-between gap-8 rounded-full border border-white/50 px-6 text-sm font-bold text-white hover:bg-white hover:text-[var(--atria-ink)]"
            >
              Explorar trabajos
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <footer className="bg-[var(--atria-dark)] px-6 text-sm text-[#bdb6b0] sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-[1380px] gap-10 border-b border-white/12 py-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_.7fr_.7fr_.7fr]">
            <div>
              <a
                href="#inicio"
                className="group inline-flex items-center text-white"
                aria-label="Atria — Estudio Digital, ir al inicio"
              >
                <AtriaLogo light sloganText="Estudio Digital" />
              </a>
              <p className="mt-4 max-w-sm leading-6">
                Diseño y tecnología para negocios con algo que contar.
              </p>
              <a
                href={href}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-white transition-colors hover:text-[var(--atria-gold)]"
              >
                +52 961 285 8828
              </a>
            </div>

            <div>
              <p className="font-bold text-white">Soluciones</p>
              <nav className="mt-4 grid gap-2">
                <a href="#atria-web">Atria Web</a>
                <a href="#momentos">Ensueño Momentos</a>
                <a href={localPOSUrl} target="_blank" rel="noopener noreferrer">
                  LocalPOS
                </a>
              </nav>
            </div>

            <div>
              <p className="font-bold text-white">Atria</p>
              <nav className="mt-4 grid gap-2">
                <a href="#proyectos">Proyectos</a>
                <a href={celLabUrl} target="_blank" rel="noopener noreferrer">
                  CelLab Tuxtla
                </a>
                <a href="#nosotros">Nosotros</a>
                <a href={href}>Contacto</a>
              </nav>
            </div>

            <div>
              <p className="font-bold text-white">Información</p>
              <nav className="mt-4 grid gap-2">
                <a href="/privacidad">Aviso de privacidad</a>
                <a href="/terminos">Términos y condiciones</a>
              </nav>
            </div>
          </div>

          <div className="mx-auto flex max-w-[1380px] flex-col gap-2 py-5 text-[10px] uppercase sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Atria</p>
            <p>Tuxtla Gutiérrez, Chiapas, México</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
