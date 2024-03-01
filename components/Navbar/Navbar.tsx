import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavLink from "./NavLink";
import NavDropdownLink from "./NavDropdownLink";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    const menuItems = [
        "Anasayfa",
        "Kurumsal",
        "Ürünlerimiz",
        "Medya",
        "İletişim",
    ];

    const dropdownItems = [
        { href: "/link1", label: "Link 1" },
        { href: "/link2", label: "Link 2" },
        { href: "/link3", label: "Link 3" },
    ];

    return (
        <nav className=" text-[#FDFDFFEF] flex flex-row p-4 justify-between sm:max-w-screen-xl sm:mx-auto items-baseline border-b border-white/30 shadow-sm shadow-current/50">
            <h2 className="font-semibold text-xl sm:text-2xl">Elbar Mobilya</h2>

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

                    <menu className="hidden absolute max-[1430px]:right-0 z-50 bg-black rounded-md shadow-lg group-hover:flex flex-col min-w-[150px] gap-1 p-2">
                        <li>
                            <NavDropdownLink href="/iletisim#contact">
                                Kapılar
                            </NavDropdownLink>
                        </li>
                        <li className="hover:bg-zinc-700 rounded w-full">
                            <NavDropdownLink href="/iletisim#address">
                                Kapaklar
                            </NavDropdownLink>
                        </li>
                    </menu>
                </li>
                <li className="relative group">
                    <NavLink href="#">
                        Medya
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>

                    <menu className="hidden absolute max-[1430px]:right-0 z-50 bg-black rounded-md shadow-lg group-hover:flex flex-col min-w-[150px] gap-2 p-2">
                        <li>
                            <NavDropdownLink href="/iletisim#contact">
                                Foto Galeri
                            </NavDropdownLink>
                        </li>
                        <li>
                            <NavDropdownLink href="/iletisim#address">
                                Videolar
                            </NavDropdownLink>
                        </li>
                        <li className=" ">
                            <NavDropdownLink href="/iletisim#address">
                                Kataloğumuz
                            </NavDropdownLink>
                        </li>
                    </menu>
                </li>
                <li className="relative group ">
                    <NavLink href="/iletisim">
                        İletişim
                        <MdKeyboardArrowDown
                            className="flex-shrink-0 size-5"
                            aria-hidden="true"
                        />
                    </NavLink>

                    <menu className="hidden absolute max-[1430px]:right-0 z-50 bg-black rounded-md shadow-lg group-hover:flex flex-col min-w-[150px] gap-2 p-2">
                        <li>
                            <NavDropdownLink href="/iletisim/#iletisim-formu">
                                Bize Ulaşın
                            </NavDropdownLink>
                        </li>
                        <li>
                            <NavDropdownLink href="/iletisim/#adres">
                                Adres
                            </NavDropdownLink>
                        </li>
                    </menu>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;

//text-[#172428]
