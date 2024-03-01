export default function ContactSection() {
    async function handleSubmit(formData: FormData) {
        "use server";

        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");
        console.log(name, email, subject, message);

        return "";
    }

    return (
        <section
            id="iletisim-formu"
            className="card p-4 md:p-10 mt-12 mb-12"
        >
            <div className="leading-relaxed mb-8">
                <h3 className="text-3xl sm:text-4xl font-normal mb-2">
                    Bizimle İletişime Geçin
                </h3>
                <p className="font-medium">
                    Sizlere destek olmaktan mutluluk duyarız. Bizimle iletişime
                    geçmek için aşağıda yer alan formu doldurup bize
                    gönderebilirsiniz.
                </p>
            </div>

            <form
                action={handleSubmit}
                className=" flex flex-col gap-y-10"
            >
                <fieldset className="flex flex-col items-start gap-1">
                    <label
                        htmlFor="name"
                        className="font-semibold text-lg"
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
                        className="font-semibold text-lg"
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
                        className="font-semibold text-lg"
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
                        className="font-semibold text-lg"
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
                    className="rounded-lg bg-background font-semibold text-white p-2 mt-2 hover:bg-background/90 transition-all duration-300 ease-in-out active:scale-[0.98] shadow-md drop-shadow-lg"
                >
                    Gönder
                </button>
            </form>
        </section>
    );
}
