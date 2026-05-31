// src/components/Template2/Tambahan2.tsx
"use client";

export default function Tambahan2() {
  const addToCalendar = () => {
    const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Faisal+%26+Nisa&dates=20261212T020000Z/20261212T100000Z&details=Selamat+datang+di+pernikahan+kami.&location=Gedung+Pertemuan+Bahagia,+Cirebon";
    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#ece2d0] py-12 px-4 text-center relative overflow-hidden">
      {/* Tekstur Titik Halus Latar Belakang */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4a3525_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-md mx-auto relative z-10">
        {/* Tombol Simpan Tanggal Saja (Minimalis & Bersih) */}
        <button
          onClick={addToCalendar}
          className="inline-flex items-center gap-2 bg-[#4a3525] hover:bg-[#5f4430] text-[#fbf7f0] text-xs tracking-widest uppercase px-6 py-3 rounded-xl shadow-md font-medium transition-all active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          Simpan Tanggal ke Kalender
        </button>
      </div>
    </section>
  );
}