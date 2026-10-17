import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mai Ahmed Khairy | Junior Data Analyst & AI Automation Specialist",
  description: "Portfolio of Mai Ahmed Khairy — Junior Data Analyst specializing in Power BI dashboards, DAX modeling, SQL querying, Power Query ETL, and AI-assisted data workflows.",
  keywords: [
    "Mai Ahmed",
    "Mai Ahmed Khairy",
    "Data Analyst",
    "Junior Data Analyst",
    "Power BI",
    "DAX",
    "Power Query",
    "SQL",
    "Python",
    "Business Intelligence",
    "AI Automation",
    "Egypt"
  ],
  authors: [{ name: "Mai Ahmed Khairy" }],
  openGraph: {
    title: "Mai Ahmed Khairy | Junior Data Analyst & AI Automation Specialist",
    description: "Turning raw business data into actionable Power BI dashboards, optimized Star Schemas, and decisive business insights.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070b14] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
