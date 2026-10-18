
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
  gaya?: 'angka' | 'huruf'; // angka = 1.1, 1.2 ; huruf (bawaan) = a, b
  butir?: Butir[];
  kontak?: boolean;
}

interface Dokumen {
  judul: string;
  pasal: Pasal[];
}

const PEMBARUAN = 'Oktober 2026';

const KONTAK = {
  email: 'perdanausahamadani@gmail.com',
  alamat:
    'Ruko Rose Garden 5 No. 20, Grand Galaxy City, Jaka Setia, Kecamatan Bekasi Selatan, Kota Bekasi, Jawa Barat 17148',
  telepon: '(+62) 852-7427-4069',
};

const ROMAWI = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];

const DOKUMEN: Record<'privasi' | 'ketentuan', Dokumen> = {
  privasi: {
    judul: 'Kebijakan Privasi',
    pasal: [
      {
        judul: 'Pendahuluan',
        pengantar:
          'Selamat datang di situs web PT Perdana Usaha Madani. Kami berkomitmen melindungi Data Pribadi setiap pengguna situs ini dan menjalankan kewajiban Kami sebagai pengendali Data Pribadi sesuai peraturan perundang-undangan yang berlaku, termasuk Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi. Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, menyimpan, dan melindungi Data Pribadi yang Pengguna berikan melalui situs ini.',
        gaya: 'angka',
        butir: [
          {
            teks: 'Data Pribadi adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi, baik secara tersendiri maupun dikombinasikan dengan informasi lain. Contohnya nama, alamat email, dan nomor telepon.',
          },
          {
            teks: 'Dengan mengakses situs ini, mengirim pesan melalui formulir Hubungi Kami, atau mengirim lamaran kerja, Pengguna menyatakan telah membaca, memahami, dan menyetujui Kebijakan Privasi ini, serta memberikan persetujuan kepada Kami untuk memproses Data Pribadi sebagaimana dijelaskan di dalamnya.',
          },
          {
            teks: 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan ditampilkan pada halaman ini disertai tanggal pembaruan. Pengguna yang tetap menggunakan situs setelah pembaruan dianggap menyetujui perubahan tersebut, sejauh diizinkan oleh peraturan perundang-undangan.',
          },
          {
            teks: 'Kebijakan ini berlaku untuk data yang dikumpulkan melalui situs web ini. Pengelolaan data debitur dalam layanan penagihan Kami diatur dalam perjanjian dengan masing-masing klien dan peraturan yang berlaku, serta tidak dicakup oleh kebijakan ini.',
          },
        ],
      },
      {
        judul: 'Ruang Lingkup Data Pribadi',
        butir: [
          {
            teks: 'Data Pribadi yang dapat dikumpulkan melalui situs ini adalah Data Pribadi yang bersifat umum, antara lain:',
            sub: [
              'Nama lengkap',
              'Alamat email',
              'Nomor telepon, WhatsApp, atau handphone',
              'Nama perusahaan, apabila Pengguna mengisinya',
              'Informasi yang Pengguna tuliskan pada pesan atau deskripsi diri',
              'Berkas CV atau resume, yang umumnya memuat riwayat pendidikan dan pekerjaan',
            ],
          },
          {
            teks: 'Kami tidak meminta Data Pribadi yang bersifat spesifik, seperti data kesehatan, biometrik, atau keuangan pribadi, maupun nomor identitas seperti KTP, melalui situs ini. Mohon tidak mencantumkannya pada formulir atau pesan. Apabila data semacam itu termuat dalam berkas yang Pengguna kirimkan, Pengguna bertanggung jawab atas pencantumannya.',
          },
        ],
      },
      {
        judul: 'Bagaimana Kami Memperoleh Data Pribadi',
        pengantar: 'Kami memperoleh Data Pribadi hanya dari informasi yang Pengguna sampaikan sendiri, yaitu:',
        butir: [
          {
            teks: 'Pada saat Pengguna mengisi dan mengirim formulir Hubungi Kami untuk menyampaikan pertanyaan, permintaan informasi, permintaan penawaran, saran, atau pengaduan.',
          },
          {
            teks: 'Pada saat Pengguna mengisi dan mengirim formulir lamaran kerja pada halaman Karir, termasuk mengunggah CV.',
          },
          {
            teks: 'Pada saat Pengguna berkomunikasi langsung dengan Kami melalui email, telepon, atau saluran kontak lain yang tercantum di situs ini.',
          },
        ],
      },
      {
        judul: 'Informasi yang Kami Kumpulkan',
        butir: [
          {
            teks: 'Melalui formulir Hubungi Kami, Kami dapat mengumpulkan:',
            sub: [
              'Nama lengkap',
              'Nama perusahaan (opsional)',
              'Alamat email',
              'Nomor telepon atau WhatsApp',
              'Perihal pesan',
              'Isi pesan',
            ],
          },
          {
            teks: 'Melalui formulir lamaran kerja, Kami dapat mengumpulkan:',
            sub: [
              'Kode lowongan dan posisi yang dilamar',
              'Nama lengkap',
              'Alamat email',
              'Nomor handphone',
              'Deskripsi diri',
              'Berkas CV atau resume',
            ],
          },
          {
            teks: 'Pengguna setuju untuk tidak menyampaikan informasi yang tidak benar atau menyesatkan, dan tidak menggunakan data milik orang lain tanpa izin. Kami berhak meminta informasi atau dokumen tambahan untuk memverifikasi data yang diberikan, khususnya dalam proses rekrutmen.',
          },
        ],
      },
      {
        judul: 'Pengolahan dan Penggunaan Data Pribadi',
        butir: [
          {
            teks: 'Kami menggunakan Data Pribadi Pengguna hanya untuk keperluan berikut:',
            sub: [
              'Menanggapi pertanyaan, permintaan informasi, permintaan penawaran, saran, maupun pengaduan',
              'Menindaklanjuti pengajuan kerja sama bisnis',
              'Memproses lamaran kerja, menilai kesesuaian kandidat, dan menghubungi pelamar',
              'Menyampaikan informasi yang berkaitan langsung dengan permintaan atau lamaran Pengguna',
              'Menjaga keamanan situs dan mencegah penyalahgunaan formulir, seperti pengiriman pesan spam',
            ],
          },
          {
            teks: 'Kami tidak menjual Data Pribadi Pengguna dan tidak menggunakannya untuk tujuan lain di luar yang disebutkan dalam kebijakan ini tanpa persetujuan Pengguna, kecuali diwajibkan oleh peraturan perundang-undangan.',
          },
          {
            teks: 'Pemrosesan Data Pribadi dilakukan secara bertanggung jawab dengan memperhatikan hak Pengguna sebagai pemilik Data Pribadi, serta berlandaskan prinsip ketepatan, kelengkapan, dan kejelasan tujuan.',
          },
        ],
      },
      {
        judul: 'Kerja Sama dengan Pihak Ketiga',
        butir: [
          {
            teks: 'Untuk menjalankan fungsi situs, Kami menggunakan layanan pihak ketiga, antara lain layanan penyimpanan data dan surel berbasis cloud untuk menerima dan menyimpan pesan serta lamaran, layanan peta digital (Google Maps) pada halaman Hubungi Kami, dan tautan ke media sosial.',
          },
          {
            teks: 'Data Pribadi dapat diproses oleh penyedia layanan tersebut sebatas yang diperlukan untuk menjalankan fungsinya. Layanan pihak ketiga dikelola dan tunduk pada kebijakan privasinya masing-masing, serta berada di luar kendali Kami.',
          },
          {
            teks: 'Pesan dan lamaran Pengguna hanya diteruskan secara internal kepada bagian yang berwenang menanganinya, seperti administrasi atau HRD, manajer, dan direktur, sesuai jenis pesan atau lamaran.',
          },
        ],
      },
      {
        judul: 'Penyimpanan Data Pribadi',
        pengantar:
          'Data Pribadi Pengguna disimpan selama diperlukan untuk memenuhi tujuan pengumpulannya, termasuk keperluan administrasi dan pembuktian, serta selama diwajibkan oleh peraturan perundang-undangan. Setelah tidak diperlukan lagi, data akan dihapus atau dianonimkan. Pengguna dapat meminta penghapusan data sebelum jangka waktu tersebut berakhir sesuai ketentuan pada bagian Hak Pengguna.',
      },
      {
        judul: 'Keamanan dan Privasi Data Pribadi',
        butir: [
          {
            teks: 'Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi Data Pribadi Pengguna dari kehilangan, perubahan, pengungkapan, atau akses tanpa hak, termasuk membatasi akses hanya kepada pihak yang berwenang.',
          },
          {
            teks: 'Data Pribadi Pengguna tidak akan diserahkan atau diungkapkan kepada pihak ketiga tanpa persetujuan Pengguna, kecuali diminta secara sah oleh aparat penegak hukum atau pejabat berwenang, atau diwajibkan oleh peraturan perundang-undangan, antara lain untuk:',
            sub: [
              'Kepentingan pertahanan dan keamanan nasional',
              'Kepentingan proses penegakan hukum',
              'Kepentingan umum dalam rangka penyelenggaraan negara',
            ],
          },
          {
            teks: 'Tidak ada metode pengiriman data melalui internet yang sepenuhnya bebas dari risiko. Karena itu, Pengguna disarankan hanya mengirimkan data yang diperlukan.',
          },
        ],
      },
      {
        judul: 'Hak Pengguna dan Pembaruan Data Pribadi',
        butir: [
          {
            teks: 'Sesuai peraturan perundang-undangan yang berlaku, Pengguna berhak untuk:',
            sub: [
              'Meminta informasi mengenai Data Pribadi Pengguna yang Kami simpan',
              'Meminta perbaikan atau pembaruan atas data yang tidak akurat',
              'Meminta penghapusan data atau menarik persetujuan penggunaan data',
            ],
          },
          {
            teks: 'Permintaan disampaikan melalui kontak pada bagian Hubungi Kami di bawah. Kami dapat meminta Pengguna memastikan identitasnya terlebih dahulu dan akan menanggapi dalam waktu yang wajar.',
          },
          {
            teks: 'Pengguna bersedia menyampaikan perubahan data apabila ada, selama data tersebut masih Kami gunakan, misalnya selama proses lamaran berjalan.',
          },
        ],
      },
      {
        judul: 'Kebijakan Cookies',
        butir: [
          {
            teks: 'Cookies adalah berkas kecil yang disimpan pada perangkat Pengguna ketika mengunjungi sebuah situs. Situs ini tidak dirancang untuk memasang cookies guna melacak aktivitas Pengguna atau untuk keperluan iklan.',
          },
          {
            teks: 'Layanan pihak ketiga yang ditampilkan pada situs ini, seperti peta Google Maps, dapat menempatkan cookies sendiri pada browser Pengguna. Pengguna dapat mengatur, membatasi, atau menghapus cookies melalui pengaturan browser.',
          },
          {
            teks: 'Apabila di kemudian hari Kami menggunakan alat analisis atau cookies tambahan, Kebijakan Privasi ini akan diperbarui.',
          },
        ],
      },
      {
        judul: 'Hubungi Kami',
        pengantar:
          'Jika Pengguna memiliki pertanyaan, keluhan, atau permintaan terkait Kebijakan Privasi ini, termasuk untuk mengakses, memperbaiki, atau menghapus Data Pribadi, silakan hubungi Kami melalui:',
        kontak: true,
      },
    ],
  },

  ketentuan: {
    judul: 'Ketentuan Layanan',
    pasal: [
      {
        judul: 'Pendahuluan',
        pengantar:
          'Selamat datang di situs web PT Perdana Usaha Madani. Ketentuan Layanan ini mengatur penggunaan situs web Kami oleh setiap pengunjung ("Pengguna").',
        gaya: 'angka',
        butir: [
          {
            teks: 'Dengan mengakses dan menggunakan situs ini, Pengguna menyatakan telah membaca, memahami, dan menyetujui Ketentuan Layanan ini. Apabila Pengguna tidak menyetujuinya, mohon tidak menggunakan situs ini.',
          },
          {
            teks: 'Ketentuan Layanan ini berlaku bersama Kebijakan Privasi Kami, yang mengatur pengumpulan dan penggunaan Data Pribadi.',
          },
          {
            teks: 'Kami dapat mengubah Ketentuan Layanan ini sewaktu-waktu. Perubahan berlaku sejak dipublikasikan pada halaman ini, dan Pengguna yang tetap menggunakan situs dianggap menyetujuinya.',
          },
        ],
      },
      {
        judul: 'Informasi pada Situs',
        butir: [
          {
            teks: 'Situs ini menyajikan informasi umum mengenai perusahaan dan layanan Kami. Informasi tersebut bukan merupakan penawaran yang mengikat, nasihat hukum, maupun nasihat keuangan.',
          },
          {
            teks: 'Ruang lingkup, biaya, dan ketentuan layanan Kami ditetapkan dalam perjanjian tertulis tersendiri dengan masing-masing klien.',
          },
          {
            teks: 'Kami berupaya menjaga agar informasi pada situs ini akurat dan terbaru, tetapi tidak menjamin bahwa seluruh informasi selalu lengkap dan bebas dari kekeliruan.',
          },
        ],
      },
      {
        judul: 'Penggunaan Situs',
        pengantar: 'Pengguna setuju untuk menggunakan situs ini secara sah dan bertanggung jawab, serta tidak:',
        butir: [
          { teks: 'Memberikan data yang palsu, menyesatkan, atau milik orang lain tanpa izin.' },
          { teks: 'Mengirim pesan yang bersifat spam, mengandung ancaman, pelecehan, atau melanggar hukum.' },
          { teks: 'Mencoba mengakses sistem atau data secara tidak sah, atau mengganggu kinerja situs.' },
          { teks: 'Mengirim berkas yang mengandung virus atau kode berbahaya.' },
        ],
      },
      {
        judul: 'Formulir Hubungi Kami',
        butir: [
          {
            teks: 'Pengguna bertanggung jawab atas kebenaran dan kelengkapan data yang disampaikan melalui formulir.',
          },
          {
            teks: 'Pengiriman formulir tidak menjamin adanya tanggapan tertentu maupun terjadinya kesepakatan kerja sama. Kami akan berupaya menanggapi dalam waktu yang wajar.',
          },
          {
            teks: 'Pengaduan dapat disampaikan dengan memilih perihal Pengaduan pada formulir.',
          },
        ],
      },
      {
        judul: 'Lamaran Kerja',
        butir: [
          {
            teks: 'Pelamar menjamin bahwa data dan CV yang dikirim adalah benar dan milik pelamar sendiri.',
          },
          {
            teks: 'Pengiriman lamaran tidak menimbulkan hubungan kerja. Hubungan kerja baru timbul setelah adanya perjanjian kerja tertulis antara Kami dan pelamar.',
          },
          {
            teks: 'Kami berhak melakukan verifikasi atas data pelamar dan menentukan kandidat yang dilanjutkan ke tahap seleksi berikutnya.',
          },
        ],
      },
      {
        judul: 'Hak Kekayaan Intelektual',
        pengantar:
          'Seluruh konten pada situs ini, termasuk teks, logo, desain, dan foto milik PT Perdana Usaha Madani, dilindungi oleh hukum yang berlaku. Konten tidak boleh disalin, diubah, atau disebarluaskan tanpa izin tertulis dari Kami. Nama dan logo klien yang ditampilkan merupakan milik masing-masing pemiliknya.',
      },
      {
        judul: 'Tautan dan Layanan Pihak Ketiga',
        pengantar:
          'Situs ini dapat memuat tautan atau layanan dari pihak ketiga, seperti peta dan media sosial. Kami tidak mengendalikan dan tidak bertanggung jawab atas isi maupun kebijakan pihak tersebut.',
      },
      {
        judul: 'Batasan Tanggung Jawab',
        pengantar:
          'Sejauh diizinkan oleh hukum, Kami tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan atau ketidakmampuan menggunakan situs ini, termasuk gangguan akses di luar kendali Kami.',
      },
      {
        judul: 'Hukum yang Berlaku',
        pengantar:
          'Ketentuan Layanan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Setiap perselisihan akan diupayakan penyelesaiannya secara musyawarah terlebih dahulu.',
      },
      {
        judul: 'Hubungi Kami',
        pengantar: 'Pertanyaan mengenai Ketentuan Layanan ini dapat disampaikan melalui:',
        kontak: true,
      },
    ],
  },
};

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
  const dok = DOKUMEN[jenis];
  const lain = jenis === 'privasi' ? 'ketentuan' : 'privasi';

  return (
    <div className="animate-fade-in bg-white pb-20">
      <section className="pt-40 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2B304C] mb-2">{dok.judul}</h1>
          <p className="text-sm text-gray-500">Terakhir diperbarui: {PEMBARUAN}</p>
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
              Baca {DOKUMEN[lain].judul}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}