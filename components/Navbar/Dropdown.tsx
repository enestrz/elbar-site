import DropdownSubMenu from "./DropdownSubMenu";
import NavDropdownLink from "./NavDropdownLink";
import { DropdownItem } from "./navbarTypes";
import { MdKeyboardArrowRight } from "react-icons/md";

interface DropdownProps {
    list: Array<DropdownItem>;
}

export default function Dropdown({ list }: DropdownProps) {
    return (
        <menu
            className="hidden absolute max-[1430px]:right-0 z-50 bg-black rounded-md shadow-lg drop-shadow-lg group-hover:flex flex-col min-w-[150px] gap-1 p-2
        border-2 border-zinc-800 transition-all duration-300 ease-in-out;"
        >
            {list.map((item, index) => (
                <li
                    key={index}
                    className="relative group/submenu"
                >
                    <NavDropdownLink href={item.href}>
                        {item.title}
                        {item.subMenu && (
                            <MdKeyboardArrowRight
                                className="flex-shrink-0 size-5"
                                aria-hidden="true"
                            />
                        )}
                    </NavDropdownLink>
                    {item.subMenu && <DropdownSubMenu list={item.subMenu} />}
                </li>
            ))}
        </menu>
    );
}
