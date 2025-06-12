import { PrismaLaboratoryRepository } from "@/backend/repositories/prisma-laboratory.repository";
import { CourseService } from "@/backend/services/course.service";
import { FacultyService } from "@/backend/services/faculty.service";
import { LaboratoryService } from "@/backend/services/laboratory.service";
import { MajorService } from "@/backend/services/major.service";
import { ResponsibleService } from "@/backend/services/responsible.service";

export class ServiceFactory {
  private static laboratoryService: LaboratoryService;
  private static responsibleService: ResponsibleService;
  private static facultyService: FacultyService;
  private static majorService: MajorService;
  private static courseService: CourseService;

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

  static getFacultyService(): FacultyService {
    if (!this.facultyService) {
      this.facultyService = new FacultyService();
    }

    return this.facultyService;
  }

  static getMajorService(): MajorService {
    if (!this.majorService) {
      this.majorService = new MajorService();
    }

    return this.majorService;
  }

  static getCourseService(): CourseService {
    if (!this.courseService) {
      this.courseService = new CourseService();
    }

    return this.courseService;
  }
}
