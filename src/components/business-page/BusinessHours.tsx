import { Clock } from "lucide-react";
import type { Business } from "@/types";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";

export function BusinessHours({ business }: { business: Business }) {
  return (
    <Reveal>
      <Card className="p-6">
        <Clock className="text-[var(--pde-accent)]" />
        <h2 className="mt-5 text-2xl font-semibold">Horarios</h2>
        <div className="mt-5 grid gap-3">
          {business.hours.map((hour) => (
            <div className="flex justify-between gap-4 border-t border-[var(--pde-border)] pt-3" key={hour.day}>
              <p className="font-medium">{hour.day}</p>
              <p className="text-right text-[var(--pde-muted)]">
                {hour.isClosed ? hour.notes ?? "Cerrado" : `${hour.opensAt} - ${hour.closesAt}`}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}
