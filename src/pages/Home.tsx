import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, faClipboardCheck, faUsers, faUserTie, faHeadset, faPhoneVolume, faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import Reveal from '../components/Reveal';

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
  const [trioSiap, setTrioSiap] = useState(false);

  return (
    <div className="animate-fade-in">
      
      {/* 1. BAGIAN HERO (Mengunci 1 Layar Penuh) */}
      <section className="relative isolate w-full min-h-screen lg:h-screen overflow-hidden bg-stone-100 flex flex-col justify-between">
        {/* Foto kantor sebagai latar belakang penuh */}
        <img
          src={fotoTempat}
          alt="Kantor PT Perdana Usaha Madani"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Lapisan gradasi putih transparan */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/70 z-10"></div> 

        {/* Area Konten Utama Hero */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end h-full w-full pt-24">
          
          {/* Kiri: Blok Teks & Tombol */}
          <div className="lg:col-span-6 self-center pb-2 lg:pb-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight mb-6">
              <Reveal delay={100}>
                <span className="block font-light">Profesionalisme dalam</span>
              </Reveal>
              <Reveal delay={250}>
                <span className="block font-bold text-yellow-700">Resolusi Kredit Anda.</span>
              </Reveal>
            </h1>
            
            <Reveal delay={400}>
              <div className="w-16 sm:w-20 h-1 bg-yellow-700 mb-6 sm:mb-8"></div>
            </Reveal>
            
            <Reveal delay={550}>
              <p className="text-base text-slate-600 mb-8 max-w-xl">
                Sebagai mitra terpercaya lembaga perbankan dan non-perbankan, kami mengedepankan etika, kepatuhan (OJK/AFPI), dan efisiensi dalam setiap langkah pemulihan aset Anda.
              </p>
            </Reveal>

            {/* Baris Tombol Aksi */}
            <Reveal delay={700}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                <button onClick={() => setActivePage('layanan')} className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2 w-full sm:w-auto justify-center transition shadow-md">
                  Lihat Layanan Kami &rarr;
                </button>
                <button onClick={() => setActivePage('tentang')} className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium px-6 py-3 rounded-md w-full sm:w-auto transition">
                  Tentang Perusahaan
                </button>
              </div>
            </Reveal>
          </div>

          {/* Kanan: Foto 3 Orang Staff Menempel di Dasar Layar Hero */}
          <div className="lg:col-span-6 h-full flex items-end justify-center lg:justify-end overflow-hidden">
            <Reveal delay={850}>
              <img 
                src={fototrio} 
                alt="Tim Perdana Usaha Madani" 
                onLoad={() => setTrioSiap(true)}
                className={`h-[40vh] sm:h-[48vh] lg:h-[82vh] w-auto max-w-full object-contain object-bottom select-none transition-opacity duration-1000 ${trioSiap ? 'opacity-100' : 'opacity-0'}`}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Blok gelap di dasar Hero */}
      <Reveal delay={900}>
        <div className="relative bg-slate-900 border-t-4 border-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { ikon: faUserTie, teks: 'Etika profesional' },
              { ikon: faClipboardCheck, teks: 'Kepatuhan OJK/AFPI' },
              { ikon: faShieldHalved, teks: 'Efisiensi pemulihan aset' },
            ].map((item) => (
              <div key={item.teks} className="flex items-center gap-3 text-gray-200 text-sm font-medium">
                <FontAwesomeIcon icon={item.ikon} className="text-yellow-500 text-lg" />
                {item.teks}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 2. KLIEN & MITRA KAMI */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
              Dipercaya Oleh Mitra Bisnis Terkemuka
            </p>
          </Reveal>
          <Reveal delay={200}>
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
          </Reveal>
        </div>
      </section>

      {/* 3. BISNIS UTAMA (OUR SERVICES) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Layanan Utama Kami</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Layanan kami mencakup berbagai tahap keterlambatan pembayaran (DPD), mulai dari pengingat awal hingga pemulihan tahap lanjut.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                ikon: faHeadset,
                judul: 'Customer Service',
                isi: 'Layanan panggilan masuk (inbound) dan keluar (outbound) sesuai kebutuhan klien. Biaya menyesuaikan: per panggilan, atau BPO dengan biaya tetap per agen yang dialokasikan untuk proyek Anda.',
              },
              {
                ikon: faPhoneVolume,
                judul: 'Desk Collection',
                isi: 'Penanganan berbagai kondisi keterlambatan, dari tahap pengingat dan DPD awal hingga pemulihan tahap lanjut. Tersedia dalam skema BPO (biaya tetap per agen) atau skema variabel berupa persentase dari dana yang berhasil ditagih.',
              },
              {
                ikon: faLocationDot,
                judul: 'Field Collection',
                isi: 'Tim lapangan profesional yang memfasilitasi komunikasi langsung dengan debitur: validasi domisili, usaha, dan kondisi aset, serta penagihan langsung dengan solusi pembayaran yang disesuaikan dengan kemampuan debitur.',
              },
            ].map((s, idx) => (
              <Reveal key={s.judul} delay={idx * 150}>
                <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 h-full">
                  <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6">
                    <FontAwesomeIcon icon={s.ikon} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.judul}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.isi}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEKUATAN KAMI (OUR STRENGTH) */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl font-extrabold mb-6">Mengapa Memilih <span className="text-yellow-500">PT Perdana Usaha Madani?</span></h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Kekuatan kami berpusat pada operasional yang tersistem, kontrol kualitas yang ketat, serta pengembangan SDM berkelanjutan untuk menjaga keamanan data klien dan mendukung pencapaian target pemulihan.
                </p>
                <button onClick={() => setActivePage('tentang')} className="bg-yellow-600 text-white px-6 py-3 rounded-sm font-bold hover:bg-yellow-700 transition">
                  Profil Perusahaan &rarr;
                </button>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { ikon: faShieldHalved, judul: 'Operasi Berbasis Sistem', desk: 'Operasional call center & desk collection sepenuhnya berbasis sistem untuk menjamin keamanan data klien.' },
                { ikon: faClipboardCheck, judul: 'Quality Control Rutin', desk: 'Memantau kinerja agen secara rutin untuk memastikan kepatuhan terhadap pedoman SOP dan regulasi OJK.' },
                { ikon: faUsers, judul: 'Tim Pelatihan Rutin', desk: 'Memberikan pelatihan rutin kepada seluruh staf untuk meningkatkan kualitas negosiasi dan kemampuan penagihan.' },
                { ikon: faUserTie, judul: 'Pimpinan Tim Kompeten', desk: 'Dipimpin oleh Head Collection & Team Leader mumpuni yang bertanggung jawab memastikan performa agen memenuhi target klien.' }
              ].map((item, idx) => (
                <Reveal key={item.judul} delay={idx * 100}>
                  <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-yellow-600 h-full">
                    <FontAwesomeIcon icon={item.ikon} className="text-yellow-500 text-2xl mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.judul}</h4>
                    <p className="text-gray-400 text-sm">{item.desk}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEPEMIMPINAN PENDIRI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Kepemimpinan Perusahaan</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Didirikan di Bekasi pada Oktober 2023 oleh praktisi yang berlatar belakang dan berpengalaman di bidang pemulihan kredit bermasalah (desk collection), PT Perdana Usaha Madani berkomitmen untuk menghadirkan solusi bagi sektor perbankan dan non-perbankan.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Reveal delay={100}>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition h-full">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                  <img src={fotoBenny} alt="Foto Tumpak Benny Marpaung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tumpak Benny Marpaung, SE, MM, BKP</h3>
                <p className="text-yellow-700 font-bold mb-4">Komisaris Utama</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Praktisi di bidang keuangan, perpajakan, akuntansi, dan hukum. Memegang sertifikat Konsultan Pajak A dan B (USKP).
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition h-full">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                  <img src={fotoRosinta} alt="Foto Rosinta Uli Manurung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Rosinta Uli Manurung</h3>
                <p className="text-yellow-700 font-bold mb-4">Direktur</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bersama komisaris mendirikan perusahaan dengan tujuan membangun organisasi yang berfokus pada kepuasan klien, dengan menjunjung kejujuran dan profesionalisme.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="bg-yellow-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Butuh Mitra Penanganan Kredit Bermasalah?</h2>
            <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
              Diskusikan kebutuhan Anda dengan tim kami dan temukan solusi yang tepat untuk pemulihan aset Anda. Kami siap membantu Anda dengan profesionalisme.
            </p>
            <button
              onClick={() => setActivePage('kontak')} 
              className="bg-gray-900 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-black transition shadow-xl">
              Diskusikan Sekarang
            </button>
          </Reveal>
        </div>
      </section>

    </div>
  );
}