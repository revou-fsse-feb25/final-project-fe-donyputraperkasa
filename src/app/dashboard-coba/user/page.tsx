import Beranda from "@/app/menu-coba/user/beranda";
import Subscribe from "@/app/menu-coba/user/subscribe";
import Helpdesk from "@/app/menu-coba/user/helpdesk";
import JadwalKelas from "@/app/menu-coba/user/jadwalKelas";
import LatihanSoal from "@/app/menu-coba/user/latihanSoal";
import Materi from "@/app/menu-coba/user/materi";
import Tentor from "@/app/menu-coba/user/tentor";
import VideoPembahasan from "@/app/menu-coba/user/vidioPembahasan";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-800 via-emerald-700 to-green-600 p-8 text-white font-sans">
            <h1 className="text-4xl font-bold mb-10 text-center drop-shadow">Dashboard Akun</h1>
            <div className="flex flex-col items-center justify-center space-y-4 mb-10">
                {/* Profil User */}
                <div className="bg-white/10 p-4 rounded-xl text-center w-full max-w-md shadow">
                    <h3 className="text-xl font-semibold mb-1">👤 Nama Pengguna</h3>
                    <p className="text-sm text-white/80">user@example.com</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex space-x-4">
                    <Beranda />
                    <Subscribe />
                    <JadwalKelas />
                    <Materi />
                </div>
                <div className="flex space-x-4">
                    <LatihanSoal />
                    <Tentor />
                    <VideoPembahasan />
                    <Helpdesk />
                </div>
            </div>
        </div>
    )
}