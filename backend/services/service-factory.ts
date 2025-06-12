import { PrismaLaboratoryRepository } from "@/backend/repositories/prisma-laboratory.repository";
import { LaboratoryService } from "@/backend/services/laboratory.service";

export class ServiceFactory {
  private static laboratoryService: LaboratoryService;

  static getLaboratoryService(): LaboratoryService {
    if (!this.laboratoryService) {
      const laboratoryRepository = new PrismaLaboratoryRepository();
      this.laboratoryService = new LaboratoryService(laboratoryRepository);
    }

    return this.laboratoryService;
  }
}
