import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Code2,
  LayoutTemplate,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  QrCode,
  Search,
  Sparkles,
} from "lucide-react";
import { RedesignHeader } from "@/components/landing/RedesignHeader";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const demos = [
  {
    name: "Beauty LA",
    category: "Belleza boutique",
    href: "/demo/estetica",
    image: "/images/landing/beauty-la.jpg",
    copy: "Reserva, servicios y una identidad editorial que se siente propia.",
    color: "bg-[#eee7e1] text-[#201d1a]",
  },
  {
    name: "Coleta",
    category: "Cocina de origen",
    href: "/demo/coleta",
    image: "/images/landing/coleta.jpg",
    copy: "Menú, horarios y reservas dentro de una experiencia gastronómica completa.",
    color: "bg-[#171714] text-white",
  },
  {
    name: "CelLaB",
    category: "Tecnología y reparación",
    href: "https://cellab-tuxtla.vercel.app/",
    image: "/images/cellux/hero-phones.png",
    copy: "Smartphones, accesorios premium y servicio técnico especializado.",
    color: "bg-[#e9e9e8] text-[#0a0b0d]",
    isExternal: true,
  },
];

const capabilities = [
  { icon: LayoutTemplate, title: "Diseño con identidad", copy: "La estructura, la tipografía y las imágenes responden al tipo de negocio." },
  { icon: MonitorSmartphone, title: "Mobile first", copy: "Cada decisión se prueba primero donde tus clientes realmente navegan." },
  { icon: MessageCircle, title: "Contacto directo", copy: "WhatsApp, llamada, ubicación y reservas sin pasos innecesarios." },
  { icon: Search, title: "Lista para encontrarte", copy: "Contenido claro, rendimiento cuidado y bases para presencia local." },
  { icon: QrCode, title: "Un enlace compartible", copy: "Tu página funciona desde redes, QR, tarjetas y mensajes." },
  { icon: Code2, title: "Preparada para crecer", copy: "Catálogo, panel o automatizaciones se suman cuando el negocio las necesita." },
];

const process = [
  { number: "01", title: "Conocemos tu negocio", copy: "Objetivo, clientes, servicios y personalidad de marca." },
  { number: "02", title: "Definimos la dirección", copy: "Contenido, referencias y una propuesta visual concreta." },
  { number: "03", title: "Diseñamos y construimos", copy: "La página toma forma y la revisas desde tu celular." },
  { number: "04", title: "Publicamos y acompañamos", copy: "Queda lista para compartir, medir y seguir mejorando." },
];

const packages = [
  { name: "Esencial", label: "Para empezar bien", copy: "Una página clara que presenta tu negocio y facilita el contacto.", items: ["Landing personalizada", "WhatsApp y ubicación", "Dominio y publicación", "Diseño responsive"] },
  { name: "Crecimiento", label: "Para vender mejor", copy: "Más contenido, catálogo y herramientas para generar confianza.", items: ["Sitio multipágina", "Catálogo o servicios", "SEO local base", "Mantenimiento incluido"] },
  { name: "A medida", label: "Para una operación propia", copy: "Experiencias, paneles e integraciones según tu forma de trabajar.", items: ["Diseño exclusivo", "Panel administrativo", "Automatizaciones", "Integraciones especiales"] },
];

function PrimaryLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] ${light ? "bg-white text-[#07164b] shadow-[0_16px_34px_rgba(1,8,44,.18)] hover:bg-[#f2efff]" : "bg-[#ff6f9f] text-[#07164b] shadow-[0_16px_36px_rgba(255,111,159,.24)] hover:bg-[#ff91b7]"}`;
  return href.startsWith("/") ? <Link className={classes} href={href}>{children}</Link> : <a className={classes} href={href}>{children}</a>;
}

export function RedesignLanding() {
  const contactHref = createWhatsAppLink(appConfig.whatsappSalesNumber, "Hola, quiero una página para mi negocio con Ensueño.");

  return (
    <div className="min-h-screen bg-[#f6f5fb] text-[#07164b]">
      <RedesignHeader />

      <main>
          <section id="inicio" className="relative min-h-[calc(100svh-40px)] overflow-hidden bg-[#07164b] px-5 pb-6 pt-24 text-white sm:px-8 lg:px-12 lg:pb-10 lg:pt-32">
            <div className="pointer-events-none absolute inset-y-0 left-[34%] hidden w-px bg-white/9 lg:block" />
            <div className="pointer-events-none absolute inset-y-0 left-[67%] hidden w-px bg-white/9 lg:block" />
            <div className="pointer-events-none absolute inset-x-0 top-[42%] h-px bg-white/9" />

            <div className="relative mx-auto min-h-[calc(100svh-126px)] max-w-[1400px] lg:grid lg:min-h-[calc(100svh-226px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10">
              <div className="relative z-20 max-w-[640px] pt-3 lg:py-10">
                <p data-hero-line className="inline-flex items-center gap-2 rounded-full border border-[#d9d7ff]/28 bg-white/7 px-4 py-2 text-xs font-semibold text-[#f3d8e5] backdrop-blur-lg"><Sparkles size={14} /> Sitios web para negocios que quieren destacar</p>
                <h1 data-hero-title className="mt-5 text-balance font-serif text-[3rem] font-medium leading-[0.92] sm:mt-7 sm:text-7xl lg:text-[5.7rem] lg:leading-[0.9]">
                  Tu negocio merece una página <span className="text-[#ff8bb3] italic">imposible de ignorar.</span>
                </h1>
                <p data-hero-desc className="mt-5 max-w-xl text-pretty text-sm leading-6 text-[#c9cae8] sm:mt-7 sm:text-lg sm:leading-7">Diseñamos una presencia digital tan cuidada como tu trabajo, lista para compartir, generar confianza y convertir visitas en conversaciones.</p>
                <div className="mt-6 grid grid-cols-[1fr_auto] gap-2 sm:mt-8 sm:flex sm:flex-row sm:gap-3">
                  <PrimaryLink href="#demos"><span className="sm:hidden">Ver demos</span><span className="hidden sm:inline">Ver páginas reales</span> <ArrowRight size={17} /></PrimaryLink>
                  <a href={contactHref} className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/24 bg-white/7 px-4 py-3 text-sm font-semibold text-white backdrop-blur-lg transition-[transform,background-color,border-color] hover:-translate-y-1 hover:border-white/44 hover:bg-white/12 sm:px-6"><span className="sm:hidden">Hablemos</span><span className="hidden sm:inline">Hablar del proyecto</span> <MessageCircle size={17} /></a>
                </div>
                <div className="mt-9 hidden flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-white/58 sm:flex"><span>Entrega guiada</span><span>Diseño responsive</span><span>Sin plantillas genéricas</span></div>
              </div>

              <div data-hero-card className="absolute inset-x-0 bottom-0 h-[185px] sm:h-[260px] lg:relative lg:inset-auto lg:h-[560px]">
                <div className="absolute right-0 top-0 w-[92%] overflow-hidden rounded-[8px] border border-white/24 bg-[#111e5d] p-2 shadow-[0_32px_70px_rgba(1,6,38,.48)] sm:w-[86%]">
                  <div className="mb-2 flex h-6 items-center gap-1.5 px-2"><span className="h-2 w-2 rounded-full bg-[#ff91b7]" /><span className="h-2 w-2 rounded-full bg-white/35" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="ml-3 h-2 w-24 rounded-full bg-white/10" /></div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[5px]"><Image src={demos[0].image} alt="Vista previa de Beauty LA" fill priority sizes="(min-width: 1024px) 52vw, 90vw" className="object-cover" /></div>
                </div>
                <div className="absolute bottom-0 left-0 w-[54%] overflow-hidden rounded-[8px] border border-white/22 bg-[#0d0d0c] p-2 shadow-[0_24px_52px_rgba(1,6,38,.45)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[5px]"><Image src={demos[1].image} alt="Vista previa de Coleta" fill priority sizes="(min-width: 1024px) 28vw, 52vw" className="object-cover" /></div>
                  <p className="px-2 pb-1 pt-2 text-xs font-semibold">Coleta <span className="ml-2 font-normal text-white/50">Cocina de origen</span></p>
                </div>
                <div className="absolute bottom-4 right-0 w-[35%] overflow-hidden rounded-[8px] border border-white/22 bg-[#ececeb] p-2 shadow-[0_24px_52px_rgba(1,6,38,.45)]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[5px]"><Image src={demos[2].image} alt="Vista previa de CelLaB" fill priority sizes="(min-width: 1024px) 18vw, 34vw" className="object-cover object-[70%_center]" /></div>
                  <p className="px-2 pb-1 pt-2 text-xs font-semibold text-[#0b0c0e]">CelLaB.</p>
                </div>
              </div>
            </div>
          </section>

        <section className="border-b border-[#d8d7e7] bg-white px-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-y divide-[#d8d7e7] sm:grid-cols-4 sm:divide-y-0">
            {[['3', 'demos navegables'], ['5 días', 'entrega estimada'], ['1 link', 'listo para compartir'], ['100%', 'pensado para móvil']].map(([value, label]) => <div key={label} className="px-4 py-7 text-center"><p className="font-serif text-3xl font-semibold">{value}</p><p className="mt-1 text-xs text-[#636781]">{label}</p></div>)}
          </div>
        </section>

        <SectionReveal>
          <section id="demos" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid gap-7 border-b border-[#d8d7e7] pb-9 lg:grid-cols-[1fr_.7fr] lg:items-end">
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e84d82]">Páginas reales</p><h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.96] sm:text-6xl lg:text-7xl">Tres negocios. Tres identidades que no se confunden.</h2></div>
                <p className="max-w-lg text-base leading-7 text-[#62667f] lg:justify-self-end">No cambiamos solo el color. Cada página responde al público, al ritmo y al carácter del negocio.</p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {demos.map((demo) => <Link href={demo.href} key={demo.name} className={`group overflow-hidden rounded-[8px] ${demo.color} transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(7,22,75,.16)]`}>
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={demo.image} alt={`Página de ${demo.name}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div>
                  <div className="p-6"><div className="flex items-start justify-between gap-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] opacity-55">{demo.category}</p><h3 className="mt-2 font-serif text-4xl font-semibold">{demo.name}</h3></div><ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-5 text-sm leading-6 opacity-68">{demo.copy}</p></div>
                </Link>)}
              </div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="incluye" className="bg-[#0b236c] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid gap-8 lg:grid-cols-[.75fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff9abb]">Todo en un solo lugar</p><h2 className="mt-4 max-w-xl font-serif text-5xl font-medium leading-none sm:text-6xl">Una página bonita debe hacer algo por tu negocio.</h2></div><p className="max-w-xl self-end text-base leading-7 text-[#c9cae8] lg:justify-self-end">Por eso unimos diseño, contacto, ubicación, contenido y una base técnica lista para crecer contigo.</p></div>
              <div className="mt-12 grid border-l border-t border-white/16 sm:grid-cols-2 lg:grid-cols-3">
                {capabilities.map(({ icon: Icon, title, copy }) => <article key={title} className="group min-h-56 border-b border-r border-white/16 p-7 transition-colors hover:bg-white/6"><Icon size={24} className="text-[#ff8fb5]" /><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/62">{copy}</p></article>)}
              </div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="proceso" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1400px]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e84d82]">Así trabajamos</p>
              <div className="mt-4 flex flex-col gap-5 border-b border-[#d8d7e7] pb-9 sm:flex-row sm:items-end sm:justify-between"><h2 className="max-w-3xl font-serif text-5xl font-medium leading-none sm:text-6xl">Claro desde la primera conversación.</h2><p className="max-w-sm text-sm leading-6 text-[#62667f]">Sabes qué sigue, qué revisamos y cuándo estará lista tu página.</p></div>
              <div className="grid lg:grid-cols-4">{process.map((step) => <article key={step.number} className="border-b border-[#d8d7e7] py-8 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"><p className="font-mono text-xs font-bold text-[#e84d82]">{step.number}</p><h3 className="mt-8 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#62667f]">{step.copy}</p></article>)}</div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="paquetes" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1400px]">
              <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e84d82]">Alcances</p><h2 className="mt-4 font-serif text-5xl font-medium leading-none sm:text-6xl">Empieza con lo que hoy necesita tu negocio.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#62667f]">Cotizamos después de entender el alcance. Sin precios trampa ni funciones que todavía no necesitas.</p></div>
              <div className="mt-12 grid gap-5 lg:grid-cols-3">{packages.map((pack, index) => <article key={pack.name} className={`flex min-h-[450px] flex-col rounded-[8px] border p-7 ${index === 1 ? "border-[#2347c9] bg-[#f0efff] shadow-[0_20px_45px_rgba(35,71,201,.12)]" : "border-[#d8d7e7] bg-[#fafafe]"}`}><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e84d82]">{pack.label}</p><h3 className="mt-5 font-serif text-4xl font-semibold">{pack.name}</h3><p className="mt-4 text-sm leading-6 text-[#62667f]">{pack.copy}</p><ul className="mt-8 grid gap-3">{pack.items.map(item => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center rounded-full border border-[#9f8cff]/45 text-[#2347c9]"><Check size={13} /></span>{item}</li>)}</ul><a href={contactHref} className="group mt-auto flex min-h-12 items-center justify-between rounded-full border border-[#07164b]/18 px-5 text-sm font-semibold transition-[background-color,color] hover:bg-[#07164b] hover:text-white">Cotizar este alcance <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a></article>)}</div>
            </div>
          </section>
        </SectionReveal>

        <section id="contacto" className="bg-[#07164b] px-5 pt-20 text-white sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-9 border-b border-white/16 pb-16 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#ff9abb]"><Sparkles size={14} /> Tu siguiente página</p><h2 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-8xl">Haz que tu negocio se vea tan bien como lo que haces.</h2></div><PrimaryLink href={contactHref} light>Empezar conversación <ArrowUpRight size={17} /></PrimaryLink></div>
            <footer className="grid gap-8 py-10 text-sm text-white/60 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]"><div><a href="#inicio" className="font-serif text-3xl font-semibold text-white">Ensueño</a><p className="mt-3 max-w-sm leading-6">Diseño y tecnología para negocios que quieren verse claros, actuales y listos para crecer.</p></div><div><p className="font-semibold text-white">Explorar</p><div className="mt-4 grid gap-2"><a href="#demos">Demos</a><a href="#incluye">Qué incluye</a><a href="#paquetes">Paquetes</a></div></div><div><p className="font-semibold text-white">Contacto</p><div className="mt-4 grid gap-2"><a href={contactHref}>WhatsApp</a><span className="inline-flex items-center gap-2"><Clock3 size={14} /> Lunes a viernes</span><span className="inline-flex items-center gap-2"><MapPin size={14} /> Chiapas, México</span></div></div></footer>
          </div>
        </section>
      </main>
    </div>
  );
}
