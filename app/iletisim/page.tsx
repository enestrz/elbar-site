"use client";

export default function Iletisim() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };
        console.log(data);
    };

    return (
        <>
            <div className="text-[#fff] leading-loose p-4">
                <h2 className="text-2xl font-normal">
                    Bizimle İletişime Geçin
                </h2>
                <p className="text-base font-light">
                    Sizlere destek olmaktan mutluluk duyarız. Bizimle iletişime
                    geçmek için aşağıda yer alan formu doldurup bize
                    gönderebilirsiniz.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="card p-4 md:p-10 flex flex-col gap-y-10"
            >
                <fieldset className="flex flex-col items-start gap-1">
                    <label
                        htmlFor="name"
                        className="font-semibold"
                    >
                        Adınız
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Lütfen isim ve soyisim giriniz..."
                        className="form-input-white w-full"
                    />
                </fieldset>

                <fieldset className="flex flex-col items-start gap-1">
                    <label
                        htmlFor="email"
                        className="font-semibold"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email adresinizi girin... (örn: example@gmail.com)"
                        className="form-input-white w-full"
                    />
                </fieldset>

                <fieldset className="flex flex-col items-start gap-1">
                    <label
                        htmlFor="subject"
                        className="font-semibold"
                    >
                        Konu
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Konu başlığını girin..."
                        className="form-input-white w-full"
                    />
                </fieldset>

                <fieldset className="flex flex-col items-start gap-1">
                    <label
                        htmlFor="message"
                        className="font-semibold"
                    >
                        Mesajınız
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Bize iletmek istediğiniz mesajı buraya yazabilirsiniz..."
                        className="form-input-white h-32 resize-none indent-2  "
                    ></textarea>
                </fieldset>

                <button
                    type="submit"
                    className="rounded-lg bg-[#02294d] font-semibold text-white p-2 mt-2 hover:bg-blue-800 transition-all duration-300 ease-in-out active:scale-[0.98] shadow-md drop-shadow-lg"
                >
                    Gönder
                </button>
            </form>
        </>
    );
}
