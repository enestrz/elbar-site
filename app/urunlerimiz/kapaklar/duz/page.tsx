import ImageCardGallery from "@/components/ImageCardGallery";
import { duzKapaklar, kapakUzanti } from "@/lib/kapaklar/kapakResimleri";

export default function DuzKapaklar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Düz Kapaklar
            </h2>
            <ImageCardGallery
                images={duzKapaklar}
                folderExtension={kapakUzanti + "düz/"}
            />
        </section>
    );
}
