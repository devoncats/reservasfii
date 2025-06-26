import { z } from "zod";

export const createReservationSchema = z.object({
  group: z.string().min(1, "El grupo es requerido"),
  date: z.date({
    required_error: "La fecha es requerida.",
  }),
  start: z.string().min(1, "La hora es requerida"),
  end: z.string().min(1, "La hora es requerida"),
  comment: z.string().optional(),
  laboratoryId: z.string().min(1, "El laboratorio es requerido"),
  responsibleId: z.string().min(1, "El responsable es requerido"),
  facultyId: z.string().min(1, "La facultad es requerida"),
  majorId: z.string().min(1, "La carrera es requerida"),
  courseId: z.string().min(1, "El curso es requerido"),
});

export type CreateReservationSchema = z.infer<typeof createReservationSchema>;
