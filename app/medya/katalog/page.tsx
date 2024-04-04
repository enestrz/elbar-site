import Link from "next/link";
import { IoConstructOutline } from "react-icons/io5";

export default function Page() {
    return (
        <main>
            <section className="card w-full flex-1 flex flex-col items-center gap-40">
                <h2 className="text-4xl font-bold">Katalog</h2>

                <div className="flex flex-col items-center gap-3 ">
                    <IoConstructOutline className="size-24 text-black " />
                    <h4 className="text-2xl text-pretty sm:p-0 sm:px-5">
                        Bu bölüm şu an yapım aşamasındadır. Lütfen daha sonra
                        tekrar ziyaret ediniz.
                    </h4>
                    <p className="mb-12 text-lg">
                        Anasayfaya dönmek için buraya{" "}
                        <Link
                            href="/"
                            className="font-medium text-blue-800 hover:underline"
                        >
                            tıklayın
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
}
