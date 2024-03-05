import NavDropdownLink from "./NavDropdownLink";
import { DropdownItem } from "./navbarTypes";

interface DropdownProps {
    list: Array<DropdownItem>;
}

export default function Dropdown({ list }: DropdownProps) {
    return (
        <menu className="dropdown-container">
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
