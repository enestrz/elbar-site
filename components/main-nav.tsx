"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    const menuItems = [
        "Anasayfa",
        "Kurumsal",
        "Ürünlerimiz",
        "Medya",
        "İletişim",
    ];

    return (
        <nav
            className="bg-white/90 backdrop-blur-2xl
                        rounded-b-md shadow-lg flex flex-row p-4 text-[#271810] 
                        justify-between sm:max-w-screen-xl sm:mx-auto items-center 
                        "
        >
            <h2 className="font-bold text-lg sm:text-xl">Elbar Mobilya</h2>

            <ul className="hidden sm:flex sm:flex-row gap-x-4">
                <li>
                    <Link
                        href="/"
                        className={`${
                            pathname === "/" ? "font-semibold" : ""
                        } nav-link `}
                    >
                        Anasayfa
                    </Link>
                </li>
                <li>
                    <Link
                        href="/kurumsal"
                        className={`${
                            pathname === "/kurumsal" ? "font-semibold" : ""
                        } nav-link`}
                    >
                        Kurumsal
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className={`${
                            pathname === "/urunler" ? "font-semibold" : ""
                        } nav-link`}
                    >
                        Ürünlerimiz
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className={`${
                            pathname === "/medya" ? "font-semibold" : ""
                        } nav-link`}
                    >
                        Medya
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className={`${
                            pathname === "/iletisim" ? "font-semibold" : ""
                        } nav-link`}
                    >
                        İletişim
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navigation;

//text-[#172428]
