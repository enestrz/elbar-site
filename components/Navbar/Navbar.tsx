import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavLink from "./NavLink";
import NavDropdownLink from "./NavDropdownLink";
import HamburgerMenu from "./HamburgerMenu";
import Dropdown from "./Dropdown";
import { DropdownItem } from "./navbarTypes";
import { Montagu_Slab } from "next/font/google";

const montaguSlab = Montagu_Slab({ subsets: ["latin"] });

const Navbar = () => {
    const menuItems = [
        "Anasayfa",
        "Kurumsal",
        "Ürünlerimiz",
        "Medya",
        "İletişim",
    ];

    return (
        <nav className=" text-[#FDFDFFEF] sm:mx-auto w-full sm:max-w-screen-xl flex flex-row p-4 justify-between items-baseline border-b border-white/30 shadow-sm shadow-current/50">
            <h2 className="font-semibold text-xl sm:text-3xl">Elbar Mobilya</h2>

            {/* <button
                aria-describedby="Navbar button for open menu when window size is small"
                className="appearance-none md:hidden flex flex-row items-center justify-end bg-transparent outline-none focus:outline-none"
            >
                <HiMenu
                    aria-hidden="true"
                    className="size-8"
                />
            </button> */}

            {/* <HamburgerMenu /> */}

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
        </nav>
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
        href: "/iletisim/#iletisim-formu",
        title: "Membran Kapı",
    },
    {
        href: "/iletisim/#adres",
        title: "Membran Kapak",
    },
];

const medyaDropdown: Array<DropdownItem> = [
    {
        href: "/iletisim/#iletisim-formu",
        title: "Foto Galeri",
    },
    {
        href: "/iletisim/#adres",
        title: "Videolar",
    },
    {
        href: "/iletisim/#adres",
        title: "Kataloğumuz",
    },
];
