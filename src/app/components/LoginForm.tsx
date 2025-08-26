'use client';

import { useState } from 'react';
import { login } from '@/app/lib/api';
import { useRouter } from 'next/navigation';

type LoginFormProps = {
    onClose?: () => void;
};

export default function LoginForm({ onClose }: LoginFormProps) {
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await login(form.email, form.password);
            if (res.access_token) {
                localStorage.setItem('token', res.access_token);
                router.push('/student');
            } else {
                alert('Login gagal. Silakan cek email dan password Anda.');
            }
        } catch (error) {
            alert('Login gagal. Silakan cek email dan password Anda.');
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
        <h1 className="text-2xl font-bold mb-2">Masuk Akun</h1>
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
        <button type="submit" className="w-full py-2 bg-emerald-500 rounded hover:bg-emerald-600 transition" disabled={loading}>
            {loading ? "Memproses..." : "Masuk"}
        </button>
        </form>
    );
}