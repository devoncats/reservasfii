"use server";

import { ServiceFactory } from "@/backend/services/service-factory";

export async function getReservationsByWeekAndLaboratoryIdAction(
  from: Date,
  to: Date,
  laboratoryId: string
) {
  try {
    const reservationService = ServiceFactory.getReservationService();
    const reservations =
      await reservationService.getReservationsByWeekAndLaboratoryId(
        from,
        to,
        laboratoryId
      );

    return {
      success: true,
      data: reservations,
      error: null,
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_ACTION_GET]: ", error);
    }

    return {
      success: false,
      data: null,
      error: "Failed to fetch reservations",
    };
  }
}

export async function getReservationsByUserAction(userId: string) {
  try {
    const reservationService = ServiceFactory.getReservationService();
    const reservations = await reservationService.getReservationsByUser(userId);

    return {
      success: true,
      data: reservations,
      error: null,
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_ACTION_GET]: ", error);
    }

    return {
      success: false,
      data: null,
      error: "Failed to fetch reservations by user",
    };
  }
}

export async function getAllReservationsAction() {
  try {
    const reservationService = ServiceFactory.getReservationService();
    const reservations = await reservationService.getAllReservations();

    return {
      success: true,
      data: reservations,
      error: null,
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESERVATION_ACTION_GET]: ", error);
    }

    return {
      success: false,
      data: null,
      error: "Failed to fetch all reservations",
    };
  }
}
