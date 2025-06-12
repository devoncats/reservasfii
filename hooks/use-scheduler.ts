import { SchedulerContext } from "@/providers/scheduler-provider";
import { useContext } from "react";

export function useScheduler() {
  const context = useContext(SchedulerContext);

  if (!context) {
    throw new Error("useScheduler must be used within a SchedulerProvider");
  }

  return context;
}
