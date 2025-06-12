import { CreateFacultyDto, UpdateFacultyDto } from "@/backend/dto/faculty.dto";
import { FacultyRepository } from "@/backend/repositories/interface/faculty.repository";
import { PrismaFacultyRepository } from "@/backend/repositories/prisma-faculty.repository";

export class FacultyService {
  private facultyRepository: FacultyRepository;

  constructor(facultyRepository?: FacultyRepository) {
    this.facultyRepository = facultyRepository || new PrismaFacultyRepository();
  }

  async getFacultyById(id: string) {
    return await this.facultyRepository.findById(id);
  }

  async getAllFacultys() {
    return await this.facultyRepository.findAll();
  }

  async createFaculty(data: CreateFacultyDto) {
    return await this.facultyRepository.create(data);
  }

  async updateFaculty(id: string, data: UpdateFacultyDto) {
    return await this.facultyRepository.update(id, data);
  }

  async deleteFaculty(id: string) {
    return await this.facultyRepository.delete(id);
  }

  async facultyExists(id: string) {
    return await this.facultyRepository.exists(id);
  }
}
