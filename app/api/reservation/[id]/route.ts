import { UpdateReservationDto } from "@/backend/dto/reservation.dto";
import { ServiceFactory } from "@/backend/services/service-factory";
import { ApiResponse } from "@/backend/utils/api-response";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const reservationService = ServiceFactory.getReservationService();

    const reservationExists = await reservationService.reservationExists(
      params.id
    );

    if (!reservationExists) {
      return ApiResponse.error("Reservation not found", 404);
    }

    const reservation = await reservationService.getReservationById(params.id);

    return ApiResponse.success({ reservation });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch reservation", 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: UpdateReservationDto = await request.json();

    const reservationService = ServiceFactory.getReservationService();

    const reservationeExists = await reservationService.reservationExists(
      params.id
    );

    if (!reservationeExists) {
      return ApiResponse.error("Reservation not found", 404);
    }

    const reservation = await reservationService.updateReservation(
      params.id,
      body
    );

    return ApiResponse.success({ reservation });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_PUT]: ", error);
    }

    return ApiResponse.error("Failed to update reservation", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const reservationService = ServiceFactory.getReservationService();

    const reservationExists = await reservationService.reservationExists(
      params.id
    );

    if (!reservationExists) {
      return ApiResponse.error("Reservation not found", 404);
    }
    await reservationService.deleteReservation(params.id);

    return ApiResponse.success({}, 204);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_DELETE]: ", error);
    }

    return ApiResponse.error("Failed to delete reservation", 500);
  }
}
