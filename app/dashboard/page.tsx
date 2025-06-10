import { CalendarSidebar } from "@/components/dashboard/calendar/calendar-sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
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
      <SidebarInset>
        <DashboardHeader />
        <CalendarProvider>
          <section className="h-full">
            <CalendarSidebar />
          </section>
        </CalendarProvider>
      </SidebarInset>
    </SidebarProvider>
  );
}
