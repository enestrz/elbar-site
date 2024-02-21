"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import NavLink from "./ui/NavLink";

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
            className=" text-white
                        rounded-b-2xl flex flex-row p-4
                        justify-between sm:max-w-screen-xl sm:mx-auto items-center 
                        "
        >
            <h2 className="font-semibold text-xl sm:text-2xl">Elbar Mobilya</h2>

            <button
                aria-describedby="Navbar button for open menu when window size is small"
                className="appearance-none md:hidden flex flex-row items-center justify-center bg-transparent m-0 p-0 outline-none focus:outline-none"
            >
                <HiMenu
                    aria-hidden="true"
                    className="size-7"
                />
            </button>

            <ul className="hidden md:flex md:flex-row gap-x-3 ">
                <li>
                    <NavLink
                        href="/"
                        pathname={pathname}
                        name="Anasayfa"
                    />
                </li>
                <li>
                    <NavLink
                        href="/kurumsal"
                        pathname={pathname}
                        name="Kurumsal"
                    />
                </li>
                <li>
                    <NavLink
                        href="#"
                        pathname={pathname}
                        name="Ürünlerimiz"
                    />
                </li>
                <li>
                    <NavLink
                        href="#"
                        pathname={pathname}
                        name="Medya"
                    />
                </li>
                <li>
                    <NavLink
                        href="/iletisim"
                        pathname={pathname}
                        name="İletişim"
                    />
                </li>
            </ul>
        </nav>
    );
};
export default Navigation;

//text-[#172428]
