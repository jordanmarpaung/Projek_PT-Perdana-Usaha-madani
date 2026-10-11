import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

type Props = {
  kode: string;
  posisi: string;
  onClose: () => void;
};

// Link Web App dari Google Apps Script (diisi di Langkah 2)
const URL_KIRIM = 'https://script.google.com/macros/s/AKfycbwe_cXo2fIXISkJPpGnF0KCSZd1B5yaZy7ozPuouFIfHlSuAXqV9CIkFNP5L5ZJrJYC/exec';

const MAKS_UKURAN = 2 * 1024 * 1024; // 2MB

const bacaFile = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
    reader.onerror = () => reject(new Error('Gagal membaca file'));
    reader.readAsDataURL(file);
  });

const kelasInput =
  'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500';

export default function FormLamaran({ kode, posisi, onClose }: Props) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [setuju, setSetuju] = useState(false);
  const [jebakan, setJebakan] = useState(''); // kolom tersembunyi untuk menjebak bot
  const [status, setStatus] = useState<'isi' | 'kirim' | 'sukses'>('isi');
  const [error, setError] = useState('');

  // Tutup dengan tombol Esc dan kunci scroll halaman di belakang
  useEffect(() => {
    const tekan = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', tekan);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', tekan);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const pilihFile = (file: File | null) => {
    setError('');
    if (!file) {
      setCv(null);
      return;
    }
    if (!/\.(pdf|doc|docx)$/i.test(file.name)) {
      setCv(null);
      setError('File CV harus berformat PDF atau Docx.');
      return;
    }
    if (file.size > MAKS_UKURAN) {
      setCv(null);
      setError('Ukuran file CV maksimal 2MB.');
      return;
    }
    setCv(file);
  };

  const kirim = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (jebakan) return; // diisi bot, abaikan
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Format email tidak valid.');
      return;
    }
    if (!/^(\+62|62|0)8\d{7,12}$/.test(hp.replace(/[\s-]/g, ''))) {
      setError('Nomor handphone tidak valid.');
      return;
    }
    if (!cv) {
      setError('Silakan unggah CV/Resume Anda.');
      return;
    }
    if (!URL_KIRIM) {
      setError('Formulir belum tersambung ke server. Hubungi admin website.');
      return;
    }

    setStatus('kirim');
    try {
      const cvBase64 = await bacaFile(cv);
      const res = await fetch(URL_KIRIM, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          kode,
          posisi,
          nama,
          email,
          hp,
          deskripsi,
          cvNama: cv.name,
          cvBase64,
        }),
      });
      const hasil = await res.json();
      if (!hasil.ok) throw new Error(hasil.pesan || 'Gagal mengirim');
      setStatus('sukses');
    } catch {
      setStatus('isi');
      setError('Lamaran gagal dikirim. Periksa koneksi Anda lalu coba lagi.');
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="judul-form-lamaran"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faXmark} className="text-xl" />
        </button>

        {status === 'sukses' ? (
          <div className="text-center py-8">
            <FontAwesomeIcon icon={faCircleCheck} className="text-5xl text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Lamaran Terkirim</h2>
            <p className="text-gray-600 mb-6">
              Terima kasih, lamaran Anda untuk posisi <b>{posisi}</b> sudah kami terima.
              Tim HRD akan menghubungi Anda jika lolos seleksi awal.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-2.5 rounded-md transition-colors"
            >
              Tutup
            </button>
          </div>
        ) : (
          <form onSubmit={kirim} className="space-y-4">
            <div>
              <h2 id="judul-form-lamaran" className="text-2xl font-extrabold text-gray-900 pr-8">
                Lengkapi formulir di bawah
              </h2>
              <p className="text-sm text-gray-500 mt-1">Melamar posisi: {posisi}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold text-gray-700">
                Kode Lowongan
                <input type="text" value={kode} disabled className={`${kelasInput} mt-1 bg-gray-100 text-gray-500`} />
              </label>
              <label className="block text-sm font-semibold text-gray-700">
                Nama Lengkap <span className="text-red-500">*</span>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Isi Nama Lengkap"
                  className={`${kelasInput} mt-1`}
                />
              </label>
              <label className="block text-sm font-semibold text-gray-700">
                Email <span className="text-red-500">*</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Isi Email"
                  className={`${kelasInput} mt-1`}
                />
              </label>
              <label className="block text-sm font-semibold text-gray-700">
                No. Handphone <span className="text-red-500">*</span>
                <input
                  type="tel"
                  required
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className={`${kelasInput} mt-1`}
                />
              </label>
            </div>

            <label className="block text-sm font-semibold text-gray-700">
              <span className="flex justify-between">
                <span>Deskripsi diri <span className="text-red-500">*</span></span>
                <span className="font-normal text-gray-400">{deskripsi.length}/250</span>
              </span>
              <textarea
                required
                maxLength={250}
                rows={3}
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Tuliskan deskripsi singkat tentang diri Anda"
                className={`${kelasInput} mt-1 resize-none`}
              />
            </label>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                CV/Resume Anda <span className="text-red-500">*</span>
              </p>
              <label className="inline-block cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors">
                Pilih Dokumen
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => pilihFile(e.target.files?.[0] ?? null)}
                />
              </label>
              <span className="ml-3 text-sm text-gray-500">{cv ? cv.name : 'Belum ada file dipilih'}</span>
              <p className="text-xs text-gray-400 mt-1">Unggah resume dalam format PDF atau Docx. Maks. 2MB.</p>
            </div>

            {/* Kolom jebakan bot: tidak terlihat oleh manusia */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={jebakan}
              onChange={(e) => setJebakan(e.target.value)}
              className="absolute -left-[9999px]"
            />

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={setuju}
                onChange={(e) => setSetuju(e.target.checked)}
                className="mt-1"
              />
              <span>Saya menyetujui data saya digunakan untuk proses rekrutmen PT Perdana Usaha Madani.</span>
            </label>

            {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>}

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={!setuju || status === 'kirim'}
                className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold px-10 py-2.5 rounded-full transition-colors"
              >
                {status === 'kirim' ? 'Mengirim...' : 'Kirim'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}




