'use client';

import { useState, useEffect } from 'react';
import Modal from './Modal';

type PaymentProps = {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string | null;
}

export default function Payment({ isOpen, onClose, courseTitle }: PaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (duration === '1bulan') setPrice(150000 * 1);
    else if (duration === '3bulan') setPrice(150000 * 3);
    else if (duration === '1semester') setPrice(150000 * 6);
    else setPrice(0);
  }, [duration]);

  return (
    <div className="max-w-xl mx-auto my-10 bg-white p-6 rounded-xl shadow space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Pembayaran untuk {courseTitle}</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">💳 Metode Pembayaran</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">-- Pilih Metode --</option>
            <option value="bca">Transfer BCA</option>
            <option value="mandiri">Transfer Mandiri</option>
            <option value="gopay">GoPay</option>
            <option value="Shopee">Shopee</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">🏦 Nomor Rekening / Tujuan</label>
          <p className="bg-gray-100 px-4 py-2 rounded-md text-sm font-mono border">1234567890 a.n. Dony Putra Perkasa</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">🕒 Durasi Langganan</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">-- Pilih Durasi --</option>
            <option value="1bulan">1 Bulan/4 pertemuan</option>
            <option value="3bulan">3 Bulan/ 12 pertemuan</option>
            <option value="1semester">1 Semester/ 24 pertemuan</option>
          </select>
          {price > 0 && (
            <div className="text-lg font-semibold text-gray-800">
              💰 Total Pembayaran: Rp{price.toLocaleString('id-ID')}
            </div>
          )}
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition text-lg">
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}