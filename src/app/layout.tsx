import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DecapCMS Admin",
  description: "Content Management System for Your Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
