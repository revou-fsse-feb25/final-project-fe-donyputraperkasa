'use client';

import Link from 'next/link';
import Footer from '../components/Footer';

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-8 bg-white/50 text-gray-800">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <p className="mb-6">Selamat datang kembali! Akses materi dan kelola akunmu dari sini.</p>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Link
                    href="/dashboard/my-courses"
                    className="block p-6 bg-blue-100 hover:bg-blue-200 rounded-lg shadow transition"
                    >
                    <h2 className="text-xl font-semibold mb-2">Kursus Saya</h2>
                    <p>Lihat dan lanjutkan pembelajaran kursus yang kamu ikuti.</p>
                    </Link>

                    <Link
                    href="/dashboard/profile"
                    className="block p-6 bg-emerald-100 hover:bg-emerald-200 rounded-lg shadow transition"
                    >
                    <h2 className="text-xl font-semibold mb-2">Profil</h2>
                    <p>Perbarui informasi akun dan preferensimu di sini.</p>
                    </Link>

                    <Link
                        href="/dashboard/courses"
                        className="block p-6 bg-indigo-100 hover:bg-indigo-200 rounded-lg shadow transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">Lihat Kursus</h2>
                        <p>Jelajahi semua materi literasi, numerasi, dan sains yang tersedia.</p>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
