import ImagePreviewLink from "@/components/ImagePreviewLink";

export default function KapilarPage() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold">Kapılar</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5 w-full  mt-10">
                <ImagePreviewLink
                    src="/kapilar/primerli/soft-touch/LMD 719 OKALİPTUS.jpg"
                    alt="Primerli Kapı resmi"
                    header="Primerli Kapılar"
                    href="/urunlerimiz/kapilar/primerli"
                />
                <ImagePreviewLink
                    src="/kapilar/primersiz/LMD 241 COCO.jpg"
                    alt="Primersiz Kapak resmi"
                    header="Primersiz Kapılar"
                    href="/urunlerimiz/kapilar/primersiz"
                />
            </div>
        </section>
    );
}
