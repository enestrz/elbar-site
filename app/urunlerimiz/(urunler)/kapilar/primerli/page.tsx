import ImagePreviewLink from "@/components/ImagePreviewLink";

export default function PrimerliKapilar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold">Kapılar</h2>
            <div className="flex flex-row flex-wrap justify-center  medium:justify-between overflow-hidden gap-5 mt-10">
                <ImagePreviewLink
                    src="/kapilar/primerli/duz-ahsap/LMD 278 BEYAZ HUŞ.jpg"
                    alt="Düz Ahşap Kapılar resmi"
                    header="Düz Ahşap Kapılar"
                    href="/urunlerimiz/kapilar/primerli/duz-ahsap"
                />
                <ImagePreviewLink
                    src="/kapilar/primerli/cift-renk/LMD 206-206-206 İTALYAN CEVİZ.png"
                    alt="Çift Renk Kapılar resmi"
                    header="Çift Renk Kapılar"
                    href="/urunlerimiz/kapilar/primerli/cift-renk"
                />
                <ImagePreviewLink
                    src="/kapilar/primerli/soft-touch/LMD 708 DOĞAL ANTİK.jpg"
                    alt="Soft Touch Kapılar resmi"
                    header="Soft Touch Kapılar"
                    href="/urunlerimiz/kapilar/primerli/soft-touch"
                />
                <ImagePreviewLink
                    src="/kapilar/primerli/boyanabilir pp/BOYANABİLİR PP.jpg"
                    alt="Boyanabilir PP Kapılar resmi"
                    header="Boyanabilir PP Kapılar"
                    href="/urunlerimiz/kapilar/primerli/boyanabilir-pp"
                />
            </div>
        </section>
    );
}
