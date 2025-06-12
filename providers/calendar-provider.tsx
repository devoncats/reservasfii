"use client";

import { getAccessibleLaboratoriesAction } from "@/actions/laboratory.actions";
import { CalendarContextData, RequiredDateRange } from "@/types";
import { endOfWeek, startOfWeek } from "date-fns";
import { createContext, useCallback, useEffect, useState } from "react";

export const CalendarContext = createContext<CalendarContextData | undefined>(
  undefined
);

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  // Fetching states
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [laboratories, setLaboratories] = useState<
    CalendarContextData["laboratories"]
  >([]);

  // UI states
  const [selectedWeek, setSelectedWeek] = useState<RequiredDateRange>({
    from: startOfWeek(new Date()),
    to: endOfWeek(new Date()),
  });
  const [selectedLaboratoryId, setSelectedLaboratoryId] = useState<string>("");

  // Functions
  const refreshData = useCallback(async () => {
    const [laboratoriesResponse] = await Promise.all([
      getAccessibleLaboratoriesAction(),
    ]);

    if (!laboratoriesResponse.success) {
      setError(laboratoriesResponse.error);
      setIsLoading(false);
      return;
    }

    if (!laboratoriesResponse || !laboratoriesResponse.data) {
      setError("No laboratories found");
      setIsLoading(false);
      return;
    }

    setLaboratories(laboratoriesResponse!.data);

    if (!selectedLaboratoryId && laboratoriesResponse.data.length > 0) {
      setSelectedLaboratoryId(laboratoriesResponse.data[0].id);
    }
  }, [selectedLaboratoryId]);

  // Refresh data on mount
  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // Context value
  const value: CalendarContextData = {
    isLoading,
    error,
    laboratories,
    selectedWeek,
    selectedLaboratoryId,

    setIsLoading,
    setError,
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
