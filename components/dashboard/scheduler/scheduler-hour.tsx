interface SchedulerHourProps {
  hour: string;
}

export function SchedulerHour({ hour }: SchedulerHourProps) {
  return (
    <span
      key={hour}
      className="caption-2 text-muted-foreground flex h-full min-h-[60px] w-full translate-y-1.5 items-end justify-end px-1 last:translate-0 last:border-none"
    >
      {hour}
    </span>
  );
}
