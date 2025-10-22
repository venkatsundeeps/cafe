import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "The Cozy Bean Cafe – Fresh Coffee, Pastries & Relaxation",
  description:
    "Welcome to The Cozy Bean Cafe! Enjoy fresh coffee, delicious pastries, and a cozy atmosphere. Order online, view our menu, and find your perfect spot to relax.",
  keywords: [
    "Cafe",
    "Coffee",
    "Pastries",
    "Cozy",
    "Menu",
    "Order Online",
    "The Cozy Bean",
    "Bakery",
    "Relax",
    "Hot Drinks",
    "Smalltown Cafe",
  ],
  openGraph: {
    title: "The Cozy Bean Cafe – Fresh Coffee, Pastries & Relaxation",
    description:
      "Sip, relax, and enjoy at The Cozy Bean Cafe. Discover our menu, order your favorites, and experience the best coffee in town!",
    url: "https://thecozybean.example.com",
    siteName: "The Cozy Bean Cafe",
    images: [
      {
        url: "https://res.cloudinary.com/drkquyjdt/image/upload/v1761147208/Black_and_White_Modern_Cozy_Cafe_Presentation_1_vf3iw9.png",
        width: 1200,
        height: 630,
        alt: "The Cozy Bean Cafe - Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
