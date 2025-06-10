import { LoginForm } from "@/components/signin/signin-form";
import { LoginTOS } from "@/components/signin/signin-tos";

export function SingInButton() {
  return (
    <div className="flex flex-col items-center gap-2">
      <LoginForm />
      <LoginTOS />
    </div>
  );
}
