import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/mdc-dark-indigo/theme.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { PrimeReactProvider } from "primereact/api";
import { ScrollTop } from "primereact/scrolltop";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = false;

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
                <PrimeReactProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <ScrollTop
                        target="window"
                        className="bg-white"
                    />
                </PrimeReactProvider>
            </body>
        </html>
    );
}

// bg-gradient-to-t from-[#171717] to-[#011222]
