import { Major } from "@prisma/client";

export type MajorDto = Pick<Major, "id" | "name" | "category">;
export type MajorDetailsDto = Omit<Major, "createdAt" | "updatedAt">;
export type CreateMajorDto = Pick<Major, "name" | "description" | "category">;
export type UpdateMajorDto = Pick<Major, "name" | "description" | "category">;
