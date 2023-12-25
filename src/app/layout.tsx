import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "pokkit",
   description: "get your finances together with pokkit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <Toaster />
         <body className={inter.className}>{children}</body>
      </html>
   );
}
