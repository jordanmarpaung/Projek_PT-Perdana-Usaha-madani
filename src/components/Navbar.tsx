import { useState, useEffect } from 'react';
import logo from '../assets/logo_baru.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight, faGlobe, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // IMPORT FUNGSI BAHASA

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // STATE MENU HP
  
  // Ambil fungsi 't' (translate) dan 'i18n' dari react-i18next
  const { t, i18n } = useTranslation(); 
  
  // State untuk melacak bahasa yang sedang aktif di layar
  const [currentLang, setCurrentLang] = useState(i18n.language || 'ID');

  const languages = [
    { code: 'ID', name: 'Indonesia' },
    { code: 'EN', name: 'English' },
    { code: 'ZH', name: '中文 (Mandarin)' },
    { code: 'JA', name: '日本語 (Jepang)' },
    { code: 'KO', name: '한국어 (Korea)' },
    { code: 'AR', name: 'العربية (Arab)' },
    { code: 'MS', name: 'Melayu' },
    { code: 'HI', name: 'हिन्दी (Hindi)' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi saat bahasa di klik
  const handleLanguageChange = (code: string) => {
    setCurrentLang(code);
    i18n.changeLanguage(code); 
  };

  // Fungsi saat menu di HP di klik (otomatis tutup menu dan scroll ke atas)
  const handleMobileClick = (page: string) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed w-full z-50 flex flex-col items-center transition-all duration-500 ease-in-out top-0 ${isScrolled ? 'lg:top-4' : 'lg:top-6'}`}>
      <nav 
        className={`flex items-center justify-between transition-all duration-500 ease-in-out border
          w-full rounded-none lg:rounded-full
          ${isScrolled 
            ? 'lg:w-[85%] max-w-6xl bg-[#2B304C]/95 backdrop-blur-md shadow-2xl py-2 px-4 lg:px-6 border-transparent' 
            : 'lg:w-[95%] max-w-7xl bg-white/90 backdrop-blur-md shadow-lg py-3 px-4 lg:px-8 border-white/50'
          }`}
      >
        
        {/* LOGO */}
        <div 
          className="flex-shrink-0 flex items-center cursor-pointer group"
          onClick={() => {
            setActivePage('beranda');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="Logo Perdana Usaha Madani" className={`transition-all duration-300 mr-3 ${isScrolled ? 'h-10' : 'h-12'}`} />
          <div className="hidden md:flex flex-col">
            <span className={`font-extrabold tracking-[0.2em] leading-tight transition-colors duration-300 ${
              isScrolled ? 'text-white text-lg' : 'text-[#8A8D35] text-xl'
            }`}>
              PERDANA
            </span>
            <span className={`font-semibold tracking-[0.1em] text-[10px] transition-colors duration-300 ${
              isScrolled ? 'text-gray-300' : 'text-[#8A8D35]' 
            }`}>
              USAHA MADANI
            </span>
          </div>
        </div>

        {/* MENU TENGAH (Hanya muncul di Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => setActivePage('beranda')} 
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              activePage === 'beranda' 
                ? (isScrolled ? 'text-yellow-400' : 'text-[#8A8D35]')
                : (isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#8A8D35]')
            }`}
          >
            {t('navbar.home')}
          </button>
          
          {/* Dropdown Tentang Kami */}
          <div className="relative group h-full flex items-center py-2">
            <button 
              onClick={() => setActivePage('tentang')} 
              className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                ['tentang', 'Tim Kami', 'kegiatan'].includes(activePage) 
                  ? (isScrolled ? 'text-yellow-400' : 'text-[#8A8D35]')
                  : (isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#8A8D35]')
              }`}
            >
              {t('navbar.about')}
              <FontAwesomeIcon icon={faChevronDown} className="text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 bg-white text-gray-800 shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-gray-100">
              <button onClick={() => { setActivePage('tentang'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left px-5 py-3 hover:bg-yellow-50 text-xs font-bold border-b border-gray-50 transition-colors">{t('navbar.profile')}</button>
              <button onClick={() => { setActivePage('Tim Kami'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left px-5 py-3 hover:bg-yellow-50 text-xs font-bold border-b border-gray-50 transition-colors">{t('navbar.team')}</button>
              <button onClick={() => { setActivePage('kegiatan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left px-5 py-3 hover:bg-yellow-50 text-xs font-bold transition-colors">{t('navbar.activities')}</button>
            </div>
          </div>

          <button 
            onClick={() => setActivePage('layanan')} 
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              activePage === 'layanan' 
                ? (isScrolled ? 'text-yellow-400' : 'text-[#8A8D35]')
                : (isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#8A8D35]')
            }`}
          >
            {t('navbar.services')}
          </button>
          
          <button 
            onClick={() => setActivePage('karir')} 
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              activePage === 'karir' 
                ? (isScrolled ? 'text-yellow-400' : 'text-[#8A8D35]')
                : (isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#8A8D35]')
            }`}
          >
            {t('navbar.career')}
          </button>
        </div>

        {/* BAGIAN KANAN: DROPDOWN BAHASA, TOMBOL CTA, & MENU HAMBURGER (HP) */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* LANGUAGE SWITCHER */}
          <div className="relative group flex items-center py-2 cursor-pointer">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
              isScrolled 
                ? 'border-gray-500 text-gray-200 hover:bg-white/10 hover:text-white' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}>
              <FontAwesomeIcon icon={faGlobe} className="text-sm" />
              <span className="text-xs font-bold">{currentLang}</span>
            </div>

            <div className="absolute top-10 right-0 w-44 bg-white text-gray-800 shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-gray-100 z-50">
              {languages.map((lang) => (
                <button 
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`block w-full text-left px-5 py-2.5 text-xs font-bold border-b border-gray-50 transition-colors ${
                    currentLang === lang.code ? 'bg-yellow-50 text-yellow-700' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="inline-block w-6 text-gray-400">{lang.code}</span> 
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {
              setActivePage('kontak');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-md border ${
              isScrolled 
                ? 'bg-yellow-600 border-yellow-500 text-white hover:bg-yellow-500' 
                : 'bg-[#2B304C] border-[#2B304C] text-white hover:bg-black hover:border-black'
            }`}
          >
            {t('navbar.discuss')} <FontAwesomeIcon icon={faArrowRight} />
          </button>

          {/* TOMBOL HAMBURGER (Hanya muncul di HP/Tablet) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg shadow-sm border transition-colors ${
              isScrolled ? 'bg-white/20 text-white border-white/30' : 'bg-[#404561] text-white border-[#2B304C]'
            }`}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="text-xl" />
          </button>

        </div>
      </nav>

      {/* ========================================== */}
      {/* MENU DROPDOWN MOBILE (Tampil Saat Tombol Diklik) */}
      {/* ========================================== */}
      <div 
        className={`lg:hidden w-full bg-white shadow-2xl rounded-b-2xl overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0 border-none'
      }`}
      >
        <div className="flex flex-col p-5 space-y-4">
          <button onClick={() => handleMobileClick('beranda')} className={`text-left text-sm font-bold pb-3 border-b border-gray-100 ${activePage === 'beranda' ? 'text-yellow-600' : 'text-gray-800'}`}>
            {t('navbar.home')}
          </button>
          
          <div className="flex flex-col space-y-3 pb-3 border-b border-gray-100">
            <span className={`text-sm font-bold ${['tentang', 'Tim Kami', 'kegiatan'].includes(activePage) ? 'text-yellow-600' : 'text-gray-800'}`}>
              {t('navbar.about')}
            </span>
            <button onClick={() => handleMobileClick('tentang')} className={`text-left pl-4 text-sm ${activePage === 'tentang' ? 'text-yellow-600 font-bold' : 'text-gray-600'}`}>- {t('navbar.profile')}</button>
            <button onClick={() => handleMobileClick('Tim Kami')} className={`text-left pl-4 text-sm ${activePage === 'Tim Kami' ? 'text-yellow-600 font-bold' : 'text-gray-600'}`}>- {t('navbar.team')}</button>
            <button onClick={() => handleMobileClick('kegiatan')} className={`text-left pl-4 text-sm ${activePage === 'kegiatan' ? 'text-yellow-600 font-bold' : 'text-gray-600'}`}>- {t('navbar.activities')}</button>
          </div>

          <button onClick={() => handleMobileClick('layanan')} className={`text-left text-sm font-bold pb-3 border-b border-gray-100 ${activePage === 'layanan' ? 'text-yellow-600' : 'text-gray-800'}`}>
            {t('navbar.services')}
          </button>

          <button onClick={() => handleMobileClick('karir')} className={`text-left text-sm font-bold pb-3 border-b border-gray-100 ${activePage === 'karir' ? 'text-yellow-600' : 'text-gray-800'}`}>
            {t('navbar.career')}
          </button>
          
          <button onClick={() => handleMobileClick('kontak')} className={`text-left text-sm font-bold text-[#2B304C]`}>
            {t('navbar.discuss')} &rarr;
          </button>
        </div>
      </div>

    </div>
  );
}