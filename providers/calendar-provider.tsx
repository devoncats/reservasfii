"use client";

import { CalendarContextData } from "@/types";
import { endOfWeek, startOfWeek } from "date-fns";
import { createContext, useState } from "react";
import { DateRange } from "react-day-picker";

export const CalendarContext = createContext<CalendarContextData | undefined>(
  undefined
);

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [selectedWeek, setSelectedWeek] = useState<DateRange>({
    from: startOfWeek(new Date()),
    to: endOfWeek(new Date()),
  });

  const value: CalendarContextData = {
    selectedWeek,
    setSelectedWeek,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
