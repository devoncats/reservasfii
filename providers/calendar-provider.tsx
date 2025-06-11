"use client";

import { LABORATORIES } from "@/constants";
import { endOfWeek, startOfWeek } from "date-fns";
import { createContext, useCallback, useEffect, useState } from "react";

export const CalendarContext = createContext<CalendarContextData | undefined>(
  undefined
);

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  // Fetching states
  const [laboratories, setLaboratories] = useState<any[]>([]);

  // UI states
  const [selectedWeek, setSelectedWeek] = useState<RequiredDateRange>({
    from: startOfWeek(new Date()),
    to: endOfWeek(new Date()),
  });
  const [selectedLaboratoryId, setSelectedLaboratoryId] = useState<string>("");

  // Functions
  const refreshData = useCallback(() => {
    const laboratoriesData = LABORATORIES;

    setLaboratories(laboratoriesData);

    if (!selectedLaboratoryId && laboratoriesData.length > 0) {
      setSelectedLaboratoryId(laboratoriesData[0].id);
    }
  }, [selectedLaboratoryId]);

  // Refresh data on mount
  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // Context value
  const value: CalendarContextData = {
    laboratories,
    selectedWeek,
    selectedLaboratoryId,

    setLaboratories,
    setSelectedWeek,
    setSelectedLaboratoryId,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
