"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calendar,
  Menu,
  X,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Users,
  Image,
} from "lucide-react";

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased flex flex-col justify-between">
      <div>




        {/* 3. HERO SECTION */}
        <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                Peneraju Kesihatan Persekitaran
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Memartabatkan Mutu Kesihatan & Persekitaran Malaysia
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                MAEH ialah wadah profesional tempatan yang mengumpulkan pakar dan pengamal kesihatan awam demi menjamin persekitaran yang selamat dan sejahtera.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/keahlian"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition shadow-sm flex items-center gap-2"
                >
                  Borang Keahlian <ArrowRight size={16} />
                </Link>
                <Link
                  href="/mengenai"
                  className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition"
                >
                  Profil MAEH
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PERKHIDMATAN / BIDANG UTAMA */}
        <section id="fokus" className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                Peranan Utama
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Fokus Aktiviti Persatuan
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition">
                <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Latihan & Latihan CPD</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menganjurkan seminar, kursus, dan persidangan berterusan untuk pengamal dan pegawai kesihatan persekitaran.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition">
                <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Piawaian & Sanitasi Awam</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advokasi kawalan mutu makanan, kebersihan premis, serta kualiti sumber air dan udara persekitaran.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition">
                <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Jaringan & Penyelidikan</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menghubungkan agensi kerajaan, swasta, dan institusi pengajian tinggi untuk kajian kesihatan awam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BERITA & PENGUMUMAN TERKINI */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                  Pengumuman
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Program Akan Datang</h2>
              </div>
              <Link href="/aktiviti" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase flex items-center gap-1">
                Lihat Semua Program &rarr;
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100">
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 text-emerald-700 p-2 rounded text-center min-w-16.25 border border-emerald-100">
                    <span className="text-[10px] font-bold block uppercase">NOV</span>
                    <span className="text-base font-extrabold">25</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Persidangan Kesihatan Persekitaran Kebangsaan (NEHC)
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                      <span className="flex items-center gap-1"><MapPin size={12} /> KLCC, Kuala Lumpur</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> 3 Hari</span>
                    </p>
                  </div>
                </div>
                <Link href="/aktiviti" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase">
                  Maklumat Lanjut &rarr;
                </Link>
              </div>

              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 text-emerald-700 p-2 rounded text-center min-w-16.25 border border-emerald-100">
                    <span className="text-[10px] font-bold block uppercase">DIS</span>
                    <span className="text-base font-extrabold">10</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Bengkel Audit Sanitasi & Kebersihan Premis Makanan
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                      <span className="flex items-center gap-1"><MapPin size={12} /> Seri Kembangan, Selangor</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> 1 Hari</span>
                    </p>
                  </div>
                </div>
                <Link href="/aktiviti" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase">
                  Maklumat Lanjut &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>


    </div>
  );
}