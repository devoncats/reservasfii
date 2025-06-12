import { CourseDetailsDto } from "@/backend/dto/course.dto";
import { CourseRepository } from "@/backend/repositories/interface/course.dto";
import { prisma } from "@/lib/prisma";
import { Course } from "@prisma/client";

export class PrismaCourseRepository implements CourseRepository {
  async findById(id: string): Promise<Course | null> {
    return await prisma.course.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<CourseDetailsDto[]> {
    return await prisma.course.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async create(data: Course): Promise<Course> {
    return await prisma.course.create({
      data,
    });
  }

  async update(id: string, data: Course): Promise<Course> {
    return await prisma.course.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.course.delete({
      where: { id },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.course.count({
      where: { id },
    });
    return count > 0;
  }
}
