"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Modal from "../components/modal";

export default function LoginPage() {
    // const { data: session, status } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const router = useRouter();

    // bagian tombol login
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        if ( !email || !password ) {
            setError("Email atau Password tidak boleh kosong");
            return;
        }
        if ( !email.includes("@") ) {
            setError("Email tidak valid, harus ada tanda @");
            return;
        }
        setLoading(true);
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);
        if ( res?.error ) {
            setError(res.error);
            return;
        }

        localStorage.setItem("userName", "User"); // Simpan nama
        if (email === "john@mail.com") {
            router.push("/coba-dashboard/admin");
        } else {
            router.push("/coba-dashboard/user");
        }
    }

    // bagian tombol reset
    const handleReset = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setEmail("");
        setPassword("");
        setLoading(false);
    }

    return (
        <div className="flex flex-col items-center justify-center py-24 bg-gradient-to-br from-blue-800 via-emerald-700 to-green-600 px-4 text-white">
            <div className="backdrop-blur-md rounded-lg p-10 w-full max-w-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Selamat Datang</h1>
            <form className="flex flex-col space-y-4">
                <input
                className="p-3 border border-white rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition hover:bg-white/30"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className="p-3 border border-white rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition hover:bg-white/30"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex justify-between text-sm text-yellow-200">
                <button type="button" onClick={() => setShowCreateAccount(true)} className="hover:underline italic">Buat Akun</button>
                <button type="button" onClick={() => setShowForgotPassword(true)} className="hover:underline italic">Lupa Password</button>
                </div>

                {error && (
                <div className="text-red-300 text-sm text-center">
                    {error}
                </div>
                )}

                <div className="flex w-full gap-4">
                    <button
                    className="w-full flex-1 p-3 rounded-lg bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 transition"
                    disabled={loading}
                    type="submit"
                    onClick={handleSubmit}
                    >
                    {loading ? "Loading..." : "Login"}
                    </button>
                    <button
                    className="w-full flex-1 p-3 rounded-lg bg-red-700 text-white font-semibold border border-white hover:bg-white/30 transition"
                    type="button"
                    onClick={handleReset}
                    >
                    Reset
                    </button>
                </div>
            </form>

            <Modal isOpen={showForgotPassword} onClose={() => setShowForgotPassword(false)}>
                <h2 className="text-xl font-bold mb-2 text-gray-800">Lupa Password</h2>
                <p className="text-gray-600">Silakan hubungi admin untuk reset password.</p>
            </Modal>

            <Modal isOpen={showCreateAccount} onClose={() => setShowCreateAccount(false)}>
                <h2 className="text-xl font-bold mb-2 text-gray-800">Buat Akun Baru</h2>
                <p className="text-gray-600">Fitur ini akan segera tersedia.</p>
            </Modal>
            </div>
        </div>
    );
}