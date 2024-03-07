import Image from "next/image";
import Link from "next/link";

interface ImagePreviewLinkProps {
    src: string;
    alt: string;
    href: string;
    header: string;
}

export default function ImagePreviewLink({
    src,
    alt,
    href,
    header,
}: ImagePreviewLinkProps) {
    return (
        <Link
            href={href}
            className="block rounded-lg border-2 shadow relative w-full h-[300px] sm:w-[300px] overflow-hidden"
        >
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                priority
                className="rounded-md object-cover h-full w-full"
            />
            <h3 className="font-semibold absolute top-2 left-2 bg-black/50 text-white p-2 rounded">
                {header}
            </h3>
        </Link>
    );
}
