import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import Scheduler from "@/components/dashboard/scheduler/scheduler";
import { SchedulerSidebar } from "@/components/dashboard/scheduler/scheduler-sidebar";
import { DashboardSidebar } from "@/components/dashboard/sidebar/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { CalendarProvider } from "@/providers/calendar-provider";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="flex h-screen flex-col">
        <DashboardHeader />
        <CalendarProvider>
          <div className="flex min-h-0 flex-1">
            <SchedulerSidebar />
            <Scheduler />
          </div>
        </CalendarProvider>
      </SidebarInset>
    </SidebarProvider>
  );
}
