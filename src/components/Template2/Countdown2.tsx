// src/components/Template2/countdown2.tsx
"use client";
import { useState, useEffect } from "react";

export default function Countdown2() {
  const [targetDate, setTargetDate] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });

  useEffect(() => {
    // Target waktu: 12 Desember 2026
    setTargetDate(new Date("2026-12-12T09:00:00").getTime());
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        menit: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        detik: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const urutanWaktu = [
    { label: "Hari", nilai: timeLeft.hari },
    { label: "Jam", nilai: timeLeft.jam },
    { label: "Menit", nilai: timeLeft.menit },
    { label: "Detik", nilai: timeLeft.detik },
  ];

  return (
    <section className="bg-[#ece2d0] py-16 px-4 text-center relative overflow-hidden">
      <div className="max-w-md mx-auto relative z-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#8c6d53] font-medium">Waktu Bahagia</span>
        <h2 className="text-3xl font-serif text-[#4a3525] mt-2 mb-8">Menghitung Hari</h2>

        {/* Layout Kotak Angka Minimalis Cokelat */}
        <div className="grid grid-cols-4 gap-2">
          {urutanWaktu.map((item, index) => (
            <div key={index} className="bg-[#fbf7f0] border border-[#d4b295]/60 rounded-xl py-4 shadow-sm">
              <span className="block text-2xl font-semibold font-serif text-[#4a3525]">{item.nilai}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#8c6d53] mt-1 block">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}