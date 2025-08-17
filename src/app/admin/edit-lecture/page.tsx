'use client';

import { useState } from 'react';

export default function AddLecturePage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        schedule: '',
        time: '',
    });

    const [lectures, setLectures] = useState<Array<{name: string; email: string; subject: string; schedule: string; time: string;}>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLectures([...lectures, form]);
        setForm({
            name: '',
            email: '',
            subject: '',
            schedule: '',
            time: '',
        });
    };

    // New: Edit handler
    const handleEdit = (index: number) => {
        const selectedLecture = lectures[index];
        setForm({
            name: selectedLecture.name,
            email: selectedLecture.email,
            subject: selectedLecture.subject,
            schedule: selectedLecture.schedule,
            time: selectedLecture.time,
        });
        setLectures(lectures.filter((_, i) => i !== index));
    };

    // New: Delete handler
    const handleDelete = (index: number) => {
        setLectures(lectures.filter((_, i) => i !== index));
    };

    return (
        <main className="min-h-screen p-8 text-gray-800 bg-gradient-to-br from-indigo-100 via-sky-100 to-blue-100">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h1 className="text-2xl font-bold mb-4">Tambah Lecture</h1>
            <form onSubmit={handleSubmit}>
                <table className="w-full mb-4">
                    <tbody>
                        <tr>
                            <td className="pr-3 py-2 font-medium">Nama</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Nama Lecture"
                                    className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="pr-3 py-2 font-medium">Email</td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="pr-3 py-2 font-medium">Mata Pelajaran</td>
                            <td>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Mata Pelajaran"
                                    className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="pr-3 py-2 font-medium">Hari Mengajar</td>
                            <td>
                                <input
                                    type="text"
                                    name="schedule"
                                    value={form.schedule}
                                    onChange={handleChange}
                                    placeholder="Jadwal Mengajar"
                                    className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="pr-3 py-2 font-medium">Jam Mengajar</td>
                            <td>
                                <input
                                    type="time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-semibold shadow"
                                >
                                    Tambah Lecture
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        {lectures.length > 0 && (
            <div className="max-w-xl mx-auto mt-6">
                <h2 className="text-xl font-semibold mb-3">Daftar Lectures</h2>
                <ul className="space-y-4">
                    {lectures.map((lecture, index) => (
                        <li key={index} className="border p-4 rounded shadow-sm bg-gray-50 max-w-xl">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p><strong>Nama:</strong> {lecture.name}</p>
                                    <p><strong>Email:</strong> {lecture.email}</p>
                                    <p><strong>Mata Pelajaran:</strong> {lecture.subject}</p>
                                    <p><strong>Jadwal Mengajar:</strong> {lecture.schedule}</p>
                                    <p><strong>Jam:</strong> {lecture.time}</p>
                                </div>
                                <div className="mt-2 flex gap-2">
                                    <button
                                        type="button"
                                        className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 text-sm"
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </main>
    );
}