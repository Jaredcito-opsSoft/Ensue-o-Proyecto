import { Button } from "@/components/ui/Button";

export function BusinessItemForm() {
  return (
    <form className="grid gap-5 rounded-[24px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Nombre
          <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" placeholder="Corte de cabello" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Precio
          <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" placeholder="Desde $180" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Descripcion
        <textarea className="min-h-24 rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" />
      </label>
      <Button type="button">Agregar servicio</Button>
    </form>
  );
}
