import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mohsindev369 - PhotoApp",
  description: "mohsindev369 - PhotoApp for hackathon_0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <aside className="flex">
          <Sidebar />
          <main className="w-full px-4 pt-12">
            {children}
          </main>
        </aside>
      </body>
    </html>
  );
}
