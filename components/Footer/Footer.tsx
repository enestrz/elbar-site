import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="sm:mx-auto w-full sm:max-w-screen-xl
                        mt-10 flex flex-col flex-1 px-2 sm:px-4 drop-shadow-lg
                            xl:px-0 gap-y-8 border border-white/30 text-white 
                            rounded-lg bg-gradient-to-t from-[#171717] to-[#011222]
                            "
        >
            <div className="flex flex-col sm:flex-row flex-1 items-center sm:items-start sm:justify-around gap-9 sm:gap-5 mt-3 p-4">
                <Link
                    href="/"
                    className="flex flex-col items-center mt-3"
                >
                    <Image
                        src={"/images/logo.png"}
                        alt="Elbar Logo"
                        width={100}
                        height={100}
                    />
                    <h4 className="text-2xl text-bold p-4">Elbar Mobilya</h4>
                </Link>

                <div className="flex-shrink max-w-[250px]">
                    <h5 className="text-lg text-center font-semibold underline">
                        İletişim
                    </h5>
                    <ul>
                        <li className="mt-2">
                            <strong>Telefon:</strong> (0226) 825 40 35
                        </li>
                        <li className="text-wrap mt-2">
                            <strong>Adres:</strong> Kirazlı Sanayi Sitesi
                            Marangozlar Bölümü 1 Yol D:34, Yalova Merkez, Yalova
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h5 className="text-lg font-semibold underline">
                        Bağlantılar
                    </h5>
                    <ul className="font-medium flex flex-col gap-2">
                        <li>
                            <Link
                                href="/"
                                className="hover:underline"
                            >
                                Anasayfa
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/kurumsal"
                                className="hover:underline"
                            >
                                Kurumsal
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/urunlerimiz"
                                className="hover:underline"
                            >
                                Ürünlerimiz
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/medya"
                                className="hover:underline"
                            >
                                Medya
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/iletisim"
                                className="hover:underline"
                            >
                                İletişim
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
