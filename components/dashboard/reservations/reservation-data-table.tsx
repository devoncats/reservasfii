"use client";

import { reservationColumns } from "@/components/dashboard/reservations/reservations-columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ReservationStatus } from "@prisma/client";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export function ReservationDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const data = [
    {
      id: "cmbvi1o0x0006ufaw1iyv5ngp",
      userId: "cmbpof8ap0000ufzgs9x591w8",
      group: "1IL131",
      status: ReservationStatus.CONFIRMED,
      start: new Date("2025-06-13T22:50:00.000Z"),
      end: new Date("2025-06-14T00:25:00.000Z"),
      comment: null,
      laboratoryId: "cmbspzhwk0000ufmomc1oplvh",
      responsibleId: "cmbtwr17i0000ufs44o0yvcpv",
      facultyId: "cmbvas6pg0000ufawb09bs0ye",
      majorId: "cmbvhp4fw0001ufaw8mz49ks7",
      courseId: "cmbvhq2gk0002ufaw8wyztzb9",
      course: {
        id: "cmbvhq2gk0002ufaw8wyztzb9",
        name: "Higiene Ocupacional I",
      },
      faculty: {
        id: "cmbvas6pg0000ufawb09bs0ye",
        name: "Facultad de Ingenieria",
      },
      major: {
        id: "cmbvhp4fw0001ufaw8mz49ks7",
        name: "Ingenieria en Informatica",
      },
      laboratory: {
        id: "cmbspzhwk0000ufmomc1oplvh",
        name: "Laboratorio de Informatica",
      },
      responsible: {
        id: "cmbtwr17i0000ufs44o0yvcpv",
        name: "Juan Perez",
      },
    },
  ];

  const table = useReactTable({
    data: data,
    columns: reservationColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <DataTable columns={reservationColumns} data={data} />
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
