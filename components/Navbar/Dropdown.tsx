import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
    href: string;
    label: string;
}

const Dropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative inline-block">
            <button
                type="button"
                className="text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white px-4 py-2 rounded-md"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen ? "true" : "false"}
            >
                Dropdown
            </button>
            {isOpen && (
                <ul
                    ref={dropdownRef}
                    className="absolute z-50 top-0 left-0 w-full bg-black shadow-md rounded-md overflow-hidden transition duration-200 ease-in-out transform"
                    style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                    }}
                    aria-labelledby="dropdown-button"
                >
                    {items.map((item) => (
                        <li
                            key={item.href}
                            className="hover:bg-gray-800 px-4 py-2"
                        >
                            <Link
                                href={item.href}
                                className="text-sm block text-left"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
