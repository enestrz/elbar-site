export default function Page() {
    return (
        <main className="main-container">
            <form className="card p-4">
                <h1>İletişim</h1>
                <label htmlFor="name">Adınız</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
                <label htmlFor="message">Mesajınız</label>
                <textarea
                    id="message"
                    name="message"
                    required
                ></textarea>
                <button type="submit">Gönder</button>
            </form>
        </main>
    );
}
