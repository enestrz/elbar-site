"use client";

import { Cycle, motion } from "framer-motion";
import Link from "next/link";

interface SidebarMenuProps {
    toggle: Cycle;
}

export default function Sidebar({ toggle }: SidebarMenuProps) {
    const variants = {
        open: {
            opacity: 0.95,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                // restDelta: 1,
                damping: 40,
            },
        },
        closed: {
            opacity: 0,
            x: "-100%",
            transition: {
                // delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <motion.ul
            variants={variants}
            className={`absolute flex md:hidden flex-col items-center justify-center gap-5 text-xl sidebar-height w-full bg-black z-[100]  top-full mt-50  left-0`}
        >
            <li onClick={() => toggle()}>
                <Link
                    passHref
                    href="/"
                    className="w-full h-full"
                >
                    Anasayfa
                </Link>
            </li>
            <li onClick={() => toggle()}>
                <Link
                    href="/kurumsal"
                    className="w-full h-full"
                >
                    Kurumsal
                </Link>
            </li>
            <li onClick={() => toggle()}>
                <Link
                    href="/urunlerimiz"
                    className="w-full h-full"
                >
                    Ürünlerimiz
                </Link>
            </li>
            <li onClick={() => toggle()}>
                <Link
                    href="/#"
                    className="w-full h-full"
                >
                    Medya
                </Link>
            </li>
            <li onClick={() => toggle()}>
                <Link
                    href="/iletisim"
                    className="w-full h-full"
                >
                    İletişim
                </Link>
            </li>
        </motion.ul>
    );
}
