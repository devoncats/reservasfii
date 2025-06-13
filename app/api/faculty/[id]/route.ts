import { UpdateFacultyDto } from "@/backend/dto/faculty.dto";
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

    const facultyService = ServiceFactory.getFacultyService();

    const facultyExists = await facultyService.facultyExists(params.id);

    if (!facultyExists) {
      return ApiResponse.error("Faculty not found", 404);
    }

    const faculty = await facultyService.getFacultyById(params.id);

    return ApiResponse.success({ faculty });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[FACULTY_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch faculty", 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: UpdateFacultyDto = await request.json();

    const facultyService = ServiceFactory.getFacultyService();

    const facultyExists = await facultyService.facultyExists(params.id);

    if (!facultyExists) {
      return ApiResponse.error("Faculty not found", 404);
    }

    const faculty = await facultyService.updateFaculty(params.id, body);

    return ApiResponse.success({ faculty });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[FACULTY_PUT]: ", error);
    }

    return ApiResponse.error("Failed to update faculty", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const facultyService = ServiceFactory.getFacultyService();

    const facultyExists = await facultyService.facultyExists(params.id);

    if (!facultyExists) {
      return ApiResponse.error("Faculty not found", 404);
    }
    await facultyService.deleteFaculty(params.id);

    return ApiResponse.success({}, 204);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[FACULTY_DELETE]: ", error);
    }

    return ApiResponse.error("Failed to delete faculty", 500);
  }
}
