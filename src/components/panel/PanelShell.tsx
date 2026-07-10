import type { ReactNode } from "react";
import { PanelSidebar } from "./PanelSidebar";

export function PanelShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-dvh bg-[var(--pde-paper)] lg:grid-cols-[260px_1fr]">
      <div className="hidden lg:block">
        <PanelSidebar />
      </div>
      <main>{children}</main>
    </div>
  );
}
