import Image from "next/image";
import { ImageCardProps } from "./ImageCard";

export default function CarouselImage({ src, alt }: ImageCardProps) {
    return (
        <div className="rounded-lg border-2 shadow relative w-full h-full  overflow-hidden">
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                priority
                className="rounded-md object-cover h-full w-full"
            />
            <h3 className="font-semibold absolute top-2 left-2 bg-black/50 text-white p-2 rounded">
                {alt.split(".")[0]}
            </h3>
        </div>
    );
}
