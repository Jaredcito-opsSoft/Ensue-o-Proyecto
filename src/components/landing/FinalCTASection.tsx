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
          Listo para piloto
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
            Si un negocio puede compartirlo por WhatsApp, ya podemos validarlo.
          </h2>
          <ButtonLink href={href} variant="primary">
            Solicitar demo <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
