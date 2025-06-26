import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course, Reservation } from "@prisma/client";

type SchedulerReservationCardProps = Omit<
  Reservation,
  "createdAt" | "updatedAt"
> & { course: Pick<Course, "id" | "name"> };

const HOUR_SIZE = 60;

// fix sizing //

export default function SchedulerReservationCard({
  ...reservation
}: SchedulerReservationCardProps) {
  const { start, end, course } = reservation;

  const startTime = start.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const endTime = end.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const startHour = start.getHours();
  const startMinute = start.getMinutes();
  const endHour = end.getHours();
  const endMinute = end.getMinutes();

  const startPosition =
    HOUR_SIZE + startHour * HOUR_SIZE + (startMinute / 60) * HOUR_SIZE;
  const size =
    (HOUR_SIZE * ((endHour - startHour) * 60 + (endMinute - startMinute))) / 60;

  return (
    <Card
      className="absolute left-1 flex w-[calc(100%-8px)] cursor-pointer gap-0 rounded p-0 shadow-none"
      style={{ top: `${startPosition}px`, height: `${size}px` }}
    >
      <CardHeader className="gap-0 p-2 pb-0">
        <CardTitle className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
          {course.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-2 pt-0">
        <p className="text-xs text-[#666666]">
          {startTime} - {endTime}
        </p>
      </CardContent>
    </Card>
  );
}
