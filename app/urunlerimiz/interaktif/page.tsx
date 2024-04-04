"use client";
import { useState } from "react";
import Model from "./Model";

import Carousel from "@/app/urunlerimiz/interaktif/Carousel";

const kapilar = [
    {
        src: "/kapilar/primerli/cift-renk/LMD 206-206-206 İTALYAN CEVİZ.png",
        alt: "Kapı",
    },
    {
        src: "/kapilar/primerli/cift-renk/LMD 261-261-261 BAL TEAK.jpg",
        alt: "Kapı",
    },
];

export default function InteraktifPage() {
    const [selectedDoor, setSelectedDoor] = useState<string>(kapilar[0].src);

    return (
        <section className="card w-full flex flex-row rounded relative">
            <Carousel
                kapilar={kapilar}
                setSelectedDoor={setSelectedDoor}
            />
            <Model selectedDoor={selectedDoor} />
        </section>
    );
}

("/models/TEŞİR KAPAK MODELLERİ.gltf");
