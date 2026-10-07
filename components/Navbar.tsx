"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Indikator link aktif (garis hijau di bawah)
  const navLinkStyle = (path: string) =>
    pathname === path
      ? "text-emerald-600 font-semibold relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600"
      : "text-slate-600 hover:text-emerald-600 font-medium py-2 transition";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      
      {/* 1. TOP BAR / INFO STRIP (Lokasi, Tel, Emel) */}
      <div className="bg-slate-50 border-b border-slate-100 text-xs text-slate-600 py-2.5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Maklumat Hubungi (Bahagian Kiri) */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Seri Kembangan, Selangor</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <a href="tel:0389578788" className="hover:text-emerald-600 transition">
                03-8957 8788
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <a href="mailto:admin@maeh4u.org.my" className="hover:text-emerald-600 transition">
                admin@maeh4u.org.my
              </a>
            </div>
          </div>

          {/* Teks Tagline / Info (Bahagian Kanan) */}
          <div className="hidden md:block text-slate-400 font-medium text-[11px]">
            Portal Rasmi Persatuan Kesihatan Persekitaran Malaysia
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR (Logo & Menu Navigasi) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO MAEH */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo MAEH"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-none">
                MAEH
              </span>
              <span className="text-[9px] font-semibold text-emerald-700 tracking-widest uppercase block mt-1">
                Persatuan Kesihatan Persekitaran Malaysia
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center space-x-8 text-sm">
            <Link href="/" className={navLinkStyle("/")}>
              Utama
            </Link>
            <Link href="/mengenai" className={navLinkStyle("/mengenai")}>
              Mengenai Kami
            </Link>
            <Link href="/bidang-fokus" className={navLinkStyle("/bidang-fokus")}>
              Bidang Fokus
            </Link>
            <Link href="/aktiviti" className={navLinkStyle("/aktiviti")}>
              Aktiviti & Acara
            </Link>
            <Link href="/keahlian" className={navLinkStyle("/keahlian")}>
              Keahlian
            </Link>
            <Link href="/hubungi" className={navLinkStyle("/hubungi")}>
              Hubungi
            </Link>
          </div>

          {/* BUTTON SERTAI KEAHLIAN */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/keahlian"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              Sertai Keahlian
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4">
          <Link
            href="/"
            className={`block text-sm ${navLinkStyle("/")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Utama
          </Link>
          <Link
            href="/mengenai"
            className={`block text-sm ${navLinkStyle("/mengenai")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Mengenai Kami
          </Link>
          <Link
            href="/bidang-fokus"
            className={`block text-sm ${navLinkStyle("/bidang-fokus")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Bidang Fokus
          </Link>
          <Link
            href="/aktiviti"
            className={`block text-sm ${navLinkStyle("/aktiviti")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Aktiviti & Acara
          </Link>
          <Link
            href="/keahlian"
            className={`block text-sm ${navLinkStyle("/keahlian")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Keahlian
          </Link>
          <Link
            href="/hubungi"
            className={`block text-sm ${navLinkStyle("/hubungi")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Hubungi
          </Link>
          <Link
            href="/keahlian"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-emerald-600 text-white font-bold text-xs uppercase py-3 rounded-xl mt-2"
          >
            Sertai Keahlian
          </Link>
        </div>
      )}
    </header>
  );
}