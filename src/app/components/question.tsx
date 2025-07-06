'use client';

import { useState } from 'react';

const faqData = [
    {
        question: "Apa itu Bimbel mulaidarinol?",
        answer: "Bimbel mulaidarinol adalah platform belajar matematika online yang interaktif dan menyenangkan, tersedia untuk semua jenjang pendidikan."
    },
    {
        question: "Apakah tersedia kelas untuk persiapan UTBK?",
        answer: "Ya, kami menyediakan program tersebut."
    },
    {
        question: "Bagaimana cara mendaftar?",
        answer: "Klik tombol 'Daftar' atau 'Gabung Sekarang' di halaman utama, lalu isi formulir pendaftaran."
    }
    ];

    export default function Question() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">❓ Pertanyaan yang Sering Diajukan</h2>
        <ul className="space-y-4">
            {faqData.map((item, index) => (
            <li key={index} className="bg-white rounded-lg p-4 shadow-md">
                <button
                className="w-full text-left text-gray-900 font-semibold focus:outline-none"
                onClick={() => toggle(index)}
                >
                {item.question}
                </button>
                {openIndex === index && (
                <p className="mt-2 text-sm text-gray-900">{item.answer}</p>
                )}
            </li>
            ))}
        </ul>
        </div>
    );
}