import { CreateLaboratoryDto } from "@/backend/dto/laboratory.dto";
import { ServiceFactory } from "@/backend/services/service-factory";
import { ApiResponse } from "@/backend/utils/api-response";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const { error, user } = await getAuthenticatedUser();
    if (error) return error;

    const laboratoryService = ServiceFactory.getLaboratoryService();
    const laboratories = await laboratoryService.getAccessibleLaboratories(
      user.role
    );

    return ApiResponse.success({ laboratories });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[LABORATORY_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch laboratories", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: CreateLaboratoryDto = await request.json();

    const laboratoryService = ServiceFactory.getLaboratoryService();
    const laboratory = await laboratoryService.createLaboratory(body);

    return ApiResponse.success({ laboratory }, 201);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[LABORATORY_POST]: ", error);
    }

    return ApiResponse.error("Failed to create laboratory", 500);
  }
}
