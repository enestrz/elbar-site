"use client";

import Image from "next/image";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi2";
import { RxArrowRight } from "react-icons/rx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselGallery from "@/components/CarouselGallery";

export default function Home() {
    const year = new Date().getFullYear();

    const kapilarArray = [
        {
            src: "/kapilar/primerli/cift-renk/LMD 206-206-206 İTALYAN CEVİZ.png",
            alt: "LMD 206-206-206 - İtalyan Ceviz",
        },
        {
            src: "/kapilar/primerli/duz-ahsap/LMD 241 COCO.jpg",
            alt: "LMD 241 - Coco",
        },
        {
            src: "/kapilar/primerli/soft-touch/LMD 708 DOĞAL ANTİK.jpg",
            alt: "LMD 708 - Doğal Antik",
        },
        {
            src: "/kapilar/primerli/soft-touch/LMD 732 AVUSTURALYA CEVİZ.jpg",
            alt: "LMD 732 - Avusturalya Ceviz",
        },
        {
            src: "/kapilar/primerli/soft-touch/LMD 724 ASOS.jpg",
            alt: "LMD 724 - Asos",
        },
    ];

    const kapaklarArray = [
        {
            src: "/kapaklar/ahşap/LMD 209 RUSTİK.jpg",
            alt: "LMD 209 - Rustik",
        },
        {
            src: "/kapaklar/düz/LMD 105 PORTAKAL.jpg",
            alt: "LMD 105 - Portakal",
        },
        {
            src: "/kapaklar/düz/LMD 106 FISTIK YEŞİLİ.jpg",
            alt: "LMD 106 - Fıstık Yeşili",
        },
        {
            src: "/kapaklar/düz/LMD 111 LİLA.jpg",
            alt: "LMD 111 - Lila",
        },
        {
            src: "/kapaklar/duz-parlak/LMD 465 TURKUAZ MAVİ.png",
            alt: "LMD 465 - Turkuaz Mavi",
        },
        {
            src: "/kapaklar/duz-parlak/LMD 463 HARDAL SARI.png",
            alt: "LMD 106 - Fıstık Yeşili",
        },
        {
            src: "/kapaklar/metal/LMD 502 NESVA.png",
            alt: "LMD 502 - Nesva",
        },
    ];
    return (
        <main className="">
            <section className="card min-h-screen  flex flex-col bg-[#FAF6F5] shadow-xl  homepage-bg justify-center p-0">
                <div className="flex flex-1 w-full h-full flex-col  items-center sm:backdrop-blur-sm sm:backdrop-brightness-125 rounded-3xl text-black ">
                    <Image
                        src="/images/logo-transparent.png"
                        alt="elbar logo"
                        width={500}
                        height={500}
                        priority
                        className="object-contain h-1/2 w-auto "
                    />

                    <Link
                        href="/urunlerimiz"
                        className="group flex flex-row flex-nowrap gap-1 text-nowrap items-center text-center
                             bg-black text-white px-5 py-3 mt-5 rounded-md
                              hover:bg-zinc-800 active:scale-95 transition-all duration-300  "
                    >
                        Ürünlerimizi Keşfedin
                        <RxArrowRight
                            aria-hidden
                            className="shrink-0 h-6 w-5 inline-block "
                        />
                    </Link>
                </div>
            </section>

            <div className="w-full mt-10">
                <h2 className="text-2xl font-bold text-white">
                    Elbar Mobilya olarak;
                </h2>
                <div className="flex flex-row flex-wrap gap-4 mt-5 justify-evenly text-lg">
                    <section className="card p-4 flex-1 min-h-[300px] max-w-[300px] bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF]">
                        <h3 className="text-xl font-bold mb-4">Misyonumuz</h3>

                        <p className="font-medium">
                            <HiCheckCircle
                                aria-hidden="true"
                                className="text-blue-600 size-5 sm:size-6 flex-shrink-0 inline-block mr-2"
                            />
                            Müşterilerimizin beklentilerini en iyi şekilde
                            karşılamak ve onlara en kaliteli hizmeti sunmak.
                        </p>
                    </section>
                    <section className="card p-4 flex-1 min-h-[300px] max-w-[300px] bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF]">
                        <h3 className="text-xl font-bold mb-4">Vizyonumuz</h3>
                        <p className="font-medium">
                            <HiCheckCircle
                                aria-hidden="true"
                                className="text-blue-600 size-5 sm:size-6 flex-shrink-0 inline-block mr-2"
                            />
                            Mobilya sektöründe lider bir marka olmak ve
                            müşterilerimize en iyi hizmeti sunmak.
                        </p>
                    </section>
                    <section className="card p-4 flex-1 min-h-[300px] max-w-[300px] bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF]">
                        <h3 className="text-xl font-bold mb-4">Değerlerimiz</h3>
                        <p className="font-medium">
                            <HiCheckCircle
                                aria-hidden="true"
                                className="text-blue-600 size-5 sm:size-6 flex-shrink-0 inline-block mr-2"
                            />
                            Müşteri memnuniyeti, kaliteli hizmet, dürüstlük ve
                            güven.
                        </p>
                    </section>
                </div>
            </div>

            <section className="card px-4 sm:px-10 py-14 mt-10 flex bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF] flex-col items-center shadow-xl drop-shadow-md  bg-white/95 text-black">
                <div>
                    <ul className="flex flex-col text-xl font-medium gap-4 py-5 px-8 ">
                        <li className="flex items-center justify-start gap-1 ml-3">
                            <HiCheckCircle
                                aria-hidden="true"
                                className="text-blue-600 size-5 sm:size-6 flex-shrink-0"
                            />
                            Ayda 25.000 m2 membran kapak, 200 adet kapı.
                        </li>
                        <li className="flex items-center justify-start gap-1 ml-3">
                            <HiCheckCircle
                                aria-hidden="true"
                                className="text-blue-600 size-5 sm:size-6 flex-shrink-0"
                            />
                            Yılda 300.000 m2 membran kapak, 2400 adet kapı.
                        </li>
                    </ul>

                    <p className="font-bold text-xl">
                        Ve {year - 1998} yıllık tecrübemiz ile sizlere güvenilir
                        hizmet sunuyoruz.
                    </p>

                    <div className="flex flex-row justify-center mt-5">
                        <Link
                            href="/kurumsal"
                            className="group flex flex-row w-min flex-nowrap gap-1 text-nowrap items-center text-center
                             bg-black text-white px-5 py-3 mt-5 rounded-md
                              hover:bg-zinc-800 active:scale-95 transition-all duration-300  "
                        >
                            Hakkımızda
                            <RxArrowRight
                                aria-hidden
                                className="shrink-0 h-6 w-5 inline-block "
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="card mt-10 sm:px-10 py-14 flex bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF] flex-col items-center shadow-xl drop-shadow-md  bg-white/95 text-black">
                <h2 className="text-2xl font-bold">Kapılarımız</h2>

                <CarouselGallery images={kapilarArray} />

                <div className="flex flex-row justify-center mt-5">
                    <Link
                        href="/urunlerimiz/kapilar"
                        className="group flex flex-row w-min flex-nowrap gap-1 text-nowrap items-center text-center
                             bg-black text-white px-5 py-3 mt-5 rounded-md
                              hover:bg-zinc-800 active:scale-95 transition-all duration-300  "
                    >
                        Daha Fazlası İçin
                        <RxArrowRight
                            aria-hidden
                            className="shrink-0 h-6 w-5 inline-block "
                        />
                    </Link>
                </div>
            </section>

            <section className="card mt-10 sm:px-10 py-14 flex bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF] flex-col items-center shadow-xl drop-shadow-md  bg-white/95 text-black">
                <h2 className="text-2xl font-bold">Kapaklarımız</h2>

                <CarouselGallery images={kapaklarArray} />

                <div className="flex flex-row justify-center mt-5">
                    <Link
                        href="/urunlerimiz/kapaklar"
                        className="group flex flex-row w-min flex-nowrap gap-1 text-nowrap items-center text-center
                             bg-black text-white px-5 py-3 mt-5 rounded-md
                              hover:bg-zinc-800 active:scale-95 transition-all duration-300  "
                    >
                        Daha Fazlası İçin
                        <RxArrowRight
                            aria-hidden
                            className="shrink-0 h-6 w-5 inline-block "
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
