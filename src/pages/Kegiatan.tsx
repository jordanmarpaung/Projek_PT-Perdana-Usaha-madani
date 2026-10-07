import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowRight, faImages, faTimes } from '@fortawesome/free-solid-svg-icons';

// IMPORT GAMBAR
import hut from '../assets/gambar_utama.jpeg';
import hadiah from '../assets/gambar_1.jpeg';
import lomba from '../assets/gambar_2.jpeg';
import konsentrasi from '../assets/gambar_3.jpeg';

export default function Kegiatan() {
  
  const slides = [
    {
      image: hut,
      badge: "KEGIATAN INTERNAL",
      title: "Perayaan HUT RI Bersama PT PUM",
      description: "Keluarga besar PT Perdana Usaha Madani berkumpul dalam kebersamaan, mempererat kekompakan tim, dan membangun semangat juang di lingkungan kerja.",
      buttonText: "Lihat Keseruan"
    },
    {
      image: hadiah,
      badge: "APRESIASI TIM",
      title: "Semarak Pembagian Hadiah",
      description: "Momen penyerahan penghargaan dan hadiah perlombaan untuk memicu semangat, motivasi kerja, serta senyum kebahagiaan seluruh staf.",
      buttonText: "Dokumentasi Hadiah"
    },
    {
      image: lomba,
      badge: "LOMBA TRADISIONAL",
      title: "Lomba Makan Kerupuk",
      description: "Gelak tawa dan antusiasme mewarnai perlombaan tradisional antar divisi, membuktikan bahwa kami tidak hanya serius bekerja, tetapi juga bisa bersenang-senang bersama.",
      buttonText: "Lihat Perlombaan"
    },
    {
      image: konsentrasi,
      badge: "FOKUS & KEKOMPAKAN",
      title: "Konsentrasi Penuh di Lomba",
      description: "Aktivitas internal yang mencerminkan pentingnya ketelitian, keseimbangan, dan kerja sama tim yang solid dalam mencapai garis akhir (target).",
      buttonText: "Lihat Keseruan"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 1. STATE BARU UNTUK FITUR POP-UP (LIGHTBOX)
  // Menyimpan gambar mana yang sedang diklik. Jika null, berarti tidak ada pop-up yang terbuka.
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      
      {/* ========================================== */}
      {/* HERO SLIDER (BAGIAN ATAS)                  */}
      {/* ========================================== */}
      <section className="relative w-full h-[90vh] overflow-hidden flex items-center bg-gray-900">
        
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
          </div>
        ))}

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-16">
          <div className="max-w-3xl animate-fade-in-up" key={currentIndex}>
            <div className="inline-block bg-red-600 text-white text-xs font-extrabold px-4 py-1 mb-6 tracking-widest shadow-md">
              {slides[currentIndex].badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg font-serif">
              {slides[currentIndex].title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light drop-shadow-md">
              {slides[currentIndex].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-3.5 text-sm font-bold hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-3">
                {slides[currentIndex].buttonText} <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/70 text-white border border-white/20 transition-all z-30">
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/30 hover:bg-black/70 text-white border border-white/20 transition-all z-30">
          <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
        </button>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-300 ${index === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:bg-white/70'}`}
            ></button>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* GALERI DOKUMENTASI (DENGAN FITUR KLIK)     */}
      {/* ========================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Galeri Dokumentasi</h2>
          <div className="w-24 h-1.5 bg-yellow-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Semangat kerja dan kekeluargaan yang terekam dalam lensa kegiatan rutin perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div 
            className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(hut)}
          >
            <div className="h-48 overflow-hidden relative">
              <img src={hut} alt="Puncak Acara" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faImages} className="text-3xl text-white" />
              </div>
            </div>
            <div className="p-5 text-center bg-gray-50 group-hover:bg-yellow-50 transition-colors">
              <h4 className="font-bold text-gray-900">Puncak Acara</h4>
            </div>
          </div>
          
          {/* Card 2 */}
          <div 
            className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(hadiah)}
          >
            <div className="h-48 overflow-hidden relative">
              <img src={hadiah} alt="Bagi Hadiah" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faImages} className="text-3xl text-white" />
              </div>
            </div>
            <div className="p-5 text-center bg-gray-50 group-hover:bg-yellow-50 transition-colors">
              <h4 className="font-bold text-gray-900">Bagi Hadiah</h4>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(lomba)}
          >
            <div className="h-48 overflow-hidden relative">
              <img src={lomba} alt="Lomba Tim" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faImages} className="text-3xl text-white" />
              </div>
            </div>
            <div className="p-5 text-center bg-gray-50 group-hover:bg-yellow-50 transition-colors">
              <h4 className="font-bold text-gray-900">Lomba Tim</h4>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(konsentrasi)}
          >
            <div className="h-48 overflow-hidden relative">
              <img src={konsentrasi} alt="Momen Seru" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <FontAwesomeIcon icon={faImages} className="text-3xl text-white" />
              </div>
            </div>
            <div className="p-5 text-center bg-gray-50 group-hover:bg-yellow-50 transition-colors">
              <h4 className="font-bold text-gray-900">Momen Seru</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. KODE POP-UP (MODAL LIGHTBOX)            */}
      {/* ========================================== */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 transition-opacity animate-fade-in"
          onClick={() => setSelectedImage(null)} // Menutup pop-up jika background hitam diklik
        >
          {/* Tombol Silang (Tutup) */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-red-500 text-4xl transition-colors focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          {/* Gambar Besar yang Muncul */}
          <img 
            src={selectedImage} 
            alt="Galeri Full" 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Mencegah tertutup jika gambarnya yang diklik
          />
        </div>
      )}

    </div>
  );
}