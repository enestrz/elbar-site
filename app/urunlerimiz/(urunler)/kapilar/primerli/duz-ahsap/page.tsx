import ImageCardGallery from "@/components/ImageCardGallery";
import { duzAhsapKapilar, primerliUzanti } from "@/lib/kapilar/primerliData";

export default function DuzAhsapKapilar() {
    return (
        <section className="card w-full sm:ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Düz Ahşap Kapılar
            </h2>
            <ImageCardGallery
                images={duzAhsapKapilar}
                folderExtension={primerliUzanti + "duz-ahsap/"}
            />
        </section>
    );
}
