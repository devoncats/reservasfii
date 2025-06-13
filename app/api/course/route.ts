import { CreateCourseDto } from "@/backend/dto/course.dto";
import { ServiceFactory } from "@/backend/services/service-factory";
import { ApiResponse } from "@/backend/utils/api-response";
import { getAuthenticatedUser } from "@/backend/utils/get-authenticated-user";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const courseService = ServiceFactory.getCourseService();
    const course = await courseService.getAllCourses();

    return ApiResponse.success({ course });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[COURSE_GET]: ", error);
    }

    return ApiResponse.error("Failed to fetch courses", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error } = await getAuthenticatedUser();
    if (error) return error;

    const body: CreateCourseDto = await request.json();

    const courseService = ServiceFactory.getCourseService();
    const course = await courseService.createCourse(body);

    return ApiResponse.success({ course }, 201);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[COURSE_POST]: ", error);
    }

    return ApiResponse.error("Failed to create course", 500);
  }
}
