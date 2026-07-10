import Link from "next/link";
import { Building2, ClipboardList, Home, LogOut } from "lucide-react";
import { logoutAction } from "@/features/auth/actions";

const links = [
  { href: "/panel", label: "Inicio", icon: Home },
  { href: "/panel/negocios", label: "Negocios", icon: Building2 },
  { href: "/panel/solicitudes", label: "Solicitudes", icon: ClipboardList },
];

export function PanelSidebar() {
  return (
    <aside className="flex min-h-dvh flex-col border-r border-[var(--pde-border)] bg-[var(--pde-paper)] p-4">
      <Link href="/panel" className="rounded-2xl bg-[var(--pde-ink)] px-4 py-4 text-white">
        <p className="text-sm font-semibold">Presencia Digital</p>
        <p className="mt-1 text-xs text-white/65">Panel interno</p>
      </Link>
      <nav className="mt-6 grid gap-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            href={href}
            key={href}
            className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-[var(--pde-muted)] hover:bg-[var(--pde-surface)] hover:text-[var(--pde-ink)]"
          >
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>
      <form action={logoutAction} className="mt-auto">
        <button className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-semibold text-[var(--pde-muted)] hover:bg-[var(--pde-surface)]">
          <LogOut size={18} /> Salir
        </button>
      </form>
    </aside>
  );
}
