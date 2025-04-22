import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope, Mulish } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Centrum drwewna i kompozytu",
  description: "Centrum drwewna i kompozytu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${manrope.variable} ${mulish.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
