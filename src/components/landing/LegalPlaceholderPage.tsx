import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { appConfig } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

type LegalPlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function LegalPlaceholderPage({
  eyebrow,
  title,
  description,
}: LegalPlaceholderPageProps) {
  const whatsappHref = createWhatsAppLink(
    appConfig.whatsappSalesNumber,
    "Hola, necesito información sobre Atria."
  );

  return (
    <main className="min-h-screen bg-[var(--atria-page)] px-4 py-4 text-[var(--atria-ink)] sm:px-6 sm:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-32px)] max-w-[1180px] flex-col rounded-lg border border-black/10 bg-white sm:min-h-[calc(100vh-48px)]">
        <header className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-8">
          <Link href="/" className="inline-flex items-center gap-2 font-serif text-2xl font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--atria-ink)] font-sans text-xs font-bold text-white">
              A
            </span>
            Atria
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/12 px-4 text-sm font-bold transition-colors hover:border-[var(--atria-accent)]"
          >
            <ArrowLeft size={16} aria-hidden />
            Volver
          </Link>
        </header>

        <section className="grid flex-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.65fr] lg:items-end lg:px-14">
          <div>
            <p className="text-[11px] font-bold uppercase text-[var(--atria-accent)]">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[0.94] sm:text-7xl">
              {title}
            </h1>
          </div>
          <div className="border-t border-black/12 pt-6">
            <p className="text-base leading-7 text-[var(--atria-ink-soft)]">{description}</p>
            <p className="mt-5 text-sm leading-6 text-[var(--atria-ink-soft)]">
              Esta página se completará con la información legal definitiva de Atria.
            </p>
            <a
              href={whatsappHref}
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--atria-ink)] px-5 text-sm font-bold text-white transition-[background-color,transform] hover:bg-[var(--atria-accent)] active:scale-[.97]"
            >
              <MessageCircle size={17} aria-hidden />
              Contactar a Atria
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-black/10 px-5 py-5 text-xs text-[var(--atria-ink-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>+52 961 285 8828</span>
          <span>Tuxtla Gutiérrez, Chiapas, México</span>
        </footer>
      </div>
    </main>
  );
}
