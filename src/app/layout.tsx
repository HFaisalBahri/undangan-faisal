// src/app/layout.tsx
"use client"; 

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS bawaan AOS
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Inisialisasi AOS saat halaman dimuat
    AOS.init({
      duration: 1000, // Kecepatan animasi (1000ms = 1 detik)
      once: true,     // Animasi hanya jalan sekali (biar tidak kedip-kedip saat scroll naik-turun)
      easing: "ease-out-back", // Gaya gerakan animasi
    });
  }, []);

  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}