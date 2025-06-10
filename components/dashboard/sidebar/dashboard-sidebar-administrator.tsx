import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_DATA } from "@/constants";
import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export function DashboardSidebarAdministrator() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (!session?.user?.role) {
    redirect("/signin");
  }

  if (session.user.role === UserRole.ADMINISTRATOR) {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>Administrador</SidebarGroupLabel>
        <SidebarMenu>
          {SIDEBAR_DATA.administrator.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="flex items-center gap-2">
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    );
  }
}
