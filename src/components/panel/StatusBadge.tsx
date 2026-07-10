import { publicStatuses, serviceStatuses } from "@/lib/constants";
import type { BusinessStatus, ServiceStatus } from "@/types";

export function StatusBadge({ status }: { status: BusinessStatus | ServiceStatus }) {
  const label =
    status in publicStatuses
      ? publicStatuses[status as BusinessStatus]
      : serviceStatuses[status as ServiceStatus];

  return (
    <span className="inline-flex rounded-full border border-[var(--pde-border)] bg-[var(--pde-surface)] px-3 py-1 text-xs font-semibold text-[var(--pde-muted)]">
      {label}
    </span>
  );
}
