"use client";

import { primersizResimler } from "@/lib/kapilar/primersizData";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        console.log(primersizResimler);
    }, []);

    return (
        <>
            <Image
                src={primersizResimler[0]}
                alt="primersiz"
                width={100}
                height={100}
            />
            <div> This is hello world</div>
        </>
    );
}
