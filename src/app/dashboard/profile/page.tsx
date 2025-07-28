'use client';

import Footer from "@/app/components/Footer";

import React, { useState } from "react";

export default function ProfilePage() {
    // Data awal user
    const initialUser = {
        fullName: 'Dony Putra Perkasa',
        nickName: 'Dony',
        birthPlaceDate: 'Bantul, 1 Januari 2000',
        address: 'Jl. Bantul No. 1',
        school: 'SMPN 1 Bantul',
        whatsapp: '081234567890',
        email: 'dony@mail.com',
        schoolLevel: 'SMP',
    };

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(initialUser);
    const [user, setUser] = useState(initialUser);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setUser(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(user);
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Profil Saya</h1>
                <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 space-y-4 border border-gray-200">
                    {isEditing ? (
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="fullName">Nama Lengkap</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="nickName">Nama Panggilan</label>
                                <input
                                    id="nickName"
                                    name="nickName"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.nickName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="birthPlaceDate">Tempat, Tanggal Lahir</label>
                                <input
                                    id="birthPlaceDate"
                                    name="birthPlaceDate"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.birthPlaceDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="address">Alamat</label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="school">Sekolah</label>
                                <input
                                    id="school"
                                    name="school"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.school}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="whatsapp">Nomor WhatsApp</label>
                                <input
                                    id="whatsapp"
                                    name="whatsapp"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500 block mb-1" htmlFor="schoolLevel">Jenjang Sekolah</label>
                                <input
                                    id="schoolLevel"
                                    name="schoolLevel"
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                    value={formData.schoolLevel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex gap-2 pt-2">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                >
                                    Simpan
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                                >
                                    Batal
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div>
                                <p className="text-sm text-gray-500">Nama Lengkap</p>
                                <p className="text-lg font-semibold">{user.fullName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Nama Panggilan</p>
                                <p className="text-lg font-semibold">{user.nickName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Tempat, Tanggal Lahir</p>
                                <p className="text-lg font-semibold">{user.birthPlaceDate}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Alamat</p>
                                <p className="text-lg font-semibold">{user.address}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Sekolah</p>
                                <p className="text-lg font-semibold">{user.school}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Nomor WhatsApp</p>
                                <p className="text-lg font-semibold">{user.whatsapp}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-lg font-semibold">{user.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Jenjang Sekolah</p>
                                <p className="text-lg font-semibold">{user.schoolLevel}</p>
                            </div>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Profil
                            </button>
                        </>
                    )}
                </div>
            <Footer />
        </div>
    );
}
