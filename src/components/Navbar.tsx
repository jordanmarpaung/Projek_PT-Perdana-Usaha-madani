import React from 'react';
import logo from '../assets/logo_baru.png'; // Menggunakan ../ karena kita berada di dalam folder components

// Mendefinisikan tipe data untuk TypeScript
interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm w-full fixed top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => setActivePage('beranda')}
          >
            <img src={logo} alt="Logo PT Perdana Usaha Madani" className="h-14 w-auto mr-3" />
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-xl text-yellow-800 tracking-wider leading-tight">PT PERDANA </span>
              <span className="font-extrabold text-xl text-yellow-800 tracking-wider leading-tight">USAHA MADANI</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <button onClick={() => setActivePage('beranda')} className={`font-bold transition ${activePage === 'beranda' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}>Beranda</button>
            
            {/* ========================================== */}
            {/* DROPDOWN TENTANG KAMI                      */}
            {/* ========================================== */}
            <div className="relative group py-4">
              <button 
                onClick={() => setActivePage('tentang')} 
                className={`font-bold transition flex items-center gap-1 ${activePage === 'tentang' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}
              >
                Tentang Kami
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Kotak Menu Dropdown Putih */}
              <div className="absolute left-0 mt-0 w-56 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-4 border-yellow-700">
                <button 
                  onClick={() => {
                    setActivePage('tentang');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }} 
                  className="block w-full text-left px-5 py-3 hover:bg-yellow-50 hover:text-yellow-700 text-xs font-bold border-b border-gray-100 transition-colors uppercase tracking-wider"
                >
                  Tentang Perusahaan
                </button>
                
                <button 
                  onClick={() => {
                    setActivePage('tentang');
                    setTimeout(() => window.scrollTo({ top: 850, behavior: 'smooth' }), 100);
                  }} 
                  className="block w-full text-left px-5 py-3 hover:bg-yellow-50 hover:text-yellow-700 text-xs font-bold border-b border-gray-100 transition-colors uppercase tracking-wider"
                >
                  Tim Kami
                </button>
                
                <button 
                  onClick={() => {
                    setActivePage('tentang');
                    setTimeout(() => window.scrollTo({ top: 1650, behavior: 'smooth' }), 100);
                  }} 
                  className="block w-full text-left px-5 py-3 hover:bg-yellow-50 hover:text-yellow-700 text-xs font-bold transition-colors uppercase tracking-wider"
                >
                  Kegiatan
                </button>
              </div>
            </div>
            {/* ========================================== */}

            <button onClick={() => setActivePage('layanan')} className={`font-bold transition ${activePage === 'layanan' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}>Layanan</button>
            <button onClick={() => setActivePage('karir')} className={`font-bold transition ${activePage === 'karir' ? 'text-yellow-700' : 'text-gray-600 hover:text-yellow-700'}`}>Karir</button>
            
            <button className="bg-yellow-700 text-white px-6 py-2.5 rounded-sm font-bold hover:bg-yellow-800 transition shadow-md">
              Hubungi Kami
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}