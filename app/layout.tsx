import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
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
  title: "مؤسسة السبيعي للمقاولات",
  description: "ساندوتش بانل، مظلات، سواتر، هناجر، وكلادنج",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-red-600 selection:text-white">
        {/* 1. الهيدر في أعلى الصفحة */}
        <Navbar />
        
        {/* 2. محتوى الصفحات في المنتصف */}
        <main className="flex-1">{children}</main>

        {/* 3. الفوتر في أسفل الصفحة تماماً */}
        <Footer />
      </body>
    </html>
  );
}