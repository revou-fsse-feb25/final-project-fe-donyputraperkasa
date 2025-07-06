import { useState } from 'react';
import LoginPage from '../login/page'; // Adjust the path if needed
export default function Layer() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <section className="w-full max-w-4xl text-center bg-white/10 rounded-lg p-6 mt-10">
                <h2 className="text-2xl font-semibold text-white mb-4">Tentang Kami</h2>
                <p className="text-white">
                Bimbel mulaidarinol adalah platform pembelajaran Matematika online yang interaktif dan menyenangkan, dengan pendekatan yang sesuai kurikulum serta pengajar berpengalaman.
                </p>
            </section>

            <div className="flex space-x-4 m-8 justify-center">
                <button
                onClick={() => setShowModal(true)}
                className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition mb-12"
                >
                Login
                </button>
                <a
                href="/login"
                className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition mb-12"
                >
                Daftar
                </a>
            </div>

            <section className="w-full max-w-4xl text-center bg-white/10 rounded-lg p-6 mt-12">
                <h2 className="text-2xl font-semibold text-white mb-4">Program Kami</h2>
                <ul className="text-white space-y-2">
                <li>📘 Matematika SD</li>
                <li>📗 Matematika SMP</li>
                <li>📕 Matematika SMA</li>
                <li>📙 Persiapan UTBK & Olimpiade</li>
                </ul>
            </section>

            <section className="w-full max-w-4xl text-center bg-white/10 rounded-lg p-6 mt-16">
                <h2 className="text-2xl font-semibold text-white mb-4">Testimoni Siswa</h2>
                <div className="space-y-6">
                <blockquote className="text-white italic">"Saya jadi lebih paham matematika dan nilainya meningkat!"<br />– Rani, SMP</blockquote>
                <blockquote className="text-white italic">"Pengajarnya sabar dan menjelaskan dengan jelas. Recommended banget!"<br />– Ardi, SMA</blockquote>
                </div>
            </section>

            <section className="w-full max-w-4xl text-center bg-white/10 rounded-lg p-6 mt-16">
                <h2 className="text-2xl font-semibold text-white mb-4">Pengajar Kami</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                <div className="bg-white/10 p-4 rounded-lg">👨‍🏫 Pak Budi – 10 tahun pengalaman mengajar Matematika SMA</div>
                <div className="bg-white/10 p-4 rounded-lg">👩‍🏫 Bu Sari – Ahli Matematika SD & Olimpiade</div>
                </div>
            </section>

            <section className="w-full max-w-4xl text-center bg-white/10 rounded-lg p-6 mt-16">
                <h2 className="text-2xl font-semibold text-white mb-4">Fitur Unggulan</h2>
                <ul className="text-white space-y-2">
                <li>✅ Materi sesuai kurikulum terbaru</li>
                <li>✅ Try Out & latihan soal rutin</li>
                <li>✅ Belajar online interaktif dengan jadwal fleksibel</li>
                </ul>
            </section>

            <section className="w-full max-w-4xl text-center mt-16">
                <h2 className="text-2xl font-semibold text-white mb-4">Siap Belajar Lebih Mudah?</h2>
                <a
                href="/LoginPage"
                className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition"
                >
                Gabung Sekarang
                </a>
            </section>

            {showModal && (
                <div
                className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
                onClick={() => setShowModal(false)}
                >
                <div
                    className="rounded-xl overflow-hidden shadow-2xl max-w-md w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <LoginPage />
                </div>
                </div>
            )}
        </div>
    );
}