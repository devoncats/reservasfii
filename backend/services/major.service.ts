import { CreateMajorDto, UpdateMajorDto } from "@/backend/dto/major.dto";
import { MajorRepository } from "@/backend/repositories/interface/major.repository";
import { PrismaMajorRepository } from "@/backend/repositories/prisma-major.repository";

export class MajorService {
  private majorRepository: MajorRepository;

  constructor(majorRepository?: MajorRepository) {
    this.majorRepository = majorRepository || new PrismaMajorRepository();
  }

  async getMajorById(id: string) {
    return await this.majorRepository.findById(id);
  }

  async getAllMajors() {
    return await this.majorRepository.findAll();
  }

  async createMajor(data: CreateMajorDto) {
    return await this.majorRepository.create(data);
  }

  async updateMajor(id: string, data: UpdateMajorDto) {
    return await this.majorRepository.update(id, data);
  }

  async deleteMajor(id: string) {
    return await this.majorRepository.delete(id);
  }

  async MajorExists(id: string) {
    return await this.majorRepository.exists(id);
  }
}
