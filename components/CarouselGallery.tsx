"use client";

import { Carousel } from "react-responsive-carousel";
import { ImageCardProps } from "./ImageCard";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useEffect, useState } from "react";

export default function CarouselGallery({
    images,
}: {
    images: ImageCardProps[];
}) {
    const width = useWindowWidth({
        initialWidth: 0,
        fps: 60,
    });

    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        setWindowSize(width);
    }, [width]);

    if (windowSize < 640) {
        return (
            <Carousel
                autoPlay
                swipeable={true}
                showThumbs={false}
                infiniteLoop
                className="cursor-pointer mt-10 "
                showArrows={true}
                stopOnHover
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="shadow-lg overflow-hidden rounded-lg m-2 p-2 relative w-full h-full  max-h-[300px]"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={300}
                            priority
                            className="rounded-md object-cover h-full w-full"
                        />
                        <p className="absolute legend">{image.alt}</p>
                    </div>
                ))}
            </Carousel>
        );
    }

    return (
        <Carousel
            autoPlay
            swipeable={true}
            showThumbs={false}
            infiniteLoop
            className="cursor-pointer mt-10 "
            showArrows={true}
            stopOnHover
            centerMode
            centerSlidePercentage={30}
            emulateTouch
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className="shadow-lg overflow-hidden rounded-lg m-2 p-2 relative w-full h-full  max-h-[300px]"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        priority
                        className="rounded-md object-cover h-full w-full"
                    />
                    <p className="absolute legend">{image.alt}</p>
                </div>
            ))}
        </Carousel>
    );
}
