
'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ nama: '', whatsapp: '', email: '', pesan: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ nama: '', whatsapp: '', email: '', pesan: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  const programs = [
    { title: "Islamic Character Building", desc: "Pembinaan mentalitas kerja berbasis nilai Islam: integritas, amanah, disiplin, dan tanggung jawab." },
    { title: "Tahsin Al-Quran", desc: "Standarisasi bacaan Al-Quran bagi karyawan sesuai makharijul huruf dan tajwid." },
    { title: "Kajian Tematik Perkantoran", desc: "Pembahasan isu kerja harian dari sudut pandang syariat Islam." },
    { title: "Sirah Nabawiyah", desc: "Kajian kepemimpinan Rasulullah yang relevan dengan dunia profesional." },
  ];

  const keunggulan = [
    { title: "Pengajar Berkompeten", desc: "Dibimbing pengajar ahli dengan kualifikasi agama mumpuni dan pemahaman dunia profesional." },
    { title: "Kurikulum Aplikatif", desc: "Relevan dan adaptif dengan dunia kerja profesional modern." },
    { title: "Sistem Evaluasi", desc: "Kurikulum terstruktur dengan sistem evaluasi dan feedback yang transparan." },
    { title: "Pendekatan Adaptif", desc: "Pendekatan profesional, komunikatif, dan adaptif sesuai kebutuhan perusahaan." },
  ];

  const pengajar = [
    "Ust. Muhammad Ilham", "Ust. Auliya Bil Allafa", "Ust. Ryan Alfatih",
    "Ustadz Agung Gunawan", "Ustadzah Ai", "Ustadzah Nadia",
  ];

  const klien = [
    "Sono Coffee Grup", "Arafa Hijab", "PT. Kujang Marinas Utama", "Gudang Steak",
    "Toko Maheer", "SDIT Annadwah", "FKPQ Kec. Cisaat", "Sukabumi Football Academy",
    "BC HNI Sukabumi 1", "WestSteel", "PD. Sari Gandum Sejahtera", "Regu Kancil",
  ];

  return (
    <main className="min-h-screen bg-white">

      <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="font-bold text-lg tracking-wide">Majelis Perkantoran</div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#tentang" className="hover:text-yellow-400 transition">Tentang</a>
          <a href="#program" className="hover:text-yellow-400 transition">Program</a>
          <a href="#keunggulan" className="hover:text-yellow-400 transition">Keunggulan</a>
          <a href="#pengajar" className="hover:text-yellow-400 transition">Pengajar</a>
          <a href="#portofolio" className="hover:text-yellow-400 transition">Portofolio</a>
          <a href="#kontak" className="hover:text-yellow-400 transition">Kontak</a>
        </div>
      </nav>

      <section className="bg-blue-900 text-white text-center py-32 px-8">
        <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-widest">Masjid Pendidikan Shalahuddin</p>
        <h1 className="text-6xl font-bold mb-6">Majelis Perkantoran</h1>
        <p className="text-2xl text-yellow-300 mb-6 italic">Menguatkan Nilai, Menjaga Profesionalisme di Dunia Kerja</p>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Membangun karakter islami dan meningkatkan kualitas spiritual karyawan tanpa mengganggu produktivitas kerja.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a href="#kontak" className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg">Daftarkan Kantor Anda</a>
          <a href="#program" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition text-lg">Lihat Program</a>
        </div>
      </section>

      <section id="tentang" className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Pengenalan</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Perusahaan modern membutuhkan lebih dari sekadar kinerja. Dibutuhkan SDM yang berintegritas dan memiliki kematangan emosional. Majelis Perkantoran menawarkan solusi pembinaan yang aplikatif dan relevan dengan dunia kerja, mengubah momentum spiritual menjadi pendorong etos kerja dan loyalitas tim yang lebih solid.
          </p>
        </div>
      </section>

      <section id="program" className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Spesifikasi Program</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition hover:-translate-y-1">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-yellow-400 font-bold">{i + 1}</span>
                </div>
                <h3 className="font-bold text-blue-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="keunggulan" className="py-20 px-8 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Keunggulan Program</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keunggulan.map((item, i) => (
              <div key={i} className="bg-blue-800 rounded-2xl p-6 border border-blue-700 hover:bg-blue-700 transition">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-900 font-bold">✓</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pengajar" className="py-20 px-8x bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Profil Pengajar</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-center text-gray-500 mb-12">Asatidzah berkompeten untuk menjamin standar pembelajaran yang inspiratif dan berkualitas</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {pengajar.map((name, i) => (
              <div key={i} className="text-center">
                <img
                src={`/pengajar/${name.split(" ").pop()}.jpg`}
                alt={name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <p className="text-sm font-medium text-gray-700 leading-tight">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portofolio" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Portofolio Klien</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {klien.map((nama, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition">
                <p className="font-medium text-blue-900 text-sm">{nama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="bg-blue-900 text-white py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Segera Daftarkan Kantor Anda!</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-center text-gray-300 mb-12 text-lg">Hubungi kami atau isi form di bawah ini</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="bg-blue-800 rounded-xl p-4 flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">📸</span>
                <span>@masjidpendidikanshalahuddin</span>
              </div>
              <div className="bg-blue-800 rounded-xl p-4 flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">📞</span>
                <span>+62 851-1727-1453</span>
              </div>
              <div className="bg-blue-800 rounded-xl p-4 flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">📍</span>
                <span>Jl. Garuda, Kel. Sindangpalay, Kec. Cibeureum, Kota Sukabumi</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama Perusahaan / Anda"
                value={form.nama}
                onChange={e => setForm({...form, nama: e.target.value})}
                required
                className="bg-blue-800 text-white placeholder-blue-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Nomor Whatsap"
                value={form.whatsapp}
                onChange={e => setForm({...form, whatsapp: e.target.value})}
                required
                className="bg-blue-800 text-white placeholder-blue-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                required
                className="bg-blue-800 text-white placeholder-blue-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="Pesan / Pertanyaan"
                value={form.pesan}
                onChange={e => setForm({...form, pesan: e.target.value})}
                required
                rows={4}
                className="bg-blue-800 text-white placeholder-blue-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 text-blue-900 font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
              >
                {loading ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
              {status === 'success' && <p className="text-green-400 text-center">Pesan berhasil dikirim!</p>}
              {status === 'error' && <p className="text-red-400 text-center">Gagal mengirim, coba lagi.</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-blue-950 text-gray-400 text-center py-6 text-sm">
        <p>Powered by MIK — Masjid Pendidikan Shalahuddin</p>
        <p className="mt-1">Support by Hanima & Dompet Dhuafa</p>
      </footer>

    </main>
  );
}