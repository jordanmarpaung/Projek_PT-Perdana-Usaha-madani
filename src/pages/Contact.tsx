import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneAlt, faEnvelope, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function HubungiKami() {
  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pt-4 pb-24">
      
      {/* ========================================== */}
      {/* 1. HEADER HALAMAN                          */}
      {/* ========================================== */}
      <div className="bg-[#2B304C] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Hubungi Kami</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tim ahli kami siap membantu mengamankan arus kas dan menekan angka NPL perusahaan Anda. Mari diskusikan solusi pemulihan aset Anda.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. KARTU KONTAK & FORMULIR                 */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* KOLOM KIRI: Panel Informasi Kontak (Warna Kuning) */}
          <div className="bg-yellow-600 text-white p-8 md:p-12 lg:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak Resmi</h2>
              <p className="text-yellow-100 mb-10 leading-relaxed text-sm">
                Silakan hubungi kami melalui formulir di samping, atau gunakan informasi kontak di bawah ini untuk terhubung langsung dengan tim operasional PT Perdana Usaha Madani.
              </p>

              <div className="space-y-8">
                {/* Item Alamat */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-700/50 p-3 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xl w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Alamat Kantor Pusat</h4>
                    <p className="text-yellow-100 text-sm leading-relaxed">
                      Head Office PT PUM<br/>
                       Jl. Rose Garden 5<br/>
                      Bekasi, Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>

                {/* Item Telepon */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-700/50 p-3 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-xl w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telepon Utama</h4>
                    <p className="text-yellow-100 text-sm">(+62) 852-7427-4069</p>
                  </div>
                </div>

                {/* Item Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-700/50 p-3 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Kemitraan</h4>
                    <p className="text-yellow-100 text-sm">perdanausahamadani.com</p>
                  </div>
                </div>

                {/* Item Jam Kerja */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-700/50 p-3 rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faClock} className="text-xl w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Jam Operasional</h4>
                    <p className="text-yellow-100 text-sm">Senin - Jumat: 08:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Formulir B2B */}
          <div className="p-8 md:p-12 lg:w-3/5">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirimkan Permintaan Kemitraan</h2>
            <p className="text-gray-500 text-sm mb-8">Isi detail institusi Anda, dan tim kami akan segera menghubungi kembali.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Nama */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Nama Lengkap *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" placeholder="Cth: John Doe" required />
                </div>
                {/* Input Institusi */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Nama Perusahaan / Institusi *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" placeholder="Cth: PT Bank ABC Tbk" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Email Perusahaan */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Perusahaan *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" placeholder="john@perusahaan.com" required />
                </div>
                {/* Input Nomor Telp */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">No. Telepon / WhatsApp *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" placeholder="0812-3456-7890" required />
                </div>
              </div>

              {/* Input Layanan (Dropdown) */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Layanan yang Diminati *</label>
                <select className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition cursor-pointer text-gray-700" required>
                  <option value="" disabled selected>-- Pilih Layanan Utama --</option>
                  <option value="desk_collection">Layanan Desk Collection</option>
                  <option value="field_collection">Layanan Field Collection</option>
                  <option value="konsultasi">Konsultasi Manajemen Piutang</option>
                  <option value="lainnya">Pertanyaan Lainnya</option>
                </select>
              </div>

              {/* Input Pesan */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Rincian Kebutuhan *</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition resize-none" placeholder="Jelaskan secara singkat jenis tagihan atau target pemulihan aset yang Anda harapkan..." required></textarea>
              </div>

              {/* Tombol Submit */}
              <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-[#2B304C] text-white text-sm font-bold uppercase tracking-wider rounded-md hover:bg-gray-900 transition-colors shadow-lg flex items-center justify-center gap-3 mt-4">
                Kirim Pesan <FontAwesomeIcon icon={faPaperPlane} />
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. PETA LOKASI (GOOGLE MAPS)               */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900">Kunjungi Kantor Kami</h2>
          <p className="text-gray-500 mt-2">Kami terbuka untuk diskusi secara langsung di kantor operasional kami.</p>
        </div>
        <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-200 h-[450px]">
          {/* 
            GANTI URL 'src' DI BAWAH INI DENGAN LINK EMBED GOOGLE MAPS ASLI 
            DARI LOKASI PT PERDANA USAHA MADANI DI BEKASI 
          */}
          <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03715694207!2d106.9015091768406!3d-6.284792694119638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8546ad633d%3A0x79e8de8965402078!2sBekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
            width="100%"
            height="100%" 
            style={{ border: 0, borderRadius: '0.5rem' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi PT PUM"
          ></iframe>
        </div>
      </div>

    </div>
  );
}