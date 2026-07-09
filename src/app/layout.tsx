import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Sofie Verhoeven | Full-Stack Developer",
  description:
    "Portfolio of Sofie Verhoeven - Full-Stack Developer specialized in React, Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}