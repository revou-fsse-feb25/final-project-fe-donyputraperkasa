"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/app/components/Footer";
import Payment from "@/app/components/Payment";
import Modal from "@/app/components/Modal";

interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
}

export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCourseTitle, setSelectedCourseTitle] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

    useEffect(() => {
        axios
            .get(`${API_URL}/courses`)
            .then((res) => setCourses(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const openModal = (courseTitle: string) => {
        setSelectedCourseTitle(courseTitle);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCourseTitle(null);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-lg">Loading courses...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-8 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 text-gray-800">
                <h1 className="text-3xl font-bold mb-6">Daftar Kelas</h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.length === 0 ? (
                        <p className="text-gray-500">Belum ada kursus tersedia</p>
                    ) : (
                        courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white text-gray-800 rounded-xl border border-gray-200 shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-all"
                            >
                                <div>
                                    <h2 className="text-xl font-bold mb-1">{course.title}</h2>
                                    <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                                    <ul className="text-sm text-gray-700 space-y-2 mb-4">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">✔</span> Akses materi interaktif
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">✔</span> Jadwal fleksibel
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">✔</span> Tutor profesional
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">✔</span> Sertifikat setelah selesai
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <p className="text-sm text-gray-500">Mulai dari</p>
                                    <p className="text-lg font-bold text-blue-700 mb-4">
                                        Rp {course.price.toLocaleString()} /bulan
                                    </p>
                                    <button
                                        onClick={() => openModal(course.title)}
                                        className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold text-sm shadow-sm transition"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <Modal isOpen={showModal} onClose={closeModal}>
                    <Payment
                        isOpen={showModal}
                        onClose={closeModal}
                        courseTitle={selectedCourseTitle}
                    />
                </Modal>
            </main>
            <Footer />
        </div>
    );
}