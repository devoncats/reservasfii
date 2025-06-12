import {
  CreateResponsibleDto,
  ResponsibleDetailsDto,
  UpdateResponsibleDto,
} from "@/backend/dto/responsible.dto";
import { Responsible } from "@prisma/client";

export interface ResponsibleRepository {
  findById(id: string): Promise<Responsible | null>;
  findAll(): Promise<ResponsibleDetailsDto[]>;
  create(data: CreateResponsibleDto): Promise<Responsible>;
  update(id: string, data: UpdateResponsibleDto): Promise<Responsible>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
