import Link from "next/link";

interface NavDropdownLinkProps {
    href: string;
    pathname?: string;
    children?: React.ReactNode;
}

const NavDropdownLink: React.FC<NavDropdownLinkProps> = ({
    href,
    children,
}) => {
    return (
        <Link
            href={href}
            className="nav-dropdown-link "
            // scroll={false}
        >
            {children}
        </Link>
    );
};
export default NavDropdownLink;
