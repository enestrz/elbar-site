"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useEffect } from "react";

interface NavLinkProps {
    href: string;
    pathname: string;
    children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, pathname, children }) => {
    // const pathname = usePathname();
    const currentPath = pathname.slice(1); // remove the first "/"
    const newCurrentPath = currentPath.split("/")[0];
    const newHref = href.split("/")[1];
    const isActive = newCurrentPath === newHref;

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
