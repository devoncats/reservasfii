import { UpdateResponsibleDto } from "@/backend/dto/responsible.dto";
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

    const responsibleService = ServiceFactory.getResponsibleService();
    const responsible = await responsibleService.getResponsibleById(params.id);

    if (!responsible) {
      return ApiResponse.error("Responsible not found", 404);
    }

    return ApiResponse.success({ responsible });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESPONSIBLE_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch responsible", 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: UpdateResponsibleDto = await request.json();

    const responsibleService = ServiceFactory.getResponsibleService();
    const responsible = await responsibleService.updateResponsible(
      params.id,
      body
    );

    return ApiResponse.success({ responsible });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESPONSIBLE_PUT]: ", error);
    }

    if (error instanceof Error && error.message.includes("not found")) {
      return ApiResponse.error("Responsible not found", 404);
    }

    return ApiResponse.error("Failed to update responsible", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const responsibleService = ServiceFactory.getResponsibleService();
    await responsibleService.deleteResponsible(params.id);

    return ApiResponse.success({}, 204);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESPONSIBLE_DELETE]: ", error);
    }

    if (error instanceof Error && error.message.includes("not found")) {
      return ApiResponse.error("Responsible not found", 404);
    }

    return ApiResponse.error("Failed to delete responsible", 500);
  }
}
