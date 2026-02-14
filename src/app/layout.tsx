import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Using Inter as requested/standard
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L4 Rooftop Restaurant",
  description: "A modern organic dining experience with city views.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          playfair.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
