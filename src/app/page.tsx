'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import QuestionAndAnswer from './components/QuestionAndAnswer';
import Footer from './components/Footer';
import Modal from './components/Modal';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Testimoni from './components/Testimoni';

export default function Home() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 text-gray-800 font-sans">
      <Navbar />
      <header className="flex flex-col items-center justify-center py-20 px-6 text-center flex-grow">
        {/* <Image
          src="/images/mulaidonynol.png"
          alt="Logo Bimbel"
          width={160}
          height={160}
          className="mb-6 hover:scale-105 transition-transform duration-300"
        /> */}
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Selamat Datang di Bimbel MATH ON
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          Platform belajar interaktif untuk meningkatkan <strong>Literasi</strong>, <strong>Numerasi</strong>, dan <strong>Sains</strong> — khusus dirancang untuk pelajar Indonesia.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setRegisterOpen(true)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Buat Akun
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="px-6 py-3 bg-white text-blue-600 border border-blue-500 font-semibold rounded-md shadow-md hover:bg-blue-50 transition"
          >
            Login
          </button>
        </div>
      </header>

      <QuestionAndAnswer />
      <Testimoni />

      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <LoginForm onClose={() => setLoginOpen(false)} />
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)}>
        <RegisterForm onClose={() => setRegisterOpen(false)} />
      </Modal>

      <Footer />
    </div>
  );
}
