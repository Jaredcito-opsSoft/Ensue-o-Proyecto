import { Button } from "@/components/ui/Button";
import type { Business } from "@/types";

export function BusinessForm({ business }: { business?: Business }) {
  return (
    <form className="grid gap-5 rounded-[24px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Nombre
          <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue={business?.name} placeholder="Bella Imagen Tuxtla" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Slug
          <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue={business?.slug} placeholder="bella-imagen-tuxtla" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Categoria
          <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue={business?.category} placeholder="Belleza" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          WhatsApp
          <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue={business?.whatsapp} placeholder="529611234567" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Descripcion corta
        <textarea className="min-h-28 rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue={business?.shortDescription} />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        URL de portada
        <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue={business?.coverImageUrl} />
      </label>
      <div className="flex justify-end">
        <Button type="button">Guardar cambios</Button>
      </div>
    </form>
  );
}
