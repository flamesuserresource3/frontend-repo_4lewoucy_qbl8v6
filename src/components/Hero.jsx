import React from 'react';
import { Star, Shield, Zap, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d47a1] via-[#0d47a1]/90 to-indigo-700" />
      <svg className="absolute inset-0 opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="100%" stopColor="#93c5fd"/>
          </linearGradient>
        </defs>
        <g fill="url(#g)">
          <circle cx="120" cy="140" r="120"/>
          <circle cx="700" cy="80" r="80"/>
          <circle cx="680" cy="520" r="150"/>
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 items-center gap-10 text-white">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/30 text-sm mb-4">
            <Star size={16} className="text-yellow-300" />
            Solusi Live Chat Terbaik untuk Bisnis Indonesia
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Tingkatkan Penjualan dengan Live Chat Cerdas dari EPLink
          </h1>
          <p className="mt-4 text-white/90 max-w-xl">
            Hubungkan pelanggan secara instan, jawab lebih cepat, dan ubah percakapan menjadi transaksi. Paket fleksibel untuk semua skala bisnis.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#packages" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-[#0d47a1] font-semibold shadow hover:shadow-md transition-all">
              Lihat Paket
            </a>
            <a href="#reviews" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/15">
              Lihat Review
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 ring-1 ring-white/20">
              <Shield size={18} className="text-white" />
              Enkripsi & Keamanan
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 ring-1 ring-white/20">
              <Zap size={18} className="text-white" />
              Respon Super Cepat
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 ring-1 ring-white/20">
              <Headphones size={18} className="text-white" />
              Support 24/7
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white/10 rounded-2xl p-1 ring-1 ring-white/30">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-[#0d47a1]">Live Chat Dashboard</div>
                <div className="text-xs text-slate-500">Realtime</div>
              </div>
              <div className="mt-4 space-y-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#0d47a1]/10 grid place-items-center text-[#0d47a1] font-bold">{i}</div>
                    <div className="flex-1 bg-slate-50 rounded-xl p-3">
                      <div className="text-sm font-medium text-slate-900">Pelanggan #{i}</div>
                      <div className="text-sm text-slate-600">Halo, saya ingin bertanya tentang paket yang cocok.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
