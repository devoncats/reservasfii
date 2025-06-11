import { toSentenceCase } from "@/lib/utils";

export function toFormattedMonth(date: Date) {
  return toSentenceCase(date.toLocaleDateString("es-ES", { month: "long" }));
}

export function getDaysInWeek(from: Date, to: Date) {
  const days = [];

  const current = new Date(from);

  while (current <= to) {
    days.push({
      date: new Date(current),
      number: current.getDate(),
      name: toSentenceCase(
        current.toLocaleDateString("es-ES", { weekday: "short" })
      ),
    });

    current.setDate(current.getDate() + 1);
  }

  return days;
}
