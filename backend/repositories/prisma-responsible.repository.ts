import { ResponsibleDetailsDto } from "@/backend/dto/responsible.dto";
import { ResponsibleRepository } from "@/backend/repositories/interface/responsible.repository";
import { prisma } from "@/lib/prisma";
import { Responsible } from "@prisma/client";

export class PrismaResponsibleRepository implements ResponsibleRepository {
  async findById(id: string): Promise<Responsible | null> {
    return await prisma.responsible.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<ResponsibleDetailsDto[]> {
    return await prisma.responsible.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async create(data: Responsible): Promise<Responsible> {
    return await prisma.responsible.create({
      data,
    });
  }

  async update(id: string, data: Responsible): Promise<Responsible> {
    return await prisma.responsible.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.responsible.delete({
      where: { id },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.responsible.count({
      where: { id },
    });
    return count > 0;
  }
}
