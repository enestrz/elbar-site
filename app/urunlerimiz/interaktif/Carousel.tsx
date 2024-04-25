"use client";

import Image from "next/image";
import { Suspense, useCallback } from "react";
import { Dropdown } from "primereact/dropdown";
import { Carousel as PrimeCarousel } from "primereact/carousel";
import { ProgressSpinner } from "primereact/progressspinner";

interface CarouselProps {
    kapilar: { src: string; alt: string }[];
    setSelectedDoor: (src: string) => void;
    kapiTurleri: { label: string }[];
    selectedTur: { label: string; data: string[]; uzanti: string };
    setSelectedTur: (src: any) => void;
}

export default function Carousel({
    kapilar,
    setSelectedDoor,
    kapiTurleri,
    selectedTur,
    setSelectedTur,
}: CarouselProps) {
    const handleSelectedDoor = (src: string) => {
        setSelectedDoor(src);
        console.log("selected");
    };

    const responsiveOptions = [
        {
            breakpoint: "1400px",
            numVisible: 4,
            numScroll: 1,
        },
        {
            breakpoint: "1199px",
            numVisible: 4,
            numScroll: 1,
        },
        {
            breakpoint: "767px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const productTemplate = (kapi: any) => {
        return (
            <div
                className="product-item relative overflow-hidden w-full cursor-pointer p-2 my-1 shadow-lg group"
                onClick={() => handleSelectedDoor(kapi.src)}
            >
                <Image
                    src={kapi.src}
                    alt={kapi.alt}
                    width={150}
                    height={150}
                    loading="lazy"
                    className="object-cover rounded-md w-full h-20"
                />
                <div className="hidden text-center group-hover:block text-sm absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 rounded-sm left-1/2">
                    {kapi.alt.split(".").slice(0, -1).join(".")}
                </div>
            </div>
        );
    };

    return (
        <Suspense fallback={<ProgressSpinner />}>
            <div className="w-52">
                <Dropdown
                    value={selectedTur}
                    onChange={(e) => setSelectedTur(e.value)}
                    options={kapiTurleri}
                    placeholder="Kapı Türü seçin"
                    className="w-full mb-4 shadow-lg rounded-md"
                />

                <PrimeCarousel
                    value={kapilar}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    orientation="vertical"
                    verticalViewPortHeight="450px"
                    itemTemplate={productTemplate}
                    className="w-full"
                />
            </div>
        </Suspense>
    );
}
