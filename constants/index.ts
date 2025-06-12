import {
  Calendar,
  CalendarCheck2,
  CalendarHeart,
  CalendarPlus,
  Eye,
} from "lucide-react";

export const SIDEBAR_DATA = {
  reservations: [
    {
      name: "Todas las reservas",
      url: "/dashboard/",
      icon: Calendar,
    },
    {
      name: "Mis reservas",
      url: "/dashboard/reservations/",
      icon: CalendarHeart,
    },
    {
      name: "Crear reserva",
      url: "/dashboard/reservations/create",
      icon: CalendarPlus,
    },
    {
      name: "Aprobar reservas",
      url: "/dashboard/reservations/approve",
      icon: CalendarCheck2,
    },
  ],
  administrator: [
    {
      name: "Laboratorios",
      url: "/dashboard/laboratories",
      icon: Eye,
    },
    {
      name: "Facultades",
      url: "/dashboard/my-3",
      icon: Eye,
    },
    {
      name: "Carreras",
      url: "/dashboard/my-4",
      icon: Eye,
    },
    {
      name: "Materias",
      url: "/dashboard/my-5",
      icon: Eye,
    },
    {
      name: "Carreras",
      url: "/dashboard/my-6",
      icon: Eye,
    },
    {
      name: "Facultades",
      url: "/dashboard/my-7",
      icon: Eye,
    },
  ],
} as const;

export const HOURS: string[] = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "",
] as const;

export const LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  create: "Crear reserva",
  approve: "Aprobar reservas",
  laboratories: "Laboratorios",
  faculties: "Facultades",
  majors: "Carreras",
  courses: "Materias",
};
