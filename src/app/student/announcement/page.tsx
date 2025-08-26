"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Announcement {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    }

    export default function StudentAnnouncementPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    useEffect(() => {
        axios
        .get(`${API_URL}/announcements`)
        .then((res) => setAnnouncements(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-gray-500 text-lg">Loading announcements...</p>
        </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
            Student Announcements
        </h1>

        {announcements.length === 0 ? (
            <p className="text-center text-gray-500">No announcements available</p>
        ) : (
            <div className="space-y-4">
            {announcements.map((a) => (
                <div
                key={a.id}
                className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition"
                >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {a.title}
                </h3>
                <p className="text-gray-700 mb-3">{a.content}</p>
                <span className="text-sm text-gray-500">
                    {new Date(a.createdAt).toLocaleString()}
                </span>
                </div>
            ))}
            </div>
        )}
        </div>
    );
}