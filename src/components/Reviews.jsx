import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aulia Pratama',
    role: 'Owner, Kedai Kopi Loka',
    text: 'Sejak pakai EPLink, respon ke pelanggan makin cepat dan closing naik 35%. Integrasinya gampang!'
  },
  {
    name: 'Nadya Sari',
    role: 'Head of CS, Fashionista ID',
    text: 'Routing otomatisnya membantu tim kami membagi chat tanpa rebutan. Laporan mingguan sangat berguna.'
  },
  {
    name: 'Rio Mahendra',
    role: 'Marketing, GadgetMart',
    text: 'Implementasi cepat, support ramah. Fitur multi-channel bikin kami hadir di semua platform pelanggan.'
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d47a1]/10 text-[#0d47a1] ring-1 ring-[#0d47a1]/20 text-sm">Apa Kata Mereka</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">Review Pelanggan</h2>
          <p className="mt-2 text-slate-600">Bisnis dari berbagai industri telah merasakan dampaknya.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <Quote size={24} className="text-[#0d47a1] opacity-70" />
              <p className="mt-4 text-slate-700">{t.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
                <div className="flex items-center gap-1 text-yellow-400" aria-label="rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
