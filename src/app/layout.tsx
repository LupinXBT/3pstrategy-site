import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  weight: ["200", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3Ps Audit — Investment-Readiness Due Diligence | 3P Strategy",
  description:
    "Operational and technical due diligence for tech projects, funds and grant programmes — built on the 3Ps framework: Product, Process, People.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plexMono.variable} h-full scroll-smooth scroll-pt-[88px]`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0A192F] text-[#F8F9FA]">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
