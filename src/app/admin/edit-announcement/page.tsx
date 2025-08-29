'use client';

import { useEffect, useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';

interface Announcement {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
}

export default function EditAnnouncementPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcements`);
            const data = await res.json();
            console.log("Announcements response:", data);
            console.log("Fetching announcements from:", `${process.env.NEXT_PUBLIC_API_URL}/announcements`);
            if (Array.isArray(data)) {
                setAnnouncements(data);
            } else if (data && Array.isArray(data.announcements)) {
                setAnnouncements(data.announcements);
            } else {
                setAnnouncements([]);
            }
        } catch (error) {
            console.error("Error fetching announcements", error);
        }
    };
    fetchData();
}, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        if (editingId) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcements/${editingId}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({ title, content }),
            });
        } else {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcements`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ title, content }),
            });
        }
        resetForm();
        refreshAnnouncements();
    }

    async function refreshAnnouncements() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcements`);
        const data = await res.json();
        console.log("Announcements response:", data);
        // console.log("Fetching announcements from:", `${process.env.NEXT_PUBLIC_API_URL}/announcements`);
        if (Array.isArray(data)) {
            setAnnouncements(data);
        } else if (data && Array.isArray(data.announcements)) {
            setAnnouncements(data.announcements);
        } else {
            setAnnouncements([]);
        }
    }

    async function handleDelete(id: string) {
        const token = localStorage.getItem('token');
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcements/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        refreshAnnouncements();
    }

    function handleEdit(a: Announcement) {
        setTitle(a.title);
        setContent(a.content);
        setEditingId(a.id);
        setImagePreview(a.imageUrl || null);
        setImage(null);
    }

    function resetForm() {
        setTitle('');
        setContent('');
        setImage(null);
        setImagePreview(null);
        setEditingId(null);
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files ? e.target.files[0] : null;
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreview(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    }

    return (
        <main className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-extrabold mb-8 text-blue-700 text-center">Manage Announcements</h1>

            {/* Form */}
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-5 text-gray-800">{editingId ? 'Edit Announcement' : 'Tambah Announcement'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4 px-4 py-3">
                    <input
                        type="text"
                        placeholder="Judul"
                        className="w-full border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Isi announcement"
                        className="w-full border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full border p-2 rounded-lg text-sm text-gray-600"
                    />
                    {imagePreview && (
                        <div>
                            <span className="block text-sm text-gray-600 mb-1">Preview Gambar:</span>
                            <img src={imagePreview} alt="Preview" className="h-40 w-full object-cover rounded-md shadow mb-2" />
                        </div>
                    )}
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
                        >
                            {editingId ? 'Update' : 'Buat'}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
                                onClick={resetForm}
                            >
                                Batal
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* List */}
            <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Daftar Announcements</h2>
            <div className="flex flex-col gap-6 max-w-6xl mx-auto p-6">
                {announcements.map((a) => (
                    <div
                        key={a.id}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                        {a.imageUrl && (
                            <img src={a.imageUrl} alt={a.title} className="h-56 w-full object-cover" />
                        )}
                        <div className="p-5 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 p-5">{a.title}</h3>
                                <p className="text-gray-600 text-sm p-5">{a.content}</p>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all shadow-md"
                                    onClick={() => handleEdit(a)}
                                    aria-label={`Edit ${a.title}`}
                                >
                                    <Edit size={18} />
                                    Edit
                                </button>
                                <button
                                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all shadow-md"
                                    onClick={() => handleDelete(a.id)}
                                    aria-label={`Delete ${a.title}`}
                                >
                                    <Trash2 size={18} />
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}