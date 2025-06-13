import { CreateMajorDto } from "@/backend/dto/major.dto";
import { ServiceFactory } from "@/backend/services/service-factory";
import { ApiResponse } from "@/backend/utils/api-response";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const majorService = ServiceFactory.getMajorService();
    const majors = await majorService.getAllMajors();

    return ApiResponse.success({ majors });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[MAJOR_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch majors", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: CreateMajorDto = await request.json();

    const majorService = ServiceFactory.getMajorService();
    const major = await majorService.createMajor(body);

    return ApiResponse.success({ major }, 201);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[MAJOR_POST]: ", error);
    }

    return ApiResponse.error("Failed to create major", 500);
  }
}
