"use client";

import { Cycle, motion } from "framer-motion";

interface HamburgerMenuProps {
    toggle: Cycle;
}

const HamburgerMenu = ({ toggle }: HamburgerMenuProps) => {
    return (
        <motion.button
            initial={false}
            onClick={() => toggle()}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            className="relative z-50 md:hidden"
        >
            <motion.svg
                width={23}
                height={23}
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                    // d="M0 30 L60 30"
                    className="stroke-white stroke-[2px] fill-none"
                    strokeLinecap="round"
                />
                <motion.path
                    // d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    className="stroke-white stroke-[2px] fill-none"
                    strokeLinecap="round"
                />
                <motion.path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                    className="stroke-white stroke-[2px] fill-none"
                    strokeLinecap="round"
                />
            </motion.svg>
        </motion.button>
    );
};

export default HamburgerMenu;
