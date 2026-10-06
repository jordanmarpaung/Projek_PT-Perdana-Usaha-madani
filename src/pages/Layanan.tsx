import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, faPhoneVolume, faVideo, faChartPie, 
  faMicrophone, faEnvelope, faCommentSms, faMapMarkedAlt, faHandshake, faFileContract, faHeadset, faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

// Import Gambar (Pastikan Anda melengkapi gambar-gambar ini di folder assets)
import TeleCollectionImage from '../assets/tele.jpg';
import MediasiImage from '../assets/mediasi.jpg';
// Placeholder import untuk gambar yang belum ada (Sesuaikan nanti)
import DpdImage from '../assets/telat.jpg';   // Ganti dengan gambar DPD/Reminder jika ada
import SkemaImage from '../assets/skema.jpg'; // Ganti dengan gambar Skema Biaya jika ada
import ValidasiImage from '../assets/validasi.jpg'; // Ganti dengan gambar Validasi jika ada

// ==========================================
// KOMPONEN ANIMASI SCROLL (TIDAK PERLU DIUBAH)
// ==========================================
interface RevealProps {
  children: ReactNode;
  direction: 'left' | 'right';
}

const ScrollReveal = ({ children, direction }: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Hentikan observasi setelah animasi berjalan sekali
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Animasi terpicu saat 20% elemen terlihat di layar
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const baseClass = "transition-all duration-1000 ease-out transform";
  const hiddenClass = direction === 'left' ? "opacity-0 -translate-x-24" : "opacity-0 translate-x-24";
  const visibleClass = "opacity-100 translate-x-0";

  return (
    <div ref={ref} className={`${baseClass} ${isVisible ? visibleClass : hiddenClass} w-full md:w-1/2`}>
      {children}
    </div>
  );
};

