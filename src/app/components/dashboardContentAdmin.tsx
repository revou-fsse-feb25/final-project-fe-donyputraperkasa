import React from "react";
import Beranda from "./beranda";
import Subscribe from "./subscribe";
import FormTambahTentor from "./formTambahTentor";

interface Props {
    selectedMenu: string;
}

export default function DashboardContentAdmin({ selectedMenu }: Props) {
    return (
        // konten menu dashboard
        <div className="flex justify-center px-4 mt-6">
            <div className="bg-white p-6 rounded-2xl w-full max-w-6xl shadow-lg">
                {/* <h3 className="text-xl text-black/90 font-bold mb-2">{selectedMenu}</h3> */}
                <p className="text-black/90">
                    {selectedMenu === "Jadwal Kelas" && "Lihat jadwal kelas dan sesi berikutnya."}
                    {selectedMenu === "Materi dari Tentor" && "Akses semua materi pembelajaran dari tentor."}
                    {selectedMenu === "Latihan Soal" && "Kerjakan soal-soal latihan sesuai tingkat dan topik."}
                    {selectedMenu === "Video Pembahasan" && "Tonton video pembahasan dari pengajar."}
                </p>
                {selectedMenu === "Dashboard" && (
                    <Beranda />
                )}

                {selectedMenu === "Subscribe" && (
                    <Subscribe />
                )}

                {selectedMenu === "Profil Tentor" && (
                    <div className="text-black/90 space-y-2">
                        <p>Kami memiliki tentor-tentor terbaik lulusan universitas ternama:</p>
                    </div>
                )}

                {selectedMenu === "Live Chat Developer" && (
                    <p className="text-black/90">Silakan hubungi developer di <a href="mailto:dony@example.com" className="text-blue-600 underline">dony@example.com</a> atau gunakan fitur live chat di pojok kanan bawah (jika tersedia).</p>
                )}

                {selectedMenu === "Tambah Tentor" && <FormTambahTentor />}

                {selectedMenu === "Tambah Kelas" && (
                    <div className="text-black/90 space-y-4">
                        <h3 className="font-bold text-lg">Form Tambah Kelas</h3>
                        <input type="text" placeholder="Nama Kelas" className="w-full p-2 border rounded" />
                        <input type="text" placeholder="Jadwal" className="w-full p-2 border rounded" />
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Simpan</button>
                    </div>
                )}

                {selectedMenu === "Data Siswa" && (
                    <div className="text-black/90">
                        <h3 className="font-bold text-lg mb-2">Daftar Siswa</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Dony P. - dony@mail.com</li>
                            <li>Dini A. - dini@mail.com</li>
                            <li>Dino R. - dino@mail.com</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}