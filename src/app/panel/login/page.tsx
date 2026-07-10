import { loginAction } from "@/features/auth/actions";
import { Button } from "@/components/ui/Button";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="grid min-h-dvh place-items-center bg-[var(--pde-paper)] px-5">
      <form action={loginAction} className="w-full max-w-md rounded-[28px] border border-[var(--pde-border)] bg-[var(--pde-surface)] p-7 shadow-[var(--shadow-card)]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--pde-muted)]">Panel interno</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Entrar</h1>
        {error ? (
          <p className="mt-5 rounded-2xl bg-[#f3ded7] px-4 py-3 text-sm font-semibold text-[#7b2f20]">
            Email o contrasena incorrectos.
          </p>
        ) : null}
        <label className="mt-6 grid gap-2 text-sm font-semibold">
          Email
          <input name="email" type="email" className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue="admin@presenciadigital.local" />
        </label>
        <label className="mt-4 grid gap-2 text-sm font-semibold">
          Contrasena
          <input name="password" type="password" className="rounded-xl border border-[var(--pde-border)] bg-[var(--pde-paper)] px-4 py-3" defaultValue="admin12345" />
        </label>
        <Button className="mt-6 w-full" type="submit">Iniciar sesion</Button>
        <p className="mt-4 text-xs leading-5 text-[var(--pde-muted)]">
          Desarrollo local: admin@presenciadigital.local / admin12345. En produccion usa ADMIN_PASSWORD_HASH.
        </p>
      </form>
    </main>
  );
}
