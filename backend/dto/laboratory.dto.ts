import { Laboratory } from "@prisma/client";

export type LaboratoryDto = Pick<Laboratory, "id" | "name">;
export type LaboratoryDetailsDto = Omit<Laboratory, "createdAt" | "updatedAt">;
export type CreateLaboratoryDto = Pick<
  Laboratory,
  "name" | "description" | "visibility"
>;
export type UpdateLaboratoryDto = Pick<
  Laboratory,
  "name" | "description" | "visibility"
>;
