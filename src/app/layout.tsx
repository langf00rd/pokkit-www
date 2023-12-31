import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "pokkit",
   metadataBase: new URL("https://pokkit.app"),
   description: "get your finances together with pokkit",
   openGraph: {
      type: "website",
      url: "https://pokkit.app",
      title: "pokkit",
      description: "get your finances together with pokkit",
      siteName: "pokkit",
      images: [
         {
            url: "https://res.cloudinary.com/f00rd/image/upload/v1703504697/pokkit/xctatppuze9mrwlpt9tu.png",
         },
      ],
   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <Toaster />
         <body className={inter.className}>{children}</body>
      </html>
   );
}
