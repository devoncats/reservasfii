import { Check, Eye, Plus } from "lucide-react";

export const SIDEBAR_DATA = {
  user: {
    name: "Gregorio Samsa",
    email: "gregorio.samsa@utp.ac.pa",
    avatar: "/avatars/placeholder.png",
  },
  reservations: [
    {
      name: "Todas las reservas",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
    {
      name: "Mis reservas",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
    {
      name: "Crear reserva",
      url: "/dashboard/",
      icon: Plus,
    },
    {
      name: "Aprobar reservas",
      url: "/dashboard/approvals",
      icon: Check,
    },
  ],
  administrator: [
    {
      name: "Laboratorios",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
    {
      name: "Facultades",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
    {
      name: "Carreras",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
    {
      name: "Materias",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
    {
      name: "Carreras",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
    {
      name: "Facultades",
      url: "/dashboard/my-reservations",
      icon: Eye,
    },
  ],
} as const;
