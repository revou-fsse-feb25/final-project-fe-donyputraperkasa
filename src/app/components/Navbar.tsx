'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md text-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <GraduationCap size={24} />
                    <span className="hidden sm:inline">MATH ON</span>
                </Link>

                {/* Hamburger */}
                <button
                    className="text-purple-700 md:hidden"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                    <Link href="/admin" className="hover:underline">Admin</Link>
                    <Link href="/login" className="px-4 py-2 rounded bg-white text-purple-700 font-semibold hover:bg-gray-100">Masuk</Link>
                    <Link href="/register" className="px-4 py-2 rounded border border-purple-500 text-purple-600 hover:bg-blue-50">Daftar</Link>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col items-center space-y-2">
                    <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                    <Link href="/admin" className="hover:underline">Admin</Link>
                    <Link href="/login" className="px-4 py-2 rounded bg-white text-purple-700 font-semibold hover:bg-gray-100 w-fit">Masuk</Link>
                    <Link href="/register" className="px-4 py-2 rounded border border-purple-500 text-purple-600 hover:bg-blue-50 w-fit">Daftar</Link>
                </div>
            )}
        </nav>
    );
}
