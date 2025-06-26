import {
  CreateReservationDto,
  ReservationDetailsDto,
  UpdateReservationDto,
} from "@/backend/dto/reservation.dto";
import { Reservation } from "@prisma/client";

export interface ReservationRepository {
  findByWeekAndLaboratoryId(
    from: Date,
    to: Date,
    laboratoryId: string
  ): Promise<ReservationDetailsDto[]>;
  findByUser(userId: string): Promise<ReservationDetailsDto[]>;
  findById(id: string): Promise<Reservation | null>;
  findAll(): Promise<ReservationDetailsDto[]>;
  create(data: CreateReservationDto): Promise<Reservation>;
  update(id: string, data: UpdateReservationDto): Promise<Reservation>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
}
