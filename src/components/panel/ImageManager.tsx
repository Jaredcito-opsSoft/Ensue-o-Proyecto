import type { Business } from "@/types";

export function ImageManager({ business }: { business: Business }) {
  return (
    <div className="grid gap-4 rounded-[24px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-6">
      <label className="grid gap-2 text-sm font-semibold">
        Nueva imagen por URL
        <input className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" placeholder="https://..." />
      </label>
      <div className="grid gap-3 sm:grid-cols-3">
        {business.images.map((image) => (
          <img key={image.id} src={image.imageUrl} alt={image.altText} className="h-48 w-full rounded-2xl object-cover" />
        ))}
      </div>
    </div>
  );
}
