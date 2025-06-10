import { DateRange } from "react-day-picker";

declare interface CalendarContextData {
  selectedWeek: DateRange;
  setSelectedWeek: (range: DateRange) => void;
}
