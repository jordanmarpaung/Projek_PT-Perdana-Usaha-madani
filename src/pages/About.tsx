import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, faCheckCircle, faEye, faBullseye, 
  faHandshakeAngle, faChartLine, faSitemap 
} from '@fortawesome/free-solid-svg-icons';

// ==============================================================
// IMPORT FOTO TIM (Pastikan nama file dan ekstensinya sesuai di folder assets!)
// ==============================================================
import fotoBenny from '../assets/komisaris.png';
import fotoRosinta from '../assets/Direktur.png';
import fotoDennies from '../assets/manajer.jpeg';     // <- Sesuaikan nama file asli Anda
import fotoTiurmaida from '../assets/finance.jpeg'; // <- Sesuaikan nama file asli Anda
import fotoFitri from '../assets/HRDnya.jpeg';         // <- Sesuaikan nama file asli Anda
import fotoSriAyu from '../assets/Q,_control.jpeg';      // <- Sesuaikan nama file asli Anda

export default function About() {
  return (
    <div className="animate-fade-in pb-20">
      
      {/* Hero Tentang Kami */}
      <section className="bg-gray-900 py-24 text-center border-b-[6px] border-yellow-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Identitas & Komitmen Kami</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Menjadi garis pertahanan terakhir yang tangguh bagi lembaga keuangan melalui integritas, transparansi, dan strategi penagihan yang bermartabat.
          </p>
        </div>
      </section>

      {/* Legalitas & Sejarah */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                PT Perdana Usaha Madani didirikan secara resmi di Bekasi pada tanggal 13 Oktober 2023 berdasarkan Akta No. 03. Perusahaan ini diprakarsai oleh Tumpak Benny Marpaung dan Rosinta Uli Manurung, serta didukung oleh tim profesional yang memiliki rekam jejak panjang dan pengalaman mendalam di bidang layanan pemulihan kredit bermasalah (Desk Collection).
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
               Berpusat di Ruko Rose Garden 5 No. 20, Galaxy, Bekasi Selatan, kami berkomitmen membangun organisasi yang berorientasi pada kepuasan mitra bisnis dengan senantiasa menjunjung tinggi integritas, kejujuran, dan profesionalisme. PT Perdana Usaha Madani hadir sebagai mitra strategis yang memberikan solusi inovatif dan aplikatif bagi sektor perbankan maupun non-perbankan dalam menavigasi serta mengatasi berbagai tantangan kredit.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl shadow-inner">
              <FontAwesomeIcon icon={faShieldHalved} className="text-5xl text-yellow-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legalitas Korporasi</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-1 mr-3" /> <span>Didirikan 13 Oktober 2023 (Akta No. 03).</span></li>
                <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-1 mr-3" /> <span>Fokus Layanan: Recovery Non-Performing Loan.</span></li>
                <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-1 mr-3" /> <span>Tunduk pada regulasi OJK, Bank Indonesia, dan AFPI/SPPI.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-yellow-600">
              <FontAwesomeIcon icon={faEye} className="text-4xl text-yellow-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi perusahaan yang profesional dan terpercaya di bidang jasa penagihan utang. Kami berkomitmen untuk menjadi pihak yang diandalkan oleh lembaga perbankan maupun non-perbankan, serta berperan sebagai mitra bisnis yang harmonis untuk jangka panjang.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-yellow-600">
              <FontAwesomeIcon icon={faBullseye} className="text-4xl text-yellow-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Berperan aktif dalam pengembangan sektor perbankan dan non-perbankan di Indonesia, khususnya dalam memulihkan kredit bermasalah. Kami hadir sebagai benteng pertahanan terakhir yang memberikan solusi penyelesaian secara terukur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Nilai Inti Perusahaan (Core Values)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faHandshakeAngle} className="text-3xl text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Etika & Kepatuhan</h3>
              <p className="text-gray-600">Kepatuhan ketat terhadap OJK dan BI. Praktik penagihan dilakukan dengan sopan, menghormati hak konsumen, dan menolak keras segala bentuk intimidasi.</p>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faShieldHalved} className="text-3xl text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparansi Data</h3>
              <p className="text-gray-600">Tata kelola transparan melalui pelaporan akurat. Perlindungan maksimal terhadap kerahasiaan data konsumen sesuai standar privasi.</p>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maksimalisasi Aset</h3>
              <p className="text-gray-600">Disiplin tinggi dan strategi penagihan terukur untuk menekan angka NPL/DPD, demi mengamankan arus kas mitra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* TIM & ORGANISASI (HIERARKI & CASCADING FADE-UP ANIMATION)        */}
      {/* ============================================================== */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        
        {/* CSS Khusus untuk animasi berjenjang (Staggered Animation) */}
        <style>
          {`
            @keyframes fadeUpStagger {
              0% { opacity: 0; transform: translateY(50px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .anim-fade-up {
              opacity: 0;
              animation: fadeUpStagger 0.8s ease-out forwards;
            }
            .delay-1 { animation-delay: 0.2s; }
            .delay-2 { animation-delay: 0.6s; }
            .delay-3 { animation-delay: 1.0s; }
          `}
        </style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Judul Bagian */}
          <div className="text-center mb-20 anim-fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktur Organisasi & Tim Ahli</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Didukung oleh jajaran profesional dengan pengalaman mumpuni dalam manajemen penagihan, keuangan, dan kontrol kualitas.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            
            {/* BARIS 1: PUNCAK PIMPINAN (Komisaris & Direktur) */}
            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-16 anim-fade-up delay-1">
              
              {/* Komisaris */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-4 border-yellow-600 overflow-hidden mb-5 shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                  <img src={fotoBenny} alt="Tumpak Benny Marpaung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tumpak Benny Marpaung</h3>
                <p className="text-yellow-700 font-bold uppercase tracking-wider text-sm mt-1">Komisaris Utama</p>
              </div>

              {/* Direktur */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-4 border-yellow-600 overflow-hidden mb-5 shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                  <img src={fotoRosinta} alt="Rosinta Uli Manurung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Rosinta Uli Manurung</h3>
                <p className="text-yellow-700 font-bold uppercase tracking-wider text-sm mt-1">Direktur</p>
              </div>

            </div>

            {/* BARIS 2: MANAJEMEN TENGAH (Manager) */}
            <div className="flex justify-center mb-16 anim-fade-up delay-2">
              <div className="flex flex-col items-center text-center group cursor-pointer relative">
                {/* Garis penghubung hierarki (Opsional untuk desain) */}
                <div className="hidden md:block absolute -top-12 w-0.5 h-10 bg-gray-300"></div>
                
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-2 border-gray-300 overflow-hidden mb-4 shadow-md group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                  <img src={fotoDennies} alt="Dennies Jhonatan Sinaga" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Dennies Jhonatan Sinaga</h3>
                <p className="text-gray-500 font-semibold text-sm mt-1">Manager</p>
              </div>
            </div>

            {/* BARIS 3: OPERASIONAL INTI (Finance, HRD, QC) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 anim-fade-up delay-3 relative">
              {/* Garis horizontal penghubung hierarki */}
             <div className="hidden md:block absolute -top-8 left-[16.66%] w-[66.66%] h-[2px] bg-gray-300"></div>
              
              {/* Finance */}
              <div className="flex flex-col items-center text-center group cursor-pointer relative">
                <div className="hidden md:block absolute -top-8 w-0.5 h-6 bg-gray-300"></div>
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 overflow-hidden mb-4 shadow-sm group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                  <img src={fotoTiurmaida} alt="Tiurmaida Manurung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Tiurmaida Manurung</h3>
                <p className="text-gray-500 text-sm mt-1">Finance</p>
              </div>

              {/* HRD / Admin */}
              <div className="flex flex-col items-center text-center group cursor-pointer relative">
                <div className="hidden md:block absolute -top-8 w-0.5 h-6 bg-gray-300"></div>
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 overflow-hidden mb-4 shadow-sm group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                  <img src={fotoFitri} alt="Fitri Fatimatun Ningsih" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Supriadi Manurung</h3>
                <p className="text-gray-500 text-sm mt-1">HRD / Admin</p>
              </div>

              {/* Quality Control */}
              <div className="flex flex-col items-center text-center group cursor-pointer relative">
                <div className="hidden md:block absolute -top-8 w-0.5 h-6 bg-gray-300"></div>
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 overflow-hidden mb-4 shadow-sm group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                  <img src={fotoSriAyu} alt="Sri Ayu Ningsih Manurung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Sri Ayu Ningsih Manurung</h3>
                <p className="text-gray-500 text-sm mt-1">Quality Control</p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}