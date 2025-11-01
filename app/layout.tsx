import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = localFont({
  variable: "--font-serif",
  src: "../font/6f324551b041d4dd-s.p.woff2",
});

export const metadata: Metadata = {
  title: "Portfolio | Anurag Singh",
  description: "Portfolio of Anurag Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${interSans.variable} ${serif.variable} antialiased text-primary bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
