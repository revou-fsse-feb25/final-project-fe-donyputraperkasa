'use client';

import { useState } from 'react';

type LoginFormProps = {
    onClose?: () => void;
};

export default function LoginForm({ onClose }: LoginFormProps) {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', form);
        if (onClose) onClose();
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-lg shadow-md w-full max-w-md space-y-4 text-white"
        >
        <h1 className="text-2xl font-bold mb-2">Masuk Akun</h1>
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
            className="w-full p-2 rounded border-gray-300 text-black"
        />
        <button type="submit" className="w-full py-2 bg-emerald-500 rounded hover:bg-emerald-600 transition">
            Masuk
        </button>
        </form>
    );
}