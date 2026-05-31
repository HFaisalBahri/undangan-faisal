// src/components/Countdown.tsx
"use client";
import Countdown, { CountdownRenderProps } from 'react-countdown';

export default function HitungMundur() {
  // Tentukan tanggal pernikahan (Tahun, Bulan - 1, Tanggal)
  // Bulan dimulai dari 0 (Januari = 0, Desember = 11)
  const targetDate = new Date(2026, 6, 12); 

  const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
    return (
      <div className="flex justify-center gap-4 md:gap-8">
        {[
          { label: 'Hari', value: days },
          { label: 'Jam', value: hours },
          { label: 'Menit', value: minutes },
          { label: 'Detik', value: seconds },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-md flex items-center justify-center border border-stone-200">
              <span className="text-2xl md:text-3xl font-serif font-bold text-stone-800">{item.value}</span>
            </div>
            <span className="text-xs uppercase tracking-widest mt-2 text-stone-500">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl mb-12 italic" data-aos="fade-up">Menuju Hari Bahagia</h2>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
    </section>
  );
}