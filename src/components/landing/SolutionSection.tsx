import { Clock, Image, MapPin, MessageCircle, QrCode, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCards } from "@/components/motion/AnimatedCards";

const solutions = [
  { icon: ShoppingBag, title: "Catalogo", text: "Servicios, productos o menu ordenado." },
  { icon: MessageCircle, title: "WhatsApp", text: "Contacto directo con mensaje precargado." },
  { icon: MapPin, title: "Ubicacion", text: "Boton para abrir Google Maps." },
  { icon: QrCode, title: "QR", text: "Listo para imprimir o compartir." },
  { icon: Clock, title: "Horarios", text: "Informacion clara para evitar dudas." },
  { icon: Image, title: "Fotos", text: "Galeria simple con imagen real del negocio." },
];

export function SolutionSection() {
  return (
    <Reveal>
      <section className="bg-[var(--pde-ink)] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8c7bf]">
              Solucion
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
              Una pagina pequena, pero suficiente para vender confianza.
            </h2>
          </div>
          <AnimatedCards className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, title, text }) => (
              <div data-card key={title} className="bg-[var(--pde-ink)] p-7">
                <Icon size={26} className="text-[#d8c4a7]" />
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{text}</p>
              </div>
            ))}
          </AnimatedCards>
        </div>
      </section>
    </Reveal>
  );
}
