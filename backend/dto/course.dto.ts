import { Course } from "@prisma/client";

export type CourseDto = Pick<Course, "id" | "name">;
export type CourseDetailsDto = Omit<Course, "createdAt" | "updatedAt">;
export type CreateCourseDto = Pick<Course, "name" | "description">;
export type UpdateCourseDto = Pick<Course, "name" | "description">;
