"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, FileText, Lock, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { AtriaLogo } from "@/components/ui/AtriaLogo";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

export type LegalSection = {
  id: string;
  title: string;
  content: string[];
};

type LegalPlaceholderPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPlaceholderPage({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalPlaceholderPageProps) {
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id || "");
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    `Hola, tengo una duda sobre el documento: ${title}.`
  );

  return (
    <main className="min-h-screen bg-[var(--atria-page)] text-[var(--atria-ink)]">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 sm:px-8">
          <Link href="/" aria-label="Volver al inicio de Alebrije Tech">
            <AtriaLogo sloganText="Estudio Digital" />
          </Link>
          <Link
            href="/"
            className="atria-float-action inline-flex items-center gap-2 rounded-full border border-black/14 bg-white px-5 py-2 text-xs font-bold text-[var(--atria-ink)] hover:border-[var(--atria-accent)]"
          >
            <ArrowLeft size={14} />
            Volver a la página principal
          </Link>
        </div>
      </header>

      {/* Hero Title Section */}
      <section className="border-b border-black/10 bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[var(--atria-accent)]">
            <ShieldCheck size={14} />
            {eyebrow}
          </div>
          <h1 className="mt-3 font-serif text-4xl font-medium sm:text-6xl text-[var(--atria-ink)]">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--atria-ink-soft)]">
            {subtitle}
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs text-[var(--atria-muted)]">
            <span>Última actualización: {lastUpdated}</span>
            <span>·</span>
            <span>Alebrije Tech · Tuxtla Gutiérrez, Chiapas</span>
          </div>
        </div>
      </section>

      {/* Main Document Layout with Sidebar */}
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-8 lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
        {/* Sidebar Table of Contents */}
        <aside className="mb-10 hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--atria-accent)]">
              <FileText size={14} /> Índice del documento
            </p>
            <nav className="mt-4 flex flex-col gap-1.5 text-xs">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`rounded-lg px-3 py-2 font-semibold transition-colors ${
                    activeSectionId === section.id
                      ? "bg-[var(--atria-accent-soft)] text-[var(--atria-accent-hover)]"
                      : "text-[var(--atria-ink-soft)] hover:bg-black/5 hover:text-[var(--atria-ink)]"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 border-t border-black/10 pt-5">
              <p className="text-[11px] font-bold text-[var(--atria-ink)]">¿Tienes alguna duda?</p>
              <p className="mt-1 text-[11px] leading-5 text-[var(--atria-ink-soft)]">
                Nuestro equipo responde directamente por WhatsApp.
              </p>
              <a
                href={whatsappHref}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--atria-ink)] py-2 text-xs font-bold text-white hover:bg-[var(--atria-accent)]"
              >
                <MessageCircle size={14} /> Contactar
              </a>
            </div>
          </div>
        </aside>

        {/* Content Body */}
        <article className="space-y-10">
          {/* Important Callout Box */}
          <div className="rounded-2xl border border-[var(--atria-accent)]/30 bg-[var(--atria-accent-soft)]/50 p-6">
            <div className="flex items-start gap-3">
              <Lock size={20} className="mt-0.5 shrink-0 text-[var(--atria-accent)]" />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--atria-accent-hover)]">
                  Compromiso de Transparencia Alebrije Tech
                </h3>
                <p className="mt-2 text-xs leading-6 text-[var(--atria-ink)]">
                  En Alebrije Tech construimos relaciones basadas en la claridad. Este documento
                  establece las reglas de operación, protección de datos y garantías de
                  servicio para proteger los intereses de tu negocio.
                </p>
              </div>
            </div>
          </div>

          {/* Document Sections */}
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 rounded-2xl border border-black/10 bg-white p-7 sm:p-9 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-medium sm:text-3xl text-[var(--atria-ink)] border-b border-black/8 pb-4">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--atria-ink-soft)]">
                {section.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {/* Footer Contact Callout */}
          <div className="rounded-2xl border border-black/10 bg-white p-8 text-center sm:p-10">
            <CheckCircle2 size={32} className="mx-auto text-[var(--atria-accent)]" />
            <h3 className="mt-4 font-serif text-3xl font-medium">¿Preguntas sobre este documento?</h3>
            <p className="mt-2 text-sm text-[var(--atria-ink-soft)]">
              Estamos a tu disposición para aclarar cualquier término o punto legal.
            </p>
            <a
              href={whatsappHref}
              className="atria-float-action mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--atria-accent)] px-8 py-3 text-xs font-bold uppercase text-white shadow-md hover:bg-[var(--atria-accent-hover)]"
            >
              <MessageCircle size={16} /> Hablar con un diseñador de Alebrije Tech
            </a>
          </div>
        </article>
      </div>

      {/* Page Footer */}
      <footer className="border-t border-black/10 bg-white px-4 py-8 text-center text-xs text-[var(--atria-muted)]">
        <p>© {new Date().getFullYear()} Alebrije Tech · Tuxtla Gutiérrez, Chiapas, México.</p>
      </footer>
    </main>
  );
}
