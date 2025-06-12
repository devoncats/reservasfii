import { Responsible } from "@prisma/client";

export type ResponsibleDto = Pick<Responsible, "id" | "name">;
export type ResponsibleDetailsDto = Omit<
  Responsible,
  "createdAt" | "updatedAt"
>;
export type CreateResponsibleDto = Omit<
  Responsible,
  "id" | "createdAt" | "updatedAt"
>;
export type UpdateResponsibleDto = Omit<
  Responsible,
  "id" | "createdAt" | "updatedAt"
>;
