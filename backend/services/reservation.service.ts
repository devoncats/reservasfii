import {
  CreateReservationDto,
  UpdateReservationDto,
} from "@/backend/dto/reservation.dto";
import { ReservationRepository } from "@/backend/repositories/interface/reservation.repository";
import { PrismaReservationRepository } from "@/backend/repositories/prisma-reservation.repository";

export class ReservationService {
  private reservationRepository: ReservationRepository;

  constructor(reservationRepository?: ReservationRepository) {
    this.reservationRepository =
      reservationRepository || new PrismaReservationRepository();
  }

  async getReservationsByWeekAndLaboratoryId(
    from: Date,
    to: Date,
    laboratoryId: string
  ) {
    return await this.reservationRepository.findByWeekAndLaboratoryId(
      from,
      to,
      laboratoryId
    );
  }

  async getReservationsByUser(userId: string) {
    return await this.reservationRepository.findByUser(userId);
  }

  async getReservationById(id: string) {
    return await this.reservationRepository.findById(id);
  }

  async getAllReservations() {
    return await this.reservationRepository.findAll();
  }

  async createReservation(data: CreateReservationDto) {
    return await this.reservationRepository.create(data);
  }

  async updateReservation(id: string, data: UpdateReservationDto) {
    return await this.reservationRepository.update(id, data);
  }

  async deleteReservation(id: string) {
    return await this.reservationRepository.delete(id);
  }

  async reservationExists(id: string) {
    return await this.reservationRepository.exists(id);
  }
}
