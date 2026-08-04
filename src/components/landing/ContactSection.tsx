"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { CONTACT_CONTEXTS, type ContactContext } from "@/data/atria-content";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

const contactEmail = "atriacontacto.mx@gmail.com";

export function ContactSection() {
  const [context, setContext] = useState<ContactContext>("atria-web");
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [goal, setGoal] = useState("");
  const [timing, setTiming] = useState("Sin fecha definida");
  const selected = CONTACT_CONTEXTS.find((item) => item.id === context) ?? CONTACT_CONTEXTS[0];

  const preparedMessage = useMemo(() => {
    const asSentence = (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) return "";
      return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
    };
    const details = [
      selected.prompt,
      name.trim() ? `Mi nombre es ${asSentence(name)}` : "",
      project.trim() ? `El proyecto o negocio es: ${asSentence(project)}` : "",
      goal.trim() ? `Lo que necesito resolver: ${asSentence(goal)}` : "",
      `Momento estimado: ${timing}.`,
    ].filter(Boolean);
    return details.join("\n");
  }, [goal, name, project, selected.prompt, timing]);

  const whatsappHref = createWhatsAppLink(appConfig.whatsappSalesNumber, preparedMessage);
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(`Brief ${selected.label} · Atria`)}&body=${encodeURIComponent(preparedMessage)}`;

  return (
    <section id="contacto" className="scroll-mt-24 bg-[var(--atria-accent)] px-4 py-18 text-white sm:px-8 sm:py-24 lg:px-12" aria-labelledby="contact-title">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end"><div><p className="text-[11px] font-bold uppercase text-white/72">Brief de proyecto</p><h2 id="contact-title" className="mt-4 max-w-4xl font-serif text-5xl font-medium leading-[.92] sm:text-6xl lg:text-7xl">Una buena conversación empieza con contexto.</h2></div><p className="max-w-xl text-base leading-7 text-white/82 lg:justify-self-end">Completa solo lo que ya tengas claro. El brief prepara el mensaje; no envía información hasta que eliges WhatsApp o correo.</p></div>

        <div className="mt-12 grid overflow-hidden border border-white/28 lg:grid-cols-[.92fr_1.08fr]">
          <form className="p-6 sm:p-8 lg:p-10" onSubmit={(event) => event.preventDefault()}>
            <fieldset><legend className="text-[10px] font-bold uppercase text-white/65">01 · Tipo de proyecto</legend><div className="mt-4 grid grid-cols-2 gap-px overflow-hidden bg-white/22">{CONTACT_CONTEXTS.map((item) => <button key={item.id} type="button" aria-pressed={context === item.id} onClick={() => setContext(item.id)} className={`min-h-14 p-3 text-left text-xs font-semibold transition-colors ${context === item.id ? "bg-white text-[var(--atria-ink)]" : "bg-[var(--atria-accent)] text-white hover:bg-white/10"}`}>{item.label}</button>)}</div></fieldset>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[10px] font-bold uppercase text-white/65">02 · Tu nombre<input value={name} onChange={(event) => setName(event.target.value)} placeholder="¿Cómo te llamas?" className="min-h-12 border-b border-white/35 bg-transparent px-0 text-sm font-medium normal-case text-white outline-none placeholder:text-white/42 focus:border-white" /></label>
              <label className="grid gap-2 text-[10px] font-bold uppercase text-white/65">03 · Negocio o proyecto<input value={project} onChange={(event) => setProject(event.target.value)} placeholder="Nombre o giro" className="min-h-12 border-b border-white/35 bg-transparent px-0 text-sm font-medium normal-case text-white outline-none placeholder:text-white/42 focus:border-white" /></label>
            </div>
            <label className="mt-6 grid gap-2 text-[10px] font-bold uppercase text-white/65">04 · Qué necesitas resolver<textarea value={goal} onChange={(event) => setGoal(event.target.value)} placeholder="Cuéntanos el problema, la idea o el resultado que buscas." rows={3} className="resize-none border-b border-white/35 bg-transparent py-3 text-sm font-medium normal-case leading-6 text-white outline-none placeholder:text-white/42 focus:border-white" /></label>
            <label className="mt-6 grid gap-2 text-[10px] font-bold uppercase text-white/65">05 · Cuándo te gustaría comenzar<select value={timing} onChange={(event) => setTiming(event.target.value)} className="min-h-12 border-b border-white/35 bg-transparent text-sm font-medium normal-case text-white outline-none focus:border-white"><option className="text-black">Sin fecha definida</option><option className="text-black">Este mes</option><option className="text-black">En 1–2 meses</option><option className="text-black">Solo estoy explorando</option></select></label>
          </form>

          <div className="flex flex-col bg-[#111214] p-6 sm:p-8 lg:p-10"><p className="text-[10px] font-bold uppercase text-white/48">Mensaje preparado</p><pre className="mt-5 whitespace-pre-wrap font-sans text-base leading-7 text-white/82">{preparedMessage}</pre><div className="mt-auto pt-10"><div className="flex flex-col gap-3 sm:flex-row"><a href={whatsappHref} className="group inline-flex min-h-12 flex-1 items-center justify-between bg-white px-5 text-sm font-bold text-[#111214] hover:bg-[#f5f2ee]"><span className="inline-flex items-center gap-2"><MessageCircle size={17} aria-hidden /> Abrir WhatsApp</span><ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden /></a><a href={emailHref} className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/28 px-5 text-sm font-bold text-white hover:bg-white/8"><Mail size={17} aria-hidden /> Correo</a></div><p className="mt-5 text-xs leading-5 text-white/48">+52 961 285 8828 · {contactEmail}</p></div></div>
        </div>
      </div>
    </section>
  );
}
