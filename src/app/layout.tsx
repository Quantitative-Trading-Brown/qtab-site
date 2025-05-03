import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { ibm } from '@/app/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "QTAB Site",
  description: "Quantitative Trading at Brown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibm.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="font-ibm">
          <Header />
        </div>
        <div className="flex-grow flex flex-col font-ibm">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
