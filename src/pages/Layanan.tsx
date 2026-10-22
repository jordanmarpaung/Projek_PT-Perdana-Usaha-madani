import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // 1. IMPORT TRANSLATION
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, faPhoneVolume, faVideo, faChartPie, 
  faMicrophone, faEnvelope, faCommentSms, faMapMarkedAlt, faHandshake, faFileContract, faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import Reveal from '../components/Reveal';

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
  const { t } = useTranslation(); // 2. INISIALISASI FUNGSI BAHASA

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pb-20 bg-white">
      
      {/* Hero Layanan */}
      <section className="relative isolate w-full pt-48 md:pt-56 pb-24 md:pb-28 text-center border-b-[6px] border-yellow-700 overflow-hidden bg-slate-950 flex items-center justify-center min-h-[500px]">
        <img
          src={heroImage} 
          alt="Hero Layanan"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/60 to-slate-950/80 z-10"></div> 

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {t('ourServices.hero.title1')}<br className="hidden md:inline" /> {t('ourServices.hero.title2')}
            </h1>
          </Reveal>
          
          <Reveal delay={150}>
            <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {t('ourServices.hero.desc')}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex justify-center">
              <button 
                onClick={() => setActivePage('kontak')} 
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl tracking-wide text-sm border border-yellow-500/50"
              >
                {t('ourServices.hero.btn')}
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
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-wider">{t('ourServices.desk.title')}</h2>
              <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-light">
                {t('ourServices.desk.desc')}
              </p>
            </Reveal>
          </div>

          <div className="space-y-32">
            
            {/* 1. Call Services */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gray-900 opacity-20 z-10"></div>
                    <img src={TeleCollectionImage} alt="Tele-Collection" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
                      <div className="bg-yellow-600 text-white text-xs font-bold py-2 px-6 rounded-l-md shadow-md uppercase tracking-wider">{t('ourServices.desk.tele.in')}</div>
                      <div className="bg-slate-900 text-white text-xs font-bold py-2 px-6 rounded-l-md shadow-md uppercase tracking-wider">{t('ourServices.desk.tele.out')}</div>
                    </div>
                  </div>
                </Reveal>
              </div>
              
              <div className="w-full md:w-1/2">
                <Reveal delay={150}>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    {t('ourServices.desk.tele.title1')} <span className="font-extrabold text-yellow-700">{t('ourServices.desk.tele.title2')}</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {t('ourServices.desk.tele.desc')}
                  </p>
                </Reveal>
              </div>
            </div>

            {/* 2. DPD Cases */}
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
                    {t('ourServices.desk.dpd.title1')} <span className="font-extrabold text-yellow-700">{t('ourServices.desk.dpd.title2')}</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('ourServices.desk.dpd.desc')}
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
                    <li>{t('ourServices.desk.dpd.l1')}</li>
                    <li>{t('ourServices.desk.dpd.l2')}</li>
                    <li>{t('ourServices.desk.dpd.l3')}</li>
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* 3. Fee Arrangement */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <div className="relative w-full h-72 lg:h-96 rounded-3xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow-900/15 z-10"></div>
                    <img src={SkemaImage} alt="Skema Fleksibel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-8 right-8 bg-yellow-600 text-white text-md font-bold py-3 px-6 shadow-xl transform rotate-3 z-20 uppercase tracking-wide">
                      {t('ourServices.desk.fee.badge')}
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="w-full md:w-1/2">
                <Reveal delay={150}>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    {t('ourServices.desk.fee.title1')} <span className="font-extrabold text-yellow-700">{t('ourServices.desk.fee.title2')}</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    {t('ourServices.desk.fee.desc')}
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3 flex-shrink-0" /> <span>{t('ourServices.desk.fee.l1')}</span></li>
                    <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3 flex-shrink-0" /> <span>{t('ourServices.desk.fee.l2')}</span></li>
                    <li className="flex items-start"><FontAwesomeIcon icon={faFileContract} className="text-yellow-600 mt-1.5 mr-3 flex-shrink-0" /> <span>{t('ourServices.desk.fee.l3')}</span></li>
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
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-wider">{t('ourServices.field.title')}</h2>
              <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto font-light">
                {t('ourServices.field.desc')}
              </p>
            </Reveal>
          </div>

          <div className="space-y-32">
            
            {/* 1. Validasi Domisili */}
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
                    {t('ourServices.field.val.title1')} <span className="font-extrabold text-yellow-700">{t('ourServices.field.val.title2')}</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('ourServices.field.val.desc')}
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
                    <li>{t('ourServices.field.val.l1')}</li>
                    <li>{t('ourServices.field.val.l2')}</li>
                    <li>{t('ourServices.field.val.l3')}</li>
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* 2. Mediasi & Solusi */}
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
                    {t('ourServices.field.med.title1')} <span className="font-extrabold text-yellow-700">{t('ourServices.field.med.title2')}</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('ourServices.field.med.desc')}
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{t('ourServices.infra.title')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                {t('ourServices.infra.desc')}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { ikon: faServer, judul: t('ourServices.infra.crm.title'), isi: t('ourServices.infra.crm.desc') },
              { ikon: faPhoneVolume, judul: t('ourServices.infra.dialer.title'), isi: t('ourServices.infra.dialer.desc') },
              { ikon: faVideo, judul: t('ourServices.infra.cctv.title'), isi: t('ourServices.infra.cctv.desc') },
              { ikon: faChartPie, judul: t('ourServices.infra.report.title'), isi: t('ourServices.infra.report.desc') },
              { ikon: faMicrophone, judul: t('ourServices.infra.record.title'), isi: t('ourServices.infra.record.desc') }
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
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t('ourServices.infra.sms.title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('ourServices.infra.sms.desc')}
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

    </div>
  );
}