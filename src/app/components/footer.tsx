export default function Footer() {
    return (
        <footer className="w-full py-4 text-center text-sm bg-white border-t border-gray-200 text-gray-600 shadow-inner">
        <div className="container mx-auto">
            Developed by <strong className="text-purple-700">Dony Putra Perkasa</strong> &copy; {new Date().getFullYear()}
        </div>
        </footer>
    );
}
