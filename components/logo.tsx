import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Logo({ size = "large" }: { size?: "small" | "large" }) {
  const sizes = {
    small: { width: 32, height: 32, fontSize: "text-sm" },
    large: { width: 68, height: 85, fontSize: "text-lg" },
  };

  return (
    <Link
      href="https://reservasfii.utp.ac.pa"
      className="flex items-center gap-1"
    >
      <Image
        className="flex flex-col"
        src={"/logos/logo-fii.svg"}
        alt="Logo de la Facultad de Ingeniería Industrial"
        width={sizes[size].width}
        height={sizes[size].height}
        priority
      />
      <div className="flex flex-col">
        <h1
          className={cn(
            "flex flex-col justify-center font-sans font-semibold",
            sizes[size].fontSize
          )}
        >
          RESERVAS FII
        </h1>
        <span className="text-muted-foreground text-xs">
          Facultad de Ingeniería Industrial
        </span>
      </div>
    </Link>
  );
}
