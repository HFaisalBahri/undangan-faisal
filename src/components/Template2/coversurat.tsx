// src/components/Template2/coversurat.tsx
"use client";
import { useState } from "react";
import Image from "next/image"; // 1. Tambahkan import Image ini

interface CoverSuratProps {
  tamu: string;
  onBuka: () => void;
}

export default function CoverSurat({ tamu, onBuka }: CoverSuratProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a3525] px-4 selection:bg-[#d4b295] selection:text-[#4a3525]">
      {/* Efek Pattern Titik-Titik Estetik */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4b295_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Kartu Amplop Putih Gading */}
      <div className="bg-[#fffdfa] w-full max-w-md rounded-2xl p-6 shadow-2xl border-4 border-[#d4b295]/30 text-center relative overflow-hidden flex flex-col items-center">
        
        {/* Garis Bingkai Dalam */}
        <div className="absolute inset-2 border border-[#d4b295]/20 rounded-xl pointer-events-none" />

        <span className="text-[10px] uppercase tracking-[0.4em] text-[#8c6d53] font-medium mb-4 mt-2">
          The Wedding Invitation
        </span>

        {/* 2. BAGIAN INI YANG KITA UBAH MENJADI FOTO ASLI */}
        <div className="w-48 h-48 rounded-t-full overflow-hidden border-4 border-[#d4b295] shadow-md relative mb-6 bg-[#ece2d0]">
          <Image
            src="/images/2.png" // Pastikan foto dengan nama ini ada di dalam folder public/images
            alt="Foto Cover Surat"
            fill
            className="object-cover"
          />
        </div>

        {/* Nama Pengantin */}
        <h1 className="text-3xl font-serif text-[#4a3525] tracking-wide mb-2">
          Ghibran <span className="text-[#8c6d53]">&</span> Jihan
        </h1>
        <p className="text-xs tracking-[0.2em] text-[#8c6d53] mb-8">12 . 12 . 2026</p>

        {/* Penerima Tamu */}
        <div className="w-full bg-[#fcf8f2] border border-[#d4b295]/40 rounded-xl py-4 px-4 mb-8">
          <p className="text-[11px] uppercase tracking-widest text-[#8c6d53]/70 mb-1">Kepada Yth.</p>
          <p className="text-base text-[#4a3525] font-semibold tracking-wide font-serif">{tamu}</p>
        </div>

        {/* Tombol Buka */}
        <button
          onClick={onBuka}
          className="w-full bg-[#4a3525] hover:bg-[#5f4430] text-[#fffdfa] py-3.5 rounded-xl tracking-[0.2em] text-xs uppercase font-medium transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center gap-2"
        >
          Buka Surat
        </button>
      </div>
    </div>
  );
}