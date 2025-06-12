import {
  CreateLaboratoryDto,
  UpdateLaboratoryDto,
} from "@/backend/dto/laboratory.dto";
import { LaboratoryRepository } from "@/backend/repositories/interface/laboratory.repository";
import { prisma } from "@/lib/prisma";
import { Laboratory, UserRole } from "@prisma/client";

export class PrismaLaboratoryRepository implements LaboratoryRepository {
  async findAccessibleByRole(
    role: UserRole
  ): Promise<Pick<Laboratory, "id" | "name">[]> {
    return await prisma.laboratory.findMany({
      where: {
        visibility: {
          has: role,
        },
      },
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async findById(id: string): Promise<Laboratory | null> {
    return await prisma.laboratory.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<Pick<Laboratory, "id" | "name">[]> {
    return await prisma.laboratory.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  async create(data: CreateLaboratoryDto): Promise<Laboratory> {
    return await prisma.laboratory.create({
      data,
    });
  }

  async update(id: string, data: UpdateLaboratoryDto): Promise<Laboratory> {
    return await prisma.laboratory.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.laboratory.delete({
      where: { id },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.laboratory.count({
      where: { id },
    });
    return count > 0;
  }
}
