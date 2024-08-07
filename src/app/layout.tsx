import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GTMInitializer from "./GTM";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VTSD",
  description: "Curso gratuito: como entrar no digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <GTMInitializer />
        {children}
      </body>
    </html>
  );
}
