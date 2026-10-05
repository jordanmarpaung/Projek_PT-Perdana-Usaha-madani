import React from 'react';
import logo from './assets/logo_baru.png';
import fotoKantor from './assets/gambar1.webp';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* 1. NAVBAR (Header) */}
      <nav className="bg-white shadow-md w-full fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <img src={logo} alt="Logo PT Perdana Usaha Madani" className="h-12 w-auto mr-3" />
              <span className="font-extrabold text-xl text-yellow-800 tracking-wide hidden sm:block">PT PERDANA USAHA MADANI</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-yellow-700 font-semibold transition">Beranda</a>
              <a href="#profil" className="text-gray-700 hover:text-yellow-700 font-semibold transition">Tentang Kami</a>
              <a href="#layanan" className="text-gray-700 hover:text-yellow-700 font-semibold transition">Layanan</a>
              <a href="#karir" className="text-gray-700 hover:text-yellow-700 font-semibold transition">Karir</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <a href="#kontak" className="bg-yellow-700 text-white px-5 py-2 rounded font-semibold hover:bg-yellow-800 transition shadow-md">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="beranda" className="relative pt-20">
        <div className="w-full h-[75vh] bg-gray-900 relative flex items-center">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight">
              Solusi Profesional <br/><span className="text-yellow-500">Desk Collection Terpercaya</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              PT Perdana Usaha Madani berlokasi di Gunung Putri, Bogor, menghadirkan layanan penagihan kredit yang efektif, profesional, dan beretika tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontak" className="bg-yellow-700 text-white text-center px-8 py-3 rounded font-bold hover:bg-yellow-800 transition shadow-lg">
                Hubungi Kami
              </a>
              <a href="#karir" className="bg-transparent border-2 border-white text-white text-center px-8 py-3 rounded font-bold hover:bg-white hover:text-gray-900 transition">
                Lowongan Karir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI */}
      <section id="profil" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-yellow-800 mb-6">Tentang Perusahaan</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                PT. Perdana Usaha Madani adalah perusahaan yang bergerak di bidang <i>desk collection</i> atau penagihan profesional. Kami berkomitmen memberikan layanan terbaik kepada klien melalui komunikasi yang efektif, solusi masalah yang efisien, serta menjunjung tinggi standar profesionalisme.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Berbasis di Gunung Putri, Kabupaten Bogor, Jawa Barat[cite: 8], kami menyediakan lingkungan kerja dalam kantor yang nyaman serta fasilitas penunjang yang memadai bagi tim profesional kami.
              </p>
              <div className="border-l-4 border-yellow-700 pl-4 py-2 italic text-gray-700 bg-yellow-50">
                "Menghargai setiap individu yang memiliki minat dan dedikasi untuk berkembang dalam lingkungan kerja yang dinamis dan positif."
              </div>
            </div>
            <div className="w-full h-80 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-400 font-semibold">
              <img 
              src={fotoKantor} alt="Foto Kantor PT Perdana Usaha Madani" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAYANAN / BIDANG USAHA */}
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yellow-800 mb-4">Layanan & Keunggulan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Standar operasional penagihan yang terstruktur untuk memastikan hasil yang optimal bagi para mitra dan klien.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 border-t-4 border-yellow-700">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Desk Collection</h3>
              <p className="text-gray-600 leading-relaxed">
                Penagihan kredit via telepon (outbound call) dan media komunikasi lainnya secara terstruktur, persuasif, dan sesuai prosedur.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 border-t-4 border-yellow-700">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fasilitas Kerja Memadai</h3>
              <p className="text-gray-600 leading-relaxed">
                Bekerja langsung di dalam kantor dengan dukungan fasilitas perangkat kerja dan infrastruktur telekomunikasi yang lengkap[cite: 7].
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 border-t-4 border-yellow-700">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pengembangan Tim & Karir</h3>
              <p className="text-gray-600 leading-relaxed">
                Lingkungan kerja positif yang mendukung peningkatan kemampuan komunikasi, problem solving, serta jenjang berkembang bagi agen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BAGIAN KARIR / INFORMASI LOKER */}
      <section id="karir" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 rounded-2xl p-8 md:p-12 border border-yellow-200 shadow-sm">
            <div className="max-w-3xl">
              <span className="bg-yellow-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Kesempatan Bergabung</span>
              <h2 className="text-3xl font-bold text-yellow-900 mt-4 mb-4">Lowongan: Desk Collection Agent</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kami sedang mencari individu berdedikasi tinggi (minimal lulusan SMA/Sederajat) yang memiliki kemampuan komunikasi yang baik serta pengalaman di bidang <i>call center</i> atau penagihan[cite: 8]. Mari berkontribusi bersama tim profesional kami di Gunung Putri, Bogor[cite: 8].
              </p>
              <a href="#kontak" className="inline-block bg-yellow-700 text-white font-bold px-6 py-3 rounded shadow hover:bg-yellow-800 transition">
                Kirim Lamaran / Tanya Lowongan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER & KONTAK */}
      <footer id="kontak" className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-yellow-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="Logo Footer" className="h-10 w-auto mr-3 brightness-0 invert" />
                <span className="font-extrabold text-xl tracking-wide">PT PERDANA USAHA MADANI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Perusahaan penyedia layanan penagihan profesional (desk collection) yang berfokus pada kualitas, etika, dan pencapaian target terbaik.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#beranda" className="hover:text-white transition">Beranda</a></li>
                <li><a href="#profil" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#layanan" className="hover:text-white transition">Layanan</a></li>
                <li><a href="#karir" className="hover:text-white transition">Informasi Karir</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Lokasi & Kontak</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Gunung Putri, Kabupaten Bogor, Jawa Barat, Indonesia[cite: 8]</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>(021) [Nomor Telepon Perusahaan]</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <span>hrd@perdanausahamadani.com / info@...</span>
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2026 PT Perdana Usaha Madani. Hak Cipta Dilindungi.
            </p>
            <p className="text-gray-500 text-sm">
              Professional Desk Collection Services
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;