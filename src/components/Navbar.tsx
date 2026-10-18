import { useState, useEffect } from 'react';
import logo from '../assets/logo_baru.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';


interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Wadah pembungkus agar navbar bisa melayang di tengah
    <div className={`fixed w-full z-50 flex justify-center transition-all duration-500 ease-in-out ${isScrolled ? 'top-4' : 'top-6'}`}>
      
      {/* NAVBAR BENTUK KAPSUL (FLOATING CAPSULE) */}
      <nav 
        className={`flex items-center justify-between rounded-full transition-all duration-500 ease-in-out border
          ${isScrolled 
            ? 'w-[90%] md:w-[85%] max-w-6xl bg-[#2B304C]/95 backdrop-blur-md shadow-2xl py-2 px-6 border-transparent' 
            : 'w-[95%] max-w-7xl bg-white/80 backdrop-blur-md shadow-lg py-3 px-8 border-white/50'
          }`}
      >
        
        {/* ========================================== */}
        {/* LOGO & NAMA PERUSAHAAN                     */}
        {/* ========================================== */}
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

        {/* ========================================== */}
        {/* MENU TENGAH                                */}
        {/* ========================================== */}
        <div className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => setActivePage('beranda')} 
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              activePage === 'beranda' 
                ? (isScrolled ? 'text-yellow-400' : 'text-[#8A8D35]')
                : (isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#8A8D35]')
            }`}
          >
            Beranda
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
              Tentang Kami
              <FontAwesomeIcon icon={faChevronDown} className="text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 bg-white text-gray-800 shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-gray-100">
              <button onClick={() => { setActivePage('tentang'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left px-5 py-3 hover:bg-yellow-50 text-xs font-bold border-b border-gray-50 transition-colors">Profil Perusahaan</button>
              <button onClick={() => { setActivePage('Tim Kami'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left px-5 py-3 hover:bg-yellow-50 text-xs font-bold border-b border-gray-50 transition-colors">Tim Kami</button>
              <button onClick={() => { setActivePage('kegiatan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-left px-5 py-3 hover:bg-yellow-50 text-xs font-bold transition-colors">Kegiatan Kami</button>
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
            Layanan
          </button>
          
          <button 
            onClick={() => setActivePage('karir')} 
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              activePage === 'karir' 
                ? (isScrolled ? 'text-yellow-400' : 'text-[#8A8D35]')
                : (isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#8A8D35]')
            }`}
          >
            Karir
          </button>
        </div>

        {/* ========================================== */}
        {/* TOMBOL CALL TO ACTION (Kanan)              */}
        {/* ========================================== */}
        <div className="flex items-center">
          <button 
            onClick={() => {
              setActivePage('kontak');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-md border ${
              isScrolled 
                ? 'bg-yellow-600 border-yellow-500 text-white hover:bg-yellow-500' 
                : 'bg-[#2B304C] border-[#2B304C] text-white hover:bg-black hover:border-black'
            }`}
          >
            Mulai Diskusi <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

      </nav>
    </div>
  );
}