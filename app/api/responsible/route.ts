import { CreateResponsibleDto } from "@/backend/dto/responsible.dto";
import { ServiceFactory } from "@/backend/services/service-factory";
import { ApiResponse } from "@/backend/utils/api-response";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const responsibleService = ServiceFactory.getResponsibleService();
    const responsibles = await responsibleService.getAllResponsibles();

    return ApiResponse.success({ responsibles });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESPONSIBLE_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch responsibles", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: CreateResponsibleDto = await request.json();

    const responsibleService = ServiceFactory.getResponsibleService();
    const responsible = await responsibleService.createResponsible(body);

    return ApiResponse.success({ responsible }, 201);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RESPONSIBLE_POST]: ", error);
    }

    return ApiResponse.error("Failed to create responsible", 500);
  }
}
