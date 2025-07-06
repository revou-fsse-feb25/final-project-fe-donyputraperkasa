'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/footer';
import CartUser from '@/app/coba-cart/user/cartUser';
import ContentCartUser from '@/app/coba-cart/user/contentCartUser';

export default function DashboardUser() {
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 via-emerald-700 to-green-600 p-8 text-white font-sans">
            <h1 className="text-4xl font-bold mb-10 text-center drop-shadow">Dashboard Admin</h1>
            <div className="flex flex-col items-center justify-center space-y-4 mb-10">
                {/* Profil User */}
                <div className="bg-white/10 p-4 rounded-xl text-center w-full max-w-md shadow">
                    <h3 className="text-xl font-semibold mb-1">👤 Nama Pengguna</h3>
                    <p className="text-sm text-white/80">user@example.com</p>
                </div>
                <div className="flex justify-center w-full">
                    <button
                    onClick={() => router.push('/')}
                    className="bg-red-500 hover:bg-red-900 text-white font-semibold px-6 py-2 rounded-md shadow mt-2 transition"
                >
                    Logout
                </button>
                </div>
            </div>

            <CartUser selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            <ContentCartUser selectedMenu={selectedMenu} />
            <Footer/>
        </div>
    );
}