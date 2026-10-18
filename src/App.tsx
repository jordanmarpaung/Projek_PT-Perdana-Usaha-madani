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
  const setActivePage = (page: string) => {
    if (page === activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setHalaman(page);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">

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
      
      {/* ==================== FOOTER ==================== */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;