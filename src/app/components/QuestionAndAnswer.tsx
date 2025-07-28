'use client';

import { useState } from 'react';

const faqData = [
    {
        question: "Apa itu Math On?",
        answer: "Math On adalah platform belajar interaktif yang fokus pada literasi, numerasi, dan sains untuk siswa SD, SMP, dan SMA."
    },
    {
        question: "Apa saja jenjang pendidikan yang didukung?",
        answer: "Math On menyediakan materi dan bimbingan belajar untuk jenjang SD, SMP, hingga SMA."
    },
    {
        question: "Apa keunggulan belajar literasi di Math On?",
        answer: "Program literasi di Math On membantu siswa meningkatkan kemampuan membaca, memahami, dan berpikir kritis terhadap teks."
    },
    {
        question: "Bagaimana Math On membantu dalam numerasi?",
        answer: "Math On menyediakan materi numerasi yang dirancang untuk menguatkan pemahaman matematika dasar hingga lanjutan secara menyenangkan."
    },
    {
        question: "Apakah tersedia eksperimen sains untuk siswa?",
        answer: "Ya, Math On menyediakan konten sains yang menarik dan interaktif termasuk eksperimen sederhana yang bisa dilakukan di rumah."
    }
];

    export default function Question() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 text-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">❓ Pertanyaan yang Sering Diajukan</h2>
        <ul className="space-y-4">
            {faqData.map((item, index) => (
            <li key={index} className="bg-white rounded-lg p-4 shadow-md">
                <button
                className="w-full text-left text-blue-700 font-semibold focus:outline-none hover:underline"
                onClick={() => toggle(index)}
                >
                {item.question}
                </button>
                {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
                )}
            </li>
            ))}
        </ul>
        </div>
    );
}