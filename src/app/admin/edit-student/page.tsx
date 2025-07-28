'use client';

export default function EditStudentPage() {
    const students = [
        {
        name: 'Rina Nurhayati',
        email: 'rina@example.com',
        level: 'SMP',
        whatsapp: '081234567890',
        },
        {
        name: 'Doni Saputra',
        email: 'doni@example.com',
        level: 'SMA',
        whatsapp: '082233445566',
        },
        {
        name: 'Ani Lestari',
        email: 'ani@example.com',
        level: 'SD',
        whatsapp: '085566778899',
        },
    ];

    return (
        <main className="min-h-screen p-8 text-gray-800 bg-gradient-to-br from-indigo-100 via-sky-100 to-blue-100">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h1 className="text-2xl font-bold mb-4">Daftar Siswa</h1>
            <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-gray-600 border-b border-gray-300">
                <tr>
                    <th className="py-2 px-4">Nama</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Jenjang</th>
                    <th className="py-2 px-4">WhatsApp</th>
                </tr>
                </thead>
                <tbody>
                {students.map((siswa, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                    <td className="py-2 px-4">{siswa.name}</td>
                    <td className="py-2 px-4">{siswa.email}</td>
                    <td className="py-2 px-4">{siswa.level}</td>
                    <td className="py-2 px-4">{siswa.whatsapp}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </main>
    );
}