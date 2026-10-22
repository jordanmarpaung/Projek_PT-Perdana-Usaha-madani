import { useTranslation } from 'react-i18next'; // 1. IMPORT TRANSLATION

interface KebijakanProps {
  jenis: 'privasi' | 'ketentuan';
  setActivePage: (page: string) => void;
}

interface Butir {
  teks: string;
  sub?: string[];
}

interface Pasal {
  judul: string;
  pengantar?: string;
  gaya?: 'angka' | 'huruf';
  butir?: Butir[];
  kontak?: boolean;
}

interface Dokumen {
  judul: string;
  pasal: Pasal[];
}

const KONTAK = {
  email: 'perdanausahamadani@gmail.com',
  alamat:
    'Ruko Rose Garden 5 No. 20, Grand Galaxy City, Jaka Setia, Kecamatan Bekasi Selatan, Kota Bekasi, Jawa Barat 17148',
  telepon: '(+62) 852-7427-4069',
};

const ROMAWI = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];

function SubDaftar({ items }: { items: string[] }) {
  return (
    <ol className="mt-3 space-y-2">
      {items.map((teks, i) => (
        <li key={teks} className="flex gap-4">
          <span className="w-8 shrink-0 text-gray-400">{ROMAWI[i]}.</span>
          <span>{teks}</span>
        </li>
      ))}
    </ol>
  );
}

export default function Kebijakan({ jenis, setActivePage }: KebijakanProps) {
  const { t } = useTranslation(); // 2. INISIALISASI FUNGSI BAHASA
  
  // Ambil objek JSON dokumen dari file terjemahan berdasarkan bahasa yang aktif
  const dok = t(`policy.${jenis}`, { returnObjects: true }) as Dokumen;
  
  const lain = jenis === 'privasi' ? 'ketentuan' : 'privasi';
  const judulLain = t(`policy.${lain}.judul`);

  return (
    <div className="animate-fade-in bg-white pb-20">
      <section className="pt-40 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2B304C] mb-2">{dok.judul}</h1>
          <p className="text-sm text-gray-500">
            {t('policy.lastUpdated')}: {t('policy.date')}
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {dok.pasal.map((p, i) => (
            <div key={p.judul}>
              <h2 className="text-lg font-bold text-gray-800 mb-2 flex gap-2">
                <span>{i + 1}.</span>
                {p.judul}
              </h2>

              <div className="pl-4 text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                {p.pengantar && <p>{p.pengantar}</p>}

                {p.butir?.map((b, j) => (
                  <div key={j} className="flex gap-4">
                    <span className="w-10 shrink-0 text-gray-700">
                      {p.gaya === 'angka' ? `${i + 1}.${j + 1}` : `${String.fromCharCode(97 + j)}.`}
                    </span>
                    <div>
                      <p>{b.teks}</p>
                      {b.sub && <SubDaftar items={b.sub} />}
                    </div>
                  </div>
                ))}

                {p.kontak && (
                  <dl className="grid grid-cols-[5.5rem_1fr] gap-y-2 text-gray-700">
                    <dt className="font-semibold text-gray-800">Email</dt>
                    <dd>
                      :{' '}
                      <a href={`mailto:${KONTAK.email}`} className="text-yellow-700 hover:underline">
                        {KONTAK.email}
                      </a>
                    </dd>
                    <dt className="font-semibold text-gray-800">Alamat</dt>
                    <dd>: {KONTAK.alamat}</dd>
                    <dt className="font-semibold text-gray-800">Telepon</dt>
                    <dd>: {KONTAK.telepon}</dd>
                  </dl>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4">
            <button
              onClick={() => setActivePage(lain)}
              className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium px-6 py-3 rounded-md transition"
            >
              {t('policy.btnRead')} {judulLain}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}