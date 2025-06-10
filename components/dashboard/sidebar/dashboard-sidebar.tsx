"use client";

import { DashboardSidebarAdministrator } from "@/components/dashboard/sidebar/dashboard-sidebar-administrator";
import { DashboardSidebarFooter } from "@/components/dashboard/sidebar/dashboard-sidebar-footer";
import { DashboardSidebarHeader } from "@/components/dashboard/sidebar/dashboard-sidebar-header";
import { DashboardSidebarReservations } from "@/components/dashboard/sidebar/dashboard-sidebar-reservations";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <DashboardSidebarHeader />

      <SidebarContent>
        <DashboardSidebarReservations />
        <DashboardSidebarAdministrator />
      </SidebarContent>

      <DashboardSidebarFooter />
    </Sidebar>
  );
}
