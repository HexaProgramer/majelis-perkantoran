'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [form, setForm] = useState({ nama: '', whatsapp: '', email: '', pesan: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselPaused, setCarouselPaused] = useState(false);

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
        window.location.href = '/terima-kasih';
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
  { title: "Forum Group Discussion", desc: "Diskusi kelompok interaktif membahas solusi islami atas tantangan nyata di lingkungan kerja." },
  { title: "Kajian Eksekutif", desc: "Program khusus untuk level manajerial dan eksekutif dalam membangun kepemimpinan berbasis nilai Islam." },
];

  const keunggulan = [
    { title: "Pengajar Berkompeten", desc: "Dibimbing pengajar ahli dengan kualifikasi agama mumpuni dan pemahaman dunia profesional." },
    { title: "Kurikulum Aplikatif", desc: "Relevan dan adaptif dengan dunia kerja profesional modern." },
    { title: "Sistem Evaluasi", desc: "Kurikulum terstruktur dengan sistem evaluasi dan feedback yang transparan." },
    { title: "Pendekatan Adaptif", desc: "Pendekatan profesional, komunikatif, dan adaptif sesuai kebutuhan perusahaan." },
  ];

  const pengajar = [
  "Ustaz Muhammad Ilham", "Ustaz Auliya Bil Allafa", "Ustaz Ryan Alfatih",
  "Ustaz Agung Gunawan", "Ustazah Ai", "Ustazah Nadia",
];

  const klien = [
  "Sono Coffee Grup", "Arafa Hijab", "PT. Kujang Marinas Utama", "Gudang Steak",
  "Toko Maheer", "SDIT Annadwah", "FKPQ Kec. Cisaat", "Sukabumi Football Academy",
  "BC HNI Sukabumi 1", "WestSteel", "PD. Sari Gandum Sejahtera", "Regu Kancil",
  "Hahsa Atelier", "YLPI Ibadurrahman", "HZA Production",
  "Masjid Nurul Islam",
];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

<nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
  <img src="/wave-pattern.svg" alt="" className="w-full h-full object-cover opacity-100"/>
</div>
  <div className="font-bold text-lg tracking-wide" style={{fontFamily: 'var(--font-playfair)'}}>
    Majelis Perkantoran
  </div>

  <div className="hidden md:flex gap-6 text-sm font-medium">
    <a href="#tentang" className="hover:text-yellow-400 transition">Tentang</a>
    <a href="#program" className="hover:text-yellow-400 transition">Program</a>
    <a href="#keunggulan" className="hover:text-yellow-400 transition">Keunggulan</a>
    <a href="#pengajar" className="hover:text-yellow-400 transition">Pengajar</a>
    <a href="#portofolio" className="hover:text-yellow-400 transition">Portofolio</a>
    <a href="#kontak" className="hover:text-yellow-400 transition">Kontak</a>
  </div>

  <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
    <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
    <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </button>

  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute top-16 left-0 right-0 bg-blue-900 flex flex-col items-center gap-4 py-6 md:hidden shadow-lg"
      >
          {['tentang', 'program', 'keunggulan', 'pengajar', 'portofolio', 'kontak'].map((item) => (
          
            <a key={item}
            href={`#${item}`}
            className="capitalize hover:text-yellow-400 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))} 
      </motion.div>
    )}
  </AnimatePresence>
</nav>

<section  className="text-white text-center py-32 px-8 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f2460 0%, #1e3a8a 50%, #1d4ed8 100%)'}}>
  <div className="absolute inset-0 pointer-events-none">
  <img src="/wave-pattern.svg" alt="" className="w-full h-full object-cover opacity-100"/>
</div>
  {/* Background decorations */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-yellow-400 opacity-10"></div>
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-yellow-400 opacity-10"></div>
    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white opacity-5"></div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50V16L28 0l28 16v34L28 66zm0-2l26-15V18L28 2 2 18v30l26 15z" fill="none" stroke="rgba(250,204,21,1)" strokeWidth="0.8"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)"/>
    </svg>
  </div>

  <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-widest relative z-10">Masjid Pendidikan Shalahuddin</p>
  <h1 className="text-6xl font-bold mb-6 relative z-10">Majelis Perkantoran</h1>
  <p className="text-2xl text-yellow-300 mb-6 italic relative z-10">Menguatkan Nilai, Menjaga Profesionalisme di Dunia Kerja</p>
  <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
    Membangun karakter islami dan meningkatkan kualitas spiritual karyawan tanpa mengganggu produktivitas kerja.
  </p>
  <div className="mt-10 flex gap-4 justify-center flex-wrap relative z-10">
    <a href="#kontak" className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg">Daftarkan Kantor Anda</a>
    <a href="#program" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition text-lg">Lihat Program</a>
  </div>

  <motion.div
    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-12 relative z-10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  >
    {[
      { angka: "16+", label: "Mitra Perusahaan" },
      { angka: "6", label: "Pengajar Ahli" },
      { angka: "5", label: "Program Unggulan" },
      { angka: "100+", label: "Peserta Terbina" },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        viewport={{ once: true }}
      >
        <p className="text-5xl font-bold text-yellow-400 drop-shadow-lg">{item.angka}</p>
        <div className="w-8 h-0.5 bg-yellow-400 mx-auto my-2"></div>
        <p className="text-gray-300 text-sm uppercase tracking-wider">{item.label}</p>
      </motion.div>
    ))}
  </motion.div>
