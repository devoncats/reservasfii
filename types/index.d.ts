declare interface RequiredDateRange {
  from: Date;
  to: Date;
}

declare interface CalendarContextData {
  // Fetching states
  laboratories: any[];

  // Fetching Actions
  setLaboratories: (laboratory: any[]) => void;

  // UI states
  selectedWeek: RequiredDateRange;
  selectedLaboratoryId: string;

  // UI Actions
  setSelectedWeek: (range: RequiredDateRange) => void;
  setSelectedLaboratoryId: (id: string) => void;
}
