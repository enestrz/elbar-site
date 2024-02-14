const articleCSS =
    "p-4 shadow-md rounded-lg bg-white/40 text-[#000] backdrop-blur-lg ";

const Kurumsal = () => {
    return (
        <main className="mt-4 flex flex-col sm:max-w-screen-xl sm:mx-auto gap-y-8 p-2 sm:p-5">
            <h2 className="text-4xl font-bold text-center text-white drop-shadow-2xl">
                {" "}
                Neden Elbar?
            </h2>

            <article className={articleCSS}>
                <h2 className="text-3xl  font-bold  drop-shadow-md">
                    Kısaca Biz
                </h2>

                <p className="text-lg drop-shadow-2xl">
                    <span className="font-semibold">1998</span> yılında kiralık
                    makineler ile mobilya sektörü başlayan Elbar Mobilya
                    zamanının şartlarına göre ürettiği kaliteli ürün ve titiz
                    çalışma prensibinden elde ettiği başarı ile CNC işleme ve
                    membran kapak basım Üretimine girmiştir.{" "}
                    <span className="font-semibold">2011</span> yılında ilk CNC
                    ve membran Makinelerini alan Elbar Mobilya 2017 yılında
                    makinelerini Tekrar yenileyerek üretimini büyütmeye devam
                    etti. 2020 Yılında membran kapı üretimine başladı.
                    <br />- Ayda{" "}
                    <span className="font-semibold">25.000 m2</span> Membran
                    kapak <span className="font-semibold">200</span> adet kapı.
                    <br />- Yılda{" "}
                    <span className="font-semibold">300.000 m2</span> mebrane
                    kapak <span className="font-semibold">2400</span> adet kapı.
                    <br />
                    <br />
                    <strong className="font-semibold">
                        HEDEFİMİZ HERKESİN HAYALİNİ GERÇEKLEŞTİRMEK.
                    </strong>
                </p>
            </article>

            <article className={articleCSS}>
                <h2 className="text-2xl font-bold ">Misyonumuz</h2>

                <p className="text-lg">
                    Şirketimiz, müşterilerimize en kaliteli ürünleri ve
                    hizmetleri sunarak onların hayatlarını güzelleştirmeyi
                    taahhüt etmektedir. Sürdürülebilirlik, dürüstlük, şeffaflık
                    , güven ve müşteri memnuniyeti, işimizin temel değerlerini
                    oluşturmaktadır. Bu değerler ışığında inovasyon ve kaliteye
                    verdiğimiz önemle, müşterilerimizin beklentilerini aşmak,
                    sosyal sorumluluklarımızın bilincinde, topluma ve çevreye
                    saygılı bir şekilde hareket etmek için her geçen gün daha
                    fazla çalışmaktayız.
                </p>
            </article>

            <article className={articleCSS}>
                <h2 className="text-2xl font-bold ">Vizyonumuz</h2>

                <p className="text-lg">
                    En yenilikçi ürünleri ve çözümleri sunarak dünya çapında
                    tanınan lider bir kapı ve kapak markası olarak kalite
                    standartlarını belirlemeyi hedefliyoruz. Sürdürülebilirlik
                    ilkesini benimseyerek, toplumlara ve çevreye değer katan bir
                    şirket olarak bilinmek istiyoruz. Çalışanlarımızın
                    gelişimine önem vererek adil, çeşitli ve destekleyici bir iş
                    ortamı sağlamayı amaçlıyoruz.
                </p>
            </article>
        </main>
    );
};

export default Kurumsal;

// 0px 0px 15px 0px rgba(0,0,0,.03),0px 2px 30px 0px rgba(0,0,0,.08),0px 0px 1px 0px rgba(0,0,0,.3)
