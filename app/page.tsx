import Image from "next/image";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi2";
import { RxArrowRight } from "react-icons/rx";

export default function Home() {
    const year = new Date().getFullYear();

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

                {/* <div className="flex-1 h-full">
                    <Image
                        src={"/images/kapi-cover11.jpeg"}
                        alt="kapak logo"
                        width={1000}
                        height={1000}
                        priority
                        className="object-cover h-full object-top  "
                    />
                </div> */}
            </section>

            <section className="card px-4 sm:px-10 py-14 flex bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF] flex-col items-center shadow-xl drop-shadow-md  bg-white/95 text-black">
                <div>
                    <h2 className="text-2xl font-bold">
                        Elbar Mobilya olarak;
                    </h2>
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

            <section className="card p-4"></section>
        </main>
    );
}