</section>

        <section id="tentang" className="py-20 px-8 bg-white bg-pattern-light">
  <motion.div
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Mengapa Majelis Perkantoran?</h2>
    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
    <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
      Realita di lapangan menunjukkan krisis karakter dan spiritual karyawan yang semakin mengkhawatirkan
    </p>

    {/* Data Statistik */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {[
  {
    angka: "77%",
    judul: "Karyawan Burnout",
    desc: "karyawan di seluruh dunia mengalami burnout di tempat kerja",
    sumber: "Gallup State of Global Workplace 2023",
    icon: "🔥",
    link: "https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx"
  },
  {
    angka: "1 dari 4",
    judul: "Krisis Mental",
    desc: "karyawan mengalami gejala burnout dan stres berat yang mempengaruhi produktivitas",
    sumber: "McKinsey Health Institute 2023",
    icon: "⚠️",
    link: "https://www.mckinsey.com/mhi/our-insights/reframing-employee-health"
  },
  {
    angka: "40%",
    judul: "Stres Kerja Meningkat",
    desc: "peningkatan tingkat stres kerja karyawan Indonesia pasca pandemi",
    sumber: "BPS Indonesia 2023",
    icon: "📈",
    link: "https://www.bps.go.id"
  },
  {
    angka: "21%",
    judul: "Peningkatan Produktivitas",
    desc: "peningkatan produktivitas pada perusahaan dengan program pengembangan karakter karyawan",
    sumber: "Harvard Business Review",
    icon: "✅",
    link: "https://hbr.org"
  },
  {
    angka: "58%",
    judul: "Loyalitas Lebih Tinggi",
    desc: "karyawan beretika kuat menunjukkan loyalitas lebih tinggi dan turnover lebih rendah",
    sumber: "SHRM 2023",
    icon: "💪",
    link: "https://www.shrm.org"
  },
  {
    angka: "$1T",
    judul: "Kerugian Produktivitas",
    desc: "kerugian produktivitas global per tahun akibat stres kerja dan krisis karakter karyawan",
    sumber: "McKinsey Global Institute",
    icon: "💸",
    link: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights"
  },
].map((item, i) => (
  <motion.a
    key={i}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 block cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
  >
    <div className="text-3xl mb-3">{item.icon}</div>
    <p className="text-4xl font-bold text-blue-900 mb-1">{item.angka}</p>
    <p className="font-bold text-gray-800 mb-2">{item.judul}</p>
    <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
    <p className="text-xs text-yellow-600 font-medium border-t border-gray-100 pt-2">📊 {item.sumber} ↗</p>
  </motion.a>
))}
    </div>

    {/* Solusi */}
    <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img src="/wave-pattern.svg" alt="" className="w-full h-full object-cover opacity-100"/>
      </div>
      <div className="relative z-10">
        <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-4">Solusi Kami</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Majelis Perkantoran Hadir Sebagai Solusi</h3>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Program pembinaan islami yang aplikatif dan relevan dengan dunia kerja. Mengubah momentum spiritual menjadi pendorong etos kerja, integritas, dan loyalitas tim yang lebih solid — tanpa mengganggu produktivitas.
        </p>
        <a href="#kontak" className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg">
          Daftarkan Kantor Anda Sekarang
        </a>
      </div>
    </div>
  </motion.div>
</section>

<section id="program" className="py-20 px-8 bg-gray-50">
  <motion.div
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Spesifikasi Program</h2>
    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
    <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
      Program tersedia dalam pilihan paket maupun satuan, disesuaikan dengan kebutuhan perusahaan
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          no: "01",
          title: "Islamic Character Building",
          desc: "Pembinaan mentalitas kerja berbasis nilai Islam: integritas, amanah, disiplin, dan tanggung jawab.",
          icon: "🌟"
        },
        {
          no: "02",
          title: "Tahsin Al-Quran",
          desc: "Standarisasi bacaan Al-Quran bagi karyawan sesuai makharijul huruf dan tajwid.",
          icon: "📖"
        },
        {
          no: "03",
          title: "Sirah Nabawiyah",
          desc: "Kajian kepemimpinan dan etos kerja Rasulullah yang relevan dengan dunia profesional modern.",
          icon: "🕌"
          },
        {
          no: "04",
          title: "Forum Group Discussion",
          desc: "Diskusi kelompok interaktif membahas solusi islami atas tantangan nyata di lingkungan kerja.",
          icon: "🗣️"
        },
        {
          no: "05",
          title: "Kajian Eksekutif",
          desc: "Program khusus untuk level manajerial dan eksekutif dalam membangun kepemimpinan berbasis nilai Islam.",
          icon: "👔"
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition hover:-translate-y-1 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-4 right-4 text-gray-100 font-bold text-5xl">{item.no}</div>
          <div className="text-3xl mb-4">{item.icon}</div>
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-4">
            <span className="text-yellow-400 font-bold text-sm">{item.no}</span>
          </div>
          <h3 className="font-bold text-blue-900 text-lg mb-3">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      <section id="keunggulan" className="py-20 px-8 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f2460 0%, #1e3a8a 60%, #1e40af 100%)'}}>
        <div className="absolute inset-0 pointer-events-none">
  <img src="/wave-pattern.svg" alt="" className="w-full h-full object-cover opacity-100"/>
</div>
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full" style={{background: 'radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)'}}></div>
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex2" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50V16L28 0l28 16v34L28 66zm0-2l26-15V18L28 2 2 18v30l26 15z" fill="none" stroke="rgba(250,204,21,1)" strokeWidth="0.8"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex2)"/>
    </svg>
  </div>
        <motion.div 
        className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          >
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
        </motion.div>
      </section>

      <section id="pengajar" className="py-20 px-8x bg-white">
        <motion.div 
        className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          >
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Profil Pengajar</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-center text-gray-500 mb-12">Asatiz & Asatizah berkompeten untuk menjamin standar pembelajaran yang inspiratif dan berkualitas</p>
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
        </motion.div>
      </section>

