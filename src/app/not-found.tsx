import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-sm text-[var(--pde-muted)]">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Pagina no encontrada</h1>
        <p className="mt-3 text-[var(--pde-muted)]">El link puede estar oculto, en borrador o no existir.</p>
        <ButtonLink className="mt-6" href="/">Volver al inicio</ButtonLink>
      </div>
    </main>
  );
}
