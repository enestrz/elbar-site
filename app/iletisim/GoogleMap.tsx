import { Suspense } from "react";

export default function GoogleMap() {
    const getGoogleMap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1630459057965!2d29.501105576560917!3d40.780429533422705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb219fb27ddacf%3A0x5e5dbea1b92cca7f!2sBili%C5%9Fim%20Vadisi!5e0!3m2!1str!2str!4v1708874114580!5m2!1str!2str";

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
