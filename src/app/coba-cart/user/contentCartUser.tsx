import React from "react";
import Beranda from "@/app/components/beranda";
import Subscribe from "@/app/components/subscribe";

interface Props {
    selectedMenu: string;
}

export default function ContentCartUser({ selectedMenu }: Props) {
    return (
        <>
            {/* konten detail setelah klik */}
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
                        <ul className="list-disc list-inside text-sm">
                            <li>Dony P. S.T — Ahli Matematika SMA & UTBK</li>
                            <li>Siska A. M.Pd — Spesialis Matematika SD & SMP</li>
                        </ul>
                        </div>
                    )}

                    {selectedMenu === "Live Chat Developer" && (
                        <p className="text-black/90">Silakan hubungi developer di <a href="mailto:dony@example.com" className="text-blue-600 underline">dony@example.com</a> atau gunakan fitur live chat di pojok kanan bawah (jika tersedia).</p>
                    )}
                </div>
            </div>
        </>
    );
}