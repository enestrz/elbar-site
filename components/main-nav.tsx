"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

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

            <button
                aria-describedby="Navbar button for open menu when window size is small"
                className="appearance-none md:hidden flex flex-row items-center justify-center bg-transparent m-0 p-0 outline-none focus:outline-none"
            >
                <HiMenu
                    aria-hidden="true"
                    className="size-7"
                />
            </button>

            <ul className="hidden md:flex md:flex-row gap-x-4">
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
                        href="/iletisim"
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
