// src/components/Template2/Galeri2.tsx
"use client";
import Image from "next/image";

export default function Galeri2() {
  // Ini daftar nama file foto yang harus kamu siapkan di folder public/images/
  const daftarFoto = [
    { src: "/images/13.png"},
    { src: "/images/14.JPG"},
    { src: "/images/15.JPG"},
    { src: "/images/17.JPG" },
  ];

  return (
    <section className="bg-[#fbf7f0] py-16 px-4 flex flex-col items-center">
      <div className="max-w-md w-full text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#8c6d53] font-medium block mb-2">
          Our Sweet Memories
        </span>
        <h2 className="text-3xl font-serif text-[#4a3525] mb-8">Galeri Bahagia</h2>

        {/* Grid Tata Letak Foto Estetik */}
        <div className="grid grid-cols-2 gap-3">
          
          {/* Foto 1: Model Bingkai Melengkung ke Atas (Tinggi) */}
          <div className="relative h-72 rounded-t-full shadow-md overflow-hidden border-2 border-[#d4b295]/40 bg-[#ece2d0]">
            <Image
              src={daftarFoto[0].src}
              alt="Galeri 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] text-[#8c6d53] font-serif italic p-2 bg-[#fbf7f0]/60 hover:opacity-0 transition-opacity text-center">
              <span>{daftarFoto[0].label}</span>
              
            </div>
          </div>

          {/* Foto 2: Model Standar */}
          <div className="relative h-48 rounded-2xl shadow-md overflow-hidden border-2 border-[#d4b295]/40 bg-[#ece2d0] self-end">
            <Image
              src={daftarFoto[1].src}
              alt="Galeri 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] text-[#8c6d53] font-serif italic p-2 bg-[#fbf7f0]/60 hover:opacity-0 transition-opacity text-center">
              <span>{daftarFoto[1].label}</span>
            </div>
          </div>

          {/* Foto 3: Model Standar */}
          <div className="relative h-48 rounded-2xl shadow-md overflow-hidden border-2 border-[#d4b295]/40 bg-[#ece2d0]">
            <Image
              src={daftarFoto[2].src}
              alt="Galeri 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] text-[#8c6d53] font-serif italic p-2 bg-[#fbf7f0]/60 hover:opacity-0 transition-opacity text-center">
              <span>{daftarFoto[2].label}</span>
            </div>
          </div>

          {/* Foto 4: Model Bingkai Melengkung ke Atas (Tinggi) */}
          <div className="relative h-72 rounded-t-full shadow-md overflow-hidden border-2 border-[#d4b295]/40 bg-[#ece2d0] -mt-24">
            <Image
              src={daftarFoto[3].src}
              alt="Galeri 4"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] text-[#8c6d53] font-serif italic p-2 bg-[#fbf7f0]/60 hover:opacity-0 transition-opacity text-center">
              <span>{daftarFoto[3].label}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}