"use client";

import { useState, Suspense } from "react";
import Model from "./Model";
import { PrimeReactProvider } from "primereact/api";
import Carousel from "@/app/urunlerimiz/interaktif/Carousel";
import {
    ciftRenkKapilar,
    duzAhsapKapilar,
    softTouchKapilar,
} from "@/lib/kapilar/primerliData";
import { primersizResimler } from "@/lib/kapilar/primersizData";
import NewModel from "./NewModel";

const kapiTurleri = [
    {
        label: "Düz Ahşap",
        data: [...duzAhsapKapilar],
        uzanti: "/kapilar/primerli/duz-ahsap/",
    },
    {
        label: "Çift Renk",
        data: [...ciftRenkKapilar],
        uzanti: "/kapilar/primerli/cift-renk/",
    },
    {
        label: "Soft Touch",
        data: [...softTouchKapilar],
        uzanti: "/kapilar/primerli/soft-touch/",
    },
    {
        label: "Primersiz",
        data: [...primersizResimler],
        uzanti: "/kapilar/primersiz/",
    },
];

export default function InteraktifPage() {
    const [selectedTur, setSelectedTur] = useState(kapiTurleri[0]);
    const [selectedDoor, setSelectedDoor] = useState<string>(
        selectedTur.uzanti + selectedTur.data[0]
    );

    return (
        <section className="card w-full flex flex-col rounded relative min-h-[850px] max-h-[850px] overflow-hidden">
            <div className="text-center border-b-2 p-2 border-black w-full mb-3 ">
                <h2 className="text-xl">İnteraktif</h2>
                <p>
                    Yandaki menüden türü seçip, altınaki galeriden istediğiniz
                    modele tıklayıp 3 boyutlu halini görebilirsiniz.
                </p>
                <p>
                    Modeli fare ile sürükleyerek inceleyebilir, fare tekerleği
                    ile yakınlaştırıp - uzaklaştırabilirsiniz.
                </p>
                <p>Lütfen geniş ekranda kullanınız!</p>
            </div>

            <div className="flex flex-row w-full h-full flex-1">
                <Suspense fallback={null}>
                    <Carousel
                        kapilar={selectedTur.data.map((src) => ({
                            src: selectedTur.uzanti + src,
                            alt: src,
                            isSelected: false,
                        }))}
                        setSelectedDoor={setSelectedDoor}
                        kapiTurleri={kapiTurleri}
                        selectedTur={selectedTur}
                        setSelectedTur={setSelectedTur}
                    />
                    <Model selectedDoor={selectedDoor} />
                </Suspense>
            </div>
        </section>
    );
}

("/models/TEŞİR KAPAK MODELLERİ.gltf");
