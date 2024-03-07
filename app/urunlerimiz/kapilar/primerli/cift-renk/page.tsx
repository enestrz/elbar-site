import ImageCardGallery from "@/components/ImageCardGallery";
import { ciftRenkKapilar, primerliUzanti } from "@/lib/kapilar/primerliData";

export default function CiftRenkKapilar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Çift Renk Kapılar
            </h2>
            <ImageCardGallery
                images={ciftRenkKapilar}
                folderExtension={primerliUzanti + "cift-renk/"}
            />
        </section>
    );
}
