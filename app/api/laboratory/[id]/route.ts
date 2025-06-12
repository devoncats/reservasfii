import { UpdateLaboratoryDto } from "@/backend/dto/laboratory.dto";
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

    const laboratoryService = ServiceFactory.getLaboratoryService();
    const laboratory = await laboratoryService.getLaboratoryById(params.id);

    if (!laboratory) {
      return ApiResponse.error("Laboratory not found", 404);
    }

    return ApiResponse.success({ laboratory });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[LABORATORY_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch laboratory", 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: UpdateLaboratoryDto = await request.json();

    const laboratoryService = ServiceFactory.getLaboratoryService();
    const laboratory = await laboratoryService.updateLaboratory(
      params.id,
      body
    );

    return ApiResponse.success({ laboratory });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[LABORATORY_PUT]: ", error);
    }

    if (error instanceof Error && error.message.includes("not found")) {
      return ApiResponse.error("Laboratory not found", 404);
    }

    return ApiResponse.error("Failed to update laboratory", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const laboratoryService = ServiceFactory.getLaboratoryService();
    await laboratoryService.deleteLaboratory(params.id);

    return ApiResponse.success({}, 204);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[LABORATORY_DELETE]: ", error);
    }

    if (error instanceof Error && error.message.includes("not found")) {
      return ApiResponse.error("Laboratory not found", 404);
    }

    return ApiResponse.error("Failed to delete laboratory", 500);
  }
}
