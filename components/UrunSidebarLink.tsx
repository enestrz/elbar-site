import Link from "next/link";
import { usePathname } from "next/navigation";

interface UrunSidebarLinkProps {
    href: string;
    title: string;
    className?: string;
}

export default function UrunSidebarLink({
    href,
    title,
    className,
}: UrunSidebarLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={` ${
                isActive ? "text-white" : "text-[#cccccc]"
            }  hover:text-white ${className && className}`}
        >
            {title}
        </Link>
    );
}
