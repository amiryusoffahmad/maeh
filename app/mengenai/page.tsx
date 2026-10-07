"use client";

import React, { useState } from "react";
import {
  Leaf,
  Phone,
  MapPin,
  Target,
  Award,
  Users,
  CheckCircle2,
  Menu,
  X,
  FileText,
} from "lucide-react";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">

      {/* 3. PAGE HEADER */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
            Profil Persatuan
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengenai MAEH
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Sejarah penubuhan, visi, misi, dan objektif Persatuan Kesihatan Persekitaran Malaysia dalam memartabatkan profesion di peringkat kebangsaan.
          </p>
        </div>
      </section>

      {/* 4. LATAR BELAKANG */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
                Sejarah & Latar Belakang
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Wadah Kepakaran Kesihatan Persekitaran Sejak 1990
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Persatuan Kesihatan Persekitaran Malaysia (MAEH) telah ditubuhkan secara rasmi dan didaftarkan di bawah Jabatan Pendaftaran Pertubuhan Malaysia (ROS) dengan nombor pendaftaran <strong>PPM-001-10-09061990</strong>.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Persatuan ini merupakan badan bukan kerajaan (NGO) profesional yang menggabungkan Pegawai Kesihatan Persekitaran, Penolong Pegawai Kesihatan Persekitaran (PPKP), penganalisis awam, pakar akademik, serta pengamal industri sanitasi dan alam sekitar di seluruh Malaysia.
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3 uppercase tracking-wider">
                Ringkasan Maklumat MAEH
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Singkatan</span>
                  <span className="font-semibold text-slate-800">MAEH</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Tahun Ditubuhkan</span>
                  <span className="font-semibold text-slate-800">1990</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">No. Pendaftaran ROS</span>
                  <span className="font-semibold text-slate-800">PPM-001-10-09061990</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Gabungan Antarabangsa</span>
                  <span className="font-semibold text-slate-800">IFEH (Full Member)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Ibu Pejabat</span>
                  <span className="font-semibold text-slate-800">Seri Kembangan, Selangor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISI & MISI */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Kami</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Menjadi sebuah pertubuhan profesional unggul di peringkat kebangsaan dan antarabangsa dalam memartabatkan amalan kesihatan persekitaran demi kesejahteraan masyarakat dan alam sekitar.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Kami</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Membangunkan kompetensi ahli menerusi latihan berterusan (CPD), memperkasakan advokasi dasar kesihatan awam, serta menggalakkan penyelidikan teknikal dan pemindahan ilmu sains persekitaran.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OBJEKTIF UTAMA */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              Teras Pertubuhan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Objektif Penubuhan Persatuan
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Memelihara dan meningkatkan taraf profesionalisme pengamal kesihatan persekitaran.",
              "Menggalakkan kajian dan penyelidikan saintifik dalam bidang sanitasi dan kawalan penyakit.",
              "Menjadi badan penasihat dan perundingan teknikal kepada agensi kerajaan serta swasta.",
              "Menganjurkan persidangan, kursus, dan program Pembangunan Profesional Berterusan (CPD).",
              "Mewujudkan rangkaian kerjasama dengan badan kesihatan persekitaran peringkat antarabangsa.",
              "Meningkatkan kesedaran awam mengenai kepentingan penjagaan kesihatan persekitaran."
            ].map((objektif, index) => (
              <div key={index} className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{objektif}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KEPIMPUNAN / AJK */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              Kepimpinan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Ahli Jawatankuasa Kebangsaan
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Barisan kepimpinan rasmi MAEH yang mentadbir perjalanan persatuan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { jawatan: "Yang Dipertua (Presiden)", nama: "Pengamal Utama MAEH", unit: "Sektor Kesihatan Awam" },
              { jawatan: "Timbalan Yang Dipertua", nama: "Wakil Akademik / Industri", unit: "Institusi Pengajian Tinggi" },
              { jawatan: "Setiausaha Kehormat", nama: "Urus Setia Pentadbiran", unit: "Pentadbiran MAEH" },
              { jawatan: "Bendahari Kehormat", nama: "Urus Setia Kewangan", unit: "Pengurusan Kewangan" },
            ].map((ajk, i) => (
              <div key={i} className="p-6 rounded-lg bg-white border border-slate-200 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                  <Users size={20} className="text-emerald-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  {ajk.jawatan}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{ajk.nama}</h3>
                <span className="text-[11px] text-slate-500 block mt-1">{ajk.unit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}