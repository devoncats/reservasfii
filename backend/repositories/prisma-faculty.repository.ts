import { FacultyDetailsDto } from "@/backend/dto/faculty.dto";
import { FacultyRepository } from "@/backend/repositories/interface/faculty.repository";
import { prisma } from "@/lib/prisma";
import { Faculty } from "@prisma/client";

export class PrismaFacultyRepository implements FacultyRepository {
  async findById(id: string): Promise<Faculty | null> {
    return await prisma.faculty.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<FacultyDetailsDto[]> {
    return await prisma.faculty.findMany({
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

  async create(data: Faculty): Promise<Faculty> {
    return await prisma.faculty.create({
      data,
    });
  }

  async update(id: string, data: Faculty): Promise<Faculty> {
    return await prisma.faculty.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.faculty.delete({
      where: { id },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.faculty.count({
      where: { id },
    });
    return count > 0;
  }
}
