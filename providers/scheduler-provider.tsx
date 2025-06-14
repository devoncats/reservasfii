"use client";

import { getAccessibleLaboratoriesAction } from "@/actions/laboratory.actions";
import { getAllReservationsAction } from "@/actions/reservation.actions";
import { RequiredDateRange, SchedulerContextData } from "@/types";
import { endOfWeek, startOfWeek } from "date-fns";
import { createContext, useCallback, useEffect, useState } from "react";

export const SchedulerContext = createContext<SchedulerContextData | undefined>(
  undefined
);

export function SchedulerProvider({ children }: { children: React.ReactNode }) {
  // Fetching states
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [laboratories, setLaboratories] = useState<
    SchedulerContextData["laboratories"]
  >([]);
  const [reservations, setReservations] = useState<
    SchedulerContextData["reservations"]
  >([]);

  // UI states
  const [selectedWeek, setSelectedWeek] = useState<RequiredDateRange>({
    from: startOfWeek(new Date()),
    to: endOfWeek(new Date()),
  });
  const [selectedLaboratoryId, setSelectedLaboratoryId] = useState<string>("");

  // Functions
  const refreshData = useCallback(async () => {
    const [laboratoriesResponse, reservationsResponse] = await Promise.all([
      getAccessibleLaboratoriesAction(),
      getAllReservationsAction(
        selectedWeek.from,
        selectedWeek.to,
        selectedLaboratoryId
      ),
    ]);

    if (!laboratoriesResponse.success) {
      setError(laboratoriesResponse.error);
      setIsLoading(false);
      return;
    }

    if (!reservationsResponse.success) {
      setError(reservationsResponse.error);
      setIsLoading(false);
      return;
    }

    if (!laboratoriesResponse || !laboratoriesResponse.data) {
      setError("No laboratories found");
      setIsLoading(false);
      return;
    }

    if (!reservationsResponse || !reservationsResponse.data) {
      setError("No reservations found");
      setIsLoading(false);
      return;
    }

    setLaboratories(laboratoriesResponse.data || []);
    setReservations(reservationsResponse.data || []);

    if (!selectedLaboratoryId && laboratoriesResponse.data.length > 0) {
      setSelectedLaboratoryId(laboratoriesResponse.data[0].id);
    }
  }, [selectedLaboratoryId, selectedWeek.from, selectedWeek.to]);

  // Refresh data on mount
  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // Context value
  const value: SchedulerContextData = {
    isLoading,
    error,
    laboratories,
    reservations,
    selectedWeek,
    selectedLaboratoryId,

    setIsLoading,
    setError,
    setLaboratories,
    setReservations,
    setSelectedWeek,
    setSelectedLaboratoryId,
  };

  return (
    <SchedulerContext.Provider value={value}>
      {children}
    </SchedulerContext.Provider>
  );
}
