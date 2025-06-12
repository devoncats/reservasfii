import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/sidebar/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CalendarProvider } from "@/providers/calendar-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CalendarProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset className="flex h-screen flex-col">
          <DashboardHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </CalendarProvider>
  );
}
