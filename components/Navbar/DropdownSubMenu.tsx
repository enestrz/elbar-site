import NavDropdownLink from "./NavDropdownLink";
import { DropdownItem } from "./navbarTypes";

interface DropdownProps {
    list: Array<DropdownItem>;
}

export default function DropdownSubMenu({ list }: DropdownProps) {
    return (
        <menu
            className="hidden absolute z-[100] left-full top-0 bg-black rounded-md shadow-lg drop-shadow-lg 
            group-hover/submenu:flex flex-col min-w-[150px] gap-1 p-2 overflow-hidden
            border-2 border-zinc-800 transition-all duration-300 ease-in-out;"
        >
            {list.map((item, index) => (
                <li key={index}>
                    <NavDropdownLink href={item.href}>
                        {item.title}
                    </NavDropdownLink>
                </li>
            ))}
        </menu>
    );
}
