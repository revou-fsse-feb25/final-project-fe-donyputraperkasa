'use client';

import Link from 'next/link';

export default function AdminPage() {
    return (
        <main className="min-h-screen p-8 bg-gradient-to-br from-indigo-100 via-sky-100 to-blue-100 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Dashboard Admin</h1>
            <p className="mb-6 text-gray-600">Selamat datang, Admin! Gunakan halaman ini untuk mengelola konten bimbel.</p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link
                href="/admin/edit-course"
                className="block px-6 py-4 bg-white text-blue-800 font-semibold rounded shadow-md hover:bg-blue-50 transition"
                >
                Edit Kursus
                </Link>
                <Link
                href="/admin/edit-lecture"
                className="block px-6 py-4 bg-white text-blue-800 font-semibold rounded shadow-md hover:bg-blue-50 transition"
                >
                Tambah Tentor
                </Link>
                <Link
                href="/admin/edit-student"
                className="block px-6 py-4 bg-white text-blue-800 font-semibold rounded shadow-md hover:bg-blue-50 transition"
                >
                Daftar Siswa
                </Link>
            </div>
        </main>
    );
}