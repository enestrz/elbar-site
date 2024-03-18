import ImageCardGallery from "@/components/ImageCardGallery";

import {
    primersizResimler,
    primersizResimlerUzanti,
} from "@/lib/kapilar/primersizData";

export default function PrimersizKapilar() {
    return (
        <section className="card w-full ml-8 rounded">
            <h2 className="text-center text-3xl font-semibold mb-10">
                Primersiz Kapılar
            </h2>
            <ImageCardGallery
                images={primersizResimler}
                folderExtension={primersizResimlerUzanti}
            />
        </section>
    );
}
