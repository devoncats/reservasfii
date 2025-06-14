import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reservation } from "@prisma/client";

type SchedulerReservationCardProps = Omit<
  Reservation,
  "createdAt" | "updatedAt"
>;

export default function SchedulerReservationCard({
  ...reservation
}: SchedulerReservationCardProps) {
  const { start, end, courseId } = reservation;

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

  const startPosition = 50 + startHour * 50 + (startMinute / 60) * 50;
  const size =
    (50 * ((endHour - startHour) * 60 + (endMinute - startMinute))) / 60;

  return (
    <Card
      className="absolute left-1 flex w-[calc(100%-8px)] cursor-pointer gap-0 rounded-lg p-0 shadow-none"
      style={{ top: `${startPosition}px`, height: `${size}px` }}
    >
      <CardHeader className="gap-0 p-2 pb-0">
        <CardTitle className="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
          {courseId}
        </CardTitle>
      </CardHeader>

      {size > 50 && (
        <CardContent className="p-2 pt-0">
          <p className="text-xs text-[#666666]">
            {startTime} - {endTime}
          </p>
        </CardContent>
      )}
    </Card>
  );
}
