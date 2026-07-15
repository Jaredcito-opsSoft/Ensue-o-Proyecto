import { ArrowRight, Check, Menu, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { LandingAnimations } from "@/components/motion/LandingAnimations";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const proof = ["Entrega guiada", "Diseno a tu medida", "Listo para celular"];

export function HeroSection() {
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, quiero una mini pagina profesional para mi negocio."
  );

  return (
    <LandingAnimations>
      <section className="relative overflow-hidden px-4 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24">
        <div className="pointer-events-none absolute left-[8%] top-28 h-72 w-72 rounded-full border border-[#c0b5ff]/20" />
        <div className="pointer-events-none absolute right-[-8rem] top-10 h-[32rem] w-[32rem] rounded-full border border-[#ff9dc2]/15" />
        <div className="relative mx-auto max-w-7xl">
          <nav
            data-hero-line
            className="flex min-h-16 items-center justify-between rounded-2xl border border-[var(--pde-border)] bg-[#101e63]/72 px-4 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-6"
            aria-label="Navegacion principal"
          >
            <a className="flex items-center gap-2 text-lg font-semibold" href="#inicio">
              <Sparkles size={21} className="text-[var(--pde-coral)]" aria-hidden />
              Ensueño
            </a>
            <div className="hidden items-center gap-7 text-sm font-medium text-white/82 md:flex">
              <a className="transition-colors hover:text-[var(--pde-coral)]" href="#inicio">Inicio</a>
              <a className="transition-colors hover:text-[var(--pde-coral)]" href="#demos">Plantillas</a>
              <a className="transition-colors hover:text-[var(--pde-coral)]" href="#solucion">Servicios</a>
              <a className="transition-colors hover:text-[var(--pde-coral)]" href="#proceso">Proceso</a>
            </div>
            <ButtonLink href={whatsappHref} className="min-h-10 px-4 py-2 text-xs sm:text-sm">
              <span className="hidden sm:inline">Comienza ahora</span><span className="sm:hidden">Empezar</span> <Sparkles size={15} />
            </ButtonLink>
            <button className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--pde-border)] text-white md:hidden" aria-label="Abrir navegacion">
              <Menu size={19} />
            </button>
          </nav>

          <div id="inicio" className="grid items-center gap-10 pt-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:pt-20">
            <div className="relative z-10">
              <p data-hero-line className="inline-flex items-center gap-2 rounded-full border border-[#f5b9d3]/40 bg-[#a26dce]/25 px-3 py-1.5 text-xs font-semibold text-[#ffe5f0] shadow-[var(--shadow-soft)]">
                Mini sitios web, maximo impacto <Sparkles size={13} />
              </p>
              <h1 className="mt-5 text-balance font-serif text-[3.35rem] leading-[0.94] text-white sm:text-7xl lg:text-[5.4rem]">
                Paginas digitales <span className="text-[var(--pde-coral)]">hermosas</span> para negocios que quieren destacar.
              </h1>
              <p data-hero-line className="mt-6 max-w-xl text-pretty text-base leading-7 text-[var(--pde-muted)] sm:text-lg sm:leading-8">
                Convertimos la informacion de tu negocio en una pagina viva, clara y lista para inspirar confianza desde el primer toque.
              </p>
              <div data-hero-line className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#demos">Ver plantillas <ArrowRight size={18} /></ButtonLink>
                <ButtonLink href={whatsappHref} variant="secondary">Hablar con un asesor <MessageCircle size={17} /></ButtonLink>
              </div>
              <div data-hero-line className="mt-8 grid gap-2 rounded-2xl border border-[var(--pde-border)] bg-[#192d78]/52 p-3 sm:grid-cols-3 sm:gap-0">
                {proof.map((item) => (
                  <p className="flex items-center gap-2 border-white/10 px-2 text-xs leading-5 text-white/84 sm:border-r last:border-0" key={item}>
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#bcb2ff]/60 text-[#d9d4ff]"><Check size={12} /></span>{item}
                  </p>
                ))}
              </div>
            </div>

            <div data-hero-card className="relative mx-auto w-full max-w-[650px] lg:mx-0">
              <div className="absolute -inset-3 rounded-[32px] border border-[#9fa4ff]/20 bg-[#7b64c5]/15" />
              <div className="relative overflow-hidden rounded-[25px] border border-[#c7c8ff]/50 bg-[#243882] p-2 shadow-[0_28px_60px_rgba(1,7,43,.42)] sm:p-3">
                <div className="overflow-hidden rounded-[18px] border border-white/15 bg-[#243277]">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#6070aa]/55 px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f6a1c1]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e9d2a5]" /><span className="h-2.5 w-2.5 rounded-full bg-[#b4e3bf]" />
                    <span className="ml-4 hidden rounded-md bg-white/10 px-10 py-1 text-[10px] text-white/45 sm:block">ensueno.mx/florencia</span>
                  </div>
                  <div className="relative min-h-[390px] overflow-hidden p-5 sm:min-h-[460px] sm:p-7">
                    <Image src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1100&q=85" alt="Ejemplo de una pagina para negocio local" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-60" />
                    <div className="absolute inset-0 bg-[#162461]/65" />
                    <div className="relative flex items-center justify-between text-xs text-white/85"><span className="font-serif text-lg">Florencia</span><span className="hidden gap-5 sm:flex"><span>Inicio</span><span>Servicios</span><span>Contacto</span></span><span className="rounded-full bg-[var(--pde-accent)] px-3 py-2 font-semibold text-[#301148]">Agenda ahora</span></div>
                    <div className="relative mt-16 max-w-[285px] sm:mt-20"><p className="font-serif text-4xl leading-[.96] text-white sm:text-5xl">Flores que cuentan historias</p><p className="mt-4 text-sm leading-6 text-white/78">Arreglos florales unicos para cada ocasion especial.</p><span className="mt-5 inline-flex rounded-full bg-[var(--pde-accent)] px-4 py-2.5 text-xs font-semibold text-[#301148]">Ver arreglos</span></div>
                    <div className="relative mt-10 grid grid-cols-3 gap-2"><div className="rounded-xl border border-white/20 bg-[#293a85]/55 p-3 text-xs text-white/82">Arreglos<br /><strong className="text-white">Personalizados</strong></div><div className="rounded-xl border border-white/20 bg-[#293a85]/55 p-3 text-xs text-white/82">Entrega<br /><strong className="text-white">a domicilio</strong></div><div className="rounded-xl border border-white/20 bg-[#293a85]/55 p-3 text-xs text-white/82">Eventos<br /><strong className="text-white">especiales</strong></div></div>
                  </div>
                </div>
              </div>
              <div data-hero-chip className="absolute -bottom-6 -right-2 w-36 rounded-[24px] border border-[#e9ddff]/45 bg-[#1c2d75]/90 p-3 shadow-[var(--shadow-card)] backdrop-blur-xl sm:w-44 sm:p-4"><p className="font-serif text-2xl text-white">Zen</p><p className="mt-1 text-xs leading-5 text-white/70">Otra identidad, el mismo sistema.</p></div>
            </div>
          </div>
        </div>
      </section>
    </LandingAnimations>
  );
}
