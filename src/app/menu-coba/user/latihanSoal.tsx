'use client';
import React from "react";

interface Props {
    selectedMenu: string;
    setSelectedMenu?: (menu: string) => void;
}

export default function LatihanSoal() {
    return(
        <div className={`w-full sm:w-[48%] lg:w-[23%] p-6 mt-4 mb-4 rounded-2xl shadow-xl cursor-pointer text-center sm:text-left transition-all duration-30`}>
            <h2 className="text-2xl font-semibold mb-2">📝 Latihan Soal</h2>
            <p className="text-sm text-white/90">Latihan soal untuk meningkatkan kemampuanmu.</p>
        </div>
    )
}