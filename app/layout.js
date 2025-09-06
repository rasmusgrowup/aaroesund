import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Årøsund Bådelaug's hjemmeside",
    description: "Som medlem af Årøsund Bådelaug, får du/i en række af oplevelser, hvor det at sejle og have vandet som omdrejnings punkt, samt fællesskabet medlemmerne i mellem, er i højsædet.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className="[scrollbar-gutter:stable]">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* Header */}
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
