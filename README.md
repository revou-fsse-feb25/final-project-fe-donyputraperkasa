Frontend dari ***Bimbel Online***, platform pembelajaran daring yang mempermudah siswa mengakses materi, latihan soal, dan informasi terbaru. Dibangun menggunakan **Next.js** dengan desain responsif dan integrasi autentikasi yang aman.

---

## ✨ **Fitur Utama**
✅ **Autentikasi** (Login & Register dengan NextAuth)  
✅ **Dashboard Siswa & Admin**  
✅ **Pengumuman Terbaru** (Read dari API)  
✅ **Navigasi Responsif** (Mobile & Desktop)  
✅ **Integrasi API Backend (NestJS)**  

---

## 🛠 **Tech Stack**
- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/) (Autentikasi)
- [Lucide React](https://lucide.dev/) (Ikon UI)
- Axios untuk HTTP Request

---

## 🚀 **Instalasi & Menjalankan**
### **1. Clone Repository**
```bash
git clone https://github.com/username/final-project-fe-donyputraperkasa.git
cd final-project-fe-donyputraperkasa
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Setup Environment**
Buat file `.env.local` dan isi:

NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000

### **4. Jalankan Aplikasi**
```bash
npm run dev
```
Frontend berjalan di: **http://localhost:3000**

---

## 🔑 **Autentikasi**
Menggunakan **NextAuth** dengan **Credentials Provider** (email & password) yang terhubung ke API backend.

---

## 🌐 **Integrasi API**
Semua data (login, pengumuman, user) diambil dari **Backend NestJS** via endpoint:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Contoh request:
```ts
import axios from "axios";

const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/announcements`);
```

---

## 📸 **Preview UI**
_(Tambahkan screenshot halaman login & dashboard di sini)_

---

## 🖇 **Fitur Utama Halaman**
- **Landing Page** – Informasi singkat bimbel
- **Login & Register** – Autentikasi user
- **Dashboard** – Role-based view (Admin & Siswa)
- **Pengumuman** – Menampilkan daftar pengumuman terbaru

---

## 👨‍💻 **Dibuat oleh**
- [Dony Putra Perkasa]