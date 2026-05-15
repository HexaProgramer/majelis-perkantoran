
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
                src={`/pengajar/${name.split(" ").pop()}.png`}
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
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <a
              href="https://instagram.com/masjidpendidikanshalahuddin" 
              target="_blank"
              className="hover:text-yellow-400 transition"
              >
                @masjidpendidikanshalahuddin
              </a>
              </div>
              <div className="bg-blue-800 rounded-xl p-4 flex items-center gap-4">
                <span className="text-yellow-400 text-2xl">📞</span>
                <a
                href="tel:+6285117271453"
                className="hover:text-yellow-400 transition"
                >
                  +62 851-1727-1453
                </a>
              </div>
              <div className="bg-blue-800 rounded-xl p-4 flex items-center gap-4">
              <span className="text-yellow-400 text-2xl">📍</span>
              <a href="https://maps.app.goo.gl/2nGQozgM67Xxo7B37" target="_blank" className="hover:text-yellow-400 transition">
              Jl. Garuda, Kel. Sindangpalay, Kec. Cibeureum, Kota Sukabumi
            </a>
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