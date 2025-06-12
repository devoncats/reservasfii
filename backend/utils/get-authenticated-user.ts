import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getAuthenticatedUser() {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      ),
      user: null,
    };
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, role: true },
  });

  if (!user?.role) {
    return {
      error: NextResponse.json(
        { error: "User role not found" },
        { status: 403 }
      ),
      user: null,
    };
  }

  return { error: null, user };
}
