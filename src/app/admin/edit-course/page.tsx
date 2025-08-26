'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditCoursePage() {
    const [form, setForm] = useState({
        title: '',
        schedule: '',
        tentor: '',
        price: '',
    });
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [courses, setCourses] = useState<(typeof form & { id: number })[]>([]);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/';

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        axios.get(`${API_URL}/lessons`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => setCourses(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleDelete = async (id: number) => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.delete(`${API_URL}/lessons/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCourses(prev => prev.filter(course => course.id !== id));
        } catch (error) {
            console.error(error);
            alert('Gagal menghapus kursus');
        }
    };

    const handleEdit = (course: typeof form & { id: number }) => {
        setForm({
            title: course.title,
            schedule: course.schedule,
            tentor: course.tentor,
            price: course.price
        });
        setEditingId(course.id);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('access_token');
        try {
            if (editingId) {
                const res = await axios.put(`${API_URL}/lessons/${editingId}`, form, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setCourses(prev => prev.map(course => course.id === editingId ? res.data : course));
                setEditingId(null);
            } else {
                const res = await axios.post(`${API_URL}/lessons`, form, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setCourses(prev => [...prev, res.data]);
            }
            setForm({ title: '', schedule: '', tentor: '', price: '' });
        } catch (error) {
            console.error(error);
            alert('Gagal menyimpan kursus');
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><p>Loading...</p></div>;
    }

    return (
        <main className="min-h-screen p-8 text-gray-800 bg-gradient-to-br from-indigo-100 via-sky-100 to-blue-100">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h1 className="text-2xl font-bold mb-4">Edit Kelas</h1>
                <form onSubmit={handleSubmit} className="w-full mb-4">
                    {/* batas */}
                    <table className="w-full mb-4">
                        <tbody>
                            <tr>
                                <td className="pr-3 py-2 font-medium">Nama Kursus</td>
                                <td>
                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Nama Kursus"
                                        className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="pr-3 py-2 font-medium">Jadwal</td>
                                <td>
                                    <input
                                        type="text"
                                        name="schedule"
                                        value={form.schedule}
                                        onChange={handleChange}
                                        placeholder="Jadwal"
                                        className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="pr-3 py-2 font-medium">Tentor</td>
                                <td>
                                    <input
                                        type="text"
                                        name="tentor"
                                        value={form.tentor}
                                        onChange={handleChange}
                                        placeholder="Nama Tentor"
                                        className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="pr-3 py-2 font-medium">Harga</td>
                                <td>
                                    <input
                                        type="number"
                                        name="price"
                                        value={form.price}
                                        onChange={handleChange}
                                        placeholder="Harga"
                                        className="w-full p-2 rounded text-black border border-gray-500 mb-3"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-semibold shadow"
                    >
                        Simpan Perubahan
                    </button>
                </form>
            </div>
            {/* List of courses outside the form container */}
            <div className="max-w-xl mx-auto mt-8">
                {courses.length > 0 && (
                    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">Daftar Kelas yang Ditambahkan:</h2>
                        <ul className="space-y-4">
                            {courses.map((course) => (
                                <li key={course.id} className="p-4 bg-green-100 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p><strong>Judul:</strong> {course.title}</p>
                                        <p><strong>Jadwal:</strong> {course.schedule}</p>
                                        <p><strong>Tentor:</strong> {course.tentor}</p>
                                        <p><strong>Harga:</strong> {course.price}</p>
                                    </div>
                                    <div className="mt-2 sm:mt-0 flex gap-2">
                                        <button
                                            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition font-semibold"
                                            onClick={() => handleEdit(course)}
                                            type="button"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
                                            onClick={() => handleDelete(course.id)}
                                            type="button"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </main>
    );
}