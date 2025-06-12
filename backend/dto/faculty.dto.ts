import { Faculty } from "@prisma/client";

export type FacultyDto = Pick<Faculty, "id" | "name">;
export type FacultyDetailsDto = Omit<Faculty, "createdAt" | "updatedAt">;
export type CreateFacultyDto = Pick<Faculty, "name" | "description">;
export type UpdateFacultyDto = Pick<Faculty, "name" | "description">;
