// src/components/Template2/mempelaiWanita2.tsx
"use client";
import Image from "next/image";

export default function MempelaiWanita2() {
  return (
    <section className="bg-[#ece2d0] pb-16 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Background tekstur titik halus tetap dipertahankan */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4a3525_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-md w-full bg-[#fbf7f0]/95 border border-[#d4b295]/60 rounded-2xl shadow-xl p-6 relative z-10 text-center">
        
        {/* Bingkai Klasik Tipis di Dalam Kartu */}
        <div className="absolute inset-2 border border-[#d4b295]/30 rounded-xl pointer-events-none" />

        {/* Kontainer Utama Foto & Teks Vertikal (Dibalik: Teks Kiri, Foto Kanan) */}
        <div className="flex flex-row-reverse justify-between items-center gap-4 mb-6 relative">
          
          {/* Foto dengan Bingkai Melengkung Klasik (Arch Frame) */}
          <div className="w-[75%] h-80 rounded-t-full overflow-hidden border-4 border-[#c5a487] shadow-lg relative bg-[#d4b295]/20">
            <Image
              src="/images/11.png" // Tempat naruh foto pengantin wanita nanti di folder public/images
              alt="The Bride"
              fill
              className="object-cover"
            />
            {/* Tanda penampung jika foto belum dimasukkan */}
           
          </div>

          {/* Teks Vertikal "THE BRIDE" di sebelah kiri */}
          <div className="w-[20%] flex items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-[#8c6d53]/40 tracking-[0.3em] font-light uppercase select-none [writing-mode:vertical-lr] -rotate-180">
              THE BRIDE
            </h3>
          </div>
        </div>

        {/* Detail Biodata Nama Pengantin Wanita */}
        <div className="text-right px-2 mt-4 relative z-10">
          <h2 className="text-2xl font-serif text-[#4a3525] font-semibold mb-2 tracking-wide">
            Jihan
          </h2>
          <p className="text-[10px] text-[#8c6d53] font-medium uppercase tracking-widest mb-4">
            Putri Kedua Dari
          </p>
          <p className="text-sm text-[#4a3525] font-serif leading-relaxed">
            Bapak. [Nama Ayah Wanita] <br />
            <span className="text-xs text-[#8c6d53]/70 font-sans italic">&</span> <br />
            Ibu. [Nama Ibu Wanita]
          </p>
        </div>

        {/* Tombol Instagram Wanita */}
        <div className="mt-8 relative z-10 text-right">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#4a3525] hover:bg-[#5f4430] text-[#fbf7f0] text-xs tracking-widest uppercase px-6 py-2.5 rounded-xl shadow transition-all duration-300 font-medium active:scale-95"
          >
            @instagram
          </a>
        </div>
      </div>
    </section>
  );
}