// src/components/Template2/Acara2.tsx
"use client";

export default function Acara2() {
  return (
    <section className="bg-[#fbf7f0] py-20 px-4 relative overflow-hidden flex flex-col items-center">
      {/* Tekstur Titik Halus Latar Belakang */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4a3525_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-md w-full relative z-10">
        
        {/* Judul Section */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8c6d53] font-medium block mb-2">
            RANGKAIAN ACARA
          </span>
          <h2 className="text-4xl font-serif text-[#4a3525] relative inline-block pb-3">
            Akad & Resepsi
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-[#d4b295]" />
          </h2>
        </div>

        {/* KONTEN TIMELINE */}
        <div className="relative border-l-2 border-[#d4b295]/40 ml-4 md:ml-6 space-y-12 pb-4">
          
          {/* --- ACARA 1: AKAD NIKAH --- */}
          <div className="relative pl-8 group">
            
            {/* Titik Point Bulat dengan Ikon Cincin/Simbol di Garis Timeline */}
            <div className="absolute -left-[11px] top-1.5 bg-[#4a3525] text-[#fbf7f0] w-5 h-5 rounded-full border-4 border-[#fbf7f0] shadow flex items-center justify-center transition-transform duration-300 group-hover:scale-125" />

            {/* Kartu Acara */}
            <div className="bg-[#fffdfa] border border-[#d4b295]/30 shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
              {/* Angka Transparan Besar di Pojok */}
              <div className="absolute top-2 right-4 text-7xl font-serif text-[#4a3525]/5 select-none font-bold">
                01
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4a3525]/10 text-[#4a3525] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-md">
                  Moment Sakral
                </span>
              </div>

              <h3 className="text-2xl font-serif text-[#4a3525] font-semibold mb-1">
                Akad Nikah
              </h3>
              
              <p className="text-xs text-[#8c6d53] uppercase tracking-wider font-medium mb-4">
                SABTU, 12 DESEMBER 2026
              </p>

              <div className="border-t border-b border-[#d4b295]/20 py-3 my-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#4a3525] font-serif font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#8c6d53]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Pukul 09.00 - 10.30 WIB</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#8c6d53] font-sans leading-relaxed pl-6">
                  <span>Kediaman Mempelai Wanita<br />Susukanlebak, Cirebon</span>
                </div>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#4a3525] hover:bg-[#5f4430] text-[#fbf7f0] text-[11px] tracking-widest uppercase px-6 py-3 rounded-xl shadow-md font-medium transition-all duration-300 active:scale-95 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Petunjuk Lokasi
              </a>
            </div>
          </div>

          {/* --- ACARA 2: RESEPSI PERNIKAHAN --- */}
          <div className="relative pl-8 group">
            
            {/* Titik Point Bulat di Garis Timeline */}
            <div className="absolute -left-[11px] top-1.5 bg-[#8c6d53] text-[#fbf7f0] w-5 h-5 rounded-full border-4 border-[#fbf7f0] shadow flex items-center justify-center transition-transform duration-300 group-hover:scale-125" />

            {/* Kartu Acara */}
            <div className="bg-[#fffdfa] border border-[#d4b295]/30 shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
              {/* Angka Transparan Besar di Pojok */}
              <div className="absolute top-2 right-4 text-7xl font-serif text-[#4a3525]/5 select-none font-bold">
                02
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#8c6d53]/10 text-[#8c6d53] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-md">
                  Pesta Perayaan
                </span>
              </div>

              <h3 className="text-2xl font-serif text-[#4a3525] font-semibold mb-1">
                Resepsi Pernikahan
              </h3>
              
              <p className="text-xs text-[#8c6d53] uppercase tracking-wider font-medium mb-4">
                SABTU, 12 DESEMBER 2026
              </p>

              <div className="border-t border-b border-[#d4b295]/20 py-3 my-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#4a3525] font-serif font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#8c6d53]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Pukul 11.00 WIB - Selesai</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#8c6d53] font-sans leading-relaxed pl-6">
                  <span>Gedung Pertemuan Bahagia<br />Jl. Raya Cirebon No. 88</span>
                </div>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8c6d53] hover:bg-[#755a43] text-[#fbf7f0] text-[11px] tracking-widest uppercase px-6 py-3 rounded-xl shadow-md font-medium transition-all duration-300 active:scale-95 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Petunjuk Lokasi
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}