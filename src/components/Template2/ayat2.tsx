// src/components/Template2/ayat2.tsx
"use client";
import Image from "next/image";

export default function Ayat2() {
  return (
    <section className="bg-[#fbf7f0] py-20 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Tekstur Titik Halus Latar Belakang */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4a3525_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-md w-full bg-[#fffdfa] border border-[#d4b295]/40 rounded-2xl shadow-md p-8 relative z-10 text-center">
        {/* Garis Bingkai Dalam Klasik */}
        <div className="absolute inset-2 border border-[#d4b295]/20 rounded-xl pointer-events-none" />

        {/* Foto Bersama Berbentuk Lingkaran Sesuai Acara */}
        <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-[#c5a487] shadow-lg relative mx-auto mb-8 bg-[#ece2d0]">
          <Image
            src="/images/5.png" // Tempat naruh foto berdua nanti di folder public/images
            alt="Faisal & Nisa"
            fill
            className="object-cover"
          />
          {/* Tanda penampung jika foto belum dimasukkan */}
        </div>

        {/* Teks Ayat Al-Qur'an */}
        <div className="space-y-4 px-2 relative z-10">
          <p className="text-sm md:text-base text-[#4a3525] font-serif leading-relaxed italic">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          
          {/* Sumber Surah */}
          <p className="text-xs font-semibold tracking-widest text-[#8c6d53] uppercase font-sans pt-2">
            (QS. Ar-Ruum: 21)
          </p>
        </div>
      </div>
    </section>
  );
}