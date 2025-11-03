import React from 'react';
import { MessageCircle, Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-[#0d47a1] text-white grid place-items-center shadow">
            <MessageCircle size={18} />
          </div>
          <div className="font-bold text-slate-900 tracking-tight text-lg">EPLink</div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#home" className="hover:text-[#0d47a1] transition-colors">Beranda</a>
          <a href="#packages" className="hover:text-[#0d47a1] transition-colors">Paket</a>
          <a href="#reviews" className="hover:text-[#0d47a1] transition-colors">Review</a>
          <a href="#contact" className="hover:text-[#0d47a1] transition-colors">Kontak</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#packages" className="hidden sm:inline-flex items-center gap-2 bg-[#0d47a1] text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow">
            <Rocket size={16} />
            Mulai Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
