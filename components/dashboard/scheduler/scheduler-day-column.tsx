import SchedulerDay from "@/components/dashboard/scheduler/scheduler-day";
import SchedulerReservationCard from "@/components/dashboard/scheduler/scheduler-reservation-card";
import { useScheduler } from "@/hooks/use-scheduler";
import { cn } from "@/lib/utils";
import { isToday } from "date-fns";

interface SchedulerDayColumnProps {
  date: Date;
  number: number;
  name: string;
}

export function SchedulerDayColumn({
  date,
  number,
  name,
}: SchedulerDayColumnProps) {
  const { reservations } = useScheduler();

  return (
    <div
      key={number}
      className={cn(
        "flex h-full flex-col",
        isToday(date) ? "text-foreground" : "text-muted-foreground"
      )}
    >
      <p className="h-[30px] w-full border-b p-1 text-center text-sm">
        {name}&nbsp;
        {number}
      </p>

      <div className="h-[25px] w-full border-b border-l p-1 text-right font-mono text-xs" />

      <div className="relative">
        {Array.from({ length: 24 }, (_, i) => (
          <SchedulerDay key={i} />
        ))}

        {reservations.map((reservation) => (
          <SchedulerReservationCard {...reservation} key={reservation.id} />
        ))}
      </div>
    </div>
  );
}
