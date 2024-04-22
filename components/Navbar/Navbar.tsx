"use client";

import { MdKeyboardArrowDown } from "react-icons/md";
import NavLink from "./NavLink";
import HamburgerMenu from "./HamburgerMenu";
import Dropdown from "./Dropdown";
import { DropdownItem } from "./navbarTypes";
import { useCycle, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { useWindowWidth } from "@react-hook/window-size";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
    subsets: ["latin"],
});

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const pathname = usePathname();

    const onlyWidth = useWindowWidth();

    if (onlyWidth > 768 && isOpen) {
        toggleOpen();
    }

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className=" relative  text-[#FDFDFFEF] h-[70px] sm:mx-auto w-full sm:max-w-screen-xl flex flex-row p-4 justify-between items-center sm:items-baseline border-b border-white/30 shadow-sm shadow-current/50"
        >
            <Link
                href="/"
                className={`${comfortaa.className} font-semibold text-xl sm:text-3xl`}
            >
                <span>Elbar</span>{" "}
                <span className="text-orange-400">Mobilya</span>
            </Link>

            <HamburgerMenu toggle={toggleOpen} />

            <Sidebar toggle={toggleOpen} />

            <ul className="hidden md:flex md:flex-row gap-x-3 ">
                <li>
                    <NavLink
                        href="/"
                        pathname={pathname}
                    >
                        Anasayfa
                    </NavLink>
                </li>

                <li className="relative group">
                    <NavLink
                        href="/kurumsal"
                        pathname={pathname}
                    >
                        Kurumsal
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>
                    <Dropdown list={kurumsalDropdown} />
                </li>

                <li className="relative group">
                    <NavLink
                        href="/urunlerimiz"
                        pathname={pathname}
                    >
                        Ürünlerimiz
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>
                    <Dropdown list={urunlerimizDropdown} />
                </li>

                <li className="relative group">
                    <NavLink
                        href="#"
                        pathname={pathname}
                    >
                        Medya
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>
                    <Dropdown list={medyaDropdown} />
                </li>

                <li className="relative group ">
                    <NavLink
                        href="/iletisim"
                        pathname={pathname}
                    >
                        İletişim
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>
                    <Dropdown list={iletisimDropdown} />
                </li>
            </ul>
        </motion.nav>
    );
};
export default Navbar;

const kurumsalDropdown: Array<DropdownItem> = [
    {
        href: "/kurumsal/#neden-elbar",
        title: "Neden Elbar",
    },
    {
        href: "/kurumsal/#misyonumuz",
        title: "Kısaca Biz",
    },
    {
        href: "/kurumsal/#vizyonumuz",
        title: "Vizyonumuz",
    },
];

const iletisimDropdown: Array<DropdownItem> = [
    {
        href: "/iletisim/#iletisim-formu",
        title: "Bize Ulaşın",
    },
    {
        href: "/iletisim/#adres",
        title: "Adres",
    },
];

const urunlerimizDropdown: Array<DropdownItem> = [
    {
        href: "/urunlerimiz/kapilar",
        title: "Kapı",
        subMenu: [
            {
                href: "/urunlerimiz/kapilar/renkler",
                title: "Renkler",
            },
            {
                href: "/urunlerimiz/kapilar/boya",
                title: "Boya",
            },
        ],
    },
    {
        href: "/urunlerimiz/kapaklar",
        title: "Kapak",
        subMenu: [
            {
                href: "/urunlerimiz/kapaklar/cam-kapak",
                title: "Cam Kapak",
            },
            {
                href: "/urunlerimiz/kapaklar/renkler",
                title: "Renkler",
            },
            {
                href: "/urunlerimiz/kapaklar/boya",
                title: "Boya",
            },
        ],
    },
    {
        href: "/urunlerimiz/interaktif",
        title: "İnteraktif",
    },
];

const medyaDropdown: Array<DropdownItem> = [
    {
        href: "/medya/foto-galeri",
        title: "Foto Galeri",
    },
    {
        href: "/medya/video-galeri",
        title: "Videolar",
    },
    {
        href: "/medya/katalog",
        title: "Kataloğumuz",
    },
];
