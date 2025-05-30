import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abhay portfolio",

  description: "Abhay's portfolio website showcasing projects and skills",
  keywords: [
    "Abhay",
    "portfolio",
    "web developer",
    "projects",
    "skills",
    "software engineer",
    "frontend developer",
  ],
  authors: [
    {
      name: "Abhay",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
