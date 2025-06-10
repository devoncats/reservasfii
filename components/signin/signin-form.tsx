"use client";

import { Button } from "@/components/ui/button";
import { handleSignIn } from "@/lib/handle-auth";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export function LoginForm() {
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setisLoading(true);

    try {
      await handleSignIn();
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast("Error al iniciar sesión", {
        description: "Por favor, intenta nuevamente.",
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLoading ? (
        <Button
          type="submit"
          variant="outline"
          className="text-foreground bg-background hover:text-foreground hover:bg-muted h-12 w-96 rounded px-16 py-1 shadow-none transition-colors duration-200 hover:cursor-pointer"
          disabled={isLoading}
        >
          <Loader2 className="h-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          variant="outline"
          className="text-foreground bg-background hover:text-foreground hover:bg-muted h-12 w-96 rounded px-16 py-1 shadow-none transition-colors duration-200 hover:cursor-pointer"
        >
          <Image
            src="/logos/logo-utp.svg"
            alt="Logo UTP"
            width={30}
            height={30}
          />
          <span className="font-medium">Iniciar sesión con Correo UTP</span>
        </Button>
      )}
    </form>
  );
}
