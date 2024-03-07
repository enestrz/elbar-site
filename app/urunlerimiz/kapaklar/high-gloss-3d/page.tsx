import ImageCardGallery from "@/components/ImageCardGallery";
import { highGlossKapaklar, kapakUzanti } from "@/lib/kapaklar/kapakResimleri";

export default function HighGloss3d() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                High Gloss 3D Kapaklar
            </h2>
            <ImageCardGallery
                images={highGlossKapaklar}
                folderExtension={kapakUzanti + "high-gloss-3d/"}
            />
        </section>
    );
}
