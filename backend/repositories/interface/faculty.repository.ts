import {
  CreateFacultyDto,
  FacultyDetailsDto,
  UpdateFacultyDto,
} from "@/backend/dto/faculty.dto";
import { Faculty } from "@prisma/client";

export interface FacultyRepository {
  findById(id: string): Promise<Faculty | null>;
  findAll(): Promise<FacultyDetailsDto[]>;
  create(data: CreateFacultyDto): Promise<Faculty>;
  update(id: string, data: UpdateFacultyDto): Promise<Faculty>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
