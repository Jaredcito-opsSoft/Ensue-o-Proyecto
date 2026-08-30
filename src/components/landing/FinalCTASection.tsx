import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import { AtriaLogo } from "@/components/ui/AtriaLogo";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const localPOSUrl = "https://localpos-marketing.vercel.app/";
const celLabUrl = "https://localpos-cellab.vercel.app/";
const email = "alebrijecontacto.mx@gmail.com";

export function FinalCTASection() {
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, conocí Alebrije Tech desde su página. Quiero contarles sobre un proyecto."
  );

  return (
    <footer id="pie" className="bg-[#111214] px-4 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 border-b border-white/14 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.75fr_.9fr] lg:py-16">
          <div>
            <AtriaLogo light showSlogan sloganText="Estudio digital" />
            <p className="mt-6 max-w-sm font-serif text-3xl font-medium leading-[1.02] text-white">
              Diseño y tecnología para negocios con algo que contar.
            </p>
            <div className="mt-7 flex flex-col gap-3 text-sm text-white/65">
              <a href={whatsappHref} className="inline-flex items-center gap-2 hover:text-white"><MessageCircle size={15} aria-hidden />+52 961 285 8828</a>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 break-all hover:text-white"><Mail size={15} aria-hidden />{email}</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase text-white/42">Soluciones</p>
            <nav className="mt-5 grid gap-3 text-sm text-white/68" aria-label="Soluciones de Alebrije Tech">
              <a className="hover:text-white" href="#atria-web">Alebrije Web</a>
              <a className="hover:text-white" href="#momentos">Ensueño Momentos</a>
              <a className="inline-flex items-center gap-2 hover:text-white" href={localPOSUrl} target="_blank" rel="noopener noreferrer">LocalPOS <ExternalLink size={12} aria-hidden /></a>
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase text-white/42">Alebrije Tech</p>
            <nav className="mt-5 grid gap-3 text-sm text-white/68" aria-label="Información de Alebrije Tech">
              <a className="hover:text-white" href="#proyectos">Proyectos</a>
              <a className="hover:text-white" href="#proceso">Proceso</a>
              <a className="hover:text-white" href="#estudio">El estudio</a>
              <a className="hover:text-white" href="#contacto">Contacto</a>
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase text-white/42">Información</p>
            <nav className="mt-5 grid gap-3 text-sm text-white/68" aria-label="Información legal y proyectos externos">
              <a className="hover:text-white" href="/privacidad">Aviso de privacidad</a>
              <a className="hover:text-white" href="/terminos">Términos y condiciones</a>
              <a className="inline-flex items-center gap-2 hover:text-white" href={celLabUrl} target="_blank" rel="noopener noreferrer">CelLab Tuxtla <ExternalLink size={12} aria-hidden /></a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5 text-[10px] uppercase text-white/42 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Alebrije Tech</p>
          <p>Estudio remoto · Chiapas, México</p>
        </div>
      </div>
    </footer>
  );
}
