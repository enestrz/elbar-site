import ImageCard from "./ImageCard";
import Modal from "./Modal";

interface ImageCardGalleryProps {
    images: string[];
    folderExtension: string;
}

export default function ImageCardGallery({
    images,
    folderExtension,
}: ImageCardGalleryProps) {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center place-content-evenly  overflow-hidden gap-5 ">
            {images.map((image, index) => (
                <Modal
                    key={index}
                    src={folderExtension + image}
                    alt={image}
                />
            ))}
        </div>
    );
}

("flex flex-row flex-wrap justify-center  [1245px]:justify-between");
