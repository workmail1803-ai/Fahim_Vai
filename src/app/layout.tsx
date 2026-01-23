import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextUp Mentor | Your Gateway to Studying in Europe",
  description:
    "NextUp Mentor - Specialized educational consultancy for studying in Italy & Lithuania. Expert guidance for university admission, scholarships, and visa processing. Guided by experience, not with promises.",
  keywords: [
    "study abroad",
    "Italy university",
    "Lithuania university",
    "scholarship 2026",
    "educational consultant Bangladesh",
    "Europe study",
    "Schengen visa",
    "Bachelor's degree abroad",
    "Master's degree Europe",
  ],
  authors: [{ name: "NextUp Mentor" }],
  openGraph: {
    title: "NextUp Mentor | Your Gateway to Studying in Europe",
    description:
      "Specialized guidance for Italy & Lithuania. We are guided by experience, not with promises.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
