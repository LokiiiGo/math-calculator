import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo ({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Math Calculator",
  description: "Uma calculadora para operações matemáticas simples.",
  icons: "/asset/calculadora.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${arimo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
