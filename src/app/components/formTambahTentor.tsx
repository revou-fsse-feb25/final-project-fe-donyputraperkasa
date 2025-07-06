"use client";
import React from "react";

export default function FormTambahTentor() {
    const [namaTentor, setNamaTentor] = React.useState("");
    const [universitas, setUniversitas] = React.useState("");
    const [programStudi, setProgramStudi] = React.useState("");
    const [ttl, setTtl] = React.useState("");
    const [pengalaman, setPengalaman] = React.useState("");
    const [daftarTentor, setDaftarTentor] = React.useState<{
        nama: string;
        universitas: string;
        programStudi: string;
        ttl: string;
        pengalaman: string;
    }[]>([]);
    const [editingIndex, setEditingIndex] = React.useState<number | null>(null);
    const [editNama, setEditNama] = React.useState("");
    const [editUniversitas, setEditUniversitas] = React.useState("");
    const [editProgramStudi, setEditProgramStudi] = React.useState("");
    const [editTtl, setEditTtl] = React.useState("");
    const [editPengalaman, setEditPengalaman] = React.useState("");

    const handleTambahTentor = () => {
        if (namaTentor && universitas && programStudi && ttl && pengalaman) {
            setDaftarTentor([
                ...daftarTentor,
                { nama: namaTentor, universitas, programStudi, ttl, pengalaman }
            ]);
            setNamaTentor("");
            setUniversitas("");
            setProgramStudi("");
            setTtl("");
            setPengalaman("");
        }
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        const t = daftarTentor[index];
        setEditNama(t.nama);
        setEditUniversitas(t.universitas);
        setEditProgramStudi(t.programStudi);
        setEditTtl(t.ttl);
        setEditPengalaman(t.pengalaman);
    };

    const handleSimpanEdit = () => {
        if (editingIndex !== null) {
            const updated = [...daftarTentor];
            updated[editingIndex] = {
                nama: editNama,
                universitas: editUniversitas,
                programStudi: editProgramStudi,
                ttl: editTtl,
                pengalaman: editPengalaman,
            };
            setDaftarTentor(updated);
            setEditingIndex(null);
            setEditNama("");
            setEditUniversitas("");
            setEditProgramStudi("");
            setEditTtl("");
            setEditPengalaman("");
        }
    };

    const handleHapus = (index: number) => {
        const filtered = daftarTentor.filter((_, i) => i !== index);
        setDaftarTentor(filtered);
    };

    return (
        <div className="text-black/90 space-y-4">
            <h3 className="font-bold text-lg">Form Tambah Tentor</h3>
            <input
                type="text"
                placeholder="Nama Tentor"
                className="w-full p-2 border rounded"
                value={namaTentor}
                onChange={(e) => setNamaTentor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Tempat Tanggal Lahir"
                className="w-full p-2 border rounded"
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Universitas"
                className="w-full p-2 border rounded"
                value={universitas}
                onChange={(e) => setUniversitas(e.target.value)}
            />
            <input
                type="text"
                placeholder="Program Studi"
                className="w-full p-2 border rounded"
                value={programStudi}
                onChange={(e) => setProgramStudi(e.target.value)}
            />
            <input
                type="text"
                placeholder="Pengalaman Mengajar"
                className="w-full p-2 border rounded"
                value={pengalaman}
                onChange={(e) => setPengalaman(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={handleTambahTentor}
            >
                Simpan
            </button>

            <div className="pt-4">
                <h4 className="font-semibold text-md">Daftar Tentor</h4>
                <table className="table-auto w-full mt-4 border text-sm">
                    <thead>
                        <tr className="bg-gray-100 text-left text-black">
                            <th className="p-2 border">No</th>
                            <th className="p-2 border">Nama</th>
                            <th className="p-2 border">TTL</th>
                            <th className="p-2 border">Universitas</th>
                            <th className="p-2 border">Program Studi</th>
                            <th className="p-2 border">Pengalaman</th>
                            <th className="p-2 border">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarTentor.map((t, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2 border">{index + 1}</td>
                                <td className="p-2 border">
                                    {editingIndex === index ? (
                                        <input
                                            type="text"
                                            value={editNama}
                                            onChange={(e) => setEditNama(e.target.value)}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        t.nama
                                    )}
                                </td>
                                <td className="p-2 border">
                                    {editingIndex === index ? (
                                        <input
                                            type="text"
                                            value={editTtl}
                                            onChange={(e) => setEditTtl(e.target.value)}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        t.ttl
                                    )}
                                </td>
                                <td className="p-2 border">
                                    {editingIndex === index ? (
                                        <input
                                            type="text"
                                            value={editUniversitas}
                                            onChange={(e) => setEditUniversitas(e.target.value)}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        t.universitas
                                    )}
                                </td>
                                <td className="p-2 border">
                                    {editingIndex === index ? (
                                        <input
                                            type="text"
                                            value={editProgramStudi}
                                            onChange={(e) => setEditProgramStudi(e.target.value)}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        t.programStudi
                                    )}
                                </td>
                                <td className="p-2 border">
                                    {editingIndex === index ? (
                                        <input
                                            type="text"
                                            value={editPengalaman}
                                            onChange={(e) => setEditPengalaman(e.target.value)}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        t.pengalaman
                                    )}
                                </td>
                                <td className="p-2 border space-x-2">
                                    {editingIndex === index ? (
                                        <button
                                            title="Simpan"
                                            className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                                            onClick={handleSimpanEdit}
                                        >
                                            💾 Simpan
                                        </button>
                                    ) : (
                                        <button
                                            title="Edit"
                                            className="bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                                            onClick={() => handleEdit(index)}
                                        >
                                            ✏️ Edit
                                        </button>
                                    )}
                                    <button
                                        title="Hapus"
                                        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                                        onClick={() => handleHapus(index)}
                                    >
                                        🗑️ Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}