// src/components/Acara.tsx
export default function Acara() {
  return (
    <section className="py-20 bg-stone-100 text-stone-800 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 
          className="font-serif text-3xl text-center mb-12 italic"
          data-aos="fade-up"
        >
          Informasi Acara
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kartu Akad Nikah */}
          <div 
            className="bg-white p-8 rounded-2xl shadow-sm text-center border border-stone-200"
            data-aos="fade-right"
          >
            <h3 className="font-serif text-2xl mb-4">Akad Nikah</h3>
            <div className="space-y-2 mb-6 text-stone-600">
              <p className="font-medium">Sabtu, 12 Desember 2026</p>
              <p>08.00 - 10.00 WIB</p>
              <p className="text-sm mt-4 font-semibold">Kediaman Mempelai Wanita</p>
              <p className="text-xs italic text-stone-500">Susukanlebak, Cirebon</p>
            </div>
          </div>

          {/* Kartu Resepsi */}
          <div 
            className="bg-white p-8 rounded-2xl shadow-sm text-center border border-stone-200"
            data-aos="fade-left"
          >
            <h3 className="font-serif text-2xl mb-4">Resepsi</h3>
            <div className="space-y-2 mb-6 text-stone-600">
              <p className="font-medium">Sabtu, 12 Desember 2026</p>
              <p>11.00 - Selesai</p>
              <p className="text-sm mt-4 font-semibold">Gedung Serbaguna Utama</p>
              <p className="text-xs italic text-stone-500">Jl. Raya Susukanlebak No. 123</p>
            </div>
          </div>

        </div>

        {/* Tombol Interaksi */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition-all shadow-lg text-sm"
            data-aos="zoom-in"
          >
            Lihat Lokasi Google Maps
          </a>
          
          <a 
            href="https://wa.me/6285156546847?text=Halo%20Faisal,%20Saya%20akan%20hadir%20di%20acara%20pernikahanmu!" 
            target="_blank"
            className="inline-block border border-stone-800 text-stone-800 px-8 py-3 rounded-full hover:bg-stone-800 hover:text-white transition-all text-sm"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Konfirmasi Kehadiran (RSVP)
          </a>
        </div>
      </div>
    </section>
  );
}