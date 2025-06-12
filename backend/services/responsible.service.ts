import {
  CreateResponsibleDto,
  UpdateResponsibleDto,
} from "@/backend/dto/responsible.dto";
import { ResponsibleRepository } from "@/backend/repositories/interface/responsible.repository";
import { PrismaResponsibleRepository } from "@/backend/repositories/prisma-responsible.repository";

export class ResponsibleService {
  private responsibleRepository: ResponsibleRepository;

  constructor(responsibleRepository?: ResponsibleRepository) {
    this.responsibleRepository =
      responsibleRepository || new PrismaResponsibleRepository();
  }

  async getResponsibleById(id: string) {
    return await this.responsibleRepository.findById(id);
  }

  async getAllResponsibles() {
    return await this.responsibleRepository.findAll();
  }

  async createResponsible(data: CreateResponsibleDto) {
    return await this.responsibleRepository.create(data);
  }

  async updateResponsible(id: string, data: UpdateResponsibleDto) {
    return await this.responsibleRepository.update(id, data);
  }

  async deleteResponsible(id: string) {
    return await this.responsibleRepository.delete(id);
  }

  async responsibleExists(id: string) {
    return await this.responsibleRepository.exists(id);
  }
}
