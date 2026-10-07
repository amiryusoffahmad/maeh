"use client";

import React, { useState } from "react";
import {
  Leaf,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Award,
  Filter,
  Download,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";

export default function EventsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("semua");

  const events = [
    {
      id: 1,
      title: "Persidangan Kesihatan Persekitaran Kebangsaan (NEHC) 2026",
      category: "persidangan",
      tarikh: "25 - 27 November 2026",
      masa: "08:30 AM - 05:00 PM",
      lokasi: "Kuala Lumpur Convention Centre (KLCC)",
      cpd: "15 Mata CPD",
      status: "Akan Datang",
      keterangan:
        "Perhimpunan tahunan utama bagi pengamal kesihatan awam, penyelidik, dan penganalisis persekitaran seluruh negara bagi membincangkan impak perubahan iklim dan kesihatan awam.",
    },
    {
      id: 2,
      title: "Bengkel Audit Sanitasi & Kebersihan Premis Makanan",
      category: "bengkel",
      tarikh: "10 Disember 2026",
      masa: "09:00 AM - 04:30 PM",
      lokasi: "Dewan Seminar MAEH, Seri Kembangan",
      cpd: "8 Mata CPD",
      status: "Pendaftaran Dibuka",
      keterangan:
        "Latihan amali komprehensif mengikut standard keselamatan makanan terkini untuk Penolong Pegawai Kesihatan Persekitaran (PPKP) dan auditor premis.",
    },
    {
      id: 3,
      title: "Siri Webinar: Impak Mikroplastik Terhadap Kesihatan Awam",
      category: "webinar",
      tarikh: "18 Disember 2026",
      masa: "10:00 AM - 12:30 PM",
      lokasi: "Atas Talian (Zoom Platform)",
      cpd: "4 Mata CPD",
      status: "Percuma",
      keterangan:
        "Pembedahan kajian saintifik terbaharu mengenai ancaman mikroplastik dalam rantaian makanan dan kualiti sumber air minum.",
    },
    {
      id: 4,
      title: "Simposium Kawalan Vektor & Pengurusan Denggi Bandar",
      category: "persidangan",
      tarikh: "15 Januari 2027",
      masa: "08:30 AM - 05:00 PM",
      lokasi: "Hotel Grand Continental, Ipoh",
      cpd: "10 Mata CPD",
      status: "Akan Datang",
      keterangan:
        "Sesi perkongsian strategi kawalan pembiakan vektor berkesan menggunakan teknologi pintar di kawasan perbandaran.",
    },
  ];

  const filteredEvents =
    selectedCategory === "semua"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">


      {/* 3. PAGE HEADER */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
                Program Latihan & Persidangan
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Takwim Aktiviti MAEH
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
                Daftar program latihan profesional, simposium, dan webinar bagi pengumpulan mata CPD tahunan.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider px-4 py-3 rounded shadow-sm hover:bg-slate-100 transition self-start md:self-auto">
              <Download size={15} className="text-emerald-600" /> Muat Turun Takwim PDF
            </button>
          </div>
        </div>
      </section>

      {/* 4. FILTER TAB & LISTING */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-200 mb-8">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Filter size={14} /> Tapis:
            </span>
            {[
              { id: "semua", label: "Semua Program" },
              { id: "persidangan", label: "Persidangan & Simposium" },
              { id: "bengkel", label: "Bengkel & Kursus Amali" },
              { id: "webinar", label: "Webinar Atas Talian" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded transition ${
                  selectedCategory === cat.id
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* EVENT CARDS */}
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition grid lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      {event.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                      {event.status}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-1">
                      <Award size={12} /> {event.cpd}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {event.keterangan}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-emerald-600" /> {event.tarikh}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-emerald-600" /> {event.masa}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-emerald-600" /> {event.lokasi}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <a
                    href={`/#daftar-${event.id}`}
                    className="w-full lg:w-auto bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded text-center transition flex items-center justify-center gap-2"
                  >
                    Daftar Penyertaan <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CPD INFO BOX */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> Pengumpulan Mata CPD Rasmi
              </h4>
              <p className="text-xs text-emerald-800">
                Setiap penyertaan program anjuran MAEH layak menerima e-Sijil penyertaan bersama jam mata CPD beriktiraf untuk pembaharuan lesen profesional.
              </p>
            </div>
            <a
              href="mailto:admin@maeh4u.org.my"
              className="text-xs font-bold text-emerald-700 hover:underline whitespace-nowrap"
            >
              Pertanyaan Latihan &rarr;
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}