import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileBottomBar from "@/components/MobileBottomBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adeena Collection | Authentic Ethnic Wear & Pakistani Suits",
    template: "%s | Adeena Collection",
  },
  description:
    "Discover premium Pakistani lawn suits, Kashmiri embroidery, and luxury ethnic wear at Adeena Collection. 4 boutiques in Hyderabad with 9+ years of heritage craftsmanship.",
  keywords: [
    "Pakistani suits",
    "ethnic wear",
    "luxury fashion",
    "Hyderabad boutique",
    "lawn suits",
    "Kashmiri embroidery",
    "Adeena Collection",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${notoSerif.variable} ${manrope.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
