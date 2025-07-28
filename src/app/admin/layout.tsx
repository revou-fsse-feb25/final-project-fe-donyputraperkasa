'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Footer from '../components/Footer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        window.location.href = '/';
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-blue-100 text-gray-800">
            <div className="md:hidden flex justify-end p-4">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
                    ☰
                </button>
            </div>
            <div className="flex flex-1 flex-col md:flex-row">
                <aside className={`w-full md:w-64 bg-white border-r shadow-md p-6 space-y-4 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
                    <h2 className="text-xl font-bold mb-6">Dashboard Admin</h2>
                    <nav className="flex flex-col gap-2 text-lg">
                        <Link href="/admin" className='text-purple-500 hover:text-purple-700 p-2'>Dashboard</Link>
                        <Link href="/admin/edit-course" className='text-purple-500 hover:text-purple-700 p-2'>Edit Kursus</Link>
                        <Link href="/admin/edit-lecture" className='text-purple-500 hover:text-purple-700 p-2'>Tambah Tentor</Link>
                        <Link href="/admin/edit-student" className='text-purple-500 hover:text-purple-700 p-2'>Daftar Siswa</Link>
                        <button onClick={handleLogout} className="text-left text-red-600 hover:underline">Keluar</button>
                    </nav>
                </aside>
                <main className="flex-1 p-6">{children}</main>
            </div>
            <Footer />
        </div>
    );
}