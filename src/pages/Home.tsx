import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, faClipboardCheck, faUsers, faUserTie, faHeadset, faPhoneVolume, faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import Reveal from '../components/Reveal';

import logoEzmart from '../assets/logo_polibeli.png'; 
import logoTeknologiInternasional from '../assets/nusatech_logo.png';
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
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in relative">
      
      {/* 1. BAGIAN HERO */}
      <section className="relative isolate w-full min-h-screen lg:h-screen overflow-hidden bg-stone-100 flex flex-col justify-between">
        <img src={fotoTempat} alt="Kantor PT Perdana Usaha Madani" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/70 z-10"></div> 

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end h-full w-full pt-24">
          <div className="lg:col-span-6 self-center pb-2 lg:pb-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight mb-6">
              <Reveal delay={100}>
                <span className="block font-light">{t('hero.title1')}</span>
              </Reveal>
              <Reveal delay={250}>
                <span className="block font-bold text-yellow-700">{t('hero.title2')}</span>
              </Reveal>
            </h1>
            
            <Reveal delay={400}>
              <div className="w-16 sm:w-20 h-1 bg-yellow-700 mb-6 sm:mb-8"></div>
            </Reveal>
            
            <Reveal delay={550}>
              <p className="text-base text-slate-600 mb-8 max-w-xl">
                {t('hero.desc')}
              </p>
            </Reveal>

            <Reveal delay={700}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                <button onClick={() => setActivePage('layanan')} className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2 w-full sm:w-auto justify-center transition shadow-md">
                  {t('hero.btnServices')} &rarr;
                </button>
                <button onClick={() => setActivePage('tentang')} className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium px-6 py-3 rounded-md w-full sm:w-auto transition">
                  {t('hero.btnAbout')}
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 h-full flex items-end justify-center lg:justify-end overflow-hidden">
            <Reveal delay={850}>
              <img src={fototrio} alt="Tim Perdana Usaha Madani" onLoad={() => setTrioSiap(true)} className={`h-[40vh] sm:h-[48vh] lg:h-[82vh] w-auto max-w-full object-contain object-bottom select-none transition-opacity duration-1000 ${trioSiap ? 'opacity-100' : 'opacity-0'}`} />
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal delay={900}>
        <div className="relative bg-slate-900 border-t-4 border-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { ikon: faUserTie, teks: t('features.ethics') },
              { ikon: faClipboardCheck, teks: t('features.compliance') },
              { ikon: faShieldHalved, teks: t('features.efficiency') },
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
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">{t('clients.title')}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-16 sm:gap-24 md:gap-32 lg:gap-48">
              <div className="group cursor-pointer">
                <img 
                  src={logoEzmart} 
                  alt="EZMart" 
                  className="w-32 h-20 md:w-48 md:h-28 lg:w-56 lg:h-32 object-contain transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 ease-out" 
                />
              </div>
              <div className="group cursor-pointer">
                <img 
                  src={logoTeknologiInternasional} 
                  alt="PT. Nusatech Solusi Indonesia" 
                  className="w-32 h-20 md:w-48 md:h-28 lg:w-56 lg:h-32 object-contain transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 ease-out" 
                />
              </div>
              <div className="group cursor-pointer">
                <img 
                  src={logoInvestasiDigital} 
                  alt="PT Investasi Digital Nusantara" 
                  className="w-32 h-20 md:w-48 md:h-28 lg:w-56 lg:h-32 object-contain transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 ease-out" 
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. BISNIS UTAMA (OUR SERVICES) - BERSIH HANYA 3 KOTAK TANPA TOMBOL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t('services.title')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('services.desc')}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { ikon: faHeadset, judul: t('services.cs.title'), isi: t('services.cs.desc') },
              { ikon: faPhoneVolume, judul: t('services.desk.title'), isi: t('services.desk.desc') },
              { ikon: faLocationDot, judul: t('services.field.title'), isi: t('services.field.desc') },
            ].map((s, idx) => (
              <Reveal key={s.judul} delay={idx * 150}>
                <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 h-full flex flex-col bg-white">
                  <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6 shrink-0">
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
                <h2 className="text-4xl font-extrabold mb-6">{t('strength.title1')} <span className="text-yellow-500">{t('strength.title2')}</span></h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{t('strength.desc')}</p>
                <button onClick={() => setActivePage('tentang')} className="bg-yellow-600 text-white px-6 py-3 rounded-sm font-bold hover:bg-yellow-700 transition">
                  {t('strength.btn')} &rarr;
                </button>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { ikon: faShieldHalved, judul: t('strength.system.title'), desk: t('strength.system.desc') },
                { ikon: faClipboardCheck, judul: t('strength.qc.title'), desk: t('strength.qc.desc') },
                { ikon: faUsers, judul: t('strength.training.title'), desk: t('strength.training.desc') },
                { ikon: faUserTie, judul: t('strength.leader.title'), desk: t('strength.leader.desc') }
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
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t('leadership.title')}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('leadership.desc')}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Reveal delay={100}>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition h-full">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                  <img src={fotoBenny} alt="Foto Tumpak Benny Marpaung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tumpak Benny Marpaung, SE, MM, BKP</h3>
                <p className="text-yellow-700 font-bold mb-4">{t('leadership.roles.komisaris')}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{t('leadership.bennyDesc')}</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition h-full">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-yellow-600">
                  <img src={fotoRosinta} alt="Foto Rosinta Uli Manurung" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Rosinta Uli Manurung</h3>
                <p className="text-yellow-700 font-bold mb-4">{t('leadership.roles.direktur')}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{t('leadership.rosintaDesc')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="bg-yellow-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{t('cta.title')}</h2>
            <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">{t('cta.desc')}</p>
            <button onClick={() => setActivePage('kontak')} className="bg-gray-900 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-black transition shadow-xl">
              {t('cta.btn')}
            </button>
          </Reveal>
        </div>
      </section>

    </div>
  );
}