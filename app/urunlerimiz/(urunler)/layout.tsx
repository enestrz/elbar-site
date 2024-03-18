import UrunSidebar from "@/components/UrunSidebar";

export default function UrunLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-col  sm:flex-row">
            <UrunSidebar />
            {children}
        </main>
    );
}
