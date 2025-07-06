'use client';

import React from "react";
import Question from "./components/question";
import Layer from "./components/layer";
import Image from 'next/image';
import Footer from "./components/footer";

export default function home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-800 via-emerald-700 to-green-600 px-4 py-12 text-white font-sans">
      <Image
        src="/images/mulaidonynol.png"
        alt="logo"
        width={192}
        height={192}
        className="mb-6 hover:scale-105 transition-transform duration-300"
      />
      <h1 className="text-4xl font-bold text-center text-white mb-4">Selamat Datang di Bimbel "MATH ON"</h1>
      <p className="text-lg text-center text-white mb-8 max-w-xl">Belajar Matematika jadi lebih mudah, menyenangkan, dan interaktif. Tersedia untuk semua jenjang dari SD hingga SMA.</p>
      <Layer />
      <Question />
      <Footer />
    </div>
  );
}