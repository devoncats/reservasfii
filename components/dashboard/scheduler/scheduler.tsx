"use client";

import { SchedulerDayColumn } from "@/components/dashboard/scheduler/scheduler-day-column";
import { SchedulerHourColumn } from "@/components/dashboard/scheduler/scheduler-hour-column";
import { SchedulerLaboratorySelect } from "@/components/dashboard/scheduler/sheduler-laboratory-select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScheduler } from "@/hooks/use-scheduler";
import { getDaysInWeek, toFormattedMonth } from "@/lib/scheduler";

export default function Scheduler() {
  const { selectedWeek } = useScheduler();

  const days = getDaysInWeek(selectedWeek.from, selectedWeek.to);

  const month = toFormattedMonth(selectedWeek.from);
  const year = selectedWeek.from.getFullYear();

  return (
    <div className="flex w-full flex-col">
      <div className="flex h-16 flex-shrink-0 items-center justify-between border-b p-4">
        <h3 className="heading-1">
          <span>{month}&nbsp;</span>
          <span className="font-light">{year}</span>
        </h3>

        <SchedulerLaboratorySelect />
      </div>

      <ScrollArea className="min-h-0">
        <div className="scheduler">
          <SchedulerHourColumn />

          {days.map((day) => (
            <SchedulerDayColumn key={day.number} {...day} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
