'use client';

import Footer from "@/app/components/Footer";

const myCourses = [
    {
        id: 1,
        title: 'Literasi Dasar',
        progress: 80,
    },
    {
        id: 2,
        title: 'Numerasi Tingkat Lanjut',
        progress: 60,
    },
    {
        id: 3,
        title: 'Sains Eksperimen',
        progress: 45,
    },
];

export default function MyCoursesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-8 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 text-gray-800">
                <h1 className="text-3xl font-bold mb-6">Kelas Saya</h1>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {myCourses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200"
                        >
                            <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
                                📘 {course.title}
                            </h2>
                            <p className="mb-2 text-sm text-gray-600">Progress: {course.progress}%</p>
                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-400 to-green-500"
                                    style={{ width: `${course.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}