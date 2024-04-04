"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Suspense, useCallback } from "react";

interface CarouselProps {
    kapilar: { src: string; alt: string }[];
    setSelectedDoor: (src: string) => void;
}

export default function Carousel({ kapilar, setSelectedDoor }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        axis: "y",
        dragFree: true,
        containScroll: "trimSnaps",
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const handleSelectedDoor = (src: string) => {
        setSelectedDoor(src);
        console.log("selected");
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="embla border-r-2 border-black pr-2">
                <div
                    className="embla__viewport"
                    ref={emblaRef}
                >
                    <div className="embla__container">
                        {kapilar.map((kapı, index) => (
                            <div
                                className="embla__slide"
                                key={index}
                            >
                                <Image
                                    src={kapı.src}
                                    alt={kapı.alt}
                                    onClick={() => handleSelectedDoor(kapı.src)}
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="embla__prev"
                    onClick={scrollPrev}
                >
                    Prev
                </button>
                <button
                    className="embla__next"
                    onClick={scrollNext}
                >
                    Next
                </button>
            </div>
        </Suspense>
    );
}
