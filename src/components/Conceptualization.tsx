import React, { useState } from 'react';
import {
  eightCharacteristics,
  fourMindsetSteps,
  businessEthicsPillars,
  inspirationalFigures
} from '../data/moduleData';
import {
  Lightbulb,
  ShieldAlert,
  Flame,
  Compass,
  Clock,
  Users,
  Target,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  ChevronDown
} from 'lucide-react';

interface ConceptualizationProps {
  onProceedToSimulation: () => void;
}

export const Conceptualization: React.FC<ConceptualizationProps> = ({ onProceedToSimulation }) => {
  const [selectedFigureId, setSelectedFigureId] = useState(inspirationalFigures[0].id);
  const activeFigure = inspirationalFigures.find(f => f.id === selectedFigureId) || inspirationalFigures[0];

  const [expandedCharId, setExpandedCharId] = useState<number | null>(null);

  const getCharIcon = (name: string) => {
    switch (name) {
      case 'Lightbulb': return <Lightbulb className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Intro Header & Definition */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Tahap 03</span>
            <span aria-hidden="true">·</span>
            <span>Konseptualisasi Materi</span>
            <span aria-hidden="true">·</span>
            <span>Pondasi Nilai & Mindset</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Materi Inti: Membangun Pola Pikir Wirausaha Remaja
          </h2>
        </div>

        {/* Definition Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          <p className="text-xs font-bold text-amber-800 uppercase tracking-wide">
            Definisi Wirausaha bagi Remaja (Fase D / E)
          </p>
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            "Kewirausahaan pada remaja bukanlah semata-mata aktivitas berdagang untuk meraup keuntungan uang saku, melainkan sikap mental aktif, kreatif, dan berani mengambil inisiatif dalam mengidentifikasi kebutuhan di sekitarnya, merumuskan pemecahan masalah dengan penuh tanggung jawab, serta menciptakan nilai tambah (value creation) yang membawa manfaat bagi diri sendiri dan masyarakat."
          </p>
        </div>
      </div>

      {/* 8 Characteristics Grid */}
      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            8 Karakteristik Utama Jiwa Kewirausahaan Remaja
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Klik kartu untuk melihat contoh penerapan nyata dalam kehidupan pelajar sekolah:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {eightCharacteristics.map(item => {
            const isExpanded = expandedCharId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setExpandedCharId(isExpanded ? null : item.id)}
                className={`bg-white border rounded-xl p-5 shadow-xs cursor-pointer transition-all hover:border-amber-400 ${
                  isExpanded ? 'border-amber-500 ring-2 ring-amber-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between pb-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                    {getCharIcon(item.iconName)}
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>

                <h4 className="text-sm font-bold text-slate-900 mt-2">{item.title}</h4>
                <p className="text-xs text-amber-800 font-medium mt-0.5">{item.subtitle}</p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-100 bg-amber-50/50 p-2.5 rounded-lg text-xs text-slate-700 space-y-1">
                    <p className="font-bold text-amber-900 text-[11px] uppercase tracking-wider">Contoh Tindakan Nyata Siswa:</p>
                    <p className="italic text-[11px] leading-relaxed text-slate-600">
                      "{item.contohRemaja}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4 Practical Steps to Cultivate Entrepreneurial Mindset */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Metode Bertahap</p>
          <h3 className="text-xl font-bold tracking-tight text-white mt-1">
            4 Langkah Praktis Menumbuhkan Mindset Wirausaha Remaja
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Langkah sistematis memulai ide karya solutif dari hal yang paling sederhana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fourMindsetSteps.map((step, idx) => (
            <div key={idx} className="bg-slate-800/90 border border-slate-700 p-5 rounded-xl space-y-2">
              <span className="text-amber-400 font-mono text-xs font-semibold">{step.step}</span>
              <h4 className="text-sm font-bold text-white">{step.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Urgency of Business Ethics */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Urgensi Etika Bisnis Remaja: Membangun Kepercayaan Sejati
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Keuntungan finansial bisa habis dalam sekejap, namun reputasi kejujuran akan menjadi modal seumur hidup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessEthicsPillars.map((pillar, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Inspirational Figure Profiles */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Profil Figur Wirausahawan Muda Inspiratif
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Belajar dari ketangguhan dan integritas para pelopor yang mengawali mimpinya sejak usia muda.
          </p>
        </div>

        {/* Figure Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {inspirationalFigures.map(fig => (
            <button
              key={fig.id}
              onClick={() => setSelectedFigureId(fig.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all whitespace-nowrap shrink-0 ${
                selectedFigureId === fig.id
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {fig.name}
            </button>
          ))}
        </div>

        {/* Selected Figure Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold text-amber-800">{activeFigure.venture}</span>
              <h4 className="text-2xl font-bold text-slate-900 mt-0.5">{activeFigure.name}</h4>
              <p className="text-xs text-slate-500">{activeFigure.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Background & Struggle */}
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Awal Mula & Latar Belakang:</p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeFigure.background}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tantangan & Perjuangan Masa Muda:</p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {activeFigure.perjuanganRemaja}
                </p>
              </div>
            </div>

            {/* Right: Key Success Factors & Moral Quote */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kunci Sikap Sukses:</p>
                <div className="space-y-1.5">
                  {activeFigure.kunciSukses.map((kunci, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      <span>{kunci}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moral takeaway */}
              <div className="bg-amber-50/70 border border-amber-200/80 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pesan Moral untuk Remaja:</span>
                </div>
                <p className="text-xs text-amber-950 italic leading-relaxed">
                  "{activeFigure.pesanMoral}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next step CTA */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onProceedToSimulation}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xl transition-colors shadow-xs flex items-center gap-2"
          >
            <span>Lanjut ke Aksi Nyata & Simulasi Sosiodrama</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
