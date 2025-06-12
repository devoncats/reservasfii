import { CreateCourseDto, UpdateCourseDto } from "@/backend/dto/course.dto";
import { CourseRepository } from "@/backend/repositories/interface/course.dto";
import { PrismaCourseRepository } from "@/backend/repositories/prisma-course.repository";

export class CourseService {
  private courseRepository: CourseRepository;

  constructor(courseRepository?: CourseRepository) {
    this.courseRepository = courseRepository || new PrismaCourseRepository();
  }

  async getCourseById(id: string) {
    return await this.courseRepository.findById(id);
  }

  async getAllCourses() {
    return await this.courseRepository.findAll();
  }

  async createCourse(data: CreateCourseDto) {
    return await this.courseRepository.create(data);
  }

  async updateCourse(id: string, data: UpdateCourseDto) {
    return await this.courseRepository.update(id, data);
  }

  async deleteCourse(id: string) {
    return await this.courseRepository.delete(id);
  }

  async courseExists(id: string) {
    return await this.courseRepository.exists(id);
  }
}
