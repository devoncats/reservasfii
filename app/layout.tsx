import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter, Roboto_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReservasFII - Facultad de Ingeniería Industrial",
  description:
    "Sistema de reservas de aulas y laboratorios de la Facultad de Ingeniería Industrial de la Universidad Tecnológica de Panamá.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
