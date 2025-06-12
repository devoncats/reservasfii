"use client";

import { Laboratory } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const laboratoryColumns: ColumnDef<
  Pick<Laboratory, "name" | "description" | "visibility">
>[] = [
  {
    accessorKey: "name",
    header: "Laboratorio",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "visibility",
    header: "Visibilidad",
    cell: ({ row }) => {
      const visibility = row.getValue("visibility") as string[];

      return <span>{visibility.join(", ")}</span>;
    },
  },
];
