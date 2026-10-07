"use client";

import React, { useState } from "react";
import {
  Leaf,
  Phone,
  MapPin,
  CheckCircle2,
  Award,
  UserCheck,
  ShieldCheck,
  FileText,
  Upload,
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Building2,
} from "lucide-react";

export default function MembershipPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("biasa");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">


      {/* 3. PAGE HEADER */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
            Pendaftaran Keahlian
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sertai Ahli Rasmi MAEH
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
            Sertai rangkaian pengamal kesihatan persekitaran tempatan untuk kelebihan pengiktirafan rasmi, mata CPD, dan diskaun latihan.
          </p>
        </div>
      </section>

      {/* 4. KATEGORI KEAHLIAN & YURAN */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              Kategori & Yuran
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Pilihan Kategori Keahlian
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Kadar yuran berpatutan mengikut latar belakang profesional dan pengajian anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AHLI BIASA */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  Popular
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3">Ahli Biasa</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Untuk Pegawai & Penolong Pegawai Kesihatan Persekitaran (PKP/PPKP) atau pengamal sektor swasta.
                </p>
                <div className="my-6 border-y border-slate-200 py-4">
                  <div className="text-2xl font-extrabold text-slate-900">
                    RM 50 <span className="text-xs font-normal text-slate-500">/ tahun</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">+ RM 20 Yuran Pendaftaran (Sekali Sahaja)</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Sijil Keahlian Rasmi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Mata CPD Latihan Berterusan
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Diskaun Yuran Persidangan NEHC
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Hak Mengundi dalam AGM
                  </li>
                </ul>
              </div>
              <a
                href="#borang"
                onClick={() => setSelectedCategory("biasa")}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 rounded text-center transition block"
              >
                Pilih Ahli Biasa
              </a>
            </div>

            {/* AHLI PELAJAR */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                  Pelajar IPT
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3">Ahli Pelajar</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Khusus untuk penuntut Diploma / Ijazah Sarjana Muda dalam bidang Kesihatan Persekitaran / Awam.
                </p>
                <div className="my-6 border-y border-slate-200 py-4">
                  <div className="text-2xl font-extrabold text-slate-900">
                    RM 20 <span className="text-xs font-normal text-slate-500">/ tahun</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">+ RM 10 Yuran Pendaftaran</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Sijil Keahlian Pelajar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Akses Program Network Mentor
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Diskaun Webinar & Bengkel
                  </li>
                </ul>
              </div>
              <a
                href="#borang"
                onClick={() => setSelectedCategory("pelajar")}
                className="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider py-3 rounded text-center transition block"
              >
                Pilih Ahli Pelajar
              </a>
            </div>

            {/* AHLI SEUMUR HIDUP */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                  Seumur Hidup
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3">Ahli Seumur Hidup</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Untuk pengamal berpengalaman yang ingin menjadi ahli kekal tanpa pembaharuan tahunan.
                </p>
                <div className="my-6 border-y border-slate-200 py-4">
                  <div className="text-2xl font-extrabold text-slate-900">
                    RM 500 <span className="text-xs font-normal text-slate-500">/ Sekali Sahaja</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">Tiada yuran tahunan seterusnya</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Sijil Khas Seumur Hidup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Semua Faedah Ahli Biasa
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" /> Keutamaan Jemputan Simposium Khas
                  </li>
                </ul>
              </div>
              <a
                href="#borang"
                onClick={() => setSelectedCategory("seumur_hidup")}
                className="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider py-3 rounded text-center transition block"
              >
                Pilih Seumur Hidup
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BORANG PENDAFTARAN ATAS TALIAN */}
      <section id="borang" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-sm">
            <div className="mb-8 border-b border-slate-100 pb-6">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                Permohonan Atas Talian
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Borang Pendaftaran Ahli
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Sila isi maklumat peribadi dan perkhidmatan anda dengan lengkap.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Permohonan Berjaya Dihantar!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Terima kasih. Urus setia MAEH akan menyemak borang dan dokumen anda. Arahan pembayaran yuran akan dihantar ke emel anda dalam masa 2 hari bekerja.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-emerald-700 underline"
                >
                  Hantar Permohonan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* PILIHAN KATEGORI */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Kategori Keahlian Dipilih *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "biasa", label: "Ahli Biasa (RM50)" },
                      { id: "pelajar", label: "Ahli Pelajar (RM20)" },
                      { id: "seumur_hidup", label: "Seumur Hidup (RM500)" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-xs font-semibold p-3 rounded border text-center transition ${
                          selectedCategory === cat.id
                            ? "bg-emerald-50 border-emerald-600 text-emerald-800"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MAKLUMAT PERIBADI */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nama Penuh (Mengikut MyKad) *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. MOHD ZAKI BIN ABDULLAH"
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nombor MyKad / Pasport *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="880101-10-5555"
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Emel Rasmi *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="nama@agensi.gov.my"
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nombor Telefon bimbit *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="012-3456789"
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* MAKLUMAT PEKERJAAN */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Jawatan / Gelaran *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Penolong Pegawai Kesihatan Persekitaran U32"
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Sektor / Agensi *
                    </label>
                    <select className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-emerald-600">
                      <option>Kementerian Kesihatan Malaysia (KKM)</option>
                      <option>Pihak Berkuasa Tempatan (PBT)</option>
                      <option>Sektor Swasta / Industri Sanitasi</option>
                      <option>Institusi Pengajian Tinggi (IPT)</option>
                      <option>Lain-lain</option>
                    </select>
                  </div>
                </div>

                {/* DOKUMEN SOKONGAN */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Muat Naik Kad Pekerja / Kad Pelajar (PDF/JPG)
                  </label>
                  <div className="border-2 border-dashed border-slate-200 rounded p-4 text-center cursor-pointer hover:border-emerald-500 transition">
                    <Upload size={20} className="mx-auto text-slate-400 mb-1" />
                    <span className="text-xs text-slate-500 block">Pilih fail atau tarik ke sini (Maksimum 5MB)</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition shadow-sm flex items-center justify-center gap-2"
                >
                  Hantar Permohonan Keahlian <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>


    </div>
  );
}