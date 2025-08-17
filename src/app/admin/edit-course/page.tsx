'use client';

import { useState } from 'react';

export default function EditCoursePage() {
    const [form, setForm] = useState({
        title: '',
        schedule: '',
        tentor: '',
        price: '',
    });
    // Manage a list of courses
    const [courses, setCourses] = useState<typeof form[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handler to delete a course from the list by index
    const handleDelete = (index: number) => {
        setCourses((prev) => prev.filter((_, idx) => idx !== index));
    };

    // Handler to edit a course: load it into form and remove from list
    const handleEdit = (index: number) => {
        setForm(courses[index]);
        setCourses((prev) => prev.filter((_, idx) => idx !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add the new course to the courses array
        setCourses((prev) => [...prev, form]);
        setForm({
            title: '',
            schedule: '',
            tentor: '',
            price: '',
        });
        // TODO: Kirim ke backend
    };

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
                            {courses.map((course, idx) => (
                                <li key={idx} className="p-4 bg-green-100 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p><strong>Judul:</strong> {course.title}</p>
                                        <p><strong>Jadwal:</strong> {course.schedule}</p>
                                        <p><strong>Tentor:</strong> {course.tentor}</p>
                                        <p><strong>Harga:</strong> {course.price}</p>
                                    </div>
                                    <div className="mt-2 sm:mt-0 flex gap-2">
                                        <button
                                            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition font-semibold"
                                            onClick={() => handleEdit(idx)}
                                            type="button"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
                                            onClick={() => handleDelete(idx)}
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