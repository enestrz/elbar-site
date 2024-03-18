import ImageCardGallery from "@/components/ImageCardGallery";
import { ahsapKapaklar, kapakUzanti } from "@/lib/kapaklar/kapakResimleri";

export default function AhsapKapaklar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Ahşap Kapaklar
            </h2>
            <ImageCardGallery
                images={ahsapKapaklar}
                folderExtension={kapakUzanti + "ahşap/"}
            />
        </section>
    );
}
