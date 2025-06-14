import { Reservation } from "@prisma/client";

export type ReservationDto = Pick<
  Reservation,
  "id" | "start" | "end" | "status" | "courseId"
>;
export type ReservationDetailsDto = Omit<
  Reservation,
  "createdAt" | "updatedAt"
>;
export type CreateReservationDto = Omit<
  Reservation,
  "id" | "createdAt" | "updatedAt"
>;
export type UpdateReservationDto = Omit<
  Reservation,
  "id" | "createdAt" | "updatedAt"
>;
