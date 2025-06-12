import {
  CreateLaboratoryDto,
  LaboratoryDetailsDto,
  LaboratoryDto,
  UpdateLaboratoryDto,
} from "@/backend/dto/laboratory.dto";
import { Laboratory, UserRole } from "@prisma/client";

export interface LaboratoryRepository {
  findAccessibleByRole(role: UserRole): Promise<LaboratoryDto[]>;
  findById(id: string): Promise<Laboratory | null>;
  findAll(): Promise<LaboratoryDetailsDto[]>;
  create(data: CreateLaboratoryDto): Promise<Laboratory>;
  update(id: string, data: UpdateLaboratoryDto): Promise<Laboratory>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
