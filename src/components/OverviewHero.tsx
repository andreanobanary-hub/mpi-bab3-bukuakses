import React, { useState } from 'react';
import { generalInfo, deepLearningPillars } from '../data/moduleData';
import {
  Compass,
  Lightbulb,
  HeartHandshake,
  Rocket,
  Award,
  ArrowRight,
  ShieldCheck,
  Search,
  Users,
  MessageSquare,
  Globe,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface OverviewHeroProps {
  onStartAssessment: () => void;
}

export const OverviewHero: React.FC<OverviewHeroProps> = ({ onStartAssessment }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Header Area */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium flex-wrap">
            <span>Bimbingan Klasikal BK</span>
            <span aria-hidden="true">·</span>
            <span>Fase D / E (SMP & SMA)</span>
            <span aria-hidden="true">·</span>
            <span>2 x 45 Menit</span>
            <span aria-hidden="true">·</span>
            <span>Experiential Learning</span>
            <span aria-hidden="true">·</span>
            <span>Deep Learning 6C</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Menumbuhkan Jiwa Kewirausahaan bagi Remaja
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Kreatif, Ulet, Mandiri, dan Beretika dalam Merespon Peluang Sekitar
          </p>

          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl pt-1">
            Selamat datang di modul interaktif Bimbingan dan Konseling. Kewirausahaan bagi remaja bukan hanya tentang berjualan atau mencari uang saku semata, melainkan proses melatih kepekaan melihat masalah teman dan lingkungan, menciptakan solusi kreatif, berkolaborasi dengan tulus, serta menjaga integritas moral.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartAssessment}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl text-sm transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Mulai Asesmen Diri</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="font-semibold text-slate-700">18 Butir Sikap</span>
              <span>· 5 Dimensi Kepribadian Wirausaha</span>
            </div>
          </div>
        </div>

        {/* Decorative visual card */}
        <div className="hidden lg:block absolute right-8 bottom-6 w-80 h-72 pointer-events-none opacity-90">
          <div className="w-full h-full bg-linear-to-br from-amber-50 to-orange-100/70 border border-amber-200/60 rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-amber-800 font-semibold">
              <span>Profil Karakter Unggul</span>
              <Award className="w-4 h-4 text-amber-600" />
            </div>
            <div className="space-y-3">
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-200/60 shadow-xs">
                <p className="text-xs font-semibold text-slate-800">Mindset Solutif</p>
                <p className="text-[11px] text-slate-500">Melihat peluang di balik setiap keluhan.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-200/60 shadow-xs">
                <p className="text-xs font-semibold text-slate-800">Resiliensi Belajar</p>
                <p className="text-[11px] text-slate-500">Kegagalan adalah laboratorium pengalaman.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-200/60 shadow-xs">
                <p className="text-xs font-semibold text-slate-800">Integritas & Etika</p>
                <p className="text-[11px] text-slate-500">Kejujuran dan keadilan di atas segalanya.</p>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 text-right italic">
              Pembelajaran Mendalam · Deep Learning
            </div>
          </div>
        </div>
      </div>

      {/* 3 Developmental Objectives */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Tujuan Layanan BK (3 Tahapan Perkembangan)
          </h2>
          <p className="text-xs text-slate-500">
            Rumusan kompetensi komprehensif dari ranah Kognitif, Afektif, hingga Psikomotor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Pengenalan */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-sky-700 tracking-wide uppercase">Ranah Kognitif (C4)</p>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {generalInfo.tujuanLayanan.pengenalan.tahap}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {generalInfo.tujuanLayanan.pengenalan.deskripsi}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Fokus: Analisis Kritis, Identifikasi Ciri, Pemahaman Konsep.
            </div>
          </div>

          {/* 2. Akomodasi */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-700 tracking-wide uppercase">Ranah Afektif (A3)</p>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {generalInfo.tujuanLayanan.akomodasi.tahap}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {generalInfo.tujuanLayanan.akomodasi.deskripsi}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Fokus: Internalisasi Nilai, Apresiasi Resiliensi, Komitmen Etis.
            </div>
          </div>

          {/* 3. Tindakan */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-700 tracking-wide uppercase">Ranah Psikomotor (P3)</p>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {generalInfo.tujuanLayanan.tindakan.tahap}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {generalInfo.tujuanLayanan.tindakan.deskripsi}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Fokus: Perancangan Solusi, Bermain Peran, Komunikasi Asertif.
            </div>
          </div>
        </div>
      </div>

      {/* Experiential Learning Cycle Section */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
            Pedagogi Layanan Bimbingan Klasikal
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Alur Belajar Berbasis Siklus Experiential Learning (David Kolb)
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl mt-1">
            Peserta didik tidak sekadar mendengarkan ceramah teori, melainkan mengalami langsung, berefleksi, merumuskan pemahaman, dan melakukan aksi nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
            <div className="text-amber-400 font-mono text-xs font-semibold">Tahap 01</div>
            <h4 className="text-sm font-bold text-white">Pengalaman Konkret</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mengisi asesmen awal 18 butir sikap dan mengamati studi kasus komik perbandingan Deni vs Rania.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
            <div className="text-amber-400 font-mono text-xs font-semibold">Tahap 02</div>
            <h4 className="text-sm font-bold text-white">Observasi Reflektif</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Menganalisis hasil skor pribadi, mengisi jurnal refleksi diri 4 pertanyaan, dan mendiskusikan pemantik.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
            <div className="text-amber-400 font-mono text-xs font-semibold">Tahap 03</div>
            <h4 className="text-sm font-bold text-white">Konseptualisasi Abstrak</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mempelajari 8 karakter wirausaha, 4 pilar mindset, urgensi etika bisnis, dan pesan 4 figur inspiratif.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
            <div className="text-amber-400 font-mono text-xs font-semibold">Tahap 04</div>
            <h4 className="text-sm font-bold text-white">Aksi Nyata & Simulasi</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mengisi Lembar Peluang Usaha dan mempraktikkan sosiodrama Pasar Mini & Jasa Kreatif bersama rubrik evaluasi.
            </p>
          </div>
        </div>
      </div>

      {/* Penguatan Karakter & Kompetensi (Deep Learning) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold mb-1">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Pendekatan Pembelajaran Mendalam (Deep Learning 6C)</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Penguatan Karakter & Kompetensi (Deep Learning)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Integrasi 6 dimensi kompetensi abad 21 untuk membina wirausahawan muda yang tangguh, inovatif, dan beretika.
            </p>
          </div>
          <div className="text-xs text-slate-400 hidden sm:block">
            Klik kartu untuk menandai fokus kompetensi
          </div>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deepLearningPillars.map((pillar) => {
            const isSelected = selectedPillarId === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillarId(isSelected ? null : pillar.id)}
                className={`border rounded-xl p-5 cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50/70 border-amber-500 ring-2 ring-amber-200/80 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-amber-600 text-white'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{pillar.number}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-slate-500 truncate max-w-[210px]">
                    Fokus: {pillar.focusArea}
                  </span>
                  {isSelected && (
                    <span className="text-amber-700 font-semibold flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Aktif</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
