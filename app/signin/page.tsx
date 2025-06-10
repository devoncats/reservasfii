import { SignInCard } from "@/components/signin/signin-card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="bg-background flex h-dvh items-center justify-center">
      <SignInCard />
    </main>
  );
}
