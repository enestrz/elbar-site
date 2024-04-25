import { ProgressSpinner } from "primereact/progressspinner";

export default function Loading() {
    return (
        <main className="w-full flex flex-col justify-center items-center">
            <ProgressSpinner />
            <p>Yükleniyor...</p>
        </main>
    );
}
