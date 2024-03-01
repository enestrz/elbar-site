import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdLocalPhone, MdPinDrop } from "react-icons/md";
import GoogleMap from "./GoogleMap";

export default function AddressSection() {
    return (
        <section
            id="adres"
            className="card p-4 md:p-10 mb-14"
        >
            <div className="leading-relaxed mb-8">
                <h3 className="text-3xl sm:text-4xl font-normal mb-2">
                    İletişim Adreslerimiz
                </h3>
                <p className="font-medium">
                    Aşağıda yer alan adreslerimizden bize ulaşabilirsiniz.
                </p>
            </div>

            <address className="text-lg flex flex-col gap-y-8">
                <div className="flex flex-row gap-x-4 items-center">
                    <span className="font-medium">
                        Sosyal medya adreslerimiz:{" "}
                    </span>
                    <Link href="#">
                        <Image
                            src="/images/whatsapp.svg"
                            width={32}
                            height={32}
                            alt="whatsapp logo"
                        />
                    </Link>
                    <Link href="#">
                        {" "}
                        <Image
                            src="/images/facebook.svg"
                            width={32}
                            height={32}
                            alt="facebook logo"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src="/images/instagram.svg"
                            width={32}
                            height={32}
                            alt="instagram logo"
                        />
                    </Link>
                </div>

                <ul className="flex flex-col gap-y-8 not-italic *:flex *:flex-row *:items-center *:gap-1">
                    <li>
                        <MdEmail
                            aria-hidden="true"
                            className="size-5 flex-shrink-0 text-background inline"
                        />
                        <p>
                            <strong className="text-background">Email: </strong>{" "}
                            info@example.com
                        </p>
                    </li>

                    <li>
                        <MdLocalPhone
                            aria-hidden="true"
                            className="size-5 flex-shrink-0 text-background inline"
                        />
                        <p>
                            <strong className="text-background">
                                Telefon:{" "}
                            </strong>{" "}
                            +90 123 456 78 90
                        </p>
                    </li>

                    <li>
                        <MdPinDrop
                            aria-hidden="true"
                            className="size-5 flex-shrink-0 text-background inline"
                        />
                        <p>
                            <strong className="text-background">
                                Açık Adres:{" "}
                            </strong>{" "}
                            1234 Sokak No: 56, 12345 Şehir, Ülke
                        </p>
                    </li>
                    <GoogleMap />
                </ul>
            </address>
        </section>
    );
}
