"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${
                isActive ? "border-b-[2px] border-b-current" : ""
            } nav-link`}
            scroll={false}
        >
            {children}
        </Link>
    );
};
export default NavLink;
