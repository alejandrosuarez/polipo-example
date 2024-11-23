import type { Metadata } from "next";
import "./globals.css";
import { ReactFigmaProvider } from "@/app/magic";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Web App",
};

export const inter = Inter()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactFigmaProvider>{children}</ReactFigmaProvider>
      </body>
    </html>
  );
}
