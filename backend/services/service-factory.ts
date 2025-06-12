import { PrismaLaboratoryRepository } from "@/backend/repositories/prisma-laboratory.repository";
import { LaboratoryService } from "@/backend/services/laboratory.service";
import { ResponsibleService } from "@/backend/services/responsible.service";

export class ServiceFactory {
  private static laboratoryService: LaboratoryService;
  private static responsibleService: ResponsibleService;

  static getLaboratoryService(): LaboratoryService {
    if (!this.laboratoryService) {
      const laboratoryRepository = new PrismaLaboratoryRepository();
      this.laboratoryService = new LaboratoryService(laboratoryRepository);
    }

    return this.laboratoryService;
  }

  static getResponsibleService(): ResponsibleService {
    if (!this.responsibleService) {
      this.responsibleService = new ResponsibleService();
    }

    return this.responsibleService;
  }
}
