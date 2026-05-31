// src/app/desain2/page.tsx
"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

// Import Semua Komponen Template 2
import CoverSurat from "../../components/Template2/coversurat"; 
import Header2 from "../../components/Template2/header2";
import Ayat2 from "../../components/Template2/ayat2";
import Mempelai2 from "../../components/Template2/mempelai2";
import MempelaiWanita2 from "../../components/Template2/mempelaiWanita2";
import Countdown2 from "../../components/Template2/Countdown2";
import Tambahan2 from "../../components/Template2/Tambahan2";
import Acara2 from "../../components/Template2/Acara2";
import Hadiah2 from "../../components/Template2/Hadiah2";
import Galeri2 from "../../components/Template2/galeri2";
import Ucapan2 from "../../components/Template2/Ucapan2";

// Import Pemutar Musik (pastikan letak foldernya benar sesuai milikmu)
import MusicPlayer2 from "../../components/Template2/MusicPlayer2";

function UndanganContentBaru() {
  const searchParams = useSearchParams();
  const tamu = searchParams.get("to") || "Nama Tamu";
  
  // State utama sebagai "Saklar"
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="bg-[#fbf7f0] min-h-screen text-[#4a3525] selection:bg-[#d4b295] selection:text-[#4a3525] relative">
      
      {/* 1. COVER SURAT (Hilang setelah tombol diklik) */}
      {!isOpened && (
        <CoverSurat tamu={tamu} onBuka={() => setIsOpened(true)} />
      )}

      {/* 2. PEMUTAR MUSIK (Menerima sinyal saklar "isOpened") */}
      <MusicPlayer2 isOpened={isOpened} />

      {/* 3. ISI UNDANGAN UTAMA (Muncul dari bawah setelah dibuka) */}
      {isOpened && (
        <div className="animate-fadeIn">
          <Header2 />
          <Ayat2 />
          <Mempelai2 />
          <MempelaiWanita2 />
          <Countdown2 />
          <Tambahan2 />
          <Acara2 />
          <Hadiah2 />
          <Galeri2 />
          <Ucapan2 />
        </div>
      )}
    </main>
  );
}

export default function Desain2Page() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center bg-[#4a3525] text-[#d4b295]">Mempersiapkan Surat...</div>}>
      <UndanganContentBaru />
    </Suspense>
  );
}