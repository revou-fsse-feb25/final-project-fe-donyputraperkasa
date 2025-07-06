export default function Subscribe() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white p-8 font-sans">
        <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold">📩 Langganan Kelas</h1>
            <p className="text-lg">Pilih paket belajar yang sesuai kebutuhanmu dan mulai belajar hari ini juga!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Paket 4x Pertemuan/Bulan */}
                <div className="bg-white/20 p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                    <h2 className="text-xl font-semibold mb-2">📅 4x Pertemuan/Bulan</h2>
                    <p className="text-sm mb-4">Pilih dua hari dan satu jam pertemuan</p>
                    <p className="text-sm mb-4 font-semibold text-yellow-300">Rp300.000</p>
                    <p className="text-sm italic text-white mb-2">⏱️ Durasi maksimal 90 menit / sesi</p>
                    <ul className="text-sm text-left list-disc list-inside space-y-1 mb-4">
                        <li>Akses materi online</li>
                        <li>Diskusi soal dengan tentor</li>
                        <li>1x pertemuan per minggu (total 4x)</li>
                    </ul>

                    <label className="block mb-1 text-sm font-semibold text-white">Hari:</label>
                    <select className="w-full mb-3 bg-white/10 border border-white/40 rounded px-2 py-1 text-white focus:outline-none">
                    {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map((hari) => (
                        <option key={hari} value={hari}>{hari}</option>
                    ))}
                    </select>

                    <label className="block mb-1 text-sm font-semibold text-white">Pilih Jam:</label>
                    <select className="w-full mb-4 bg-white/10 border border-white/40 rounded px-2 py-1 text-white focus:outline-none">
                    <option value="16:30">16.30 WIB</option>
                    <option value="18:30">18.30 WIB</option>
                    </select>

                    <button className="w-full bg-yellow-300 text-purple-900 font-semibold px-4 py-2 rounded hover:bg-yellow-200 transition shadow">Pilih</button>
                </div>
                
                {/* Paket 8x Pertemuan/Bulan */}
                <div className="bg-white/20 p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                    <h2 className="text-xl font-semibold mb-2">📚 8x Pertemuan/Bulan</h2>
                    <p className="text-sm mb-4">Pilih dua hari dalam seminggu dan jam pertemuan</p>
                    <p className="text-sm mb-4 font-semibold text-yellow-300">Rp600.000</p>
                    <p className="text-sm italic text-white mb-2">⏱️ Durasi maksimal 90 menit / sesi</p>
                    <ul className="text-sm text-left list-disc list-inside space-y-1 mb-4">
                        <li>Akses materi premium</li>
                        <li>Diskusi & tanya jawab langsung</li>
                        <li>2x pertemuan per minggu (total 8x)</li>
                    </ul>
                    
                    <label className="block mb-1 text-sm font-semibold text-white">Hari 1:</label>
                    <select className="w-full mb-3 bg-white/10 border border-white/40 rounded px-2 py-1 text-white focus:outline-none">
                    {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map((hari) => (
                        <option key={hari} value={hari}>{hari}</option>
                    ))}
                    </select>

                    <label className="block mb-1 text-sm font-semibold text-white">Hari 2:</label>
                    <select className="w-full mb-3 bg-white/10 border border-white/40 rounded px-2 py-1 text-white focus:outline-none">
                    {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map((hari) => (
                        <option key={hari} value={hari}>{hari}</option>
                    ))}
                    </select>

                    <label className="block mb-1 text-sm font-semibold text-white">Pilih Jam:</label>
                    <select className="w-full mb-4 bg-white/10 border border-white/40 rounded px-2 py-1 text-white focus:outline-none">
                    <option value="16:30">16.30 WIB</option>
                    <option value="18:30">18.30 WIB</option>
                    </select>

                    <button className="w-full bg-yellow-300 text-purple-900 font-semibold px-4 py-2 rounded hover:bg-yellow-200 transition shadow">Pilih</button>
                </div>

                {/* Paket Private */}
                <div className="bg-white/20 p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300 border border-yellow-300">
                    <h2 className="text-xl font-semibold mb-2">👤 Kelas Private</h2>
                    <p className="text-sm mb-2">1-on-1 bersama tentor pilihanmu</p>
                    <p className="text-sm mb-4 font-semibold text-yellow-300">Rp100.000 / pertemuan</p>

                    <ul className="text-sm text-left list-disc list-inside space-y-1 mb-4">
                        <li>Maksimal 2 siswa per sesi (harus 1 sekolah)</li>
                        <li>Hari, jam, dan tempat fleksibel sesuai kesepakatan</li>
                        <li>Prioritas dalam bimbingan & diskusi (termasuk jadwal les)</li>
                        <li>Bantuan mengerjakan tugas / PR sekolah</li>
                    </ul>

                    <button className="w-full bg-yellow-300 text-purple-900 font-semibold px-4 py-2 rounded hover:bg-yellow-200 transition shadow">Pilih</button>
                </div>
            </div>
        </div>
        </div>
    );
}