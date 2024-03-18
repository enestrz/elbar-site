"use client";

import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavLink from "./NavLink";
import NavDropdownLink from "./NavDropdownLink";
import HamburgerMenu from "./HamburgerMenu";
import Dropdown from "./Dropdown";
import { DropdownItem } from "./navbarTypes";
import { Montagu_Slab } from "next/font/google";
import { useCycle, motion } from "framer-motion";
import Sidebar from "./Sidebar";

const montaguSlab = Montagu_Slab({ subsets: ["latin"] });

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const menuItems = [
        "Anasayfa",
        "Kurumsal",
        "Ürünlerimiz",
        "Medya",
        "İletişim",
    ];

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className=" relative  text-[#FDFDFFEF] h-[70px] sm:mx-auto w-full sm:max-w-screen-xl flex flex-row p-4 justify-between items-center sm:items-baseline border-b border-white/30 shadow-sm shadow-current/50"
        >
            <h2 className="font-semibold text-xl sm:text-3xl">Elbar Mobilya</h2>

            <HamburgerMenu toggle={toggleOpen} />

            <Sidebar toggle={toggleOpen} />

            <ul className="hidden md:flex md:flex-row gap-x-3 ">
                <li>
                    <NavLink href="/">Anasayfa</NavLink>
                </li>

                <li>
                    <NavLink href="/kurumsal">Kurumsal</NavLink>
                </li>

                <li className="relative group">
                    <NavLink href="/urunlerimiz">
                        Ürünlerimiz
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>
                    <Dropdown list={urunlerimizDropdown} />
                </li>

                <li className="relative group">
                    <NavLink href="#">
                        Medya
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>
                    <Dropdown list={medyaDropdown} />
                </li>

                <li className="relative group ">
                    <NavLink href="/iletisim">
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

//text-[#172428]

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
        title: "Membran Kapı",
    },
    {
        href: "/urunlerimiz/kapaklar",
        title: "Membran Kapak",
    },
    {
        href: "/urunlerimiz/interaktif",
        title: "İnteraktif",
    },
];

const medyaDropdown: Array<DropdownItem> = [
    {
        href: "#",
        title: "Foto Galeri",
    },
    {
        href: "#",
        title: "Videolar",
    },
    {
        href: "#",
        title: "Kataloğumuz",
    },
];
