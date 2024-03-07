import ImageCardGallery from "@/components/ImageCardGallery";
import { softTouchKapilar, primerliUzanti } from "@/lib/kapilar/primerliData";

export default function SoftTouchKapilar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Soft Touch Kapılar
            </h2>
            <ImageCardGallery
                images={softTouchKapilar}
                folderExtension={primerliUzanti + "soft-touch/"}
            />
        </section>
    );
}
