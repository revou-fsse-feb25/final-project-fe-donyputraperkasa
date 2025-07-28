'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'
import Footer from '../components/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const handleLogout = () => {
        window.location.href = '/';
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 text-gray-800 flex flex-col md:flex-row">
            <div className="md:hidden flex justify-end p-4">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <aside className={`w-full md:w-64 bg-white border-r shadow-md p-6 space-y-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <h2 className="text-xl font-bold mb-6">Selamat Datang</h2>
                <nav className="flex flex-col gap-5 text-lg">
                    <Link href="/dashboard" className="text-purple-500 hover:text-purple-700 p-2">Dashboard</Link>
                    <Link href="/dashboard/courses" className="text-purple-500 hover:text-purple-700 p-2">Daftar Kelas</Link>
                    <Link href="/dashboard/my-courses" className="text-purple-500 hover:text-purple-700 p-2">Kelas Saya</Link>
                    <Link href="/dashboard/profile" className="text-purple-500 hover:text-purple-700 p-2">Profil</Link>
                    <button onClick={handleLogout} className="text-left text-red-600 hover:underline">Keluar</button>
                </nav>
            </aside>

            <main className="flex-1 p-6">{children}</main>
            
        </div>
    );
}