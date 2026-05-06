
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-lg">Majelis Perkantoran</div>
        <div className="flex gap-6 text-sm">
          <a href="#tentang" className="hover:text-yellow-400">Tentang</a>
          <a href="#program" className="hover:text-yellow-400">Program</a>
          <a href="#pengajar" className="hover:text-yellow-400">Pengajar</a>
          <a href="#portofolio" className="hover:text-yellow-400">Portofolio</a>
          <a href="#kontak" className="hover:text-yellow-400">Kontak</a>
        </div>
      </nav>

      <section className="bg-blue-900 text-white text-center py-24 px-8">
        <p className="text-yellow-400 text-sm font-semibold mb-3 uppercase tracking-widest">Masjid Pendidikan Shalahuddin</p>
        <h1 className="text-5xl font-bold mb-4">Majelis Perkantoran</h1>
        <p className="text-xl text-yellow-300 mb-4">
          Menguatkan Nilai, Menjaga Profesionalisme di Dunia Kerja
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Membangun karakter islami dan meningkatkan kualitas spiritual karyawan tanpa mengganggu produktivitas kerja.
        </p>
        <a href="#kontak" className="mt-8 inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
          Daftarkan Kantor Anda
        </a>
      </section>

      <section id="tentang" className="py-20 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Pengenalan</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Perusahaan modern membutuhkan lebih dari sekadar kinerja. Dibutuhkan SDM yang
          berintegritas dan memiliki kematangan emosional. Majelis Perkantoran menawarkan
          solusi pembinaan yang aplikatif dan relevan dengan dunia kerja, mengubah momentum
          spiritual menjadi pendorong etos kerja dan loyalitas tim yang lebih solid.
        </p>
      </section>

      <section id="program" className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Spesifikasi Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Islamic Character Building</h3>
            <p className="text-gray-600 text-sm">Pembinaan mentalitas kerja berbasis nilai Islam: integritas, amanah, disiplin, dan tanggung jawab.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Tahsin Al-Quran</h3>
            <p className="text-gray-600 text-sm">Standarisasi bacaan Al-Quran bagi karyawan sesuai makharijul huruf dan tajwid.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Kajian Tematik Perkantoran</h3>
            <p className="text-gray-600 text-sm">Pembahasan isu kerja harian dari sudut pandang syariat Islam.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Sirah Nabawiyah</h3>
            <p className="text-gray-600 text-sm">Kajian kepemimpinan Rasulullah yang relevan dengan dunia profesional.</p>
          </div>
        </div>
      </section>

      <section id="pengajar" className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Profil Pengajar</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {["Ust. Muhammad Ilham", "Ust. Auliya Bil Allafa", "Ust. Ryan Alfatih", "Ustadz Agung Gunawan", "Ustadzah Ai", "Ustadzah Nadia"].map((name, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-3 flex items-center justify-content-center">
                <span className="text-blue-900 font-bold text-2xl flex items-center justify-center h-full">
                  {name.charAt(name.lastIndexOf(" ") + 1)}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portofolio" className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Portofolio Klien</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["Sono Coffee Grup", "Arafa Hijab", "PT. Kujang Marinas Utama", "Gudang Steak", "Toko Maheer", "SDIT Annadwah", "FKPQ Kec. Cisaat", "Sukabumi Football Academy", "BC HNI Sukabumi 1", "WestSteel", "PD. Sari Gandum Sejahtera", "Regu Kancil"].map((klien, i) => (
            <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <p className="font-medium text-blue-900 text-sm">{klien}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontak" className="bg-blue-900 text-white py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Segera Daftarkan Kantor Anda!</h2>
        <p className="text-gray-300 mb-8">Hubungi kami untuk informasi lebih lanjut</p>
        <div className="flex flex-col items-center gap-3 text-lg">
          <p>Instagram: @masjidpendidikanshalahuddin</p>
          <p>Telepon: +62 851-1727-1453</p>
          <p>Alamat: Jl. Garuda, Kel. Sindangpalay, Kec. Cibeureum, Kota Sukabumi</p>
        </div>
      </section>

    </main>
  );
}