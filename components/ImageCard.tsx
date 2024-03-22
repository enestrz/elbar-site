import Image from "next/image";

export interface ImageCardProps {
    src: string;
    alt: string;
}

export default function ImageCard({ src, alt }: ImageCardProps) {
    return (
        <div className="block rounded-lg border-2 shadow relative w-full h-[300px] sm:w-[300px] overflow-hidden">
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                // priority
                loading="lazy"
                className="rounded-md object-cover h-full w-full"
            />
            <h3 className="font-semibold absolute top-2 left-2 bg-black/50 text-white p-2 rounded">
                {alt.split(".")[0]}
            </h3>
        </div>
    );
}
