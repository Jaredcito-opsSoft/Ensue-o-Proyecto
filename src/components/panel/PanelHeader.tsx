export function PanelHeader({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <header className="border-b border-[var(--pde-border)] bg-[var(--pde-paper)] px-6 py-5">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--pde-muted)]">{eyebrow}</p>
      ) : null}
      <h1 className="mt-1 text-3xl font-semibold tracking-[-0.02em]">{title}</h1>
    </header>
  );
}
