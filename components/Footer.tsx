import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* KOLUM 1: LOGO & INFO MAEH */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo MAEH"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-extrabold text-white tracking-tight">
                MAEH
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Persatuan Kesihatan Persekitaran Malaysia (Malaysian Environmental Health Association).
            </p>
            <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-[11px] font-mono text-emerald-400 border border-slate-700/60">
              ROS: PPM-001-10-09061990
            </div>
          </div>

          {/* KOLUM 2: PAUTAN PANTAS */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Pautan Pantas
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition">
                  Halaman Utama
                </Link>
              </li>
              <li>
                <Link href="/mengenai" className="hover:text-emerald-400 transition">
                  Mengenai Kami
                </Link>
              </li>
              <li>
                <Link href="/aktiviti" className="hover:text-emerald-400 transition">
                  Aktiviti & Acara CPD
                </Link>
              </li>
              <li>
                <Link href="/keahlian" className="hover:text-emerald-400 transition">
                  Permohonan Keahlian
                </Link>
              </li>
              <li>
                <Link href="/hubungi" className="hover:text-emerald-400 transition">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLUM 3: MAKLUMAT HUBUNGI */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>maeh4u.org.my</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contact@maeh4u.org.my</span>
              </li>
            </ul>
          </div>

          {/* KOLUM 4: SERTAI KEAHLIAN */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Keahlian MAEH
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Daftar sebagai ahli rasmi untuk mengumpul mata CPD dan menyertai rangkaian pakar kesihatan persekitaran.
            </p>
            <Link
              href="/keahlian"
              className="inline-block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition shadow-sm"
            >
              Daftar Ahli Sekarang
            </Link>
          </div>

        </div>

        {/* BAHAGIAN HAK CIPTA */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
<p>© 2026 Persatuan Kesihatan Persekitaran Malaysia (MAEH). Hak Cipta Terpelihara.</p>          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-400 transition">
              Dasar Privasi
            </Link>
            <Link href="#" className="hover:text-slate-400 transition">
              Terma & Syarat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}