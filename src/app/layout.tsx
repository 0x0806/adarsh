import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { recognition } from "@/data/recognition";
import { site } from "@/data/site";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const code = JetBrains_Mono({ subsets: ["latin"], variable: "--font-code", display: "swap" });

const title = "Adarsh S | Cybersecurity Specialist, Penetration Tester";
const description =
  "Senior cybersecurity specialist offering penetration testing, vulnerability research, security consulting and training. Open-source security tools on GitHub.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: ["cybersecurity", "penetration testing", "security research", "vulnerability assessment", "red team", "bug bounty"],
  authors: [{ name: site.name, url: site.socials[0].href }],
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", url: site.url, siteName: site.name },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0b0c0e", colorScheme: "dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  image: site.avatar,
  sameAs: [...site.socials.map((s) => s.href), ...recognition.flatMap((r) => (r.handle && r.href ? [r.href] : []))],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${code.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:font-semibold focus:text-signal-ink"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
