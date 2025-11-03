import React from 'react';
import { CheckCircle, Rocket, Shield, Users } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    price: 'Rp149.000',
    period: '/bulan',
    badge: 'UMKM',
    features: [
      '1 agen aktif',
      'Integrasi WhatsApp & Web',
      'Kustomisasi widget dasar',
      'Riwayat chat 7 hari',
      'Analitik dasar',
    ],
  },
  {
    name: 'Growth',
    price: 'Rp399.000',
    period: '/bulan',
    highlight: true,
    badge: 'Terpopuler',
    features: [
      '5 agen aktif',
      'Routing otomatis & quick replies',
      'Integrasi Instagram & Facebook',
      'Riwayat chat 90 hari',
      'Analitik lanjutan',
      'Jam operasional & auto-away',
    ],
  },
  {
    name: 'Scale',
    price: 'Rp899.000',
    period: '/bulan',
    badge: 'Enterprise',
    features: [
      'Agen tanpa batas',
      'Multi-channel (Email, Telegram, dll.)',
      'SLA & prioritas support',
      'SSO & keamanan tingkat lanjut',
      'Integrasi API & Webhook',
      'Pelatihan tim & onboarding',
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d47a1]/10 text-[#0d47a1] ring-1 ring-[#0d47a1]/20 text-sm">Pilihan Paket Fleksibel</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">Pilih Paket Sesuai Kebutuhan</h2>
          <p className="mt-2 text-slate-600">Skalakan layanan live chat Anda mulai dari UMKM hingga Enterprise.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-6 bg-white border ${pkg.highlight ? 'border-[#0d47a1] shadow-xl' : 'border-slate-200 shadow-lg'}`}
            >
              {pkg.badge && (
                <span className={`absolute -top-3 left-6 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${pkg.highlight ? 'bg-[#0d47a1] text-white' : 'bg-slate-100 text-slate-700'} shadow`}>
                  {pkg.highlight ? <Rocket size={14} /> : <Shield size={14} />}
                  {pkg.badge}
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-[#0d47a1]">{pkg.price}</div>
                  <div className="text-sm text-slate-500">{pkg.period}</div>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-[#0d47a1] mt-0.5" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition-colors ${pkg.highlight ? 'bg-[#0d47a1] text-white hover:opacity-95' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-slate-600">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-[#0d47a1]" />
            Dipercaya 2.500+ bisnis
          </div>
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-[#0d47a1]" />
            SLA 99.9% uptime
          </div>
        </div>
      </div>
    </section>
  );
}
