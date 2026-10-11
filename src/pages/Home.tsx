import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, faShieldHalved, faClipboardCheck, faUsers, faUserTie 
} from '@fortawesome/free-solid-svg-icons';

// Import gambar dari folder assets
import logoKreditplus from '../assets/kredit_plus.png';
import logoEzmart from '../assets/EZ_mart_logo.png';
import logoTeknologiInternasional from '../assets/PT_TIN.png';
import logoInvestasiDigital from '../assets/logo bizer.png';
import fotoBenny from '../assets/komisaris.png';
import fotoRosinta from '../assets/Direktur.png';
import fotoTempat from '../assets/tempat.jpg';
import fototrio from '../assets/gambartriosatu.png';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  return (
    <div className="animate-fade-in">
      
           {/* 1. HERO SECTION */}
      <section className="relative isolate w-full overflow-hidden bg-stone-100">
        {/* Foto kantor, dibuat samar sebagai latar */}
        <img
          src={fotoTempat}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
       <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/85 to-white/95"></div> 

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Kiri: teks */}
          <div className="lg:col-span-6 py-16 lg:py-24 self-center">
            
            <h1 className="text-4xl sm:text-5xl text-slate-900 leading-[1.1] tracking-tight mb-6">
              <span className="block font-light">Profesionalisme dalam</span>
              <span className="block font-bold text-yellow-700">Resolusi Kredit Anda.</span>
            </h1>

            <div className="w-20 h-1 bg-yellow-600 mb-6"></div>

            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Sebagai mitra terpercaya lembaga perbankan dan non-perbankan, kami mengedepankan etika, kepatuhan (OJK/AFPI), dan efisiensi dalam setiap langkah pemulihan aset Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActivePage('layanan')}
                className="bg-yellow-600 text-white text-center px-8 py-4 rounded-sm font-semibold hover:bg-yellow-700 transition shadow-lg flex items-center justify-center gap-3"
              >
                Jelajahi Layanan Kami <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button
                onClick={() => setActivePage('tentang')}
                className="bg-transparent border border-slate-400 text-slate-800 text-center px-8 py-4 rounded-sm font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition"
              >
                Pelajari Perusahaan
              </button>
            </div>
          </div>

          {/* Kanan: tiga pilar, latar putih disamarkan */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end self-end">
            <img
              src={fototrio}
              alt="Pilar utama PT Perdana Usaha Madani"
              className="relative w-full max-w-xl block mix-blend-darken lg:scale-[1.08] origin-bottom"
            />
          </div>
        </div>

        {/* Blok gelap di dasar */}
        <div className="relative bg-slate-900 border-t-4 border-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { ikon: faUserTie, teks: 'Etika profesional' },
              { ikon: faClipboardCheck, teks: 'Kepatuhan OJK/AFPI' },
              { ikon: faShieldHalved, teks: 'Efisiensi pemulihan aset' },
            ].map((item) => (
              <div key={item.teks} className="flex items-center gap-3 text-gray-200 text-sm">
                <FontAwesomeIcon icon={item.ikon} className="text-yellow-500 text-lg" />
                {item.teks}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 2. KLIEN & MITRA KAMI */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
            Dipercaya Oleh Mitra Bisnis Terkemuka
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
            <div className="group cursor-pointer">
              <img src={logoKreditplus} alt="Mitra Kreditplus" className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 ease-out group-hover:drop-shadow-2xl" />
            </div>
            <div className="group cursor-pointer">
              <img src={logoEzmart} alt="Mitra EZMART" className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 ease-out group-hover:drop-shadow-2xl" />
            </div>
            <div className="group cursor-pointer">
              <img src={logoTeknologiInternasional} alt="Mitra Teknologi Internasional" className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 ease-out group-hover:drop-shadow-2xl" />
            </div>
            <div className="group cursor-pointer">
              <img src={logoInvestasiDigital} alt="Mitra Investasi Digital" className="h-20 md:h-24 lg:h-28 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 ease-out group-hover:drop-shadow-2xl" />
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
                <FontAwesomeIcon icon={faArrowRight} className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desk Collection</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Layanan panggilan <i>inbound</i> dan <i>outbound</i> terstruktur. Tersedia dalam skema BPO (biaya tetap per agen) maupun persentase variabel dari dana yang berhasil ditagihkan.
              </p>
            </div>
            <div className="p-10 border border-gray-200 rounded-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faArrowRight} className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Field Collection</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tim lapangan profesional yang bertindak sebagai mitra mediasi langsung, memastikan komunikasi tatap muka yang efektif dan negosiasi yang berpusat pada solusi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEKUATAN KAMI (OUR STRENGTH) */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Mengapa Memilih <span className="text-yellow-500">PT Perdana Usaha Madani?</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Kekuatan kami berpusat pada operasional yang tersistem, kontrol kualitas yang ketat, serta pengembangan SDM berkelanjutan untuk menjamin keamanan data klien dan pencapaian target pemulihan yang maksimal.
              </p>
              <button onClick={() => setActivePage('tentang')} className="bg-yellow-600 text-white px-6 py-3 rounded-sm font-bold hover:bg-yellow-700 transition">
                Profil Perusahaan &rarr;
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                <FontAwesomeIcon icon={faShieldHalved} className="text-yellow-500 text-2xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Operasi Berbasis Sistem</h4>
                <p className="text-gray-400 text-sm">Operasional call center & desk collection sepenuhnya berbasis sistem untuk menjamin keamanan data klien.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                <FontAwesomeIcon icon={faClipboardCheck} className="text-yellow-500 text-2xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Quality Control Terbaik</h4>
                <p className="text-gray-400 text-sm">Memantau kinerja agen secara rutin untuk memastikan kepatuhan terhadap pedoman SOP dan regulasi OJK.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                <FontAwesomeIcon icon={faUsers} className="text-yellow-500 text-2xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Tim Pelatihan Rutin</h4>
                <p className="text-gray-400 text-sm">Memberikan pelatihan rutin kepada seluruh staf untuk meningkatkan kualitas negosiasi dan kemampuan penagihan.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600">
                <FontAwesomeIcon icon={faUserTie} className="text-yellow-500 text-2xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Kepemimpinan Tangguh</h4>
                <p className="text-gray-400 text-sm">Dipimpin oleh Head Collection & Team Leader mumpuni yang bertanggung jawab memastikan performa agen memenuhi target klien.</p>
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
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                <img src={fotoBenny} alt="Foto Tumpak Benny Marpaung" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tumpak Benny Marpaung</h3>
              <p className="text-yellow-700 font-bold mb-4">Komisaris Utama</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pakar bersertifikat (USKP A & B) dengan spesialisasi mendalam di bidang Keuangan, Pajak, Akuntansi, dan Hukum.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                <img src={fotoRosinta} alt="Foto Rosinta Uli Manurung" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Rosinta Uli Manurung</h3>
              <p className="text-yellow-700 font-bold mb-4">Direktur</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Berdedikasi membangun tata kelola transparan, berorientasi kepuasan klien, dan menjaga performa efisiensi tertinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
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
  );
}