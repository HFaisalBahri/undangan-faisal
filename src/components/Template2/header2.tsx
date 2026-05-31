// src/components/Template2/header2.tsx
"use client";
import Image from "next/image";

export default function Header2() {
  return (
    <section className="min-h-screen bg-[#ece2d0] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Efek Gradasi Titik/Tekstur Halus Bertema Cokelat */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4a3525_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Kontainer Utama */}
      <div className="max-w-md w-full text-center z-10 space-y-8 animate-fadeIn">
        
        {/* Teks Pembuka Kecil */}
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#8c6d53] font-medium block">
            The Wedding Of
          </span>
        </div>

        {/* Inisial Nama Besar di Tengah dengan Bingkai Melengkung Tipis */}
        <div className="w-56 h-72 mx-auto rounded-t-full border-2 border-[#d4b295]/60 shadow-xl relative overflow-hidden bg-[#fbf7f0]/90 flex items-center justify-center group">
          {/* Garis Bingkai Dalam */}
          <div className="absolute inset-2 border border-[#d4b295]/30 rounded-t-full pointer-events-none" />
          
          {/* Background Foto Utama Jika Ada */}
          <Image
            src="/images/header-bg.jpg" // Tempat naruh foto utama latar belakang jika ingin pakai foto
            alt="Faisal & Nisa"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />

          {/* Teks Inisial Besar */}
          <div className="text-6xl font-serif text-[#4a3525] tracking-tighter select-none font-light">
            G <span className="text-[#8c6d53] font-sans text-4xl">&</span> J
          </div>
        </div>

        {/* Nama Lengkap Kedua Mempelai */}
        <div className="space-y-2">
          <h1 className="text-3xl font-serif text-[#4a3525] tracking-wide font-medium">
            Ghibran Akbar Fathiar
          </h1>
          <div className="text-xl font-serif text-[#8c6d53] italic font-light">&</div>
          <h1 className="text-3xl font-serif text-[#4a3525] tracking-wide font-medium">
            Jihan
          </h1>
        </div>

        {/* Pembatas Garis Estetik Garis Tipis */}
        <div className="flex items-center justify-center gap-3 w-1/2 mx-auto">
          <div className="h-[1px] bg-[#d4b295]/60 flex-1" />
          <div className="w-1.5 h-1.5 bg-[#8c6d53] rotate-45" />
          <div className="h-[1px] bg-[#d4b295]/60 flex-1" />
        </div>

        {/* Tanggal Pernikahan */}
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8c6d53] font-semibold">
            Sabtu, 12 Desember 2026
          </p>
        </div>

      </div>

      {/* Indikator Scroll ke Bawah (Simbol Panah Kecil Halus) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-bounce">
        <span className="text-[9px] uppercase tracking-widest text-[#8c6d53]">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-[#4a3525]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}