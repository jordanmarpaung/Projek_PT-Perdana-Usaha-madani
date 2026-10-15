import { useState } from 'react';
import type { FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneAlt, faEnvelope, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const URL_KIRIM = 'https://script.google.com/macros/s/AKfycbzkd0Q0bEEKl3LIAWMoet4EE1nli2Z3jfll0L1ZD8s1xoZRClQACwa-4zqhZKl0fQfY/exec'

export default function HubungiKami() {
    const [status, setStatus] = useState<'isi' | 'kirim' | 'sukses'>('isi');
  const [error, setError] = useState('');

  const kirim = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const f = new FormData(form);
    if (f.get('situs')) return; // diisi bot, abaikan
    if (!URL_KIRIM) {
      setError('Formulir belum tersambung ke server. Hubungi admin website.');
      return;
    }

    setStatus('kirim');
    try {
      const res = await fetch(URL_KIRIM, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          jenis: 'kontak',
          nama: f.get('nama'),
          perusahaan: f.get('perusahaan'),
          email: f.get('email'),
          hp: f.get('hp'),
          perihal: f.get('perihal'),
          pesan: f.get('pesan'),
        }),
      });
      const hasil = await res.json();
      if (!hasil.ok) throw new Error(hasil.pesan || 'Gagal mengirim');
      form.reset();
      setStatus('sukses');
    } catch (err){
      console.error(err);
      setStatus('isi');
      setError('Pesan gagal dikirim: ' + (err instanceof Error ? err.message : 'Terjadi kesalahan coba lagi'));
    }
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pt-4 pb-24">
      
      {/* ========================================== */}
      {/* 1. HEADER HALAMAN                          */}
      {/* ========================================== */}
      <div className="bg-[#2B304C] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Hubungi Kami</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Solusi terpercaya untuk pengelolaan piutang dan pemulihan aset perusahaan Anda. Hubungi kami untuk mendiskusikan strategi penanganan NPL yang efektif dan profesional.
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
                       Ruko Rose Garden 5 No.20<br/>
                      Galaxy Bekasi Selatan, kota Bekasi
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
                    <h4 className="font-bold text-lg mb-1">Email Perusahaan</h4>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim pesan kepada kami</h2>
            <p className="text-gray-500 text-sm mb-8">Isi formulir berikut dan tim kami akan segera menghubungi anda kembali.</p>
            
            <form className="space-y-6" onSubmit={kirim}>
              <input type="text" name="situs" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Nama */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">Nama Lengkap *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" name="nama" placeholder="Isi Nama Lengkap" required />
                </div>
                {/* Input Institusi */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">Nama Perusahaan (opsional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" name="perusahaan" placeholder="Isi nama perusahaan" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Email Perusahaan */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">Email Perusahaan *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" name="email" placeholder="Isi email" required />
                </div>
                {/* Input Nomor Telp */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">No. Telepon / WhatsApp *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition" name="hp" placeholder="0812-3456-7890" required />
                </div>
              </div>

              {/* perihal*/}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">Perihal *</label>
                <select
                name="perihal"
                defaultValue=""
                className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition cursor-pointer text-gray-700" required>

                  <option value="" disabled>-- Pilih perihal --</option>
                  <option value="informasi">Permintaan Informasi</option>
                  <option value="kerja_sama">Kemitraan</option>
                  <option value="penawaran">Permintaan penawaran</option>
                  <option value="saran">saran dan masukan</option>
                  <option value="pengaduan">Pengaduan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              {/* Input Pesan */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 tracking-wide">Tulis pesan anda*</label>
                <textarea name="pesan" rows={4} className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition resize-none" placeholder="Tuliskan pesan anda di sini..." required></textarea>
              </div>

                           {/* Tombol Submit */}
              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-md px-4 py-2">{error}</p>
              )}
              {status === 'sukses' && (
                <p className="text-sm text-green-700 bg-green-50 rounded-md px-4 py-2">
                  Terima kasih, pesan Anda sudah terkirim. Tim kami akan menghubungi Anda kembali.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'kirim'}
                className="w-full md:w-auto px-8 py-3.5 bg-[#2B304C] text-white text-sm font-bold uppercase tracking-wider rounded-md hover:bg-gray-900 transition-colors shadow-lg flex items-center justify-center gap-3 mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'kirim' ? 'Mengirim...' : 'Kirim Pesan'} <FontAwesomeIcon icon={faPaperPlane} />
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