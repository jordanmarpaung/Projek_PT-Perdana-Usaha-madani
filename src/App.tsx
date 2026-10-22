import { useState } from 'react';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Layanan from './pages/Layanan';
import Kegiatan from './pages/Kegiatan';
import Karir from './pages/Karir';
import Contact from './pages/Contact';
import Kebijakan from './pages/Kebijakan';
import Timkami from './pages/Tim';

function App() {
  const [activePage, setHalaman] = useState('beranda');
  // State untuk ngatur kotak WA pop-up kebuka atau ketutup
  const [isWaOpen, setIsWaOpen] = useState(false);

  const setActivePage = (page: string) => {
    if (page === activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setHalaman(page);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col relative">

      <Navbar activePage={activePage} setActivePage={setActivePage} />
       
        <main className="flex-grow">
          {activePage === 'beranda' && <Home setActivePage={setActivePage} />}
          {activePage === 'tentang' && <About />}
          {activePage === 'layanan' && <Layanan setActivePage={setActivePage} />}
          {activePage === 'kegiatan' && <Kegiatan />}
          {activePage === 'karir' && <Karir />}
          {activePage === 'kontak' && <Contact />}
          {activePage === 'privasi' && <Kebijakan jenis="privasi" setActivePage={setActivePage} />}
          {activePage === 'ketentuan' && <Kebijakan jenis="ketentuan" setActivePage={setActivePage} />}
          {activePage === 'Tim Kami' && <Timkami />}
        </main>
      
      <Footer setActivePage={setActivePage} />

      {/* ==================== WA POP-UP WIDGET ==================== */}
      {isWaOpen && (
        <div className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-50 w-[320px] shadow-2xl rounded-2xl overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right">
          
          {/* Header Widget */}
          <div className="bg-[#25D366] p-4 flex items-center gap-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            <span className="font-bold text-[15px]">WhatsApp Support</span>
          </div>

          {/* Body Chat */}
          {/* Menggunakan background pattern/warna khas chat WA */}
          <div className="bg-[#E5DDD5] p-5 relative min-h-[200px]">
            {/* Chat Bubble */}
            <div className="bg-white p-3 rounded-b-lg rounded-tr-lg shadow-sm text-sm text-gray-700 leading-relaxed w-11/12 relative">
              {/* Segitiga panah chat bubble */}
              <div className="absolute top-0 -left-2 w-0 h-0 border-t-[0px] border-t-transparent border-r-[10px] border-r-white border-b-[10px] border-b-transparent"></div>
              
              <p>Selamat datang di PT Perdana Usaha Madani,</p>
              <br />
              <p>Jika ada yang ingin ditanyakan silahkan hubungi kami melalui tombol dibawah ini 👇</p>
              <br />
              <p>Dengan jam kerja operasional dari jam 08:00 WIB - 17:00 WIB.</p>
              <br />
              <p>Terima kasih!</p>
            </div>
          </div>

          {/* Footer & Tombol Kirim Pesan */}
          <div className="bg-white p-4">
            <button 
              onClick={() => window.open('https://wa.me/6285773063648?text=Halo%20PT%20Perdana%20Usaha%20Madani,%20saya%20tertarik%20dan%20ingin%20bertanya%20seputar%20layanan%20Anda.', '_blank')}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Kirim Pesan
            </button>
          </div>
        </div>
      )}

      {/* ==================== FLOATING WA BUTTON (BULAT) ==================== */}
      <button
        onClick={() => setIsWaOpen(!isWaOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle Chat"
      >
        {isWaOpen ? (
          /* Ikon Silang (X) kalau kotak kebuka */
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-9 md:h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Ikon WA kalau kotak ketutup */
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 md:w-9 md:h-9 fill-current">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        )}
      </button>

    </div>
  );
}

export default App;