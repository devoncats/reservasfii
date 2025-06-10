import { Logo } from "@/components/logo";
import { SingInButton } from "@/components/signin/signin-button";
import { SignInTitle } from "@/components/signin/signin-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function SignInCard() {
  return (
    <Card className="bg-card text-card-foreground gap-0 shadow-none">
      <CardHeader className="flex justify-center">
        <Logo />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-8 pb-0">
        <SignInTitle />
        <SingInButton />
      </CardContent>
    </Card>
  );
}
