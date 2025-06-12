import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/sidebar/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SchedulerProvider } from "@/providers/scheduler-provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SchedulerProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset className="flex h-screen flex-col">
          <DashboardHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </SchedulerProvider>
  );
}
