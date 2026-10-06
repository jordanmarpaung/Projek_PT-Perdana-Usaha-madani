import React from 'react';
import logo from '../assets/logo_baru.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-20 pb-10 border-t-[6px] border-yellow-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Logo Footer" className="h-14 w-auto mr-3 brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Perusahaan penyedia layanan penagihan profesional (desk collection & field collection) yang berfokus pada kualitas, etika, dan pencapaian target terbaik.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Perusahaan</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setActivePage('beranda')} className="hover:text-yellow-500 transition">Beranda</button></li>
              <li><button onClick={() => setActivePage('tentang')} className="hover:text-yellow-500 transition">Tentang Kami</button></li>
              <li><button onClick={() => setActivePage('layanan')} className="hover:text-yellow-500 transition">Layanan</button></li>
              <li><button onClick={() => setActivePage('karir')} className="hover:text-yellow-500 transition">Informasi Karir</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faLocationDot} className="mr-4 mt-1 text-yellow-600 text-lg" />
                <a href="https://maps.app.goo.gl/XuPpyTc7cAmtrn2t9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition leading-relaxed">
                  Jl. Raya Vila Nusa Indah Blk. FF, Bojong Kulur, Kec. Gn. Putri, <br/> Kabupaten Bogor, Jawa Barat, Indonesia
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-4 text-yellow-600 text-lg" />
                <span>(+62) 852-7427-4069</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-yellow-600 text-lg" />
                <span>perdanausahamadani@gmail.com</span>
              </li>
              <li className="flex items-center pt-4 space-x-5">
                <a href="https://www.instagram.com/ptperdani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </a>
                <a href="https://www.facebook.com/perdanausahamadani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs tracking-wider mb-4 md:mb-0">
            &copy; 2026 PT PERDANA USAHA MADANI. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-500 text-xs tracking-wider">
            KEBIJAKAN PRIVASI &nbsp;|&nbsp; KETENTUAN LAYANAN
          </p>
        </div>
      </div>
    </footer>
  );
}