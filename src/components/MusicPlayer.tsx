// src/components/MusicPlayer.tsx
"use client";
import { useState, useEffect, useRef } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Logika agar musik bisa diputar saat ada interaksi pertama (Buka Undangan)
  useEffect(() => {
    const playOnInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true));
        document.removeEventListener("click", playOnInteraction);
      }
    };
    document.addEventListener("click", playOnInteraction);
    return () => document.removeEventListener("click", playOnInteraction);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/musik-nikah.mp3" loop />
      
      <button 
        onClick={toggleMusic}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
          isPlaying ? "bg-white text-stone-800 animate-spin-slow" : "bg-stone-800 text-white"
        }`}
      >
        {isPlaying ? (
          <span className="text-xl">🎵</span>
        ) : (
          <span className="text-xl">🔇</span>
        )}
      </button>

      {/* Efek Animasi Piringan Hitam di Tailwind */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }
      `}</style>
    </div>
  );
}