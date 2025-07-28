import Image from 'next/image';

export default function Testimoni() {
    return (
        <section className="py-10 px-6 max-w-6xl text-gray-800 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Testimoni Siswa</h2>
        <div className="grid gap-6 md:grid-cols-2">
            {[
            {
                quote:
                'Alhamdulillah dengan bergabung bersama platform ini bisa membantu saya untuk masuk jurusan impian saya yaitu Fakultas Kedokteran Gigi UI',
                name: 'Sekar',
                school: 'UI - FKG',
                image: '/images/cat1.jpg',
            },
            {
                quote:
                'Belajar di sini benar-benar membantu saya dalam memahami soal UTBK. Latihan soalnya banyak sehingga saya bisa berlatih untuk berbagai jenis soal.',
                name: 'Nadif',
                school: 'IPB - Sekolah Bisnis',
                image: '/images/cat2.png',
            },
            {
                quote:
                'Saya senang sekali belajar di sini, karena saya jadi tahu kemampuan saya dan lebih siap masuk jurusan Teknik Komputer.',
                name: 'Ajriya',
                school: 'UI - Teknik Komputer',
                image: '/images/cat3.jpg',
            },
            {
                quote:
                'Guru-guru sangat menyenangkan. Dari komunikasi dan cara mengajar sangat mudah dipahami.',
                name: 'Ikhsan',
                school: 'UNPAD - Hubungan Internasional',
                image: '/images/cat4.png',
            },
            ].map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                <p className="text-lg mb-4 leading-relaxed relative before:content-['“'] before:text-3xl before:absolute before:-left-4 before:-top-2">
                {t.quote}
                </p>
                <div className="flex items-center gap-3 mt-6">
                <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-full object-cover border border-gray-300"
                />
                <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.school}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}