'use client';

import { useSession, SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Beranda() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/dashboard");
        }
    }, [session]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 via-emerald-700 to-green-600 text-white px-4 py-10 space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Selamat Datang di Bimbel "Math On"</h1>
                <p className="text-lg">Belajar matematika jadi mudah, seru, dan menyenangkan!</p>
            </section>

            {/* Tentang Kami */}
            <section className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-2">Tentang Kami</h2>
                <p>Bimbel Dony adalah platform belajar matematika online dengan pendekatan interaktif, didukung oleh pengajar berpengalaman dan materi yang sesuai kurikulum nasional.</p>
            </section>

            {/* Profil Tentor */}
            <section className="max-w-4xl mx-auto text-center bg-white/10 p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold">👨‍🏫 Profil Tentor</h2>
            <p>Kami memiliki tentor-tentor terbaik lulusan universitas ternama dengan pengalaman mengajar lebih dari 5 tahun.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Dony Putra</h3>
                <p>Ahli Matematika SMA & UTBK</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Siska</h3>
                <p>Spesialis Matematika SD & SMP</p>
                </div>
            </div>
            </section>

            {/* Program Kami */}
            <section className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-4">🎓 Program Kami</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                <li className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">📘 Matematika SD</li>
                <li className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">📗 Matematika SMP</li>
                <li className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">📕 Matematika SMA</li>
                <li className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">📙 Persiapan UTBK & Olimpiade</li>
                </ul>
            </section>

            {/* Fitur Unggulan */}
            <section className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">🚀 Fitur Unggulan</h2>
                <ul className="space-y-2">
                <li>✅ Materi sesuai kurikulum terbaru</li>
                <li>✅ Try Out & latihan soal rutin</li>
                <li>✅ Belajar online interaktif dengan jadwal fleksibel</li>
                <li>✅ Grup diskusi dan mentor personal</li>
                </ul>
            </section>

            {/* Review Siswa */}
            <section className="max-w-4xl mx-auto text-center bg-white/10 p-6 rounded-lg space-y-4">
                <h2 className="text-2xl font-semibold">💬 Review Siswa</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg shadow italic">"Belajarnya asyik dan gampang dimengerti!"<br />– Lina, SD</div>
                    <div className="bg-white/10 p-4 rounded-lg shadow italic">"Tentornya sabar dan bikin semangat belajar."<br />– Budi, SMP</div>
                    <div className="bg-white/10 p-4 rounded-lg shadow italic">"Materinya lengkap dan mudah dipahami."<br />– Sari, SMA</div>
                    <div className="bg-white/10 p-4 rounded-lg shadow italic">"Cocok buat persiapan UTBK!"<br />– Dimas, SMA</div>
                </div>
            </section>
        </div>
    );
}