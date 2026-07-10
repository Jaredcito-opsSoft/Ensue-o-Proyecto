import { ButtonLink } from "@/components/ui/Button";

export function EmptyState() {
  return (
    <div className="rounded-[24px] border border-dashed border-[var(--pde-border)] bg-[var(--pde-surface)] p-10 text-center">
      <h2 className="text-2xl font-semibold">Todavia no hay registros</h2>
      <p className="mx-auto mt-3 max-w-md text-[var(--pde-muted)]">
        Crea el primer negocio para generar link, QR y vista publica.
      </p>
      <ButtonLink className="mt-6" href="/panel/negocios/nuevo">
        Crear negocio
      </ButtonLink>
    </div>
  );
}
