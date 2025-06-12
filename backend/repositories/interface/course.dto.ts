import {
  CourseDetailsDto,
  CreateCourseDto,
  UpdateCourseDto,
} from "@/backend/dto/course.dto";
import { Course } from "@prisma/client";

export interface CourseRepository {
  findById(id: string): Promise<Course | null>;
  findAll(): Promise<CourseDetailsDto[]>;
  create(data: CreateCourseDto): Promise<Course>;
  update(id: string, data: UpdateCourseDto): Promise<Course>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
