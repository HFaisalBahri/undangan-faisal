// src/components/Template2/Hadiah2.tsx
"use client";
import { useState } from "react";

export default function Hadiah2() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const rekening = [
    { bank: "Bank BCA", nomor: "1234567890", atasNama: "Faisal Bahri" },
    { bank: "Bank Mandiri", nomor: "0987654321", atasNama: "Nisa" }
  ];

  const handleCopy = (nomor: string, index: number) => {
    navigator.clipboard.writeText(nomor);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="bg-[#fbf7f0] py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#8c6d53] font-medium block mb-2">Wedding Gift</span>
        <h2 className="text-3xl font-serif text-[#4a3525] mb-4">Kado Digital</h2>
        <p className="text-xs text-[#8c6d53] mb-8 max-w-xs mx-auto">Doa restu Anda adalah karunia terindah, namun jika ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui rekening berikut:</p>

        <div className="space-y-4">
          {rekening.map((rek, idx) => (
            <div key={idx} className="bg-[#fffdfa] border border-[#d4b295]/40 rounded-2xl p-6 shadow-sm text-left relative overflow-hidden">
              <div className="absolute top-4 right-6 font-serif italic text-[#8c6d53]/20 font-bold text-lg">{rek.bank}</div>
              <p className="text-xs text-[#8c6d53] uppercase font-semibold tracking-wider mb-1">{rek.bank}</p>
              <p className="text-xl font-serif text-[#4a3525] tracking-wide font-semibold mb-1">{rek.nomor}</p>
              <p className="text-xs text-[#4a3525]/70 mb-4">a.n. {rek.atasNama}</p>
              
              <button
                onClick={() => handleCopy(rek.nomor, idx)}
                className="w-full sm:w-auto bg-[#e6dcce] hover:bg-[#d4b295]/40 text-[#4a3525] text-[10px] tracking-widest uppercase font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {copiedIndex === idx ? "✓ Berhasil Disalin" : "Copy Rekening"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}