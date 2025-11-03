import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Reviews from './components/Reviews';
import { Mail, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Packages />
      <Reviews />

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-extrabold">Siap meningkatkan layanan pelanggan Anda?</h3>
            <p className="mt-3 text-slate-600">Hubungi tim kami untuk konsultasi gratis dan demo produk EPLink sesuai kebutuhan bisnis Anda.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="mailto:sales@eplink.id" className="inline-flex items-center gap-2 bg-[#0d47a1] text-white px-5 py-3 rounded-xl shadow hover:opacity-95">
                <Mail size={18} /> sales@eplink.id
              </a>
              <a href="tel:+6281234567890" className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-5 py-3 rounded-xl hover:bg-slate-200">
                <Phone size={18} /> +62 812-3456-7890
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-lg">
            <form className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input type="text" className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#0d47a1] focus:ring-[#0d47a1]" placeholder="Nama lengkap" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#0d47a1] focus:ring-[#0d47a1]" placeholder="email@bisnis.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Nomor WA</label>
                  <input type="tel" className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#0d47a1] focus:ring-[#0d47a1]" placeholder="08xxxxxxxxxx" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#0d47a1] focus:ring-[#0d47a1]" rows={4} placeholder="Ceritakan kebutuhan Anda"></textarea>
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center bg-[#0d47a1] text-white px-5 py-3 rounded-xl font-semibold hover:opacity-95">
                Minta Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} EPLink. Semua hak dilindungi.</div>
          <div className="flex items-center gap-6">
            <a href="#packages" className="hover:text-[#0d47a1]">Paket</a>
            <a href="#reviews" className="hover:text-[#0d47a1]">Review</a>
            <a href="#contact" className="hover:text-[#0d47a1]">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
