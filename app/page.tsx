import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

export default function Home() {
    return (
        <main className="">
            <section className="card flex-1 flex flex-col bg-[#FAF6F5] homepage-bg justify-center p-0">
                <div className="flex flex-1 w-full h-full flex-col  items-center sm:backdrop-blur-sm sm:backdrop-brightness-125 rounded-3xl text-black ">
                    <Image
                        src="/images/logo-transparent.png"
                        alt="elbar logo"
                        width={500}
                        height={500}
                        className="object-contain h-1/2 w-auto "
                    />

                    <Link
                        href="/urunlerimiz"
                        className="group flex flex-row flex-nowrap gap-1 text-nowrap items-center text-center
                             bg-black text-white px-4 py-2 mt-5 rounded-md
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
        </main>
    );
}
