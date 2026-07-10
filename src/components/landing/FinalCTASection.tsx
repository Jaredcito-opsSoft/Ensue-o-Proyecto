import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function FinalCTASection() {
  const href = createWhatsAppLink(appConfig.whatsappSalesNumber, "Hola, quiero validar Presencia Digital Express con mi negocio.");

  return (
    <section className="px-5 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[34px] bg-[var(--pde-ink)] p-8 text-white sm:p-12 lg:p-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d8c4a7]">
          Listo para compartir
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
            Haz que tu negocio se vea listo para vender.
          </h2>
          <ButtonLink href={href} variant="primary">
            Solicitar mi pagina <ArrowRight size={18} />
          </ButtonLink>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
          Te entregamos una mini pagina clara, profesional y lista para compartir por WhatsApp.
        </p>
      </div>
    </section>
  );
}
