import ImageCardGallery from "@/components/ImageCardGallery";
import { metalKapaklar, kapakUzanti } from "@/lib/kapaklar/kapakResimleri";

export default function MetalKapaklar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Metal Kapaklar
            </h2>
            <ImageCardGallery
                images={metalKapaklar}
                folderExtension={kapakUzanti + "metal/"}
            />
        </section>
    );
}
