import {
  Calendar,
  CalendarCheck2,
  CalendarHeart,
  CalendarPlus,
  Eye,
} from "lucide-react";

export const SIDEBAR_DATA = {
  user: {
    name: "Gregorio Samsa",
    email: "gregorio.samsa@utp.ac.pa",
    avatar: "/avatars/placeholder.png",
  },
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
      url: "/dashboard/my-2",
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
