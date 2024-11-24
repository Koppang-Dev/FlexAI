import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Configures the Inter text font
const inter = Inter({ subsets: ["latin"] });

// Defines the title and description for the website for SEO purposes
export const metadata = {
  title: "AI Fitness Planner Startup",
  description:
    "A startup website and mobile application integregated for simple AI workout planning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
