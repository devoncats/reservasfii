import { LABELS } from "@/constants";
import { BreadcrumbRoute } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toSentenceCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRouteLabels(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbRoute[] = [];

  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    breadcrumbs.push({
      label: LABELS[segment] || toSentenceCase(segment),
      href: currentPath,
      isLast,
    });
  });

  return breadcrumbs;
}
