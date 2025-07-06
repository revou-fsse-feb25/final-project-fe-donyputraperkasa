import React from "react";

interface Props {
    selectedMenu: string;
    setSelectedMenu: (menu: string) => void;
}

export default function DashboardMenuAdmin({ selectedMenu, setSelectedMenu }: Props) {
    return (
        <div>
            {/* Menu Dashboard */}
            <div className="flex flex-wrap justify-center px-4">
                <div className="flex flex-wrap justify-center gap-4 w-full">
                    <div
                        onClick={() => setSelectedMenu("Tambah Tentor")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Tambah Tentor"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">🧑‍🏫 Tambah Tentor</h2>
                        <p className="text-sm text-white/90">Tambah tentor baru ke sistem pembelajaran.</p>
                    </div>

                    <div
                        onClick={() => setSelectedMenu("Tambah Kelas")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Tambah Kelas"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">🏫 Tambah Kelas</h2>
                        <p className="text-sm text-white/90">Buat kelas baru dan jadwalnya.</p>
                    </div>

                    <div
                        onClick={() => setSelectedMenu("Data Siswa")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Data Siswa"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">📊 Data Siswa</h2>
                        <p className="text-sm text-white/90">Lihat daftar siswa yang terdaftar.</p>
                    </div>
                    
                    <div
                        onClick={() => setSelectedMenu("Dashboard")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Dashboard"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">📂 Beranda</h2>
                        <p className="text-sm text-white/90">Ringkasan akun dan status langgananmu.</p>
                    </div>

                    <div
                        onClick={() => setSelectedMenu("Jadwal Kelas")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Jadwal Kelas"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">📅 Jadwal Kelas</h2>
                        <p className="text-sm text-white/90">Lihat jadwal kelasmu dan pengingat sesi berikutnya.</p>
                    </div>

                    <div
                        onClick={() => setSelectedMenu("Latihan Soal")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Latihan Soal"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">📝 Latihan Soal</h2>
                        <p className="text-sm text-white/90">Uji pemahamanmu dengan berbagai latihan soal interaktif.</p>
                    </div>

                    <div
                        onClick={() => setSelectedMenu("Video Pembahasan")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Video Pembahasan"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">🎥 Video Pembahasan</h2>
                        <p className="text-sm text-white/90">Tonton pembahasan soal langsung dari pengajar.</p>
                    </div>

                    <div
                        onClick={() => setSelectedMenu("Subscribe")}
                        className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-300 
                        ${selectedMenu === "Subscribe"
                            ? "bg-white/30 ring-2 ring-yellow-300 scale-105"
                            : "bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 hover:bg-white/20 border border-white/20"
                        }`}
                    >
                        <h2 className="text-2xl font-semibold mb-2">📩 Subscribe</h2>
                        <p className="text-sm text-white/90">Perpanjang langganan dan lihat paket belajar.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}