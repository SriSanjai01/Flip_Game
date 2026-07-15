import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breathing Style: Memory Match | Demon Slayer Game",
  description: "A gorgeous pastel glassmorphic memory card matching game featuring your favorite Demon Slayer characters. Train your concentration and defeat Muzan!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
