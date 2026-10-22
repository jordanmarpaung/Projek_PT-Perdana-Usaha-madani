import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../components/Reveal';

import logoBg from '../assets/logo_baru.png'; 
import fotoBenny from '../assets/komisaris.png';
import fotoJuliana from '../assets/komisaris.jpeg';     
import fotoRosinta from '../assets/Direktur.png';
import fotoDennies from '../assets/manajer.jpeg';     
import fotoTiurmaida from '../assets/finance.jpeg'; 
import fotoFitri from '../assets/HRDnya.jpeg';        
import fotoSriAyu from '../assets/Q,_control.jpeg';

export default function TimKami() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boxStyle = "flex items-center justify-center bg-stone-100 border border-[#2B304C] text-[#2B304C] py-3 px-4 w-32 md:w-44 text-center font-bold text-xs md:text-sm rounded-lg shadow-sm z-10 relative uppercase tracking-wide";
  const lineVertical = "w-0.5 h-8 bg-[#2B304C]";

  return (
    <div className="animate-fade-in pb-20 bg-white">

      {/* ========================================== */}
      {/* BAGIAN 1: STRUKTUR ORGANISASI              */}
      {/* ========================================== */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 bg-stone-50 border-b border-gray-200 relative overflow-hidden">
        
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img src={logoBg} alt="Watermark" className="w-3/4 md:w-1/2 max-w-md filter grayscale" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2B304C] uppercase tracking-[0.2em] mb-2" style={{ fontFamily: 'serif' }}>
                {t('ourTeam.structTitle')}
              </h2>
              <div className="w-16 md:w-24 h-1 bg-yellow-600 mx-auto mt-4 md:mt-6"></div>
              {/* Petunjuk scroll khusus di layar HP */}
              <p className="text-xs text-gray-400 mt-4 md:hidden animate-pulse">
                &larr; Geser tabel untuk melihat lengkap &rarr;
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            {/* Horizontal Scroll wrapper untuk layar kecil */}
            <div className="w-full overflow-x-auto pb-8 pt-4 snap-x">
              <div className="min-w-[700px] md:min-w-[800px] flex flex-col items-center px-4">
                
                <div className={boxStyle}>{t('ourTeam.roles.dir')}</div>
                <div className={lineVertical}></div>

                <div className="flex justify-between w-full max-w-5xl relative">
                  <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-[#2B304C]"></div>

                  <div className="flex flex-col items-center w-1/4 pt-0 relative">
                    <div className="w-0.5 h-8 bg-[#2B304C] absolute top-0"></div>
                    <div className={`mt-8 ${boxStyle}`}>{t('ourTeam.roles.fin')}</div>
                    <div className={lineVertical}></div>
                    <div className={boxStyle}>{t('ourTeam.roles.it')}</div>
                  </div>

                  <div className="flex flex-col items-center w-1/4 pt-0 relative">
                    <div className="w-0.5 h-8 bg-[#2B304C] absolute top-0"></div>
                    <div className={`mt-8 ${boxStyle}`}>{t('ourTeam.roles.admin')}</div>
                  </div>

                  <div className="flex flex-col items-center w-1/4 pt-0 relative">
                    <div className="w-0.5 h-8 bg-[#2B304C] absolute top-0"></div>
                    <div className={`mt-8 ${boxStyle}`}>{t('ourTeam.roles.hrd')}</div>
                  </div>

                  <div className="flex flex-col items-center w-1/4 pt-0 relative">
                    <div className="w-0.5 h-8 bg-[#2B304C] absolute top-0"></div>
                    <div className={`mt-8 ${boxStyle}`}>{t('ourTeam.roles.mgr')}</div>
                    <div className={lineVertical}></div>
                    <div className={boxStyle}>{t('ourTeam.roles.tl')}</div>
                    <div className={lineVertical}></div>
                    <div className={boxStyle}>{t('ourTeam.roles.coll')}</div>
                  </div>

                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================== */}
      {/* BAGIAN 2: GALERI PROFIL                    */}
      {/* ========================================== */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-20 relative bg-white">
        <div className="absolute top-0 left-0 w-full h-64 md:h-96 bg-gradient-to-b from-stone-100 to-white z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* DEWAN DIREKSI */}
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-widest">{t('ourTeam.boardTitle')}</h2>
              <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto px-4">{t('ourTeam.boardDesc')}</p>
            </div>
          </Reveal>

          {/* Grid responsif: 1 kolom di HP, 2 di Tablet, 3 di Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-24 justify-items-center">
            
            {/* Profil 1 - Benny */}
            <Reveal delay={100} className="w-full flex justify-center">
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full w-full max-w-[320px] sm:max-w-full lg:max-w-[300px]">
                <div className="h-2 w-full bg-gradient-to-r from-yellow-700 to-yellow-400"></div>
                <div className="h-72 sm:h-80 lg:h-72 overflow-hidden bg-slate-200 relative">
                  <img src={fotoBenny} alt="Tumpak Benny Marpaung" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-yellow-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest drop-shadow-md">{t('about.team.roles.komisaris')}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-center relative bg-white">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Tumpak Benny M.</h3>
                  <div className="w-10 h-1 bg-gray-200 mx-auto mb-4 group-hover:bg-yellow-500 transition-colors"></div>
                  <div className="flex items-center justify-center text-slate-400 text-sm mt-auto group-hover:text-slate-900 transition-colors">
                    <FontAwesomeIcon icon={faUserTie} className="mr-2 text-yellow-600" /> Profil Eksekutif
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Profil 2 - Juliani */}
            <Reveal delay={200} className="w-full flex justify-center">
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full w-full max-w-[320px] sm:max-w-full lg:max-w-[300px]">
                <div className="h-2 w-full bg-gradient-to-r from-yellow-700 to-yellow-400"></div>
                <div className="h-72 sm:h-80 lg:h-72 overflow-hidden bg-slate-200 relative">
                  <img src={fotoJuliana} alt="Juliani Manurung" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-yellow-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest drop-shadow-md">{t('about.team.roles.commissioner')}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-center relative bg-white">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Juliani Manurung</h3>
                  <div className="w-10 h-1 bg-gray-200 mx-auto mb-4 group-hover:bg-yellow-500 transition-colors"></div>
                  <div className="flex items-center justify-center text-slate-400 text-sm mt-auto group-hover:text-slate-900 transition-colors">
                    <FontAwesomeIcon icon={faUserTie} className="mr-2 text-yellow-600" /> Profil Eksekutif
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Profil 3 - Rosinta */}
            <Reveal delay={300} className="w-full flex justify-center">
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full w-full max-w-[320px] sm:max-w-full lg:max-w-[300px]">
                <div className="h-2 w-full bg-gradient-to-r from-yellow-700 to-yellow-400"></div>
                <div className="h-72 sm:h-80 lg:h-72 overflow-hidden bg-slate-200 relative">
                  <img src={fotoRosinta} alt="Rosinta Uli Manurung" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-yellow-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest drop-shadow-md">{t('about.team.roles.direktur')}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-center relative bg-white">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Rosinta Uli Manurung</h3>
                  <div className="w-10 h-1 bg-gray-200 mx-auto mb-4 group-hover:bg-yellow-500 transition-colors"></div>
                  <div className="flex items-center justify-center text-slate-400 text-sm mt-auto group-hover:text-slate-900 transition-colors">
                    <FontAwesomeIcon icon={faUserTie} className="mr-2 text-yellow-600" /> Profil Eksekutif
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* MANAJEMEN & DIVISI OPERASIONAL */}
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-widest">{t('ourTeam.mgmtTitle')}</h2>
              <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto px-4">{t('ourTeam.mgmtDesc')}</p>
            </div>
          </Reveal>

          {/* Grid responsif: 1 kolom di HP, 2 di Tablet, 4 di Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            
            {/* Profil 4 */}
            <Reveal delay={100} className="w-full flex justify-center">
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full w-full max-w-[300px] sm:max-w-full lg:max-w-[260px]">
                <div className="h-1.5 w-full bg-slate-900"></div>
                <div className="h-72 sm:h-64 overflow-hidden bg-slate-200 relative">
                  <img src={fotoDennies} alt="Dennies Jhonatan Sinaga" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-slate-200 font-bold text-[10px] uppercase tracking-widest drop-shadow-md">{t('about.team.roles.manager')}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow text-center relative bg-white">
                  <h3 className="text-base md:text-md font-bold text-slate-900 mb-3">Dennies Jhonatan S.</h3>
                  <div className="w-8 h-1 bg-gray-200 mx-auto mb-3 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="flex items-center justify-center text-slate-400 text-xs mt-auto group-hover:text-slate-900 transition-colors">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-slate-600" /> {t('ourTeam.depts.op')}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Profil 5 */}
            <Reveal delay={200} className="w-full flex justify-center">
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full w-full max-w-[300px] sm:max-w-full lg:max-w-[260px]">
                <div className="h-1.5 w-full bg-slate-900"></div>
                <div className="h-72 sm:h-64 overflow-hidden bg-slate-200 relative">
                  <img src={fotoTiurmaida} alt="Tiurmaida Manurung" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-slate-200 font-bold text-[10px] uppercase tracking-widest drop-shadow-md">{t('about.team.roles.finance')}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow text-center relative bg-white">
                  <h3 className="text-base md:text-md font-bold text-slate-900 mb-3">Tiurmaida Manurung</h3>
                  <div className="w-8 h-1 bg-gray-200 mx-auto mb-3 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="flex items-center justify-center text-slate-400 text-xs mt-auto group-hover:text-slate-900 transition-colors">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-slate-600" /> {t('ourTeam.depts.fin')}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Profil 6 */}
            <Reveal delay={300} className="w-full flex justify-center">
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full w-full max-w-[300px] sm:max-w-full lg:max-w-[260px]">
                <div className="h-1.5 w-full bg-slate-900"></div>
                <div className="h-72 sm:h-64 overflow-hidden bg-slate-200 relative">
                  <img src={fotoFitri} alt="Supriadi Manurung" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-slate-200 font-bold text-[10px] uppercase tracking-widest drop-shadow-md">{t('about.team.roles.hrd')}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow text-center relative bg-white">
                  <h3 className="text-base md:text-md font-bold text-slate-900 mb-3">Supriadi Manurung</h3>
                  <div className="w-8 h-1 bg-gray-200 mx-auto mb-3 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="flex items-center justify-center text-slate-400 text-xs mt-auto group-hover:text-slate-900 transition-colors">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-slate-600" /> {t('ourTeam.depts.hr')}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Profil 7 */}
            <Reveal delay={400} className="w-full flex justify-center">
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full w-full max-w-[300px] sm:max-w-full lg:max-w-[260px]">
                <div className="h-1.5 w-full bg-slate-900"></div>
                <div className="h-72 sm:h-64 overflow-hidden bg-slate-200 relative">
                  <img src={fotoSriAyu} alt="Sri Ayu Ningsih" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-slate-200 font-bold text-[10px] uppercase tracking-widest drop-shadow-md">{t('about.team.roles.qc')}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow text-center relative bg-white">
                  <h3 className="text-base md:text-md font-bold text-slate-900 mb-3">Sri Ayu Ningsih M.</h3>
                  <div className="w-8 h-1 bg-gray-200 mx-auto mb-3 group-hover:bg-slate-900 transition-colors"></div>
                  <div className="flex items-center justify-center text-slate-400 text-xs mt-auto group-hover:text-slate-900 transition-colors">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-slate-600" /> {t('ourTeam.depts.qc')}
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

    </div>
  );
}