import { Laboratory, Reservation } from "@prisma/client";

declare interface BreadcrumbRoute {
  href: string;
  label: string;
  isLast: boolean;
}

declare interface RequiredDateRange {
  from: Date;
  to: Date;
}

declare interface SchedulerContextData {
  // Fetching states
  isLoading: boolean;
  error: string | null;
  laboratories: Pick<Laboratory, "id", "name">[];
  reservations: Omit<Reservation, "createdAt" | "updatedAt">[];

  // Fetching Actions
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setLaboratories: (laboratories: Pick<Laboratory, "id", "name">[]) => void;
  setReservations: (
    reservations: Omit<Reservation, "createdAt" | "updatedAt">[]
  ) => void;

  // UI states
  selectedWeek: RequiredDateRange;
  selectedLaboratoryId: string;

  // UI Actions
  setSelectedWeek: (range: RequiredDateRange) => void;
  setSelectedLaboratoryId: (id: string) => void;
}