<section id="portofolio" className="py-20 bg-gray-50 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto px-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Portofolio Klien</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-center text-gray-500 mb-12">Kepercayaan mereka adalah motivasi terbesar kami</p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
        >
          <motion.div
            className="flex gap-8"
            animate={{ x: carouselPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {[...Array(2)].flatMap((_, arrI) => [
              { nama: "Arafa Hijab", file: "arafa-hijab" },
              { nama: "FKPQ Kec. Cisaat", file: "fkpq-cisaat" },
              { nama: "Gudang Steak", file: "gudang-steak" },
              { nama: "PT. Kujang Marinas Utama", file: "kujang-marinas" },
              { nama: "SDIT Annadwah", file: "sdit-annadwah" },
              { nama: "Sono Coffee Grup", file: "sono-coffee" },
              { nama: "Sukabumi Football Academy", file: "sukabumi-football" },
              { nama: "Toko Maheer", file: "toko-maheer" },
            ].map((item, i) => (
              <motion.div
                key={`${arrI}-${i}`}
                className="relative flex-shrink-0 w-96 h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={`/kegiatan/${item.file}.png`}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">{item.nama}</p>
                    <p className="text-yellow-400 text-sm mt-1">Mitra Majelis Perkantoran</p>
                  </div>
                </div>
              </motion.div>
            )))}
          </motion.div>
        </div>

{/* Grid nama klien */}
        <motion.div
          className="max-w-5xl mx-auto px-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-blue-900 font-bold text-xl mb-8">Dipercaya oleh 16+ Perusahaan</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {klien.map((nama, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-400 hover:bg-blue-50 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-400 font-bold text-xs">{i + 1}</span>
                </div>
                <p className="font-medium text-blue-900 text-sm">{nama}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="kontak" className="text-white py-20 px-8 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f2460 0%, #1e3a8a 50%, #1e40af 100%)'}}>
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full" style={{background: 'radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)'}}></div>
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex3" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50V16L28 0l28 16v34L28 66zm0-2l26-15V18L28 2 2 18v30l26 15z" fill="none" stroke="rgba(250,204,21,1)" strokeWidth="0.8"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex3)"/>
    </svg>
  </div>
        <motion.div 
        className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          >
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
              <div className="bg-blue-800 rounded-xl p-4 flex items-start gap-4">
              <span className="text-yellow-400 text-2xl flex-shrink-0">📍</span>
              <a href="https://maps.app.goo.gl/2nGQozgM67Xxo7B37" target="_blank" className="hover:text-yellow-400 transition text-left">
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
        </motion.div>
      </section>

      <footer className="bg-blue-950 text-gray-400 text-center py-6 text-sm">
        <p>Powered by MIK — Masjid Pendidikan Shalahuddin</p>
        <p className="mt-1">Support by Hanima & Dompet Dhuafa</p>
      </footer>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/628119201821"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </main>
  );
}