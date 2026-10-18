import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, faPhoneVolume, faVideo, faChartPie, 
  faMicrophone, faEnvelope, faCommentSms, faMapMarkedAlt, faHandshake, faFileContract, faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import Reveal from '../components/Reveal';

// Import Gambar (Pastikan Anda melengkapi gambar-gambar ini di folder assets)
import TeleCollectionImage from '../assets/tele.jpg';
import MediasiImage from '../assets/mediasi.jpg';
import DpdImage from '../assets/telat.jpg';   
import SkemaImage from '../assets/skema.jpg'; 
import ValidasiImage from '../assets/validasi.jpg';
import heroImage from '../assets/gambar_utama.jpeg';

interface LayananProps {
  setActivePage: (page: string) => void;
}

export default function Layanan({ setActivePage }: LayananProps) {
  // Memastikan saat halaman dibuka atau di-refresh, scroll selalu kembali ke paling atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pb-20 bg-white">
      
   {/* Hero Layanan - Teks Putih dengan Overlay Gelap & Drop Shadow agar Jelas */}
      <section className="relative isolate w-full pt-48 md:pt-56 pb-24 md:pb-28 text-center border-b-[6px] border-yellow-700 overflow-hidden bg-slate-950 flex items-center justify-center min-h-[500px]">
        
        {/* Gambar Latar Belakang */}
        <img
          src={heroImage} // Atau ganti dengan gambar latar yang baru Anda miliki
          alt="Solusi Pemulihan Aset"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-50 contrast-125"
        />
        
        {/* Lapisan Gelap (Overlay) - Membuat latar belakang sedikit redup agar teks putih sangat kontras dan jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/60 to-slate-950/80 z-10"></div> 

        {/* Konten Hero (Terpusat) */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            {/* Teks Berwarna Putih dengan Drop Shadow yang Kuat */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Solusi Pemulihan Aset<br className="hidden md:inline" />Terbaik
            </h1>
          </Reveal>
          
          <Reveal delay={150}>
            {/* Deskripsi Putih Terang dengan Bayangan Teks */}
            <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Kami berkomitmen memulihkan aset Anda melalui strategi penagihan yang profesional, terukur, dan bermartabat.
            </p>
          </Reveal>

          {/* Tombol dengan Aksen Kontras (Contoh: Kuning Emas/Amber agar mencolok dan elegan) */}
          <Reveal delay={300}>
            <div className="flex justify-center">
              <button 
                onClick={() => setActivePage('kontak')} 
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl tracking-wide text-sm border border-yellow-500/50"
              >
                Hubungi kami sekarang
              </button>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ========================================== */}
      {/* BAGIAN 1: DESK COLLECTION                  */}
      {/* ========================================== */}
      <section className="pt-24 pb-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Desk Collection</h2>
              <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Layanan penagihan terpusat berbasis sistem mutakhir untuk menjangkau debitur secara cepat dan masif.
              </p>
            </Reveal>
          </div>

          <div className="space-y-32">
            
            {/* 1. Call Services (Gambar Kiri, Teks Kanan) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gray-900 opacity-20 z-10"></div>
                    <img src={TeleCollectionImage} alt="Inbound Outbound Calls" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
                      <div className="bg-yellow-600 text-white text-xs font-bold py-2 px-6 rounded-l-md shadow-md uppercase tracking-wider">Inbound</div>
                      <div className="bg-slate-900 text-white text-xs font-bold py-2 px-6 rounded-l-md shadow-md uppercase tracking-wider">Outbound</div>
                    </div>
                  </div>
                </Reveal>
              </div>
              
              <div className="w-full md:w-1/2">
                <Reveal delay={150}>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    Layanan <span className="font-extrabold text-yellow-700">Tele-Collection</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Kami siap melayani kebutuhan operasional Anda melalui panggilan <i>inbound</i> dan <i>outbound</i> secara terstruktur. Dengan pendekatan komunikasi yang persuasif, agen kami memastikan setiap panggilan dilakukan dengan etika profesional untuk menjaga nama baik perusahaan Anda.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* 2. DPD Cases (Teks Kiri, Gambar Kanan) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-900/10 z-10"></div>
                    <img src={DpdImage} alt="DPD Cases Handling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <FontAwesomeIcon icon={faCalendarCheck} className="absolute bottom-6 left-6 text-6xl text-white opacity-85 z-20 drop-shadow-lg" />
                  </div>
                </Reveal>
              </div>

              <div className="w-full md:w-1/2">
                <Reveal delay={150}>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    Penanganan <span className="font-extrabold text-yellow-700">Keterlambatan (DPD)</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tim kami memiliki rekam jejak dan pengalaman mendalam untuk bekerja dengan berbagai tingkatan kasus DPD (<i>Days Past Due</i>). Layanan kami mencakup:
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
                    <li><strong>Reminder Bucket:</strong> Pengingat proaktif sebelum atau tepat saat jatuh tempo.</li>
                    <li><strong>Early DPD:</strong> Penanganan cepat untuk keterlambatan tahap awal.</li>
                    <li><strong>Late Recovery:</strong> Strategi negosiasi intensif untuk portofolio yang telah lama menunggak.</li>
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* 3. Fee Arrangement (Gambar Kiri, Teks Kanan) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow-900/15 z-10"></div>
                    <img src={SkemaImage} alt="Skema Fleksibel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-8 right-8 bg-yellow-600 text-white text-md font-bold py-3 px-6 shadow-xl transform rotate-3 z-20 uppercase tracking-wide">
                      SKEMA ADAPTIF
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="w-full md:w-1/2">
                <Reveal delay={150}>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    Skema Biaya <span className="font-extrabold text-yellow-700">Fleksibel</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Biaya layanan kami sangat bergantung pada kebutuhan spesifik Anda. Kami menawarkan pilihan yang adaptif:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3 flex-shrink-0" /> <span><strong>Fee Each Call Done:</strong> Biaya per panggilan selesai.</span></li>
                    <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3 flex-shrink-0" /> <span><strong>BPO (Fixed Fee):</strong> Biaya tetap per agen, ideal untuk panggilan <i>reminder</i> dan awal DPD.</span></li>
                    <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3 flex-shrink-0" /> <span><strong>Variabel Penuh:</strong> Dibayar sebagai persentase dari dana yang berhasil ditagih.</span></li>
                  </ul>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* BAGIAN 2: FIELD COLLECTION                 */}
      {/* ========================================== */}
      <section className="py-24 overflow-hidden bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Field Collection</h2>
              <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Kehadiran fisik profesional sebagai mitra lapangan untuk mediasi dan penyelesaian masalah secara tatap muka.
              </p>
            </Reveal>
          </div>

          <div className="space-y-32">
            
            {/* 1. Validasi Domisili (Gambar Kiri, Teks Kanan) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-900/10 z-10"></div>
                    <img src={ValidasiImage} alt="Validasi Lapangan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="absolute bottom-6 left-6 text-6xl text-white opacity-85 z-20 drop-shadow-lg" />
                  </div>
                </Reveal>
              </div>

              <div className="w-full md:w-1/2">
                <Reveal delay={150}>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    Validasi <span className="font-extrabold text-yellow-700">Langsung (On-Site)</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tim lapangan kami bertindak sebagai mitra profesional yang hadir langsung di lokasi. Layanan ini difokuskan pada:
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
                    <li>Validasi langsung terhadap alamat domisili debitur untuk menghindari data fiktif.</li>
                    <li>Pemeriksaan detail bisnis dan usaha yang dijalankan.</li>
                    <li>Pemantauan kondisi aset secara aktual di lapangan.</li>
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* 2. Mediasi & Solusi (Teks Kiri, Gambar Kanan) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-green-900/10 z-10"></div>
                    <img src={MediasiImage} alt="Mediasi Lapangan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <FontAwesomeIcon icon={faHandshake} className="absolute bottom-6 right-6 text-6xl text-white opacity-85 z-20 drop-shadow-lg" />
                  </div>
                </Reveal>
              </div>

              <div className="w-full md:w-1/2">
                <Reveal delay={150}>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    Mediasi & Formulasi <span className="font-extrabold text-yellow-700">Solusi</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Melalui mediasi tatap muka, kami melakukan upaya penagihan langsung (<i>direct collection efforts</i>) dengan pendekatan psikologis yang tepat. Fokus utama kami adalah memfasilitasi komunikasi dua arah untuk merumuskan solusi pembayaran yang adil dan disesuaikan dengan kendala atau batasan yang dialami oleh debitur.
                  </p>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* INFRASTRUKTUR & TEKNOLOGI (Equipment)      */}
      {/* ========================================== */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Infrastruktur Call Center</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Layanan kami didukung penuh oleh teknologi dan peralatan mutakhir untuk memastikan keamanan data, efisiensi waktu, dan transparansi proses.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { ikon: faServer, judul: 'Sistem CRM Terpadu', isi: 'Data Anda dijaga keamanannya. Kami dapat bekerja menggunakan sistem internal kami sendiri maupun terintegrasi langsung dengan sistem Anda.' },
              { ikon: faPhoneVolume, judul: 'Autodialer Calling', isi: 'Meningkatkan jumlah panggilan 3 hingga 4 kali lipat dibandingkan panggilan manual, serta meminimalisir waktu diam agen.' },
              { ikon: faVideo, judul: 'CCTV 24/7', isi: 'Lingkungan kantor dilengkapi dengan sistem pemantauan agen secara online 24 jam sehari, 7 hari seminggu.' },
              { ikon: faChartPie, judul: 'Pelaporan (Reporting)', isi: 'Kami menyajikan laporan aktivitas rutin yang disesuaikan dengan kebutuhan bisnis Anda.' },
              { ikon: faMicrophone, judul: 'Rekaman Panggilan', isi: 'Rekaman suara dari setiap panggilan disimpan secara aman dan disediakan untuk mitra kami.' }
            ].map((infra, idx) => (
              <Reveal key={infra.judul} delay={idx * 100}>
                <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300 h-full">
                  <FontAwesomeIcon icon={infra.ikon} className="text-3xl text-yellow-600 mb-5" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{infra.judul}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{infra.isi}</p>
                </div>
              </Reveal>
            ))}

            {/* Khusus item SMS & Email Massal */}
            <Reveal delay={500}>
              <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300 flex flex-col justify-center h-full">
                <div className="flex space-x-4 mb-5">
                  <FontAwesomeIcon icon={faCommentSms} className="text-3xl text-yellow-600" />
                  <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">SMS & Email Massal</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pengiriman pesan massal pada portofolio yang disegmentasi untuk menjangkau volume pelanggan yang lebih besar.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

    </div>
  );
}