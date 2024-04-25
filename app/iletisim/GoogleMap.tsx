import { Suspense } from "react";

export default function GoogleMap() {
    const getGoogleMap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96866.80225947272!2d29.266666700000005!3d40.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caface00dd7477%3A0x9efaee5ebde928d8!2sElbar%20Mobilya!5e0!3m2!1str!2str!4v1714006399515!5m2!1str!2str";

    return (
        <Suspense fallback={<p>Yükleniyor...</p>}>
            <iframe
                src={getGoogleMap}
                width="600"
                height="450"
                style={{
                    width: "100%",
                    borderRadius: "1rem",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-sm p-[1px]"
            ></iframe>
        </Suspense>
    );
}
