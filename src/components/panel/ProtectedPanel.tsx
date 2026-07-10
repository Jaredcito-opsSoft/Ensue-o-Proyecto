import type { ReactNode } from "react";
import { requireSession } from "@/features/auth/actions";
import { PanelShell } from "./PanelShell";

export async function ProtectedPanel({ children }: { children: ReactNode }) {
  await requireSession();
  return <PanelShell>{children}</PanelShell>;
}
