import type { Business } from "@/types";

export function BusinessFooter({ business }: { business: Business }) {
  return (
    <footer className="px-5 py-10 text-center text-sm text-[var(--pde-muted)] sm:px-8 lg:px-12">
      <p>{business.name} · Mini pagina creada con Presencia Digital Express</p>
    </footer>
  );
}
