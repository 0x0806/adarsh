import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh S - Cybersecurity Portfolio",
  description: "Senior Cybersecurity Specialist | Security Researcher | Penetration Tester",
  keywords: ["cybersecurity", "penetration testing", "security research", "ethical hacking", "vulnerability assessment", "network security"],
  authors: [{ name: "Adarsh S" }],
  openGraph: {
    title: "Adarsh S - Cybersecurity Portfolio",
    description: "Senior Cybersecurity Specialist | Security Researcher | Penetration Tester",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}