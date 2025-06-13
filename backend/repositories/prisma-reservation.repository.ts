import {
  CreateReservationDto,
  ReservationDetailsDto,
  UpdateReservationDto,
} from "@/backend/dto/reservation.dto";
import { ReservationRepository } from "@/backend/repositories/interface/reservation.repository";
import { prisma } from "@/lib/prisma";
import { Reservation } from "@prisma/client";

export class PrismaReservationRepository implements ReservationRepository {
  async findByWeekAndLaboratoryId(
    from: Date,
    to: Date,
    laboratoryId: string
  ): Promise<ReservationDetailsDto[]> {
    return await prisma.reservation.findMany({
      where: {
        laboratoryId,
        start: {
          gte: from,
          lte: to,
        },
      },
      select: {
        id: true,
        start: true,
        end: true,
        status: true,
        courseId: true,
      },
      orderBy: {
        start: "asc",
      },
    });
  }

  async findById(id: string): Promise<Reservation | null> {
    return await prisma.reservation.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<ReservationDetailsDto[]> {
    return await prisma.reservation.findMany({
      select: {
        id: true,
        start: true,
        end: true,
        status: true,
        courseId: true,
      },
      orderBy: {
        start: "asc",
      },
    });
  }

  async create(data: CreateReservationDto): Promise<Reservation> {
    return await prisma.reservation.create({
      data,
    });
  }

  async update(id: string, data: UpdateReservationDto): Promise<Reservation> {
    return await prisma.reservation.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.reservation.delete({
      where: { id },
    });
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.reservation.count({
      where: { id },
    });
    return count > 0;
  }
}
