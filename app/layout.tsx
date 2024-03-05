import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Elbar Mobilya",
    description: "Kapı ve kapak membran üretim merkezi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="tr"
            className="light"
        >
            <body
                className={`${inter.className} min-h-svh flex flex-col flex-nowrap antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}

// bg-gradient-to-t from-[#171717] to-[#011222]
