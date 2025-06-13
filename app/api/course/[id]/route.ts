import { UpdateCourseDto } from "@/backend/dto/course.dto";
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

    const courseService = ServiceFactory.getCourseService();

    const courseExists = await courseService.courseExists(params.id);

    if (!courseExists) {
      return ApiResponse.error("Course not found", 404);
    }

    const course = await courseService.getCourseById(params.id);

    return ApiResponse.success({ course });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[COURSE_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch course", 500);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: UpdateCourseDto = await request.json();

    const courseService = ServiceFactory.getCourseService();

    const courseExists = await courseService.courseExists(params.id);

    if (!courseExists) {
      return ApiResponse.error("Course not found", 404);
    }

    const course = await courseService.updateCourse(params.id, body);

    return ApiResponse.success({ course });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[COURSE_PUT]: ", error);
    }

    return ApiResponse.error("Failed to update course", 500);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const courseService = ServiceFactory.getCourseService();

    const courseExists = await courseService.courseExists(params.id);

    if (!courseExists) {
      return ApiResponse.error("Course not found", 404);
    }
    await courseService.deleteCourse(params.id);

    return ApiResponse.success({}, 204);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[COURSE_DELETE]: ", error);
    }

    return ApiResponse.error("Failed to delete course", 500);
  }
}
