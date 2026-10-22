import logo from '../assets/logo_baru.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer id="hubungi-kami" className="bg-[#111111] text-gray-300 pt-20 pb-10 border-t-[6px] border-yellow-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Logo Footer" className="h-14 w-auto mr-4 brightness-0 invert" />
              <div className="pl-4 border-l-2 border-gray-700">
                <p className="text-white font-bold text-lg leading-tight tracking-wide">PT PERDANA<br />USAHA MADANI</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">{t('footer.usefulLinks')}</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setActivePage('beranda')} className="hover:text-yellow-500 transition">{t('navbar.home')}</button></li>
              <li><button onClick={() => setActivePage('tentang')} className="hover:text-yellow-500 transition">{t('navbar.about')}</button></li>
              <li><button onClick={() => setActivePage('layanan')} className="hover:text-yellow-500 transition">{t('navbar.services')}</button></li>
              <li><button onClick={() => setActivePage('karir')} className="hover:text-yellow-500 transition">{t('navbar.career')}</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faLocationDot} className="mr-4 mt-1 text-yellow-600 text-lg" />
                <a>
                  {t('footer.address')}
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
            &copy; 2026 PT PERDANA USAHA MADANI. {t('footer.rights')}
          </p>

          {/* BAGIAN INI YANG DITAMBAHKAN PADDING (pr-16 md:pr-28) AGAR MENGGESER KE KIRI */}
          <div className="flex items-center gap-4 text-gray-500 text-xs tracking-wider uppercase pr-16 md:pr-28">
            <button onClick={() => setActivePage('privasi')} className="hover:text-yellow-500 transition">{t('footer.privacy')}</button>
            <span className="text-gray-700">|</span>
            <button onClick={() => setActivePage('ketentuan')} className="hover:text-yellow-500 transition">{t('footer.terms')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}