'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "./contexts/LanguageContext";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{}>;
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
