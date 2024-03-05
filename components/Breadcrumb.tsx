export type BreadcrumbItem = {
    label: string;
    href: string;
    active: boolean;
};

interface BreadcrumbProps {
    items: Array<BreadcrumbItem>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="flex flex-row items-center">
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-row items-center"
                    >
                        <a
                            href={item.href}
                            className="text-[#172428] font-semibold hover:text-[#00a0df] transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                        {!item.active && (
                            <svg
                                className="w-4 h-4 mx-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
