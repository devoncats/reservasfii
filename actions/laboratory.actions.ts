"use server";

import { ServiceFactory } from "@/backend/services/service-factory";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";

export async function getAccessibleLaboratoriesAction() {
  try {
    const { error, user } = await getAuthenticatedUser();

    if (error)
      return {
        success: false,
        data: null,
        error: "Authentication failed",
      };

    const laboratoryService = ServiceFactory.getLaboratoryService();
    const laboratories = await laboratoryService.getAccessibleLaboratories(
      user.role
    );

    return {
      success: true,
      data: laboratories,
      error: null,
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[LABORATORY_ACTION_GET]: ", error);
    }

    return {
      success: false,
      data: null,
      error: "Failed to fetch laboratories",
    };
  }
}
