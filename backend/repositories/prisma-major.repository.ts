import { MajorDetailsDto } from "@/backend/dto/major.dto";
import { MajorRepository } from "@/backend/repositories/interface/major.repository";
import { prisma } from "@/lib/prisma";
import { Major } from "@prisma/client";

export class PrismaMajorRepository implements MajorRepository {
  async findById(id: string): Promise<Major | null> {
    return await prisma.major.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<MajorDetailsDto[]> {
    return await prisma.major.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async create(data: Major): Promise<Major> {
    return await prisma.major.create({
      data,
    });
  }

  async update(id: string, data: Major): Promise<Major> {
    return await prisma.major.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.major.delete({
      where: { id },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.major.count({
      where: { id },
    });
    return count > 0;
  }
}
