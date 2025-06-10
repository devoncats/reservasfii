"use client";

import { Button } from "@/components/ui/button";
import { handleSignOut } from "@/lib/handle-auth";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function SignoutForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await handleSignOut();
      redirect("/");
    } catch (error) {
      toast.error("Error al cerrar sesión", {
        description:
          error instanceof Error ? error.message : "Error al cerrar sesión",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="submit"
        disabled={isLoading}
        variant="ghost"
        className="h-8 w-full justify-start py-1.5 has-[>svg]:px-2"
      >
        <LogOut className="text-muted-foreground size-4 p-0 ps-0" />
        <span>Cerrar sesión</span>
      </Button>
    </form>
  );
}
