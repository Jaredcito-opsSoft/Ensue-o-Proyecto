"use client";

import { Button } from "@/components/ui/Button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <div>
        <h1 className="text-4xl font-semibold">Algo fallo</h1>
        <p className="mt-3 text-[var(--pde-muted)]">Intenta de nuevo para recargar esta vista.</p>
        <Button className="mt-6" onClick={reset}>Reintentar</Button>
      </div>
    </main>
  );
}