// ==========================================
// HALAMAN UTAMA LAYANAN
// ==========================================
export default function Layanan() {
  return (
    <div className="animate-fade-in pb-20 bg-white">
      
      {/* Hero Layanan */}
      <section className="bg-gray-900 py-24 text-center border-b-[6px] border-yellow-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Solusi Pemulihan Aset Komprehensif</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Dari panggilan persuasif hingga mediasi lapangan secara langsung, kami menyediakan infrastruktur lengkap untuk mengamankan stabilitas finansial Anda.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* BAGIAN 1: DESK COLLECTION                  */}
      {/* ========================================== */}
      <section className="pt-24 pb-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Desk Collection</h2>
            <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Layanan penagihan terpusat berbasis sistem mutakhir untuk menjangkau debitur secara cepat dan masif.
            </p>
          </div>

          <div className="space-y-32">
            
            {/* 1. Call Services (Gambar Kiri, Teks Kanan) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <ScrollReveal direction="left">
                <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-900 opacity-20 z-10"></div>
                  <img src={TeleCollectionImage} alt="Inbound Outbound Calls" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
                    <div className="bg-gray-900 text-white text-xs font-bold py-2 px-6 rounded-l-md shadow-md">Inbound</div>
                    <div className="bg-gray-800 text-white text-xs font-bold py-2 px-6 rounded-l-md shadow-md">Outbound</div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Layanan <span className="font-extrabold">Tele-Collection</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Kami siap melayani kebutuhan operasional Anda melalui panggilan <i>inbound</i> dan <i>outbound</i> secara terstruktur. Dengan pendekatan komunikasi yang persuasif, agen kami memastikan setiap panggilan dilakukan dengan etika profesional untuk menjaga nama baik perusahaan Anda.
                </p>
              </ScrollReveal>
            </div>

            {/* 2. DPD Cases (Teks Kiri, Gambar Kanan) - Animasi tetap konsisten: Gambar dari Kiri, Teks dari Kanan */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              {/* Gambar dipaksa muncul dari kiri secara visual */}
              <ScrollReveal direction="left">
                <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-900 opacity-20 z-10"></div>
                  <img src={DpdImage} alt="DPD Cases Handling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <FontAwesomeIcon icon={faCalendarCheck} className="absolute bottom-6 left-6 text-6xl text-white opacity-80 z-20" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Penanganan <span className="font-extrabold">Keterlambatan (DPD)</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tim kami memiliki rekam jejak dan pengalaman mendalam untuk bekerja dengan berbagai tingkatan kasus DPD (<i>Days Past Due</i>). Layanan kami mencakup:
                </p>
                <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
                  <li><strong>Reminder Bucket:</strong> Pengingat proaktif sebelum atau tepat saat jatuh tempo.</li>
                  <li><strong>Early DPD:</strong> Penanganan cepat untuk keterlambatan tahap awal.</li>
                  <li><strong>Late Recovery:</strong> Strategi negosiasi intensif untuk portofolio yang telah lama menunggak.</li>
                </ul>
              </ScrollReveal>
            </div>

            {/* 3. Fee Arrangement (Gambar Kiri, Teks Kanan) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <ScrollReveal direction="left">
                <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-yellow-900 opacity-20 z-10"></div>
                  <img src={SkemaImage} alt="Skema Fleksibel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-8 right-8 bg-yellow-400 text-gray-900 text-xl font-extrabold py-3 px-6 shadow-xl transform rotate-3 z-20">
                    SKEMA ADAPTIF
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Skema Biaya <span className="font-extrabold">Fleksibel</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Biaya layanan kami sangat bergantung pada kebutuhan spesifik Anda. Kami menawarkan pilihan yang adaptif:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3" /> <span><strong>Fee Each Call Done:</strong> Biaya per panggilan selesai.</span></li>
                  <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3" /> <span><strong>BPO (Fixed Fee):</strong> Biaya tetap per agen, ideal untuk panggilan <i>reminder</i> dan awal DPD.</span></li>
                  <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3" /> <span><strong>Variabel Penuh:</strong> Dibayar sebagai persentase dari dana yang berhasil ditagih.</span></li>
                </ul>
              </ScrollReveal>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Field Collection</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Kehadiran fisik profesional sebagai mitra lapangan untuk mediasi dan penyelesaian masalah secara tatap muka.
            </p>
          </div>

          <div className="space-y-32">
            
            {/* 1. Validasi Domisili (Gambar Kiri, Teks Kanan) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

              <ScrollReveal direction="left">
                <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-900 opacity-20 z-10"></div>

                  <img src={ValidasiImage} alt="Validasi Lapangan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="absolute bottom-6 left-6 text-6xl text-white opacity-80 z-20" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Validasi <span className="font-extrabold">Langsung (On-Site)</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tim lapangan kami bertindak sebagai mitra profesional yang hadir langsung di lokasi. Layanan ini difokuskan pada:
                </p>
                <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
                  <li>Validasi langsung terhadap alamat domisili debitur untuk menghindari data fiktif.</li>
                  <li>Pemeriksaan detail bisnis dan usaha yang dijalankan.</li>
                  <li>Pemantauan kondisi aset secara aktual di lapangan.</li>
                </ul>
              </ScrollReveal>
            </div>

            {/* 2. Mediasi & Solusi (Teks Kiri, Gambar Kanan) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <ScrollReveal direction="left">
                <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-green-900 opacity-20 z-10"></div>
                  <img src={MediasiImage} alt="Mediasi Lapangan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <FontAwesomeIcon icon={faHandshake} className="absolute bottom-6 right-6 text-6xl text-white opacity-80 z-20" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Mediasi & Formulasi <span className="font-extrabold">Solusi</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Melalui mediasi tatap muka, kami melakukan upaya penagihan langsung (<i>direct collection efforts</i>) dengan pendekatan psikologis yang tepat
                  Fokus utama kami adalah memfasilitasi komunikasi dua arah untuk merumuskan solusi pembayaran yang adil dan disesuaikan dengan kendala atau batasan yang dialami oleh debitur.
                </p>
              </ScrollReveal>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Infrastruktur Call Center</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Layanan kami didukung penuh oleh teknologi dan peralatan mutakhir untuk memastikan keamanan data, efisiensi waktu, dan transparansi proses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300">
              <FontAwesomeIcon icon={faServer} className="text-3xl text-yellow-600 mb-5" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Sistem CRM Terpadu</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Data Anda dijaga keamanannya. Kami dapat bekerja menggunakan sistem internal kami sendiri maupun terintegrasi langsung dengan sistem Anda.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300">
              <FontAwesomeIcon icon={faPhoneVolume} className="text-3xl text-yellow-600 mb-5" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Autodialer Calling</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Meningkatkan jumlah panggilan 3 hingga 4 kali lipat dibandingkan panggilan manual, serta meminimalisir waktu diam agen.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300">
              <FontAwesomeIcon icon={faVideo} className="text-3xl text-yellow-600 mb-5" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">CCTV 24/7</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lingkungan kantor dilengkapi dengan sistem pemantauan agen secara <i>online</i> 24 jam sehari, 7 hari seminggu.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300">
              <FontAwesomeIcon icon={faChartPie} className="text-3xl text-yellow-600 mb-5" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Pelaporan (Reporting)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kami menyajikan laporan aktivitas rutin yang disesuaikan dengan kebutuhan bisnis Anda.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300">
              <FontAwesomeIcon icon={faMicrophone} className="text-3xl text-yellow-600 mb-5" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Rekaman Panggilan</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rekaman suara dari setiap panggilan disimpan secara aman dan disediakan untuk mitra kami.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition duration-300 flex flex-col justify-center">
              <div className="flex space-x-4 mb-5">
                <FontAwesomeIcon icon={faCommentSms} className="text-3xl text-yellow-600" />
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">SMS & Email Massal</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pengiriman pesan massal pada portofolio yang disegmentasi untuk menjangkau volume pelanggan yang lebih besar[cite: 11].
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}