// src/app/page.tsx
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Mempelai from "../components/mempelai";
import Acara from "../components/Acara";
import HitungMundur from "../components/Countdown";
import MusicPlayer from "../components/MusicPlayer";

function UndanganContent() {
  const searchParams = useSearchParams();
  const tamu = searchParams.get("to") || "Tamu Undangan";

  return (
    <main className="relative">
      {/* SECTION 1: HERO */}
      <section className="min-h-screen bg-stone-100 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> 
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070" 
            alt="Wedding" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
          <p className="uppercase tracking-[0.3em] text-sm mb-2 font-light">Dear, {tamu}</p>
          <p className="uppercase tracking-[0.2em] text-xs mb-8 font-light italic">You are invited to the wedding of</p>
          
          <h1 className="text-6xl md:text-8xl mb-4 font-serif italic">
            Faisal & Nisa
          </h1>
          
          <p className="text-lg md:text-xl font-light mb-10 tracking-widest">
            12 . 12 . 2026
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="bg-white/20 backdrop-blur-md border border-white/50 px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Buka Undangan
          </button>
        </div>
      </section>

      {/* SECTION 2: PROFIL MEMPELAI */}
      <Mempelai />

      {/* SECTION 3: COUNTDOWN */}
      <HitungMundur />

      {/* SECTION 4: INFORMASI ACARA */}
      <Acara />

      {/* MUSIK PLAYER (Floating) */}
      <MusicPlayer />
      
      {/* FOOTER SEDERHANA */}
      <footer className="py-8 bg-stone-100 text-center text-stone-400 text-xs tracking-widest uppercase">
        Created with love by Faisal &copy; 2026
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center bg-stone-100 font-serif italic text-stone-500">Memuat Undangan...</div>}>
      <UndanganContent />
    </Suspense>
  );
}



git config --global user.email "faisalbahriii0808@gmail.com"
git config --global user.name "HFaisalBahri"