import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_DATA } from "@/constants";
import Link from "next/link";

export function DashboardSidebarReservations() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Reservas</SidebarGroupLabel>
      <SidebarMenu>
        {SIDEBAR_DATA.reservations.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton asChild>
              <Link href={item.url} className="flex items-center gap-2">
                <item.icon className="text-muted-foreground" />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
