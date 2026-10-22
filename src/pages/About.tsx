import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // 1. IMPORT FUNGSI BAHASA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, faCheckCircle, faEye, faBullseye, 
  faHandshakeAngle, faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import Reveal from '../components/Reveal';

import fotoBenny from '../assets/komisaris.png';
import fotoJuliana from '../assets/komisaris.jpeg';     
import fotoRosinta from '../assets/Direktur.png';
import fotoDennies from '../assets/manajer.jpeg';     
import fotoTiurmaida from '../assets/finance.jpeg'; 
import fotoFitri from '../assets/HRDnya.jpeg';        
import fotoSriAyu from '../assets/Q,_control.jpeg';      

export default function About() {
  const { t } = useTranslation(); // 2. INISIALISASI FUNGSI

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pb-20">
      
      {/* Hero Tentang Kami */}
      <section className="bg-gray-900 pt-32 pb-24 text-center border-b-[6px] border-yellow-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t('about.hero.title')}</h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('about.hero.desc')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Legalitas & Sejarah */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.history.title')}</h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  {t('about.history.p1')}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {t('about.history.p2')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl shadow-inner">
                <FontAwesomeIcon icon={faShieldHalved} className="text-5xl text-yellow-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.legal.title')}</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-1 mr-3 flex-shrink-0" /> 
                    <div><span className="font-bold text-gray-800">{t('about.legal.l1.title')}</span> {t('about.legal.l1.desc')}</div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-1 mr-3 flex-shrink-0" /> 
                    <div><span className="font-bold text-gray-800">{t('about.legal.l2.title')}</span> {t('about.legal.l2.desc')}</div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-1 mr-3 flex-shrink-0" /> 
                    <div><span className="font-bold text-gray-800">{t('about.legal.l3.title')}</span> {t('about.legal.l3.desc')}</div>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-1 mr-3 flex-shrink-0" /> 
                    <div><span className="font-bold text-gray-800">{t('about.legal.l4.title')}</span> {t('about.legal.l4.desc')}</div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal delay={100}>
              <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-yellow-600 h-full">
                <FontAwesomeIcon icon={faEye} className="text-4xl text-yellow-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.vision.title')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{t('about.vision.desc')}</p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-yellow-600 h-full">
                <FontAwesomeIcon icon={faBullseye} className="text-4xl text-yellow-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.mission.title')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{t('about.mission.desc')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('about.values.title')}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { ikon: faHandshakeAngle, judul: t('about.values.v1.title'), isi: t('about.values.v1.desc') },
              { ikon: faShieldHalved, judul: t('about.values.v2.title'), isi: t('about.values.v2.desc') },
              { ikon: faChartLine, judul: t('about.values.v3.title'), isi: t('about.values.v3.desc') }
            ].map((nilai, idx) => (
              <Reveal key={nilai.judul} delay={idx * 150}>
                <div className="p-8 h-full">
                  <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon icon={nilai.ikon} className="text-3xl text-yellow-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{nilai.judul}</h3>
                  <p className="text-gray-600">{nilai.isi}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIM & ORGANISASI */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.team.title')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('about.team.desc')}</p>
            </div>
          </Reveal>
          
          <div className="max-w-5xl mx-auto">
            
            {/* BARIS 1: PUNCAK PIMPINAN */}
            <Reveal delay={150}>
              <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-16">
                
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-4 border-yellow-600 overflow-hidden mb-5 shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                    <img src={fotoBenny} alt="Tumpak Benny Marpaung" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tumpak Benny Marpaung</h3>
                  <p className="text-yellow-700 font-bold uppercase tracking-wider text-sm mt-1">{t('about.team.roles.komisaris')}</p>
                </div>

                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-4 border-yellow-600 overflow-hidden mb-5 shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                    <img src={fotoJuliana} alt="Juliani Manurung" className="w-full h-full object-cover" />    
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Juliani Manurung</h3>
                  <p className="text-yellow-700 font-bold uppercase tracking-wider text-sm mt-1">{t('about.team.roles.commissioner')}</p>
                </div>

                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-4 border-yellow-600 overflow-hidden mb-5 shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                    <img src={fotoRosinta} alt="Rosinta Uli Manurung" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Rosinta Uli Manurung</h3>
                  <p className="text-yellow-700 font-bold uppercase tracking-wider text-sm mt-1">{t('about.team.roles.direktur')}</p>
                </div>

              </div>
            </Reveal>

            {/* BARIS 2: MANAJEMEN TENGAH */}
            <Reveal delay={300}>
              <div className="flex justify-center mb-16">
                <div className="flex flex-col items-center text-center group cursor-pointer relative">
                  <div className="hidden md:block absolute -top-12 w-0.5 h-10 bg-gray-300"></div>
                  
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-2 border-gray-300 overflow-hidden mb-4 shadow-md group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                    <img src={fotoDennies} alt="Dennies Jhonatan Sinaga" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Dennies Jhonatan Sinaga</h3>
                  <p className="text-gray-500 font-semibold text-sm mt-1">{t('about.team.roles.manager')}</p>
                </div>
              </div>
            </Reveal>

            {/* BARIS 3: OPERASIONAL INTI */}
            <Reveal delay={450}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                <div className="hidden md:block absolute -top-8 left-[16.66%] w-[66.66%] h-[2px] bg-gray-300"></div>
                
                <div className="flex flex-col items-center text-center group cursor-pointer relative">
                  <div className="hidden md:block absolute -top-8 w-0.5 h-6 bg-gray-300"></div>
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 overflow-hidden mb-4 shadow-sm group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                    <img src={fotoTiurmaida} alt="Tiurmaida Manurung" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Tiurmaida Manurung</h3>
                  <p className="text-gray-500 text-sm mt-1">{t('about.team.roles.finance')}</p>
                </div>

                <div className="flex flex-col items-center text-center group cursor-pointer relative">
                  <div className="hidden md:block absolute -top-8 w-0.5 h-6 bg-gray-300"></div>
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 overflow-hidden mb-4 shadow-sm group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                    <img src={fotoFitri} alt="Supriadi Manurung" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Supriadi Manurung</h3>
                  <p className="text-gray-500 text-sm mt-1">{t('about.team.roles.hrd')}</p>
                </div>

                <div className="flex flex-col items-center text-center group cursor-pointer relative">
                  <div className="hidden md:block absolute -top-8 w-0.5 h-6 bg-gray-300"></div>
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-gray-200 overflow-hidden mb-4 shadow-sm group-hover:scale-105 group-hover:border-yellow-500 transition-all duration-300">
                    <img src={fotoSriAyu} alt="Sri Ayu Ningsih Manurung" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Sri Ayu Ningsih Manurung</h3>
                  <p className="text-gray-500 text-sm mt-1">{t('about.team.roles.qc')}</p>
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

    </div>
  );
}