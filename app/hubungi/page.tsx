"use client";

import React, { useState } from "react";
import {
  Leaf,
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Menu,
  X,
  MessageSquare,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            Pusat Perhubungan
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Urus Setia MAEH
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
            Mempunyai pertanyaan berkenaan permohonan keahlian, semakan mata CPD, atau kerjasama latihan? Hubungi kami menerusi saluran rasmi di bawah.
          </p>
        </div>
      </section>

      {/* 4. CONTACT INFO & FORM SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* MAKLUMAT PEJABAT */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                  Urus Setia Rasmi
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Alamat & Talian Perhubungan
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Pejabat operasi utama Persatuan Kesihatan Persekitaran Malaysia.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Alamat Pejabat
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      No. 29-2, Jalan Equine 1A, Taman Equine,<br />
                      43300 Seri Kembangan, Selangor Darul Ehsan, Malaysia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Telefon / Faks
                    </h4>
                    <p className="text-xs text-slate-600">
                      Tel: 03-8957 8788
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Emel Rasmi
                    </h4>
                    <p className="text-xs text-slate-600">
                      admin@maeh4u.org.my / info@maeh4u.org.my
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Waktu Urusan Pejabat
                    </h4>
                    <p className="text-xs text-slate-600">
                      Isnin – Jumaat: 08:30 AM – 05:00 PM<br />
                      Sabtu, Ahad & Cuti Umum: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BORANG PERTANYAAN */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-lg border border-slate-200">
              <div className="mb-6 border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Hantar Mesej / Pertanyaan
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sila lengkapkan borang di bawah. Urus setia kami akan membalas emel anda dalam tempoh 1-2 hari bekerja.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Mesej Berjaya Dihantar!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Mesej anda telah diterima. Pihak urus setia MAEH akan menghubungi anda melalui emel secepat mungkin.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-emerald-700 underline block mx-auto"
                  >
                    Hantar Mesej Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nama Penuh *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ahmad Zaki"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Emel *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="nama@example.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        No. Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="012-3456789"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Kategori Pertanyaan *
                      </label>
                      <select className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-emerald-600">
                        <option>Pertanyaan Keahlian</option>
                        <option>Program Latihan & CPD</option>
                        <option>Persidangan NEHC</option>
                        <option>Kerjasama Industri / Kerajaan</option>
                        <option>Lain-lain</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subjek Mesej *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Semakan Status No. Pendaftaran Ahli"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Kandungan Mesej *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tuliskan soalan atau butiran lanjut anda di sini..."
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition shadow-sm flex items-center justify-center gap-2"
                  >
                    Hantar Mesej <Send size={15} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. VISUAL MAP CARD */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-lg bg-white border border-slate-200 text-center space-y-3">
            <MapPin size={28} className="text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">Lokasi Pejabat Urus Setia MAEH</h3>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              Taman Equine, Seri Kembangan, Selangor. Mudah diakses melalui Lebuhraya MEX dan LDP.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs font-bold text-emerald-700 border border-emerald-300 bg-emerald-50 px-4 py-2 rounded hover:bg-emerald-100 transition"
            >
              Buka Dalam Google Maps &rarr;
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}