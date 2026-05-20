import Link from 'next/link';

export default function TerimaKasih() {
  return (
    <main className="min-h-screen bg-blue-900 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-lg">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
          Terima Kasih!
        </h1>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Pesan Anda telah berhasil dikirim. Tim Majelis Perkantoran akan segera menghubungi Anda dalam waktu 1x24 jam.
        </p>
        <div className="bg-blue-800 rounded-2xl p-6 mb-8 text-left">
          <p className="text-yellow-400 font-bold mb-2">Butuh respon lebih cepat?</p>
          <p className="text-gray-300 text-sm">Hubungi kami langsung via WhatsApp</p>
          
           <a href="https://wa.me/628119201821"
            target="_blank"
            className="mt-4 inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-400 transition"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
        <Link
          href="/"
          className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition text-lg"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}