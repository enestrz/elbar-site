import ImagePreviewLink from "@/components/ImagePreviewLink";

export default function KapaklarPage() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold">Kapaklar</h2>
            <div className="flex flex-row flex-wrap justify-center  medium:justify-start overflow-hidden gap-5 sm:mx-5 mt-10">
                <ImagePreviewLink
                    src="/kapaklar/ahşap/LMD 209 RUSTİK.jpg"
                    alt="Ahşap Kapaklar resmi"
                    header="Ahşap Kapaklar"
                    href="/urunlerimiz/kapaklar/ahsap"
                />
                <ImagePreviewLink
                    src="/kapaklar/düz/LMD 105 PORTAKAL.jpg"
                    alt="Düz Kapaklar resmi"
                    header="Düz Kapaklar"
                    href="/urunlerimiz/kapaklar/duz"
                />
                <ImagePreviewLink
                    src="/kapaklar/duz-parlak/LMD 407 PARLAK BORDO.png"
                    alt="Düz Parlak Kapaklar resmi"
                    header="Düz Parlak Kapaklar"
                    href="/urunlerimiz/kapaklar/duz-parlak"
                />
                <ImagePreviewLink
                    src="/kapaklar/high-gloss-3d/LMD 605 SİYAH SARMAŞIK.png"
                    alt="High Gloss 3d resmi"
                    header="High Gloss 3D Kapaklar"
                    href="/urunlerimiz/kapaklar/high-gloss-3d"
                />
                <ImagePreviewLink
                    src="/kapaklar/metal/LMD 523 BAKIR ZIMPARA.png"
                    alt="Metal Kapaklar resmi"
                    header="Metal Kapaklar"
                    href="/urunlerimiz/kapaklar/metal"
                />
                <ImagePreviewLink
                    src="/kapaklar/ozel/LMD 460 LİLA EVREN.png"
                    alt="Özel Kapaklar resmi"
                    header="Özel Kapaklar"
                    href="/urunlerimiz/kapaklar/ozel"
                />
                <ImagePreviewLink
                    src="/kapaklar/parlak-ahsap/LMD 408 PARLAK MAKASSAR.png"
                    alt="Parlak Ahşap Kapaklar resmi"
                    header="Parlak Ahşap Kapaklar"
                    href="/urunlerimiz/kapaklar/parlak-ahsap"
                />
                <ImagePreviewLink
                    src="/kapaklar/soft-touch/LMB 712B KESTANE.png"
                    alt="Soft Touch Kapaklar resmi"
                    header="Soft Touch Kapaklar"
                    href="/urunlerimiz/kapaklar/soft-touch"
                />
            </div>
        </section>
    );
}
