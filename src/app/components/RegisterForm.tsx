'use client';

import { useState } from 'react';

type RegisterFormProps = {
    onClose?: () => void;
};

export default function RegisterForm({ onClose }: RegisterFormProps) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        whatsapp: '',
        schoolLevel: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register:', form);
        if (onClose) onClose();
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-lg shadow-md w-full max-w-md space-y-4 text-white"
        >
        <h1 className="text-2xl font-bold mb-2">Daftar Akun</h1>
        <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            required
            className="w-full p-2 rounded text-black"
        />
        <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-2 rounded text-black"
        />
        <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Kata Sandi"
            required
            className="w-full p-2 rounded text-black"
        />
        <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="Nomor WhatsApp"
            required
            className="w-full p-2 rounded text-black"
        />
        <select
            name="schoolLevel"
            value={form.schoolLevel}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black"
        >
            <option value="">Pilih Jenjang Sekolah</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
        </select>
        <button type="submit" className="w-full py-2 bg-emerald-500 rounded hover:bg-emerald-600 transition">
            Daftar
        </button>
        </form>
    );
}