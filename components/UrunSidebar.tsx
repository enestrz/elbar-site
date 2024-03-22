"use client";

import { RxCaretDown } from "react-icons/rx";
import UrunSidebarLink from "./UrunSidebarLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";

const sidebarVariants = {
    open: {
        height: "100%", // Adjust height for your content
        opacity: 1,
        display: "flex",
    },
    closed: {
        height: 0, // Adjust height for inactive state
        opacity: 0,
        display: "none",
    },
};

const buttonVariants = {
    open: {
        rotate: 180,
    },
    closed: {
        rotate: 0,
    },
};

export default function UrunSidebar() {
    const [isActive, setIsActive] = useState(true);

    const onlyWidth = useWindowWidth();

    if (onlyWidth < 640 && isActive) {
        setIsActive(false);
    } else if (onlyWidth > 640 && !isActive) {
        setIsActive(true);
    }

    function handleActive() {
        setIsActive(!isActive);
    }

    return (
        <motion.nav className="min-w-[200px] font-medium flex flex-col gap-2 p-2 mt-2">
            <motion.div
                className="flex flex-row flex-nowrap justify-between items-center cursor-pointer group text-white select-none"
                onClick={handleActive}
            >
                <h2>Ürünlerimiz Menü</h2>
                <motion.button
                    variants={buttonVariants}
                    animate={isActive ? "open" : "closed"}
                    className="m-0 p-0 inline-block size-min"
                >
                    <RxCaretDown className="inline-block text-white size-6 shrink-0" />
                </motion.button>
            </motion.div>

            <motion.ul
                variants={sidebarVariants}
                animate={isActive ? "open" : "closed"}
                className={`
                     flex-col gap-2 ml-3 overflow-hidden`}
            >
                <li>
                    <UrunSidebarLink
                        href="/urunlerimiz/kapilar"
                        title="Kapılar"
                    />
                    <div className="flex flex-row flex-nowrap gap-4 ml-1 mt-1">
                        <div className="border border-gray-100/50" />
                        <ul className="flex flex-col  gap-2 flex-1">
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapilar/primerli"
                                    title="Primerli"
                                />
                                <div className="flex flex-row flex-nowrap gap-4 ml-1 mt-1">
                                    <div className="border border-gray-100/50" />
                                    <ul className="flex flex-col gap-2">
                                        <li>
                                            <UrunSidebarLink
                                                href="/urunlerimiz/kapilar/primerli/duz-ahsap"
                                                title="Düz Ahşap"
                                            />
                                        </li>
                                        <li>
                                            <UrunSidebarLink
                                                href="/urunlerimiz/kapilar/primerli/cift-renk"
                                                title="Çift Renk"
                                            />
                                        </li>
                                        <li>
                                            <UrunSidebarLink
                                                href="/urunlerimiz/kapilar/primerli/soft-touch"
                                                title="Soft Touch"
                                            />
                                        </li>
                                        <li>
                                            <UrunSidebarLink
                                                href="/urunlerimiz/kapilar/primerli/boyanabilir-pp"
                                                title="Boyanabilir PP"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapilar/primersiz"
                                    title="Primersiz"
                                />
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <UrunSidebarLink
                        href="/urunlerimiz/kapaklar"
                        title="Kapaklar"
                    />
                    <div className="flex flex-row flex-nowrap gap-4 ml-1 mt-1">
                        <div className="border border-gray-100/50" />
                        <ul className="flex flex-col gap-2 flex-1">
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/duz"
                                    title="Düz"
                                />
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/duz-parlak"
                                    title="Düz Parlak"
                                />
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/ahsap"
                                    title="Ahşap"
                                />
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/parlak-ahsap"
                                    title="Parlak Ahşap"
                                />
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/high-gloss-3d"
                                    title="High Gloss 3D"
                                />
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/metal"
                                    title="Metal"
                                />
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/ozel"
                                    title="Özel"
                                />
                            </li>
                            <li>
                                <UrunSidebarLink
                                    href="/urunlerimiz/kapaklar/soft-touch"
                                    title="Soft Touch"
                                />
                            </li>
                        </ul>
                    </div>
                </li>
            </motion.ul>
        </motion.nav>
    );
}
