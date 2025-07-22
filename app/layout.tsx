// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

// Configure the Poppins font with desired weights and variable name
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Metadata used by Next.js for SEO
export const metadata: Metadata = {
  title: "StoreIt",
  description: "The best storage tech",
};

// Root layout component for all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
