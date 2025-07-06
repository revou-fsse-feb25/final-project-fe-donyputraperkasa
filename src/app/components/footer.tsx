export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 mt-12 w-full border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-4">
            <div className="text-sm space-y-1">
            <p>&copy; {new Date().getFullYear()} <span className="font-semibold">Bimbel Matematika</span>. All rights reserved.</p>
            <p className="text-white/70">Developer: Dony Putra Perkasa</p>
            </div>
        </div>
        </footer>
    );
}