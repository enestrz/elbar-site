import ImageCardGallery from "@/components/ImageCardGallery";
import { boyanabilirPp, primerliUzanti } from "@/lib/kapilar/primerliData";

export default function BoyanabilirPPKapilar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Boyanabilir PP Kapılar
            </h2>
            <ImageCardGallery
                images={boyanabilirPp}
                folderExtension={primerliUzanti + "boyanabilir pp/"}
            />
        </section>
    );
}
