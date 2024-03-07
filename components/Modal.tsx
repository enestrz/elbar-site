"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import ImageCard from "./ImageCard";
import Image from "next/image";

interface ModalProps {
    src: string;
    alt: string;
}

export default function Modal({ src, alt }: ModalProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="appearance-none m-0 p-0 ">
                    <ImageCard
                        src={src}
                        alt={alt}
                    />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-3/4 w-3/4  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Image
                        src={src}
                        alt={alt}
                        priority
                        fill
                        className="  object-cover w-full h-auto "
                    />

                    <Dialog.Close asChild>
                        <button
                            className="text-black hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <RxCross2 className="size-4" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
