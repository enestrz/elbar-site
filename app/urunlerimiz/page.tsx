import Link from "next/link";
import Image from "next/image";

export default function UrunlerimizPage() {
    return (
        <main>
            <section className="card flex-1">
                <div className="flex flex-col sm:flex-row sm:gap-10 sm:justify-center  items-stretch gap-y-5">
                    <Link
                        href="/urunlerimiz/kapilar"
                        className="rounded-xl font-semibold text-lg relative shadow-md group overflow-hidden"
                    >
                        <Image
                            src="/images/membran-kapi.jpg"
                            alt="Membran Kapı"
                            width={300}
                            height={300}
                            className="rounded-xl w-full h-[200px] sm:h-full sm:w-auto object-cover group-hover:scale-110 group-hover:brightness-50 transition-all duration-300 ease-in-out"
                        />
                        <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-nowrap text-justify -translate-y-1/2 text-white">
                            Membran Kapı
                        </h4>
                    </Link>
                    <Link
                        href="/urunlerimiz/kapaklar"
                        className="rounded-xl font-semibold text-lg relative shadow-md group overflow-hidden"
                    >
                        <Image
                            src="/images/membran-kapak.jpg"
                            alt="Membran Kapak"
                            width={300}
                            height={300}
                            className="rounded-xl w-full h-[200px] sm:h-full sm:w-auto object-cover group-hover:scale-110 group-hover:brightness-50 transition-all duration-300 ease-in-out"
                        />
                        <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-nowrap text-justify -translate-y-1/2 group-hover:text-white transition-all duration-300 ease-in-out">
                            Membran Kapak
                        </h4>
                    </Link>
                </div>
            </section>
        </main>
    );
}
