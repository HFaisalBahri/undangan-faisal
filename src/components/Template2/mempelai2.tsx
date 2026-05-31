// src/components/Template2/mempelai2.tsx
"use client";
import Image from "next/image";

export default function Mempelai2() {
  return (
    <section className="min-h-screen bg-[#ece2d0] py-16 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Background tekstur halus bertema kayu/tanah hangat */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4a3525_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-md w-full bg-[#fbf7f0]/95 border border-[#d4b295]/60 rounded-2xl shadow-xl p-6 mt-6 relative z-10 text-center">
        
        {/* Bingkai Klasik Tipis di Dalam Kartu */}
        <div className="absolute inset-2 border border-[#d4b295]/30 rounded-xl pointer-events-none" />

        {/* Kontainer Utama Foto & Teks Vertikal (Sesuai Layout Screenshot) */}
        <div className="flex justify-between items-center gap-4 mb-6 relative">
          
          {/* Foto dengan Bingkai Melengkung Klasik (Arch Frame) bertema Cokelat */}
          <div className="w-[59%] h-80 rounded-t-full overflow-hidden border-4 border-[#c5a487] shadow-lg relative bg-[#d4b295]/20">
            <Image
              src="/images/7.png" // Tempat naruh foto pengantin pria nanti
              alt="The Groom"
              fill
              className="object-contain"
            />
            {/* Tanda penampung jika foto belum dimasukkan */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-xs font-serif italic text-[#8c6d53] p-4 bg-[#e6dcce]">
              <span>Foto Pengantin</span>
              <span className="text-[10px] mt-1 text-[#8c6d53]/70">(Bingkai Melengkung)</span>
            </div> */}
          </div>

          {/* Teks Vertikal "THE GROOM" warna cokelat redup */}
          <div className="w-[20%] flex items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-[#8c6d53]/40 tracking-[0.3em] font-light uppercase select-none [writing-mode:vertical-lr] rotate-180">
              THE GROOM
            </h3>
          </div>
        </div>

        {/* Detail Biodata Nama Pengantin */}
        <div className="text-left px-2 mt-4 relative z-10">
          <h2 className="text-2xl font-serif text-[#4a3525] font-semibold mb-2 tracking-wide">
            Ghibran Akbar Fathiar
          </h2>
          <p className="text-[10px] text-[#8c6d53] font-medium uppercase tracking-widest mb-4">
            Putra Pertama Dari
          </p>
          <p className="text-sm text-[#4a3525] font-serif leading-relaxed">
            Bapak. [Nama Ayah] <br />
            <span className="text-xs text-[#8c6d53]/70 font-sans italic">&</span> <br />
            Ibu. [Nama Ibu]
          </p>
        </div>

        {/* Tombol Instagram dengan Cokelat Tua */}
        <div className="mt-8 relative z-10">
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