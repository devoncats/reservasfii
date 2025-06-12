"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getRouteLabels } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname();
  const routes = getRouteLabels(pathname);

  return (
    <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />

      <Breadcrumb>
        <BreadcrumbList>
          {routes.map((route) => (
            <>
              <BreadcrumbItem key={route.href}>
                {route.isLast ? (
                  <BreadcrumbPage>{route.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={route.href}>
                    {route.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!route.isLast && <BreadcrumbSeparator />}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
