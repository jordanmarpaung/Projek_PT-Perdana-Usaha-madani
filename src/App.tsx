import React, { useState } from 'react';
import logo from './assets/logo_baru.png';
import fotoKantor from './assets/gambar1.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { 
  faLocationDot, faPhone, faEnvelope, faArrowRight, 
  faHeadset, faMapLocationDot, faServer, faVideo, 
  faScaleBalanced, faUserTie, faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';
import logoKreditplus from './assets/kredit_plus.png';
import logoEzmart from './assets/EZ_mart_logo.png';
import logoTeknologiInternasional from './assets/PT_TIN.png';
import logoInvestasiDigital from './assets/logo bizer.png';
import fotoBenny from './assets/komisaris.png';
import fotoRosinta from './assets/Direktur.png';
function App() {
  const [activePage, setActivePage] = useState('beranda');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      
      {/* ==================== NAVBAR ==================== */}
      <nav className="bg-white shadow-sm w-full fixed top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => setActivePage('beranda')}
            >
              <img src={logo} alt="Logo PT Perdana Usaha Madani" className="h-14 w-auto mr-3" />
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold text-xl text-yellow-800 tracking-wider leading-tight">PT PERDANA USAHA MADANI</span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              <button 
                onClick={() => setActivePage('beranda')} 
                className={`font-bold transition ${activePage === 'beranda' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}
              >
                Beranda
              </button>
              <button 
                onClick={() => setActivePage('tentang')} 
                className={`font-bold transition ${activePage === 'tentang' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}
              >
                Tentang Kami
              </button>
              <button 
                onClick={() => setActivePage('layanan')} 
                className={`font-bold transition ${activePage === 'layanan' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActivePage('karir')} 
                className={`font-bold transition ${activePage === 'karir' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}
              >
                Karir
              </button>
              
              <button className="bg-yellow-700 text-white px-6 py-2.5 rounded-sm font-bold hover:bg-yellow-800 transition shadow-md">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== KONTEN HALAMAN ==================== */}
      <main className="flex-grow pt-24">
        
        {/* --- HALAMAN 1: BERANDA --- */}
        {activePage === 'beranda' && (
          <div className="animate-fade-in">
            
            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[85vh] bg-gray-900 flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95"></div> 
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 max-w-4xl leading-tight tracking-tight">
                  Profesionalisme dalam <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    Resolusi Kredit Anda.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
                  Sebagai mitra terpercaya lembaga perbankan dan non-perbankan, kami mengedepankan etika, kepatuhan (OJK/AFPI), dan efisiensi dalam setiap langkah pemulihan aset Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <button 
                    onClick={() => setActivePage('layanan')}
                    className="bg-yellow-600 text-white text-center px-8 py-4 rounded-sm font-bold hover:bg-yellow-700 transition shadow-lg flex items-center justify-center gap-3"
                  >
                    Jelajahi Layanan Kami <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <button 
                    onClick={() => setActivePage('tentang')}
                    className="bg-transparent border border-gray-400 text-white text-center px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-gray-900 transition"
                  >
                    Pelajari Perusahaan
                  </button>
                </div>
              </div>
            </section>

            {/* 2. KLIEN & MITRA KAMI */}
            {/* 2. KLIEN & MITRA KAMI */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
                  Dipercaya Oleh Mitra Bisnis Terkemuka
                </p>
                
                {/* Jarak antar logo diperlebar (gap-12 ke gap-24) agar tidak menumpuk meski ukurannya besar */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
                  
                  {/* 1. Mitra Kreditplus */}
                  <div className="group cursor-pointer">
                    <img 
                      src={logoKreditplus} 
                      alt="Mitra Kreditplus" 
                      className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 
                                 group-hover:grayscale-0 group-hover:opacity-100 
                                 transform group-hover:-translate-y-3 group-hover:scale-110 
                                 transition-all duration-500 ease-out group-hover:drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* 2. Mitra EZMART (Placeholder teks jika logo belum dimasukkan) */}
                  <div className="group cursor-pointer">
                      <img 
                        src={logoEzmart} 
                        alt="Mitra EZMART"
                        className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 
                                   group-hover:grayscale-0 group-hover:opacity-100 
                                   transform group-hover:-translate-y-3 group-hover:scale-110 
                                   transition-all duration-500 ease-out group-hover:drop-shadow-2xl"
                      />
                  </div>

                  {/* 3. Mitra Teknologi Internasional (Placeholder) */}
                  <div className="group cursor-pointer">
                    <img 
                      src={logoTeknologiInternasional} 
                      alt="Mitra Teknologi Internasional"
                      className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 
                                 group-hover:grayscale-0 group-hover:opacity-100 
                                 transform group-hover:-translate-y-3 group-hover:scale-110 
                                 transition-all duration-500 ease-out group-hover:drop-shadow-2xl"
                    />
                  </div>

                  {/* 4. Mitra Investasi Digital (Placeholder) */}
                  <div className="group cursor-pointer">
                    <img 
                      src={logoInvestasiDigital} 
                      alt="Mitra Investasi Digital"
                      className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 
                                 group-hover:grayscale-0 group-hover:opacity-100 
                                 transform group-hover:-translate-y-3 group-hover:scale-110 
                                 transition-all duration-500 ease-out group-hover:drop-shadow-2xl"
                    />
                  </div>

                </div>
              </div>
            </section>

            {/* 3. BISNIS UTAMA (OUR SERVICES) */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Layanan Utama Kami</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Solusi terintegrasi untuk menangani berbagai kasus DPD (Days Past Due), mulai dari tahap pengingat awal hingga pemulihan keterlambatan tingkat lanjut.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-10 border border-gray-200 rounded-lg hover:shadow-xl transition duration-300 group">
                    <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <FontAwesomeIcon icon={faHeadset} className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Desk Collection</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Layanan panggilan <i>inbound</i> dan <i>outbound</i> terstruktur. Tersedia dalam skema BPO (biaya tetap per agen) maupun persentase variabel dari dana yang berhasil ditagihkan.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li><FontAwesomeIcon icon={faCheckCircle} className="text-yellow-600 mr-2" /> Penanganan Reminder Bucket</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} className="text-yellow-600 mr-2" /> Early & Late DPD Recovery</li>
                    </ul>
                  </div>

                  <div className="p-10 border border-gray-200 rounded-lg hover:shadow-xl transition duration-300 group">
                    <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <FontAwesomeIcon icon={faMapLocationDot} className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Field Collection</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Tim lapangan profesional yang bertindak sebagai mitra mediasi langsung, memastikan komunikasi tatap muka yang efektif dan negosiasi yang berpusat pada solusi.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li><FontAwesomeIcon icon={faCheckCircle} className="text-yellow-600 mr-2" /> Validasi Domisili & Bisnis Debitur</li>
                      <li><FontAwesomeIcon icon={faCheckCircle} className="text-yellow-600 mr-2" /> Formulasi Solusi Pembayaran Langsung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. KEUNGGULAN LAYANAN KAMI */}
            <section className="py-24 bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl font-extrabold mb-6">Mengapa Memilih <span className="text-yellow-500">PT Perdana Usaha Madani?</span></h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      Kekuatan kami terletak pada infrastruktur yang kuat, SOP yang terstandarisasi, serta komitmen mutlak terhadap regulasi otoritas keuangan Indonesia (OJK, BI, AFPI/SPPI). Kami melindungi reputasi Anda sambil memaksimalkan persentase pemulihan.
                    </p>
                    <button 
                      onClick={() => setActivePage('tentang')}
                      className="bg-yellow-600 text-white px-6 py-3 rounded-sm font-bold hover:bg-yellow-700 transition"
                    >
                      Profil Perusahaan &rarr;
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                      <FontAwesomeIcon icon={faServer} className="text-yellow-500 text-2xl mb-4" />
                      <h4 className="font-bold text-lg mb-2">Sistem CRM Terpadu</h4>
                      <p className="text-gray-400 text-sm">Keamanan data terjamin. Kami beroperasi menggunakan sistem kami sendiri atau terintegrasi dengan sistem Anda.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                      <FontAwesomeIcon icon={faHeadset} className="text-yellow-500 text-2xl mb-4" />
                      <h4 className="font-bold text-lg mb-2">Autodialer Calling</h4>
                      <p className="text-gray-400 text-sm">Meningkatkan volume panggilan 3-4x lipat dibandingkan panggilan manual, meminimalisir waktu diam agen.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                      <FontAwesomeIcon icon={faVideo} className="text-yellow-500 text-2xl mb-4" />
                      <h4 className="font-bold text-lg mb-2">Monitoring CCTV 24/7</h4>
                      <p className="text-gray-400 text-sm">Pengawasan penuh di lingkungan kantor untuk menjaga kualitas kontrol dan keamanan tingkat tinggi.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                      <FontAwesomeIcon icon={faScaleBalanced} className="text-yellow-500 text-2xl mb-4" />
                      <h4 className="font-bold text-lg mb-2">Kepatuhan Etika</h4>
                      <p className="text-gray-400 text-sm">Penagihan yang sopan, menghargai hak konsumen, dan menolak keras segala bentuk intimidasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. KEPEMIMPINAN PENDIRI */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Kepemimpinan Perusahaan</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">Didirikan pada Oktober 2023 di Bekasi, PT Perdana Usaha Madani digawangi oleh praktisi berpengalaman untuk memberikan solusi penyelesaian kredit bermasalah yang komprehensif.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                  {/* Profil Komisaris */}
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition">
                    
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                      <img src={fotoBenny} alt="Foto Tumpak Benny Marpaung" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Tumpak Benny Marpaung</h3>
                    <p className="text-yellow-700 font-bold mb-4">Komisaris Utama</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Pakar bersertifikat (USKP A & B) dengan spesialisasi mendalam di bidang Keuangan, Pajak, Akuntansi, dan Hukum. Memiliki pemahaman kuat atas regulasi pajak Indonesia, perencanaan keuangan strategis, serta manajemen akuisisi korporat.
                    </p>
                  </div>

                  {/* Profil Direktur */}
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                      <img src={fotoRosinta} alt="Foto Rosinta Uli Manurung" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Rosinta Uli Manurung</h3>
                    <p className="text-yellow-700 font-bold mb-4">Direktur</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Berdedikasi untuk membangun tata kelola operasional perusahaan yang transparan, berorientasi pada kepuasan klien, serta menjaga performa tim penagihan agar selalu memenuhi standar efisiensi tertinggi.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. CALL TO ACTION (MARI BERKOLABORASI) */}
            <section className="bg-yellow-600 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Siap Mengamankan Arus Kas Perusahaan Anda?</h2>
                <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
                  Melalui kedisiplinan ketat dan strategi penagihan yang terukur, tim kami berkomitmen penuh menekan angka kredit bermasalah (NPL/DPD) demi kesehatan finansial Anda.
                </p>
                <button className="bg-gray-900 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-black transition shadow-xl">
                  Hubungi Tim Kami Sekarang
                </button>
              </div>
            </section>

          </div>
        )}

        {/* --- PLACEHOLDER HALAMAN LAINNYA --- */}
        {activePage === 'tentang' && (<div className="py-32 text-center"><h2 className="text-3xl font-bold">Halaman Tentang Kami</h2></div>)}
        {activePage === 'layanan' && (<div className="py-32 text-center"><h2 className="text-3xl font-bold">Halaman Layanan</h2></div>)}
        {activePage === 'karir' && (<div className="py-32 text-center"><h2 className="text-3xl font-bold">Halaman Karir</h2></div>)}

      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#111111] text-gray-300 pt-20 pb-10 border-t-[6px] border-yellow-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <img src={logo} alt="Logo Footer" className="h-14 w-auto mr-3 brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Perusahaan penyedia layanan penagihan profesional (desk collection & field collection) yang berfokus pada kualitas, etika, dan pencapaian target terbaik.
              </p>
            </div>

            <div>
              <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Perusahaan</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setActivePage('beranda')} className="hover:text-yellow-500 transition">Beranda</button></li>
                <li><button onClick={() => setActivePage('tentang')} className="hover:text-yellow-500 transition">Tentang Kami</button></li>
                <li><button onClick={() => setActivePage('layanan')} className="hover:text-yellow-500 transition">Layanan</button></li>
                <li><button onClick={() => setActivePage('karir')} className="hover:text-yellow-500 transition">Informasi Karir</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Hubungi Kami</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-4 mt-1 text-yellow-600 text-lg" />
                  <a href="https://maps.app.goo.gl/XuPpyTc7cAmtrn2t9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition leading-relaxed">
                    Jl. Raya Vila Nusa Indah Blk. FF, Bojong Kulur, Kec. Gn. Putri, <br/> Kabupaten Bogor, Jawa Barat, Indonesia
                  </a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-4 text-yellow-600 text-lg" />
                  <span>(+62) 852-7427-4069</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-yellow-600 text-lg" />
                  <span>perdanausahamadani@gmail.com</span>
                </li>
                <li className="flex items-center pt-4 space-x-5">
                  <a href="https://www.instagram.com/ptperdani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                  </a>
                  <a href="https://www.facebook.com/perdanausahamadani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs tracking-wider mb-4 md:mb-0">
              &copy; 2026 PT PERDANA USAHA MADANI. ALL RIGHTS RESERVED.
            </p>
            <p className="text-gray-500 text-xs tracking-wider">
              KEBIJAKAN PRIVASI &nbsp;|&nbsp; KETENTUAN LAYANAN
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;