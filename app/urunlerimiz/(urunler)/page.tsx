import Link from "next/link";
import ImagePreviewLink from "@/components/ImagePreviewLink";

export default function UrunlerimizPage() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold">Ürünler</h2>
            <div className="flex flex-row flex-wrap items-center justify-evenly gap-y-5 w-full  mt-10">
                <ImagePreviewLink
                    src="/kapilar/primerli/duz-ahsap/LMD 229 BONSAİ.jpg"
                    alt="Kapı resmi"
                    header="Kapılar"
                    href="/urunlerimiz/kapilar"
                />
                <ImagePreviewLink
                    src="/kapaklar/ahşap/LMD 268 NATURAL KOYU ALPİ.jpg"
                    alt="Kapak resmi"
                    header="Kapaklar"
                    href="/urunlerimiz/kapaklar"
                />
            </div>
        </section>
    );
}
