import ImageCardGallery from "@/components/ImageCardGallery";
import { ozelKapaklar, kapakUzanti } from "@/lib/kapaklar/kapakResimleri";

export default function OzelKapaklar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Özel Kapaklar
            </h2>
            <ImageCardGallery
                images={ozelKapaklar}
                folderExtension={kapakUzanti + "ozel/"}
            />
        </section>
    );
}
