import { UpdateMajorDto } from "@/backend/dto/major.dto";
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

    const majorService = ServiceFactory.getMajorService();

    const majorExists = await majorService.majorExists(params.id);

    if (!majorExists) {
      return ApiResponse.error("Major not found", 404);
    }

    const major = await majorService.getMajorById(params.id);

    return ApiResponse.success({ major });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[MAJOR_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch major", 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: UpdateMajorDto = await request.json();

    const majorService = ServiceFactory.getMajorService();

    const majorExists = await majorService.majorExists(params.id);

    if (!majorExists) {
      return ApiResponse.error("Major not found", 404);
    }

    const major = await majorService.updateMajor(params.id, body);

    return ApiResponse.success({ major });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[MAJOR_PUT]: ", error);
    }

    return ApiResponse.error("Failed to update major", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const majorService = ServiceFactory.getMajorService();

    const majorExists = await majorService.majorExists(params.id);

    if (!majorExists) {
      return ApiResponse.error("Major not found", 404);
    }
    await majorService.deleteMajor(params.id);

    return ApiResponse.success({}, 204);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[MAJOR_DELETE]: ", error);
    }

    return ApiResponse.error("Failed to delete major", 500);
  }
}
