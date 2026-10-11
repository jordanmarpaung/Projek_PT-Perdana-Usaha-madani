import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
// Pastikan nama file gambarnya sesuai
import heroKarir from '../assets/poto_Karir.png'; 
import FormLamaran from '../components/FormLamaran';

type Lowongan = {
  id: string;
  posisi: string;
  tanggal: string;
  gambar: string;
  batasAkhir?: string;
  aktif: boolean;
};

// Isi dengan link CSV dari Google Sheets (File > Share > Publish to web > CSV)
const URL_SHEET = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2IHsAwuQNUWkywW6kBXAXa4JvuaVc96wxsEZDC_kYl7bSuIDf6FRWQ50abm6ZNClerG3fcnHOxKdS/pub?gid=0&single=true&output=csv';
// Nomor WhatsApp HRD, format 62xxxxxxxxxx tanpa + atau 0
const urlGambar = (g: string) =>
  g.startsWith('http') ? g : `https://drive.google.com/thumbnail?id=${g}&sz=w1000`;
export default function Karir() {
      const [lowongan, setLowongan] = useState<Lowongan[]>([]);
  const [loading, setLoading] = useState(Boolean(URL_SHEET));
  const [gagal, setGagal] = useState(false);
  const [urutan, setUrutan] = useState<'terbaru' | 'terlama'>('terbaru');
  const [lamar, setLamar] = useState<Lowongan | null>(null);

  useEffect(() => {
    if (!URL_SHEET.startsWith('http')) {
      setLoading(false);
      return;
    }
    Papa.parse<Record<string, string>>(URL_SHEET, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (hasil) => {
        setLowongan(
          hasil.data
            .filter((r) => r.posisi?.trim() && r.gambar?.trim())
            .map((r, i) => ({
              id: r.id?.trim() || String(i),
              posisi: r.posisi.trim(),
              tanggal: r.tanggal?.trim() || '',
              gambar: r.gambar.trim(),
              batasAkhir: r.batasAkhir?.trim() || undefined,
              aktif: r.aktif?.trim().toUpperCase() === 'TRUE',
            }))
        );
        setLoading(false);
      },
      error: () => {
        setGagal(true);
        setLoading(false);
      },
    });
  }, []);

  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);

  const tampil = lowongan
    .filter((l) => l.aktif && (!l.batasAkhir || new Date(l.batasAkhir) >= hariIni))
    .sort((a, b) => {
      const selisih = new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime();
      return urutan === 'terbaru' ? -selisih : selisih;
    });
  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-24">
      
      {/* ========================================== */}
      {/* 1. HERO SECTION DENGAN GAMBAR BERSIH       */}
      {/* Jarak atas (pt) sudah dikurangi agar tidak terlalu jauh dari Navbar */}
      {/* ========================================== */}
      <section className="bg-white pt-0 -mt-8 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Bagian Kiri: Teks Karir */}
            <div className="relative z-10">
              <div className="inline-block bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Karir PT PUM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Mari Bertumbuh & <br />
                <span className="text-yellow-600">Berkarya Bersama</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Temukan peluang karir terbaik dan wujudkan potensi maksimal Anda di lingkungan kerja yang profesional, solid, dan penuh inovasi.
              </p>
            </div>

            {/* Bagian Kanan: Gambar Orang (Bersih Tanpa Background Kotak) */}
            <div className="relative z-10 lg:pl-10 flex justify-center">
              <img 
                src={heroKarir} 
                alt="Suasana Kerja PT PUM" 
                className="w-full max-w-lg object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. MENGAPA BERGABUNG DENGAN KAMI? (BENEFIT)*/}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jenjang Karir</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Peluang pengembangan karir bagi karyawan yang memiliki performa dan dedikasi tinggi.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Insentif Menarik</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Kami menghargai setiap kerja keras Anda dengan sistem bonus dan insentif pencapaian target.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lingkungan Positif</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Budaya kerja yang saling mendukung, solid, kekeluargaan, dan menjunjung tinggi etika profesional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. STATUS LOWONGAN (EMPTY STATE)           */}
      {/* ========================================== */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <p className="text-center text-gray-500 py-12">Memuat lowongan...</p>
        ) : tampil.length > 0 ? (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Lowongan Pekerjaan Terbaru</h2>
              <select
                value={urutan}
                onChange={(e) => setUrutan(e.target.value as 'terbaru' | 'terlama')}
                className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="terbaru">Terbaru</option>
                <option value="terlama">Terlama</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tampil.map((l) => (
                <div
                  key={l.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
                >
                  <img
                    src={urlGambar(l.gambar)}
                    alt={`Lowongan ${l.posisi}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    {l.tanggal && (
                      <span className="self-start bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {new Date(l.tanggal).toLocaleDateString('id-ID', { dateStyle: 'long' })}
                      </span>
                    )}
                    <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
                      Lowongan Pekerjaan
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{l.posisi}</h3>
                    <button
                      type="button"
                      onClick={() => setLamar(l)}
                      className="mt-auto bg-yellow-600 hover:bg-yellow-700 text-white text-center font-bold px-6 py-2.5 rounded-md transition-colors"
                    >
                      Lamar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-12 md:p-16 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mb-6 text-4xl">
              <FontAwesomeIcon icon={faFolderOpen} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {gagal ? 'Lowongan Belum Dapat Dimuat' : 'Belum Ada Posisi Tersedia'}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              {gagal
                ? 'Terjadi kendala saat memuat data lowongan. Silakan coba lagi nanti atau hubungi HRD kami.'
                : 'Saat ini PT Perdana Usaha Madani belum membuka lowongan pekerjaan baru. Silakan pantau terus halaman ini untuk mendapatkan informasi rekrutmen terbaru.'}
            </p>
          </div>
        )}
      </section>

      {lamar && (
        <FormLamaran
          kode={lamar.id}
          posisi={lamar.posisi}
          onClose={() => setLamar(null)}
        />
      )}
          </div>
  );
}