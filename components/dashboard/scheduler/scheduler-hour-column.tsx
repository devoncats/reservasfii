import { SchedulerHour } from "@/components/dashboard/scheduler/scheduler-hour";
import { HOURS } from "@/constants";

export function SchedulerHourColumn() {
  return (
    <div className="flex w-full flex-col items-end justify-end">
      <h4 className="caption-2 flex min-h-[30px] w-full items-end justify-end border-b p-1">
        UTC -5
      </h4>

      <span className="caption-2 flex min-h-[25px] w-full items-center justify-end border-b p-1">
        Todo el día
      </span>

      {HOURS.map((hour) => (
        <SchedulerHour hour={hour} key={hour} />
      ))}
    </div>
  );
}
