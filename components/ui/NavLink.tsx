import Link from "next/link";

interface NavLinkProps {
    href: string;
    pathname: string;
    name: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, pathname, name }) => {
    return (
        <Link
            href={href}
            className={`${
                pathname === href ? "border-b-[2px] border-b-current" : ""
            } nav-link`}
        >
            {name}
        </Link>
    );
};
export default NavLink;
