interface SchedulerHourProps {
  hour: string;
}

export function SchedulerHour({ hour }: SchedulerHourProps) {
  return (
    <span
      key={hour}
      className="caption-2 text-muted-foreground flex h-full min-h-[50px] w-full translate-y-3 items-end justify-end p-1 last:translate-0 last:border-none"
    >
      {hour}
    </span>
  );
}
