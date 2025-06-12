import {
  CreateMajorDto,
  MajorDetailsDto,
  UpdateMajorDto,
} from "@/backend/dto/major.dto";
import { Major } from "@prisma/client";

export interface MajorRepository {
  findById(id: string): Promise<Major | null>;
  findAll(): Promise<MajorDetailsDto[]>;
  create(data: CreateMajorDto): Promise<Major>;
  update(id: string, data: UpdateMajorDto): Promise<Major>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
