import {
  CreateLaboratoryDto,
  UpdateLaboratoryDto,
} from "@/backend/dto/laboratory.dto";
import { LaboratoryRepository } from "@/backend/repositories/interface/laboratory.repository";
import { PrismaLaboratoryRepository } from "@/backend/repositories/prisma-laboratory.repository";
import { UserRole } from "@prisma/client";

export class LaboratoryService {
  private laboratoryRepository: LaboratoryRepository;

  constructor(laboratoryRepository?: LaboratoryRepository) {
    this.laboratoryRepository =
      laboratoryRepository || new PrismaLaboratoryRepository();
  }

  async getAccessibleLaboratories(role: UserRole) {
    return await this.laboratoryRepository.findAccessibleByRole(role);
  }

  async getLaboratoryById(id: string) {
    return await this.laboratoryRepository.findById(id);
  }

  async getAllLaboratories() {
    return await this.laboratoryRepository.findAll();
  }

  async createLaboratory(data: CreateLaboratoryDto) {
    return await this.laboratoryRepository.create(data);
  }

  async updateLaboratory(id: string, data: UpdateLaboratoryDto) {
    return await this.laboratoryRepository.update(id, data);
  }

  async deleteLaboratory(id: string) {
    return await this.laboratoryRepository.delete(id);
  }

  async laboratoryExists(id: string) {
    return await this.laboratoryRepository.exists(id);
  }
}
