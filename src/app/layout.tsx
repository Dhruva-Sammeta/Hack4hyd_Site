import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0E1A",
};

export const metadata: Metadata = {
  title: {
    default: "Hack4Hyd — Hyderabad's Premier Student Hackathon | A Byte By Byte Initiative",
    template: "%s | Hack4Hyd",
  },
  description:
    "Hack4Hyd — Hyderabad's biggest student-led hackathon, supported by Byte By Byte. Build innovative solutions, compete for ₹35,000 in prizes, and connect with the tech community. August 1, 2026.",
  keywords: [
    "Hack4Hyd",
    "Hack4Hyd",
    "Hackathon",
    "Hyderabad Hackathon",
    "Student Hackathon",
    "Coding Competition",
    "Tech Event Hyderabad",
    "Innovation",
    "Programming",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Hack4Hyd — Hyderabad's Premier Student Hackathon | A Byte By Byte Initiative",
    description:
      "Build, innovate, compete. Join Hyderabad's biggest student hackathon — supported by Byte By Byte. August 1, 2026.",
    type: "website",
    siteName: "Hack4Hyd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-h4h-surface text-h4h-text overflow-x-hidden">
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
