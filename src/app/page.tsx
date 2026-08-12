"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("beranda");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Active section tracker on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "tentang", "keahlian", "proyek", "pengalaman", "pendidikan", "kontak"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  const [currentLang, setCurrentLang] = useState<"id" | "en">("id");

  const translations = {
    id: {
      beranda: "Beranda",
      tentang: "Tentang",
      keahlian: "Keahlian",
      proyek: "Proyek",
      pengalaman: "Pengalaman",
      pendidikan: "Pendidikan",
      kontak: "Kontak",
      greeting: "👋 Halo, Saya",
      hero_subhead: "Software Developer Student & Mobile App Enthusiast",
      hero_desc: "Saya adalah siswa SMK Jakarta Pusat 1 jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki minat di bidang teknologi informasi, khususnya pengembangan aplikasi, pemrograman, dan website. Memiliki semangat belajar tinggi, disiplin, bertanggung jawab, cepat beradaptasi, serta mampu bekerja secara individu maupun dalam tim.",
      hero_btn_projects: "Lihat Proyek Saya",
      about_tag: "Mengenal Lebih Dekat",
      about_title: "Tentang Saya",
      about_heading: "🎓 Siswa RPL Berdedikasi & High-Speed Learner",
      about_p1: "Siswa SMK Jakarta Pusat 1 jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki minat di bidang teknologi informasi, khususnya pengembangan aplikasi, pemrograman, dan website. Memiliki semangat belajar yang tinggi, mampu bekerja sama dalam tim maupun secara mandiri, cepat beradaptasi, disiplin, bertanggung jawab, serta siap mengembangkan keterampilan untuk menghadapi dunia kerja dan memberikan kontribusi positif di lingkungan profesional.",
      exp_tag: "Jejak Langkah",
      exp_title: "Pengalaman",
      edu_tag: "Latar Belakang Akademis",
      edu_title: "Pendidikan",
      contact_tag: "Hubungi Saya",
      contact_title: "Kontak",
      contact_domisili: "Domisili & Lokasi",
      contact_form_title: "Kirim Pesan",
      form_name_label: "Nama Lengkap",
      form_email_label: "Alamat Email",
      form_msg_label: "Isi Pesan",
      btn_send: "🚀 Kirim Pesan",
    },
    en: {
      beranda: "Home",
      tentang: "About",
      keahlian: "Skills",
      proyek: "Projects",
      pengalaman: "Experience",
      pendidikan: "Education",
      kontak: "Contact",
      greeting: "👋 Hello, I'm",
      hero_subhead: "Software Developer Student & Mobile App Enthusiast",
      hero_desc: "I am a Software Engineering student at SMK Jakarta Pusat 1 passionate about IT, mobile app development, programming, and web solutions. Fast learner, disciplined, responsible, adaptable, and effective working individually or in teams.",
      hero_btn_projects: "View My Projects",
      about_tag: "Get To Know Me",
      about_title: "About Me",
      about_heading: "🎓 Dedicated RPL Student & High-Speed Learner",
      about_p1: "A Software Engineering student at SMK Jakarta Pusat 1 passionate about information technology, mobile application development, programming, and websites. Highly motivated, adaptable, disciplined, responsible, and equipped to contribute positively in professional environments.",
      exp_tag: "Career Path & Projects",
      exp_title: "Experience",
      edu_tag: "Academic Background",
      edu_title: "Education",
      contact_tag: "Get In Touch",
      contact_title: "Contact",
      contact_domisili: "Location & Domicile",
      contact_form_title: "Send a Message",
      form_name_label: "Full Name",
      form_email_label: "Email Address",
      form_msg_label: "Message",
      btn_send: "🚀 Send Message",
    }
  };

  const navLinks = [
    { name: translations[currentLang].beranda, href: "#beranda" },
    { name: translations[currentLang].tentang, href: "#tentang" },
    { name: translations[currentLang].keahlian, href: "#keahlian" },
    { name: translations[currentLang].proyek, href: "#proyek" },
    { name: translations[currentLang].pengalaman, href: "#pengalaman" },
    { name: translations[currentLang].pendidikan, href: "#pendidikan" },
    { name: translations[currentLang].kontak, href: "#kontak" },
  ];

  const technicalSkills = [
    { name: "Flutter (Dasar)", level: "85%", category: "Mobile Dev" },
    { name: "Pemrograman Dasar (Dart, JS, HTML/CSS)", level: "90%", category: "Core Programming" },
    { name: "REST API Integration (CoinGecko)", level: "85%", category: "Backend & API" },
    { name: "Mobile UI/UX Design", level: "80%", category: "Design" },
    { name: "Git & GitHub Version Control", level: "85%", category: "Tools" },
  ];

  const softSkills = [
    { name: "Kerja Sama Tim", icon: "👥", desc: "Mampu berkolaborasi secara efektif dalam tim" },
    { name: "Komunikasi yang Baik", icon: "💬", desc: "Menyampaikan ide dengan jelas dan responsif" },
    { name: "Manajemen Waktu", icon: "⏱️", desc: "Disiplin mengatur skala prioritas tugas" },
    { name: "Cepat Belajar", icon: "🚀", desc: "Mudah menyerap teknologi dan hal baru" },
    { name: "Disiplin & Bertanggung Jawab", icon: "🎯", desc: "Komitmen tinggi terhadap hasil kerja" },
    { name: "Mampu Beradaptasi", icon: "🔄", desc: "Fleksibel di berbagai lingkungan kerja" },
    { name: "Teliti dalam Bekerja", icon: "🔍", desc: "Detail-oriented dan presisi pada kode" },
    { name: "Pelayanan Pelanggan", icon: "🤝", desc: "Orientasi kepuasan pengguna dan klien" },
  ];

  const experiences = [
    {
      title: "Bisnis Jual Beli Pakaian Bekas Thrifting",
      period: "Agustus 2024 – Mei 2025",
      badge: "Wirausaha",
      desc: "Menjalankan usaha jual beli pakaian bekas (thrifting) dengan fokus pada penyediaan produk berkualitas, layak pakai, dan mengikuti tren fashion. Bertanggung jawab dalam pemilihan produk, penentuan harga, promosi melalui media sosial, pengelolaan pesanan, dan pelayanan pelanggan.",
      tags: ["Manajemen Bisnis", "Promosi Medsos", "Customer Service", "Penjualan"],
    },
    {
      title: "IL Sogno",
      period: "Juni 2025 – Juli 2025",
      badge: "Operasional & Kebersihan",
      desc: "Bertanggung jawab membersihkan kaca pada bangunan atau area kerja agar tetap bersih dan memenuhi standar kebersihan. Memiliki ketelitian, disiplin, dan mampu bekerja secara mandiri maupun dalam tim.",
      tags: ["Kedisiplinan", "Ketelitian", "Kerja Tim", "Standar Kualitas"],
    },
    {
      title: "Pengembangan Aplikasi CryptoKu",
      period: "Juli 2026 – Agustus 2026",
      badge: "Project Utama",
      desc: "Mengembangkan aplikasi mobile CryptoKu sebagai platform pemantauan harga cryptocurrency secara real-time. Bertanggung jawab dalam analisis kebutuhan, perancangan UI/UX modern, pengembangan fitur utama, integrasi CoinGecko REST API, serta pengujian aplikasi.",
      tags: ["Flutter", "Dart", "CoinGecko REST API", "UI/UX Design", "Real-Time Data"],
    },
  ];

  const cryptoKuFeatures = [
    "Live Market Summary",
    "Search Cryptocurrency",
    "Favorite Coin",
    "Filter Cryptocurrency",
    "Dark Mode & Light Mode",
    "Real-Time Data Integration",
    "CoinGecko REST API",
    "Responsive Mobile UI",
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#081529] text-white" : "bg-slate-50 text-slate-900"}`}>
      
      {/* NAVBAR (Fixed Top) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkMode ? "glass-nav" : "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO (Kiri - Custom Monogram MFA dengan Filosofi) */}
          <div onClick={() => setDemoModalOpen(true)} className="flex items-center gap-3 group cursor-pointer" title="Klik untuk melihat filosofi logo MFA">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 group-hover:scale-105 transition duration-300">
              <div className="w-full h-full bg-[#081529] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition"></div>
                <svg className="w-6 h-6 text-blue-400 group-hover:text-white transition duration-300" viewBox="0 0 40 40" fill="none">
                  <path d="M8 28V12L16 20L24 12V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 18H33M24 12H35" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="33" cy="27" r="3" fill="#60A5FA" className="animate-pulse"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className={`text-base sm:text-lg font-black tracking-widest ${isDarkMode ? "text-white" : "text-slate-900"} group-hover:text-blue-500 transition`}>MFA</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-extrabold border border-blue-500/20">DEV</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide group-hover:text-slate-300 transition">Mochamad Fachrezi Azhari</span>
            </div>
          </div>

          {/* DESKTOP MENU (Tengah) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? "text-blue-500 font-semibold"
                      : isDarkMode
                      ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTONS (Kanan) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <button
              onClick={() => setCurrentLang(currentLang === "id" ? "en" : "id")}
              aria-label="Toggle Language"
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 border ${
                isDarkMode
                  ? "bg-slate-800/80 text-blue-400 border-slate-700 hover:bg-slate-700 hover:text-white"
                  : "bg-slate-100 text-blue-600 border-slate-200 hover:bg-slate-200"
              }`}
            >
              <span>🌐</span>
              <span>{currentLang.toUpperCase()}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle Dark Mode"
              className={`p-2.5 rounded-full transition-all duration-200 ${
                isDarkMode
                  ? "bg-slate-800/80 text-yellow-400 hover:bg-slate-700 border border-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {isDarkMode ? (
                /* Sun Icon */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setCurrentLang(currentLang === "id" ? "en" : "id")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${isDarkMode ? "bg-slate-800 text-blue-400 border-slate-700" : "bg-slate-200 text-blue-600 border-slate-300"}`}
            >
              🌐 {currentLang.toUpperCase()}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isDarkMode ? "bg-slate-800 text-yellow-400" : "bg-slate-200 text-slate-700"}`}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isDarkMode ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-800"}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pt-2 pb-6 border-b ${isDarkMode ? "bg-[#081529] border-slate-800" : "bg-white border-slate-200"}`}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                    activeSection === link.href.substring(1)
                      ? "bg-blue-500/10 text-blue-500 font-semibold"
                      : isDarkMode
                      ? "text-slate-300 hover:bg-slate-800"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO KIRI (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge Kecil */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium shadow-sm">
                <span>{translations[currentLang].greeting}</span>
              </div>

              {/* Judul Besar */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Mochamad Fachrezi Azhari<span className="text-blue-500">.</span>
                </h1>
                
                {/* Sub Judul Warna Biru */}
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 leading-snug">
                  {translations[currentLang].hero_subhead}
                </h2>
              </div>

              {/* Deskripsi */}
              <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {translations[currentLang].hero_desc}
              </p>

              {/* Tombol Aksi */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#proyek"
                  className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  {translations[currentLang].hero_btn_projects}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Bawah Tombol: Social Media & Lokasi */}
              <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
                
                {/* Icon Social Media */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/eziganteng06-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      isDarkMode
                        ? "bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-700/60"
                        : "bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-700"
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      isDarkMode
                        ? "bg-slate-800/80 hover:bg-pink-600 hover:text-white text-slate-300 border border-slate-700/60"
                        : "bg-slate-100 hover:bg-pink-500 hover:text-white text-slate-700"
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:mochamad.fachrezi8@smk.belajar.id"
                    aria-label="Email"
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      isDarkMode
                        ? "bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-700/60"
                        : "bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-700"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                {/* Lokasi */}
                <div className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="text-base">📍</span> Berbasis di Jakarta, Indonesia
                </div>

              </div>

            </div>

            {/* HERO KANAN (5 Cols - Frame Foto Persis Referensi) */}
            <div className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0">
              
              {/* Glow Biru Halus di belakang foto */}
              <div className="absolute -inset-4 bg-blue-500/25 rounded-full blur-3xl -z-10 animate-pulse"></div>

              {/* Main Photo Frame Container */}
              <div className="relative group">
                
                {/* FLOATING CARD ATAS (Code Badge) */}
                <div className="absolute -top-5 -left-5 z-20 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-float">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                    &lt;/&gt;
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold leading-tight">Software Dev</p>
                    <p className="text-[10px] text-slate-500">RPL Student</p>
                  </div>
                </div>

                {/* FLOATING CARD BAWAH (Mobile App Badge) */}
                <div className="absolute -bottom-5 -right-5 z-20 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-float-reverse">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                    📱
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold leading-tight">Flutter Dev</p>
                    <p className="text-[10px] text-slate-500">Mobile Expert</p>
                  </div>
                </div>

                {/* Frame Foto dengan BORDER PUTIH TEBAL & ROUNDED CORNER BESAR (Persis Screenshot) */}
                <div className="relative p-2 bg-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                  <div className="overflow-hidden rounded-[2.2rem] w-[290px] sm:w-[350px] h-[370px] sm:h-[440px] relative bg-slate-900">
                    <Image
                      src="/profile.png"
                      alt="Mochamad Fachrezi Profile"
                      fill
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Soft gradient overlay on bottom of photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TENTANG SAYA SECTION */}
      <section id="tentang" className={`py-20 relative ${isDarkMode ? "bg-[#0c1e36]/50" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">Mengenal Lebih Dekat</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tentang Saya</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Bio Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`p-8 rounded-3xl border transition-all ${isDarkMode ? "glass-card border-slate-800" : "bg-slate-50 border-slate-200 shadow-sm"}`}>
                <h3 className="text-2xl font-bold text-blue-500 mb-4 flex items-center gap-2">
                  <span className="text-xl">🎓</span> Siswa RPL Berdedikasi High-Speed Learning
                </h3>
                <p className={`text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  Siswa SMK Jakarta Pusat 1 jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki minat di bidang teknologi informasi, khususnya pengembangan aplikasi, pemrograman, dan website. Memiliki semangat belajar yang tinggi, mampu bekerja sama dalam tim maupun secara mandiri, cepat beradaptasi, disiplin, bertanggung jawab, serta siap mengembangkan keterampilan untuk menghadapi dunia kerja dan memberikan kontribusi positif di lingkungan profesional.
                </p>
              </div>
            </div>

            {/* Statistik Modern (4 Cards) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              
              <div className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${isDarkMode ? "glass-card border-slate-800 hover:border-blue-500/40" : "bg-slate-50 border-slate-200"}`}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  📱
                </div>
                <h4 className="text-lg font-bold text-white">Flutter Dev</h4>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Mobile Application</p>
              </div>

              <div className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${isDarkMode ? "glass-card border-slate-800 hover:border-blue-500/40" : "bg-slate-50 border-slate-200"}`}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  🏫
                </div>
                <h4 className="text-lg font-bold text-white">Student RPL</h4>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>SMK Jakarta Pusat 1</p>
              </div>

              <div className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${isDarkMode ? "glass-card border-slate-800 hover:border-blue-500/40" : "bg-slate-50 border-slate-200"}`}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  🚀
                </div>
                <h4 className="text-lg font-bold text-white">CryptoKu</h4>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Featured Live App</p>
              </div>

              <div className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${isDarkMode ? "glass-card border-slate-800 hover:border-blue-500/40" : "bg-slate-50 border-slate-200"}`}>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  ⚡
                </div>
                <h4 className="text-lg font-bold text-white">Fast Learner</h4>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Adaptable & Agile</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* KEAHLIAN (SKILLS) SECTION */}
      <section id="keahlian" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">Kemampuan & Kompetensi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Keahlian Saya</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* TECHNICAL SKILLS */}
            <div className={`p-8 rounded-3xl border ${isDarkMode ? "glass-card border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-blue-500/10 text-blue-500">💻</span> Technical Skills
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 shadow-sm"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className={`p-8 rounded-3xl border ${isDarkMode ? "glass-card border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-blue-500/10 text-blue-500">🌟</span> Soft Skills
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-2xl border transition-all duration-200 hover:border-blue-500/50 ${
                      isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight">{skill.name}</h4>
                        <p className={`text-[11px] mt-0.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{skill.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROYEK SECTION (CryptoKu Showcase Premium) */}
      <section id="proyek" className={`py-20 relative ${isDarkMode ? "bg-[#0c1e36]/50" : "bg-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">Karya Unggulan</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Proyek Utama</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* CryptoKu Showcase Card */}
          <div className={`rounded-3xl border overflow-hidden ${isDarkMode ? "glass-card border-slate-800" : "bg-white border-slate-200 shadow-lg"}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
              
              {/* Left Column: Information & Features */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                    Flutter Mobile App
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    Real-Time API
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">CryptoKu</h3>

                <p className={`text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  Aplikasi mobile cryptocurrency yang dikembangkan menggunakan <strong className="text-blue-400">Flutter</strong> dan <strong className="text-blue-400">CoinGecko REST API</strong> untuk memantau harga cryptocurrency secara real-time. Dirancang dengan tampilan UI/UX yang modern, performa responsif, serta fitur pencarian & favorit yang intuitif.
                </p>

                {/* Features Grid */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Fitur Utama Aplikasi:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {cryptoKuFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm text-slate-200">
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2"
                  >
                    <span>⚡</span> Live Demo
                  </button>

                  <a
                    href="https://github.com/eziganteng06-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold text-sm px-6 py-3 rounded-xl border transition-all flex items-center gap-2 ${
                      isDarkMode
                        ? "bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub Repository
                  </a>
                </div>

              </div>

              {/* Right Column: App Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-sm">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900">
                    <Image
                      src="/cryptoku-mockup.png"
                      alt="CryptoKu App Showcase"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PENGALAMAN SECTION (Timeline Modern) */}
      <section id="pengalaman" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">Jejak Langkah</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Pengalaman</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Timeline Container */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-600 -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={exp.title} className="relative flex flex-col sm:flex-row items-center">
                    
                    {/* Timeline Node Icon */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-500 text-white border-4 border-[#081529] shadow-lg flex items-center justify-center font-bold text-sm z-10">
                      {idx + 1}
                    </div>

                    {/* Content Card (Alternating left/right on desktop) */}
                    <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto"}`}>
                      <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                        isDarkMode ? "glass-card border-slate-800 hover:border-blue-500/40" : "bg-white border-slate-200 shadow-md"
                      }`}>
                        
                        <div className={`flex flex-wrap items-center gap-2 mb-2 ${isEven ? "sm:justify-end" : "justify-start"}`}>
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                            {exp.badge}
                          </span>
                          <span className={`text-xs font-semibold ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                            📅 {exp.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>

                        <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                          {exp.desc}
                        </p>

                        <div className={`flex flex-wrap gap-1.5 ${isEven ? "sm:justify-end" : "justify-start"}`}>
                          {exp.tags.map((tag) => (
                            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50">
                              #{tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* PENDIDIKAN SECTION */}
      <section id="pendidikan" className={`py-20 relative ${isDarkMode ? "bg-[#0c1e36]/50" : "bg-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">Latar Belakang Akademis</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Pendidikan</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden ${
              isDarkMode ? "glass-card border-slate-800" : "bg-white border-slate-200 shadow-md"
            }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Sekolah Menengah Kejuruan</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">SMK Jakarta Pusat 1</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 font-bold text-sm border border-blue-500/20">
                  2024 - 2027
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Jurusan Main Program</p>
                    <p className="text-lg font-bold text-white">Rekayasa Perangkat Lunak (RPL)</p>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  Fokus pada pembelajaran sains komputer, algoritma dasar, pemrograman berorientasi objek (OOP), pengembangan aplikasi web & mobile (Flutter), manajemen basis data (SQL), dan rekayasa perangkat lunak standar industri.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* KONTAK SECTION */}
      <section id="kontak" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">Hubungi Saya</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Kontak</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/6281400528161"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode ? "glass-card border-slate-800 hover:border-emerald-500/40" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl font-bold">
                  💬
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">WhatsApp Direct</p>
                  <p className="text-base font-bold text-white">+62 814-0052-8161</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:mochamad.fachrezi8@smk.belajar.id"
                className={`p-6 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode ? "glass-card border-slate-800 hover:border-blue-500/40" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl font-bold">
                  📧
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Sekolah / Resmi</p>
                  <p className="text-sm sm:text-base font-bold text-white">mochamad.fachrezi8@smk.belajar.id</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/eziganteng06-lab"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode ? "glass-card border-slate-800 hover:border-purple-500/40" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl font-bold">
                  🐙
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">GitHub Account</p>
                  <p className="text-base font-bold text-white">github.com/eziganteng06-lab</p>
                </div>
              </a>

              {/* Lokasi Card */}
              <div className={`p-6 rounded-2xl border flex items-center gap-4 ${
                isDarkMode ? "glass-card border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center text-2xl font-bold">
                  📍
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Domisili & Lokasi</p>
                  <p className="text-base font-bold text-white">Jakarta, Indonesia</p>
                </div>
              </div>

            </div>

            {/* Contact Form Modern (7 Cols) */}
            <div className="lg:col-span-7">
              <div className={`p-8 sm:p-10 rounded-3xl border ${isDarkMode ? "glass-card border-slate-800" : "bg-white border-slate-200 shadow-md"}`}>
                <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                    <div className="text-3xl">🎉</div>
                    <h4 className="text-lg font-bold text-emerald-400">Pesan Berhasil Terkirim!</h4>
                    <p className="text-xs text-slate-300">Terima kasih sudah menghubungi Mochamad Fachrezi. Saya akan membalas pesan Anda sesegera mungkin.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Lengkap</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Masukkan nama Anda"
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-blue-500 ${
                            isDarkMode ? "bg-slate-900/80 border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Alamat Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nama@email.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-blue-500 ${
                            isDarkMode ? "bg-slate-900/80 border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Subjek Pesan</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Contoh: Tawaran Project / Kolaborasi"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-blue-500 ${
                          isDarkMode ? "bg-slate-900/80 border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Isi Pesan</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition focus:border-blue-500 ${
                          isDarkMode ? "bg-slate-900/80 border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
                        }`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-500 hover:bg-blue-600 active:scale-[0.99] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 transition duration-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Mengirim Pesan...</span>
                      ) : (
                        <>
                          <span>Kirim Pesan Sekarang</span>
                          <span>🚀</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-10 border-t ${isDarkMode ? "bg-[#061122] border-slate-800/80" : "bg-slate-900 text-white border-slate-800"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-base font-bold text-white">
            © 2026 Mochamad Fachrezi Azhari
          </p>
          <p className="text-xs text-blue-400 font-medium uppercase tracking-widest">
            Building Digital Solutions For The Future
          </p>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#beranda" className="hover:text-white transition">Beranda</a>
            <a href="#tentang" className="hover:text-white transition">Tentang</a>
            <a href="#proyek" className="hover:text-white transition">Proyek</a>
            <a href="#kontak" className="hover:text-white transition">Kontak</a>
          </div>
        </div>
      </footer>

      {/* DEMO MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`max-w-xl w-full p-6 rounded-3xl border shadow-2xl space-y-6 ${isDarkMode ? "bg-[#0d1e36] border-slate-700 text-white" : "bg-white text-slate-900"}`}>
            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-xl">📱</span>
                <h3 className="text-xl font-bold">CryptoKu Live Simulator</h3>
              </div>
              <button onClick={() => setDemoModalOpen(false)} className="text-slate-400 hover:text-white text-lg font-bold">✕</button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400">COINGECKO REST API LIVE</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">STATUS: ONLINE</span>
              </div>

              {/* Sample Crypto items */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-slate-800/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">₿</span>
                    <div>
                      <p className="text-sm font-bold">Bitcoin (BTC)</p>
                      <p className="text-[10px] text-slate-400">Market Cap: #1</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">$94,250.00</p>
                    <p className="text-xs text-emerald-400 font-semibold">+3.45%</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">Ξ</span>
                    <div>
                      <p className="text-sm font-bold">Ethereum (ETH)</p>
                      <p className="text-[10px] text-slate-400">Market Cap: #2</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">$3,420.50</p>
                    <p className="text-xs text-emerald-400 font-semibold">+1.82%</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">◎</span>
                    <div>
                      <p className="text-sm font-bold">Solana (SOL)</p>
                      <p className="text-[10px] text-slate-400">Market Cap: #4</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">$198.75</p>
                    <p className="text-xs text-emerald-400 font-semibold">+5.12%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/eziganteng06-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl text-center text-sm"
              >
                Lihat Code Source
              </a>
              <button
                onClick={() => setDemoModalOpen(false)}
                className="px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-3 rounded-xl text-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
