'use client';

import { useState } from 'react';

export default function AddLecturePage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        schedule: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Data tentor:', form);
        // TODO: Kirim ke backend
    };

    return (
        <main className="min-h-screen p-8 text-gray-800 bg-gradient-to-br from-indigo-100 via-sky-100 to-blue-100">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h1 className="text-2xl font-bold mb-4">Tambah Tentor</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Tentor"
                className="w-full p-2 rounded text-black"
                required
            />
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 rounded text-black"
                required
            />
            <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Mata Pelajaran"
                className="w-full p-2 rounded text-black"
                required
            />
            <input
                type="text"
                name="schedule"
                value={form.schedule}
                onChange={handleChange}
                placeholder="Jadwal Mengajar"
                className="w-full p-2 rounded text-black"
                required
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-semibold shadow"
            >
                Tambah Tentor
            </button>
            </form>
        </div>
        </main>
    );
}