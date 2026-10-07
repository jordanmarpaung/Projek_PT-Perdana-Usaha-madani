import React, { useState } from 'react';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Layanan from './pages/Layanan';
import Kegiatan from './pages/Kegiatan';
import Karir from './pages/Karir';

function App() {
  const [activePage, setActivePage] = useState('beranda');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">

      <Navbar activePage={activePage} setActivePage={setActivePage} />
       
        <main className="flex-grow pt-24">
          {activePage === 'beranda' && <Home setActivePage={setActivePage} />}
          {activePage === 'tentang' && <About setActivePage={setActivePage} />}
          {activePage === 'layanan' && <Layanan />}
          {activePage === 'kegiatan' && <Kegiatan />}
          {activePage === 'karir' && <Karir />}
        </main>
      
      {/* ==================== FOOTER ==================== */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
}

export default App;