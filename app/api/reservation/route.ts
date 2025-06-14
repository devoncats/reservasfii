import { CreateReservationDto } from "@/backend/dto/reservation.dto";
import { ServiceFactory } from "@/backend/services/service-factory";
import { ApiResponse } from "@/backend/utils/api-response";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const reservationService = ServiceFactory.getReservationService();
    const reservation = await reservationService.getAllReservations();

    return ApiResponse.success({ reservation });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch reservations", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: CreateReservationDto = await request.json();

    const reservationService = ServiceFactory.getReservationService();
    const reservation = await reservationService.createReservation(body);

    return ApiResponse.success({ reservation }, 201);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_POST]: ", error);
    }

    return ApiResponse.error("Failed to create reservation", 500);
  }
}
