'use client';

import { useState } from 'react';
import { register } from '@/app/lib/api';
import { useRouter } from 'next/navigation';

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
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await register({
                name: form.name,
                email: form.email,
                password: form.password,
                whatsapp: form.whatsapp,
                schoolLevel: form.schoolLevel,
            });
            if (res && res.access_token) {
                localStorage.setItem('token', res.access_token);
                router.push('/student');
            } else {
                alert('Registrasi gagal. Silakan cek data Anda.');
            }
        } catch (error) {
            alert('Registrasi gagal. Silakan cek data Anda.');
        } finally {
            setLoading(false);
        }
        if (onClose) onClose();
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-lg w-full max-w-md space-y-4 text-white"
        >
        <h1 className="text-2xl font-bold mb-2">Daftar Akun</h1>
        <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            required
            className="w-full p-2 rounded text-black border border-gray-500"
        />
        <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-2 rounded text-black border border-gray-500"
        />
        <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Kata Sandi"
            required
            className="w-full p-2 rounded text-black border border-gray-500"
        />
        <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="Nomor WhatsApp"
            required
            className="w-full p-2 rounded text-black border border-gray-500"
        />
        <select
            name="schoolLevel"
            value={form.schoolLevel}
            onChange={handleChange}
            required
            className="w-full p-2 rounded text-black border border-gray-500"
        >
            <option value="">Pilih Jenjang Sekolah</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
        </select>
        <button type="submit" disabled={loading} className="w-full py-2 bg-emerald-500 rounded hover:bg-emerald-600 transition">
            {loading ? "Memproses..." : "Daftar"}
        </button>
        </form>
    );
}