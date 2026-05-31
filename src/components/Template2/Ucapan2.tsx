// src/components/Template2/Ucapan2.tsx
"use client";
import { useState } from "react";

export default function Ucapan2() {
  const [ucapanList, setUcapanList] = useState([
    { nama: "Hasan Faisal Bahri", status: "Hadir", pesan: "Selamat menempuh hidup baru Faisal! Semoga sakinah mawaddah warahmah." },
    { nama: "Dzickra", status: "Hadir", pesan: "Lancar sampai hari H bro! Keren banget websitenya." }
  ]);
  const [form, setForm] = useState({ nama: "", status: "Hadir", pesan: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.pesan) return;
    setUcapanList([form, ...ucapanList]);
    setForm({ nama: "", status: "Hadir", pesan: "" });
  };

  return (
    <section className="bg-[#ece2d0] py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8c6d53] font-medium block mb-2">RSVP & Wishes</span>
          <h2 className="text-3xl font-serif text-[#4a3525]">Buku Tamu & Ucapan</h2>
        </div>

        {/* Form Pengisian */}
        <form onSubmit={handleSubmit} className="bg-[#fffdfa] border border-[#d4b295]/40 rounded-2xl p-6 shadow-md space-y-4 mb-8">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#8c6d53] mb-1 font-semibold">Nama Lengkap</label>
            <input
              type="text"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full bg-[#fbf7f0] border border-[#d4b295]/30 rounded-xl px-4 py-2.5 text-sm text-[#4a3525] focus:outline-none focus:border-[#4a3525]"
              placeholder="Masukkan Nama Anda"
            />
          </div>
          {/* Ini adalah bagian form Konfirmasi Kehadiran yang sudah diperbaiki */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#8c6d53] mb-1 font-semibold">Konfirmasi Kehadiran</label>
            <select
              aria-label="Konfirmasi Kehadiran" 
              value={form.status} /* ⬅️ PERBAIKAN: Gunakan form.status */
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full bg-[#fbf7f0] border border-[#d4b295]/30 rounded-xl px-4 py-2.5 text-sm text-[#4a3525] focus:outline-none"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Berhalangan Hadir</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#8c6d53] mb-1 font-semibold">Ucapan / Doa Restu</label>
            <textarea
              value={form.pesan}
              onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              rows={4}
              className="w-full bg-[#fbf7f0] border border-[#d4b295]/30 rounded-xl px-4 py-2.5 text-sm text-[#4a3525] focus:outline-none focus:border-[#4a3525] resize-none"
              placeholder="Tulis ucapan selamat Anda..."
            />
          </div>
          <button type="submit" className="w-full bg-[#4a3525] hover:bg-[#5f4430] text-[#fbf7f0] text-xs tracking-widest uppercase font-semibold py-3 rounded-xl shadow-md transition-colors">
            Kirim Ucapan
          </button>
        </form>

        {/* Daftar Feed Ucapan */}
        <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
          {ucapanList.map((item, idx) => (
            <div key={idx} className="bg-[#fffdfa]/80 border border-[#d4b295]/20 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-serif text-sm font-semibold text-[#4a3525]">{item.nama}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-sans uppercase font-medium ${item.status === 'Hadir' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-[#4a3525]/80 leading-relaxed font-serif italic">"{item.pesan}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}