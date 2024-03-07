import ImageCardGallery from "@/components/ImageCardGallery";
import { softTouchKapaklar, kapakUzanti } from "@/lib/kapaklar/kapakResimleri";

export default function SoftTouchKapaklar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Soft Touch Kapaklar
            </h2>
            <ImageCardGallery
                images={softTouchKapaklar}
                folderExtension={kapakUzanti + "soft-touch/"}
            />
        </section>
    );
}
