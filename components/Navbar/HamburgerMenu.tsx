"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <motion.button
            className="w-8 h-8 flex items-center justify-center"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {isOpen ? (
                <svg
                    className="w-6 h-6 fill-transparent stroke-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4.5 10.5L10 16L15.5 10.5" />
                </svg>
            ) : (
                <svg
                    className="w-6 h-6 fill-transparent stroke-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M15 3H5c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h10c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM5 5v14h10V5H5z" />
                </svg>
            )}
        </motion.button>
    );
};

export default HamburgerMenu;
