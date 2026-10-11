import React, { useState, useEffect } from 'react';
import logo from '../assets/logo_baru.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faHeadset, faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Akan aktif (true) jika layar digeser ke bawah lebih dari 20 pixel
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // PERUBAHAN: Menambahkan efek geser ke atas (-translate-y-[80px]) saat di-scroll
    <nav 
      className={`fixed top-0 w-full z-50 shadow-lg bg-[#2B304C] transition-transform duration-500 ease-in-out ${
        isScrolled ? 'translate-y-0 md:-translate-y-[80px]' : 'translate-y-0'
      }`}
    >
      
      {/* ========================================== */}
      {/* 1. BAGIAN ATAS (PUTIH): Logo & Info Kontak */}
      {/* ========================================== */}
      {/* PERUBAHAN: Tinggi area putih dikunci di 80px (h-[80px]) */}
      <div className="bg-white hidden md:flex border-b border-gray-100 h-[80px] items-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo di Kiri */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => {
              setActivePage('beranda');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src={logo} alt="Logo PT Perdana Usaha Madani" className="h-14 w-auto mr-3" />
            <div className="hidden lg:flex flex-col">
              <span className="font-extrabold text-base text-gray-900 tracking-wider leading-none">PT PERDANA </span>
              <span className="font-extrabold text-base text-gray-900 tracking-wider leading-tight">USAHA MADANI</span>
            </div>
          </div>

          {/* Info Kontak di Kanan (SUDAH HURUF BESAR SEMUA) */}
          <div className="flex space-x-8 lg:space-x-12 items-center">
            {/* Alamat Kantor */}
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-yellow-600 text-2xl mt-0.5" />
              <div className="flex flex-col text-left">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Alamat Kantor</span>
                <span className="text-gray-900 text-[11px] font-bold">Ruko Rose Garden 5 No 20</span>
                <span className="text-gray-900 text-[10px] font-semibold">Jl. Raya Vila Nusa Indah Blk. FF, Bojong Kulur, Gn. Putri, Bogor</span>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-600 text-2xl mt-0.5" />
              <div className="flex flex-col text-left">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Email</span>
                <span className="text-gray-900 text-[11px] font-semibold">perdanausahamadani@gmail.com</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. BAGIAN BAWAH (GELAP): Menu & Tombol CTA */}
      {/* ========================================== */}
      <div className="w-full h-14 md:h-16 flex items-center relative">
        
        {/* Latar Belakang Warna Kuning untuk Menu */}
        <div className="bg-yellow-600 h-full w-[75%] md:w-[70%] lg:w-[65%] rounded-r-full flex items-center justify-center space-x-5 md:space-x-8 lg:space-x-12 shadow-[4px_0_10px_rgba(0,0,0,0.15)] z-10 pl-4 pr-10">
          
          <button onClick={() => setActivePage('beranda')} className="text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:text-yellow-900 transition">Beranda</button>
          
          {/* Dropdown Tentang Kami */}
          <div className="relative group h-full flex items-center">
            <button 
              onClick={() => setActivePage('tentang')} 
              className="text-white text-xs md:text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 hover:text-yellow-900 transition"
            >
              Tentang Kami
              <FontAwesomeIcon icon={faChevronDown} className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-[56px] md:top-[64px] left-1/2 -translate-x-1/2 w-48 bg-white text-gray-800 shadow-xl rounded-b-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-yellow-600">
              <button onClick={() => { setActivePage('tentang'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-center px-4 py-3 hover:bg-yellow-50 text-xs font-bold border-b border-gray-100 uppercase">Perusahaan</button>
              <button onClick={() => { setActivePage('Tim Kami'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-center px-4 py-3 hover:bg-yellow-50 text-xs font-bold border-b border-gray-100 uppercase">Tim Kami</button>
              <button onClick={() => { setActivePage('kegiatan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block w-full text-center px-4 py-3 hover:bg-yellow-50 text-xs font-bold uppercase">Kegiatan</button>
            </div>
          </div>

          <button onClick={() => setActivePage('layanan')} className="text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:text-yellow-900 transition">Layanan</button>
          <button onClick={() => setActivePage('karir')} className="text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:text-yellow-900 transition">Karir</button>
        </div>

        {/* Area Kanan: Tombol Hubungi Kami */}
        <div className="flex-1 flex justify-center px-2">
          <button 
            onClick={() => {
              setActivePage('kontak');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#1A1F36] border border-gray-600 shadow-lg text-white rounded-full px-5 md:px-7 py-2 md:py-2.5 flex items-center gap-3 hover:bg-black transition-all cursor-pointer"
          >
            <FontAwesomeIcon icon={faHeadset} className="text-cyan-400 text-xl md:text-2xl" />
            <div className="flex flex-col text-left hidden lg:flex">
              <span className="text-[10px] md:text-xs text-gray-300 font-medium">Hubungi Kami</span>
              <span className="font-bold text-xs md:text-sm tracking-wide">(+62) 852 74274069</span>
            </div>
          </button>
        </div>

      </div>
    </nav>
  );
}