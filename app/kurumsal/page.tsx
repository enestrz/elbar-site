import { HiCheckCircle } from "react-icons/hi2";
import { BiSolidBinoculars } from "react-icons/bi";
import { PiTargetBold, PiBinocularsFill } from "react-icons/pi";
import Image from "next/image";

const Kurumsal = () => {
    return (
        <main className="main-container">
            <h2 className="text-3xl sm:text-4xl font-bold text-center bg-white/70 text-[#271810] py-4 backdrop-blur-lg shadow-md rounded-lg">
                NEDEN ELBAR?
            </h2>

            <section className="card flex flex-col gap-y-4  p-4">
                <h2 className=" text-2xl sm:text-3xl font-bold">Kısaca Biz</h2>
                <div
                    aria-hidden="true"
                    className="border rounded-full border-black shrink-0"
                />
                <article className="flex flex-col lg:flex-row lg:gap-x-3 gap-y-2  md:gap-y-3 lg:justify-between text-wrap">
                    <p className="text-base sm:text-lg drop-shadow-2xl lg:order-3 lg:flex-1 text-wrap">
                        <span className="font-semibold">1998</span> yılında
                        kiralık makineler ile mobilya sektörü başlayan Elbar
                        Mobilya zamanının şartlarına göre ürettiği kaliteli ürün
                        ve titiz çalışma prensibinden elde ettiği başarı ile CNC
                        işleme ve membran kapak basım Üretimine girmiştir.{" "}
                        <span className="font-semibold">2011</span> yılında ilk
                        CNC ve membran Makinelerini alan Elbar Mobilya 2017
                        yılında makinelerini Tekrar yenileyerek üretimini
                        büyütmeye devam etti. 2020 Yılında membran kapı
                        üretimine başladı. Bu dönemden itibaren Elbar Mobilya
                        üretim hayatına aktif bir şekilde devam etmektedir.
                    </p>

                    <div
                        aria-hidden="true"
                        className="hidden lg:block border lg:order-2 border-black rounded-full shrink-0"
                    />

                    <ul className="lg:order-1 text-base md:text-lg leading-relaxed lg:flex-1 space-y-2 lg:space-y-3">
                        <li className="flex items-center justify-start gap-1">
                            <HiCheckCircle
                                aria-hidden="true"
                                className="text-blue-600 size-5 sm:size-6 flex-shrink-0"
                            />
                            <p className="">
                                Ayda{" "}
                                <strong className="font-semibold">
                                    25.000 m2
                                </strong>{" "}
                                membran kapak,{" "}
                                <strong className="font-semibold">200</strong>{" "}
                                adet kapı.
                            </p>
                        </li>
                        <li className="flex flex-row items-center gap-1">
                            <HiCheckCircle
                                aria-hidden="true"
                                className="text-blue-600 size-5 sm:size-6 flex-shrink-0"
                            />
                            <p>
                                Yılda{" "}
                                <strong className="font-semibold">
                                    300.000 m2
                                </strong>{" "}
                                membran kapak,{" "}
                                <strong className="font-semibold">2400</strong>{" "}
                                adet kapı.
                            </p>
                        </li>
                    </ul>
                </article>

                <strong className="font-semibold text-center text-xl mt-4">
                    HEDEFİMİZ HERKESİN HAYALİNİ GERÇEKLEŞTİRMEK.
                </strong>
            </section>

            <section className="card p-4 flex flex-row gap-x-5 justify-between">
                <Image
                    src="/images/kapak4.jpeg"
                    alt="Misyonumuz Resim"
                    width={1024}
                    height={1024}
                    className="hidden md:block flex-1 h-auto max-h-[400px] w-1/2 rounded-lg object-scale-down object-left"
                />

                <div
                    aria-hidden="true"
                    className="hidden lg:block border  border-black rounded-full shrink-0"
                />

                <article className="flex-1 overflow-hidden flex flex-col gap-y-2">
                    <h2 className="text-2xl font-bold flex flex-row flex-nowrap items-center gap-1">
                        Misyonumuz{" "}
                        <PiTargetBold
                            aria-hidden="true"
                            className="size-7 text-rose-700"
                        />
                    </h2>
                    <div
                        aria-hidden="true"
                        className="border rounded-full border-black shrink-0"
                    />
                    <p className="text-lg">
                        Şirketimiz, müşterilerimize en kaliteli ürünleri ve
                        hizmetleri sunarak onların hayatlarını güzelleştirmeyi
                        taahhüt etmektedir. Sürdürülebilirlik, dürüstlük,
                        şeffaflık , güven ve müşteri memnuniyeti, işimizin temel
                        değerlerini oluşturmaktadır. Bu değerler ışığında
                        inovasyon ve kaliteye verdiğimiz önemle,
                        müşterilerimizin beklentilerini aşmak, sosyal
                        sorumluluklarımızın bilincinde, topluma ve çevreye
                        saygılı bir şekilde hareket etmek için her geçen gün
                        daha fazla çalışmaktayız.
                    </p>
                </article>
            </section>

            <section className="card p-4 flex flex-row gap-x-5 justify-between">
                <article className="flex-1 overflow-hidden flex flex-col gap-y-2">
                    <h2 className="text-2xl font-bold flex flex-row flex-nowrap items-center gap-1">
                        Vizyonumuz
                        <PiBinocularsFill
                            aria-hidden="true"
                            className="size-7 text-indigo-600"
                        />
                    </h2>
                    <div
                        aria-hidden="true"
                        className="border rounded-full border-black shrink-0"
                    />
                    <p className="text-lg">
                        En yenilikçi ürünleri ve çözümleri sunarak dünya çapında
                        tanınan lider bir kapı ve kapak markası olarak kalite
                        standartlarını belirlemeyi hedefliyoruz.
                        Sürdürülebilirlik ilkesini benimseyerek, toplumlara ve
                        çevreye değer katan bir şirket olarak bilinmek
                        istiyoruz. Çalışanlarımızın gelişimine önem vererek
                        adil, çeşitli ve destekleyici bir iş ortamı sağlamayı
                        amaçlıyoruz.
                    </p>
                </article>

                <div
                    aria-hidden="true"
                    className="hidden lg:block border  border-black rounded-full shrink-0"
                />

                <Image
                    src="/images/kapak5.jpeg"
                    alt="Vizyonumuz Resim"
                    width={1024}
                    height={1024}
                    className="hidden md:block flex-1 h-auto max-h-[400px] w-1/2 rounded-lg object-scale-down object-right clear-right"
                />
            </section>
        </main>
    );
};

export default Kurumsal;

// 0px 0px 15px 0px rgba(0,0,0,.03),0px 2px 30px 0px rgba(0,0,0,.08),0px 0px 1px 0px rgba(0,0,0,.3)
