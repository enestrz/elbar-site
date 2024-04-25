"use client";

import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const toast = useRef(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!form.name || !form.email || !form.subject || !form.message) {
            (toast.current as any)?.show({
                severity: "error",
                summary: "Hata",
                detail: "Lütfen tüm alanları doldurunuz.",
                life: 3000,
            });

            return "";
        }
        (toast.current as any)?.show({
            severity: "success",
            summary: "Mesajınız başarıyla gönderildi.",
            detail: "En kısa sürede size geri dönüş yapılacaktır.",
            life: 3000,
        });

        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        return "";
    }

    return (
        <section
            id="iletisim-formu"
            className="card p-4 md:p-10 mt-12 mb-12"
        >
            <Toast ref={toast} />
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
                onSubmit={(e) => handleSubmit(e)}
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
                        value={form.name}
                        onChange={(e) => {
                            setForm((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }));
                        }}
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
                        value={form.email}
                        onChange={(e) => {
                            setForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }));
                        }}
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
                        value={form.subject}
                        onChange={(e) => {
                            setForm((prev) => ({
                                ...prev,
                                subject: e.target.value,
                            }));
                        }}
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
                        value={form.message}
                        onChange={(e) => {
                            setForm((prev) => ({
                                ...prev,
                                message: e.target.value,
                            }));
                        }}
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
