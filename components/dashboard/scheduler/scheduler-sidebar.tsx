"use client";

import { Calendar } from "@/components/ui/calendar";
import { useScheduler } from "@/hooks/use-scheduler";
import { endOfWeek, startOfWeek } from "date-fns";
import { es } from "date-fns/locale";
import { rangeIncludesDate } from "react-day-picker";

export function SchedulerSidebar() {
  const { selectedWeek, setSelectedWeek } = useScheduler();

  const handleOnDayClick = (day: Date) => {
    setSelectedWeek({
      from: startOfWeek(day),
      to: endOfWeek(day),
    });
  };

  return (
    <nav className="flex w-fit justify-center border-r p-4">
      <Calendar
        locale={es}
        weekStartsOn={0}
        modifiers={{
          selected: selectedWeek,
          range_start: selectedWeek.from,
          range_end: selectedWeek.to,
          range_middle: (date: Date) =>
            rangeIncludesDate(selectedWeek, date, true),
        }}
        className="p-0"
        onDayClick={handleOnDayClick}
      />
    </nav>
  );
}
