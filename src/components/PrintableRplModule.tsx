import React, { useState } from 'react';
import {
  generalInfo,
  rplDocumentation,
  assessmentItems,
  assessmentCategories,
  eightCharacteristics,
  businessEthicsPillars,
  rolePlayDialogues,
  sociodramaRubric,
  deepLearningPillars
} from '../data/moduleData';
import { Printer, Copy, Check, FileText, ArrowLeft } from 'lucide-react';

interface PrintableRplModuleProps {
  onBackToApp: () => void;
}

export const PrintableRplModule: React.FC<PrintableRplModuleProps> = ({ onBackToApp }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = document.getElementById('printable-content')?.innerText || '';
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Action Toolbar (hidden on print) */}
      <div className="no-print bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={onBackToApp}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Mode Interaktif</span>
          </button>
          <h2 className="text-xl font-bold text-slate-900">
            Naskah Lengkap Modul & Format RPL BK (Siap Cetak / LMS)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Diformat resmi untuk Guru Bimbingan dan Konseling sesuai standar Kurikulum Merdeka Fase D/E.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyText}
            className="px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Tersalin!' : 'Salin Semua Teks'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 text-xs font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Ekspor PDF</span>
          </button>
        </div>
      </div>

      {/* Main Printable Document Container */}
      <div
        id="printable-content"
        className="bg-white border border-slate-300 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8 text-slate-900 leading-relaxed font-sans text-xs sm:text-sm"
      >
        {/* Document Header (Kop Surat RPL) */}
        <div className="text-center pb-6 border-b-2 border-slate-800 space-y-1">
          <h1 className="text-base sm:text-lg font-bold tracking-tight uppercase">
            RENCANA PELAKSANAAN LAYANAN (RPL) BIMBINGAN KLASIKAL
          </h1>
          <p className="text-sm font-semibold uppercase text-slate-700">
            BIDANG BIMBINGAN KARIER DAN PRIBADI-SOSIAL · KURIKULUM MERDEKA
          </p>
          <p className="text-xs text-slate-500">
            Topik: {generalInfo.title} ({generalInfo.subtitle})
          </p>
        </div>

        {/* Section 1: Identitas Layanan */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            I. INFORMASI UMUM & IDENTITAS LAYANAN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div>
              <span className="font-semibold text-slate-700">Satuan Pendidikan: </span>
              <span>{rplDocumentation.header.sekolah}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Tahun Pelajaran: </span>
              <span>{rplDocumentation.header.tahunAjaran}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Sasaran Layanan: </span>
              <span>{rplDocumentation.header.fase}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Alokasi Waktu: </span>
              <span>{rplDocumentation.header.alokasiWaktu}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Bidang Bimbingan: </span>
              <span>{rplDocumentation.header.bidangBimbingan}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Pendekatan Pembelajaran: </span>
              <span>{generalInfo.pedagogicalApproach} (Pengalaman Langsung, Refleksi, Konseptualisasi, Aksi Nyata)</span>
            </div>
          </div>
        </div>

        {/* Section 2: Penguatan Karakter & Kompetensi (Deep Learning) */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            II. PENGUATAN KARAKTER & KOMPETENSI (DEEP LEARNING 6C)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {deepLearningPillars.map((p) => (
              <div key={p.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900">{p.number}. {p.title}:</span>
                <p className="text-slate-600 mt-0.5">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Tujuan Layanan dalam 3 Tahapan Perkembangan */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            III. TUJUAN LAYANAN DALAM 3 TAHAPAN PERKEMBANGAN
          </h2>
          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block">{generalInfo.tujuanLayanan.pengenalan.tahap}:</span>
              <p className="text-slate-700 mt-0.5">{generalInfo.tujuanLayanan.pengenalan.deskripsi}</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block">{generalInfo.tujuanLayanan.akomodasi.tahap}:</span>
              <p className="text-slate-700 mt-0.5">{generalInfo.tujuanLayanan.akomodasi.deskripsi}</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block">{generalInfo.tujuanLayanan.tindakan.tahap}:</span>
              <p className="text-slate-700 mt-0.5">{generalInfo.tujuanLayanan.tindakan.deskripsi}</p>
            </div>
          </div>
        </div>

        {/* Section 4: Langkah-Langkah Kegiatan Layanan (Experiential Learning) */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            IV. LANGKAH-LANGKAH KEGIATAN LAYANAN (EXPERIENTIAL LEARNING)
          </h2>
          <div className="space-y-3 text-xs">
            {rplDocumentation.langkahKegiatan.map((lk, idx) => (
              <div key={idx} className="border-l-2 border-amber-600 pl-3 space-y-0.5">
                <span className="font-bold text-slate-900">{lk.tahap}</span>
                <p className="text-slate-700 leading-relaxed">{lk.aktivitas}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Evaluasi */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            V. EVALUASI LAYANAN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block">A. Evaluasi Proses:</span>
              <p className="text-slate-700 mt-0.5">{rplDocumentation.evaluasi.proses}</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block">B. Evaluasi Hasil:</span>
              <p className="text-slate-700 mt-0.5">{rplDocumentation.evaluasi.hasil}</p>
            </div>
          </div>
        </div>

        {/* Pengesahan Dokumen RPL BK Utama */}
        <div className="pt-6 pb-2 avoid-break">
          <div className="grid grid-cols-2 gap-8 text-xs text-slate-800">
            <div>
              <p className="text-slate-700">Mengetahui,</p>
              <p className="font-semibold text-slate-900 mt-0.5">{rplDocumentation.pengesahan.kepalaSekolah.jabatan}</p>
              <div className="h-16 sm:h-20"></div>
              <p className="font-bold text-slate-900 underline tracking-wide">
                {rplDocumentation.pengesahan.kepalaSekolah.nama}
              </p>
              <p className="font-mono text-[11px] text-slate-700 mt-0.5">
                NIP. {rplDocumentation.pengesahan.kepalaSekolah.nip}
              </p>
            </div>
            <div className="pl-4 sm:pl-16">
              <p className="text-slate-700">........................., {rplDocumentation.pengesahan.tempatTanggal}</p>
              <p className="font-semibold text-slate-900 mt-0.5">{rplDocumentation.pengesahan.guruBK.jabatan}</p>
              <div className="h-16 sm:h-20"></div>
              <p className="font-bold text-slate-900 underline tracking-wide">
                {rplDocumentation.pengesahan.guruBK.nama}
              </p>
              <p className="font-mono text-[11px] text-slate-700 mt-0.5">
                NIP. {rplDocumentation.pengesahan.guruBK.nip}
              </p>
            </div>
          </div>
        </div>

        {/* LAMPIRAN 1: INSTRUMEN ASESMEN AWAL (18 BUTIR) */}
        <div className="page-break pt-6 space-y-4">
          <div className="text-center pb-2 border-b border-slate-300">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              LAMPIRAN 1: INSTRUMEN ASESMEN AWAL MANDIRI JIWA KEWIRAUSAHAAN
            </h3>
            <p className="text-xs text-slate-600">
              Skala Likert (1 = Tidak Pernah / 2 = Kadang-kadang / 3 = Sering)
            </p>
          </div>

          <table className="w-full text-left text-xs border border-slate-300">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="p-2 w-10 text-center border-r border-slate-300">No</th>
                <th className="p-2 border-r border-slate-300">Pernyataan Sikap Kewirausahaan</th>
                <th className="p-2 w-28 text-center border-r border-slate-300">Dimensi</th>
                <th className="p-2 w-12 text-center border-r border-slate-300">TP (1)</th>
                <th className="p-2 w-12 text-center border-r border-slate-300">KK (2)</th>
                <th className="p-2 w-12 text-center">SR (3)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {assessmentItems.map(item => (
                <tr key={item.id}>
                  <td className="p-2 text-center font-mono border-r border-slate-300">{item.id}</td>
                  <td className="p-2 border-r border-slate-300 leading-relaxed">{item.text}</td>
                  <td className="p-2 text-center border-r border-slate-300 text-[11px] text-slate-600 font-medium">
                    {item.dimensionLabel}
                  </td>
                  <td className="p-2 text-center border-r border-slate-300"></td>
                  <td className="p-2 text-center border-r border-slate-300"></td>
                  <td className="p-2 text-center"></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pedoman Skor & Interpretasi */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs">
            <span className="font-bold text-slate-900 block uppercase tracking-wide">
              Pedoman Interpretasi Total Skor (18 - 54):
            </span>
            <div className="space-y-1">
              <p>
                <strong>• Skor 18 - 29 (Tunas Awal / Explorer):</strong> {assessmentCategories.rendah.counselorNarration}
              </p>
              <p>
                <strong>• Skor 30 - 42 (Pengembang Kreatif / Grower):</strong> {assessmentCategories.cukup.counselorNarration}
              </p>
              <p>
                <strong>• Skor 43 - 54 (Pionir Muda Tangguh / Trailblazer):</strong> {assessmentCategories.tinggi.counselorNarration}
              </p>
            </div>
          </div>
        </div>

        {/* LAMPIRAN 2: LEMBAR KERJA LKPD 1 MENCARI HARTA KARUN PELUANG */}
        <div className="page-break pt-6 space-y-4">
          <div className="text-center pb-2 border-b border-slate-300">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              LAMPIRAN 2: LEMBAR KERJA PESERTA DIDIK (LKPD 1)
            </h3>
            <p className="text-xs text-slate-600">
              Aktivitas Kelompok: "Mencari Harta Karun Peluang di Lingkungan Sekitar"
            </p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
            <div className="flex justify-between">
              <span><strong>Nama Kelompok:</strong> _____________________________</span>
              <span><strong>Kelas / Semester:</strong> _______________</span>
            </div>
            <div>
              <span><strong>Anggota Tim:</strong> 1) _____________ 2) _____________ 3) _____________ 4) _____________</span>
            </div>
            <div>
              <span><strong>Nama Usaha/Karya Kreatif:</strong> ___________________________________________________</span>
            </div>
          </div>

          <table className="w-full text-left text-xs border border-slate-300">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="p-2 w-12 text-center border-r border-slate-300">No</th>
                <th className="p-2 w-48 border-r border-slate-300">Komponen Analisis</th>
                <th className="p-2">Deskripsi Rancangan Tim</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 text-center font-mono border-r border-slate-300">1</td>
                <td className="p-3 font-semibold border-r border-slate-300">Masalah Sekitar (Problem Hunting)</td>
                <td className="p-3 text-slate-500 italic">Kesulitan atau keluhan apa yang diamati di sekolah?</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-mono border-r border-slate-300">2</td>
                <td className="p-3 font-semibold border-r border-slate-300">Sasaran Pengguna (Target User)</td>
                <td className="p-3 text-slate-500 italic">Siapa yang paling merasakan masalah dan butuh bantuan?</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-mono border-r border-slate-300">3</td>
                <td className="p-3 font-semibold border-r border-slate-300">Solusi Produk / Jasa Kreatif</td>
                <td className="p-3 text-slate-500 italic">Bentuk karya/jasa nyata yang ditawarkan tim?</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-mono border-r border-slate-300">4</td>
                <td className="p-3 font-semibold border-r border-slate-300">Nilai Unik & Keunggulan</td>
                <td className="p-3 text-slate-500 italic">Mengapa karya ini berbeda dan lebih bermanfaat dibanding lainnya?</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-mono border-r border-slate-300">5</td>
                <td className="p-3 font-semibold border-r border-slate-300">Modal Awal Sederhana</td>
                <td className="p-3 text-slate-500 italic">Alat yang sudah ada dan estimasi biaya patungan minimal?</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-mono border-r border-slate-300">6</td>
                <td className="p-3 font-semibold border-r border-slate-300">Komitmen Etika & Tanggung Jawab</td>
                <td className="p-3 text-slate-500 italic">Bagaimana menjaga kejujuran mutu dan kebersihan sekolah?</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* LAMPIRAN 3: RUBRIK EVALUASI SOSIODRAMA */}
        <div className="page-break pt-6 space-y-4">
          <div className="text-center pb-2 border-b border-slate-300">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              LAMPIRAN 3: RUBRIK EVALUASI SOSIODRAMA (BERMAIN PERAN)
            </h3>
            <p className="text-xs text-slate-600">
              Instrumen Penilaian Autentik Praktik Komunikasi Asertif & Etika Bisnis Remaja
            </p>
          </div>

          <table className="w-full text-left text-xs border border-slate-300">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="p-2 border-r border-slate-300 w-36">Kriteria</th>
                <th className="p-2 border-r border-slate-300">Skor 1 (Kurang)</th>
                <th className="p-2 border-r border-slate-300">Skor 2 (Cukup)</th>
                <th className="p-2 border-r border-slate-300">Skor 3 (Baik)</th>
                <th className="p-2">Skor 4 (Sangat Baik)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sociodramaRubric.map(cr => (
                <tr key={cr.id}>
                  <td className="p-2.5 font-bold border-r border-slate-300 align-top">
                    {cr.title}
                  </td>
                  {cr.levels.map(lvl => (
                    <td key={lvl.score} className="p-2.5 border-r border-slate-300 last:border-r-0 align-top leading-relaxed text-[11px] text-slate-700">
                      {lvl.descriptor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pengesahan Evaluasi & Pelaksanaan */}
          <div className="pt-8 grid grid-cols-2 gap-8 text-xs text-slate-800 avoid-break">
            <div>
              <p className="text-slate-700">Mengetahui,</p>
              <p className="font-semibold text-slate-900 mt-0.5">{rplDocumentation.pengesahan.kepalaSekolah.jabatan}</p>
              <div className="h-16 sm:h-20"></div>
              <p className="font-bold text-slate-900 underline tracking-wide">
                {rplDocumentation.pengesahan.kepalaSekolah.nama}
              </p>
              <p className="font-mono text-[11px] text-slate-700 mt-0.5">
                NIP. {rplDocumentation.pengesahan.kepalaSekolah.nip}
              </p>
            </div>
            <div className="pl-4 sm:pl-16">
              <p className="text-slate-700">........................., {rplDocumentation.pengesahan.tempatTanggal}</p>
              <p className="font-semibold text-slate-900 mt-0.5">{rplDocumentation.pengesahan.guruBK.jabatan}</p>
              <div className="h-16 sm:h-20"></div>
              <p className="font-bold text-slate-900 underline tracking-wide">
                {rplDocumentation.pengesahan.guruBK.nama}
              </p>
              <p className="font-mono text-[11px] text-slate-700 mt-0.5">
                NIP. {rplDocumentation.pengesahan.guruBK.nip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
