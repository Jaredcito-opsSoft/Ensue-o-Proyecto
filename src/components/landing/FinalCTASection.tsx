import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function FinalCTASection() {
  const href = createWhatsAppLink(appConfig.whatsappSalesNumber, "Hola, quiero validar Presencia Digital Express con mi negocio.");

  return (
    <section id="contacto" className="px-5 pb-6 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-[var(--pde-border)] bg-[#102566] text-white shadow-[var(--shadow-card)]">
      <div className="p-8 sm:p-12 lg:p-16">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pde-coral)]">
          <Sparkles size={16} /> Listo para compartir
          Listo para compartir
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-4xl text-balance font-serif text-4xl leading-[.98] sm:text-6xl">
            Tu negocio merece una pagina que enamore y convierta.
          </h2>
          <ButtonLink href={href} variant="primary">
            Solicitar mi pagina <ArrowRight size={18} />
          </ButtonLink>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
          Te entregamos una mini pagina clara, profesional y lista para compartir por WhatsApp.
        </p>
      </div>
      <footer className="flex flex-col gap-4 border-t border-white/15 bg-[#08184e]/58 px-8 py-6 text-sm text-white/66 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <a className="flex items-center gap-2 font-serif text-xl text-white" href="#inicio"><Sparkles size={17} className="text-[var(--pde-coral)]" /> Ensueño</a>
        <div className="flex flex-wrap gap-x-5 gap-y-2"><a href="#demos">Plantillas</a><a href="#solucion">Servicios</a><a href="#proceso">Proceso</a><a href={href}>WhatsApp</a></div>
        <p>Presencia Digital Express</p>
      </footer>
      </div>
    </section>
  );
}
