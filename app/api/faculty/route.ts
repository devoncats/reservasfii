import { CreateFacultyDto } from "@/backend/dto/faculty.dto";
import { ServiceFactory } from "@/backend/services/service-factory";
import { ApiResponse } from "@/backend/utils/api-response";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const facultyService = ServiceFactory.getFacultyService();
    const faculties = await facultyService.getAllFacultys();

    return ApiResponse.success({ faculties });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[FACULTY_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch faculties", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: CreateFacultyDto = await request.json();

    const facultyService = ServiceFactory.getFacultyService();
    const faculty = await facultyService.createFaculty(body);

    return ApiResponse.success({ faculty }, 201);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[FACULTY_POST]: ", error);
    }

    return ApiResponse.error("Failed to create faculty", 500);
  }
}
