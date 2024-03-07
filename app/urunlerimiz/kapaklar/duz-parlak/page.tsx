import ImageCardGallery from "@/components/ImageCardGallery";
import { duzParlakKapaklar, kapakUzanti } from "@/lib/kapaklar/kapakResimleri";

export default function DuzParlakKapaklar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Düz Parlak Kapaklar
            </h2>
            <ImageCardGallery
                images={duzParlakKapaklar}
                folderExtension={kapakUzanti + "duz-parlak/"}
            />
        </section>
    );
}
