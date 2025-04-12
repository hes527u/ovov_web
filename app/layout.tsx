'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
