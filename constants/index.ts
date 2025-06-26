import {
  Book,
  Calendar,
  CalendarCheck2,
  CalendarHeart,
  CalendarPlus,
  CalendarSearch,
  FlaskConical,
  GraduationCap,
  University,
  User,
} from "lucide-react";

export const SIDEBAR_DATA = {
  reservations: [
    {
      name: "Horarios",
      url: "/dashboard/",
      icon: Calendar,
    },
    {
      name: "Mis reservas",
      url: "/dashboard/reservations/user",
      icon: CalendarHeart,
    },
    {
      name: "Crear reserva",
      url: "/dashboard/reservations/create",
      icon: CalendarPlus,
    },
  ],
  administrator: [
    {
      name: "Todas las reservas",
      url: "/dashboard/reservations/",
      icon: CalendarSearch,
    },
    {
      name: "Aprobar reservas",
      url: "/dashboard/reservations/approve",
      icon: CalendarCheck2,
    },
    {
      name: "Laboratorios",
      url: "/dashboard/laboratories",
      icon: FlaskConical,
    },
    {
      name: "Responsables",
      url: "/dashboard/responsibles",
      icon: User,
    },
    {
      name: "Facultades",
      url: "/dashboard/faculties",
      icon: University,
    },
    {
      name: "Carreras",
      url: "/dashboard/majors",
      icon: GraduationCap,
    },
    {
      name: "Materias",
      url: "/dashboard/courses",
      icon: Book,
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
  reservations: "Todas las Reservas",
  user: "Mis Reservas",
  create: "Crear reserva",
  approve: "Aprobar reservas",
  laboratories: "Laboratorios",
  faculties: "Facultades",
  majors: "Carreras",
  courses: "Materias",
};
