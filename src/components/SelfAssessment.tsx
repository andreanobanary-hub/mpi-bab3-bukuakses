import React, { useState, useMemo } from 'react';
import { assessmentItems, assessmentCategories } from '../data/moduleData';
import { DimensionType, ReflectionJournal } from '../types';
import { CheckCircle2, RotateCcw, Sparkles, BookOpen, Download, Copy, Check } from 'lucide-react';

interface SelfAssessmentProps {
  onProceedToComic: () => void;
}

export const SelfAssessment: React.FC<SelfAssessmentProps> = ({ onProceedToComic }) => {
  // Assessment answers: id -> score (1, 2, or 3). Default to 2 for initial interactive state
  const [answers, setAnswers] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('bk_assessment_answers');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    // Default answers: all 2 (Kadang-kadang) so user immediately sees live interactive results
    const initial: Record<number, number> = {};
    assessmentItems.forEach(item => {
      initial[item.id] = 2;
    });
    return initial;
  });

  const [activeDimensionFilter, setActiveDimensionFilter] = useState<'all' | DimensionType>('all');

  // Reflection Journal state
  const [reflection, setReflection] = useState<ReflectionJournal>(() => {
    const saved = localStorage.getItem('bk_reflection_journal');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      strengthDimension: '',
      biggestHesitation: '',
      smallActionHabit: '',
      ethicalCommitment: ''
    };
  });

  const [copySuccess, setCopySuccess] = useState(false);

  const handleScoreChange = (id: number, val: number) => {
    const updated = { ...answers, [id]: val };
    setAnswers(updated);
    localStorage.setItem('bk_assessment_answers', JSON.stringify(updated));
  };

  const handleReset = () => {
    const initial: Record<number, number> = {};
    assessmentItems.forEach(item => {
      initial[item.id] = 2;
    });
    setAnswers(initial);
    localStorage.setItem('bk_assessment_answers', JSON.stringify(initial));
  };

  const handleReflectionChange = (field: keyof ReflectionJournal, value: string) => {
    const updated = { ...reflection, [field]: value };
    setReflection(updated);
    localStorage.setItem('bk_reflection_journal', JSON.stringify(updated));
  };

  // Calculations
  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, current) => sum + current, 0);
  }, [answers]);

  const maxTotalScore = assessmentItems.length * 3; // 54
  const minTotalScore = assessmentItems.length * 1; // 18

  const resultCategoryKey = useMemo<'rendah' | 'cukup' | 'tinggi'>(() => {
    if (totalScore <= 29) return 'rendah';
    if (totalScore <= 42) return 'cukup';
    return 'tinggi';
  }, [totalScore]);

  const categoryData = assessmentCategories[resultCategoryKey];

  // Dimension breakdowns
  const dimensionStats = useMemo(() => {
    const dimensions: { type: DimensionType; label: string; desc: string }[] = [
      { type: 'courage', label: 'Keberanian Mencoba', desc: 'Inisiatif mengeksplorasi hal baru dan mengambil risiko terukur' },
      { type: 'time', label: 'Manajemen Waktu', desc: 'Disiplin membagi tugas sekolah dan kegiatan produktif' },
      { type: 'teamwork', label: 'Kerja Sama Tim', desc: 'Keterbukaan mendengar saran dan berkolaborasi secara adil' },
      { type: 'resilience', label: 'Pantang Menyerah', desc: 'Daya juang bangkit dari kegagalan tanpa putus asa' },
      { type: 'ethics', label: 'Etika & Integritas', desc: 'Kejujuran kualitas, transparansi keuangan, dan tanggung jawab sosial' },
    ];

    return dimensions.map(dim => {
      const items = assessmentItems.filter(i => i.dimension === dim.type);
      const score = items.reduce((sum, item) => sum + (answers[item.id] || 2), 0);
      const max = items.length * 3;
      const min = items.length * 1;
      const pct = Math.round(((score - min) / (max - min || 1)) * 100);

      return {
        ...dim,
        score,
        max,
        min,
        pct: Math.max(0, Math.min(100, pct)),
        count: items.length
      };
    });
  }, [answers]);

  const filteredItems = useMemo(() => {
    if (activeDimensionFilter === 'all') return assessmentItems;
    return assessmentItems.filter(item => item.dimension === activeDimensionFilter);
  }, [activeDimensionFilter]);

  const copyReflectionToClipboard = () => {
    const text = `=== JURNAL REFLEKSI DIRI BK: JIWA KEWIRAUSAHAAN ===
Skor Asesmen: ${totalScore} / ${maxTotalScore} (${categoryData.title})

1. Dimensi yang menjadi kekuatan terbesarku:
${reflection.strengthDimension || '(Belum diisi)'}

2. Tantangan/keraguan yang paling sering membuatku menunda:
${reflection.biggestHesitation || '(Belum diisi)'}

3. Satu kebiasaan kecil yang ingin kuubah mulai minggu ini:
${reflection.smallActionHabit || '(Belum diisi)'}

4. Komitmen etika pribadiku dalam berkarya/berwirausaha:
${reflection.ethicalCommitment || '(Belum diisi)'}
`;
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  return (
    <div className="space-y-10">
      {/* Introduction Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Tahap 01</span>
            <span aria-hidden="true">·</span>
            <span>Experiential Learning</span>
            <span aria-hidden="true">·</span>
            <span>Instrumen Refleksi Awal</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Asesmen Mandiri Jiwa Kewirausahaan Remaja
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Petunjuk: Tidak ada jawaban benar atau salah dalam asesmen ini. Pilihlah opsi yang paling mencerminkan kebiasaan dan perasaanmu saat ini secara jujur:
            <strong className="text-slate-800"> 1 = Tidak Pernah (TP)</strong>,
            <strong className="text-slate-800"> 2 = Kadang-kadang (KK)</strong>, atau
            <strong className="text-slate-800"> 3 = Sering (SR)</strong>. Hasil asesmen ini berfungsi sebagai kompas belajar, bukan nilai rapot yang menghakimi.
          </p>
        </div>
      </div>

      {/* Main Two-Zone Split: Left (Questions) & Right (Live Results & Counselor Interpretation) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Questions Deck (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Dimension Filter Tabs */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveDimensionFilter('all')}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDimensionFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua Butir (18)
              </button>
              <button
                onClick={() => setActiveDimensionFilter('courage')}
                className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDimensionFilter === 'courage'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Keberanian
              </button>
              <button
                onClick={() => setActiveDimensionFilter('time')}
                className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDimensionFilter === 'time'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Waktu
              </button>
              <button
                onClick={() => setActiveDimensionFilter('teamwork')}
                className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDimensionFilter === 'teamwork'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kerja Sama
              </button>
              <button
                onClick={() => setActiveDimensionFilter('resilience')}
                className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDimensionFilter === 'resilience'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Resiliensi
              </button>
              <button
                onClick={() => setActiveDimensionFilter('ethics')}
                className={`px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDimensionFilter === 'ethics'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Etika
              </button>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors px-2 py-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Jawaban</span>
            </button>
          </div>

          {/* List of Questions */}
          <div className="space-y-3">
            {filteredItems.map(item => {
              const currentScore = answers[item.id] || 2;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs transition-all hover:border-slate-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                        <span>Pernyataan {item.id < 10 ? `0${item.id}` : item.id}</span>
                        <span>·</span>
                        <span className="text-amber-800 font-sans font-medium">{item.dimensionLabel}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* 3-Level Likert Option Buttons */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => handleScoreChange(item.id, 1)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                        currentScore === 1
                          ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-semibold">Tidak Pernah</div>
                      <div className="text-[10px] opacity-80 font-mono">Skor: 1</div>
                    </button>

                    <button
                      onClick={() => handleScoreChange(item.id, 2)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                        currentScore === 2
                          ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-semibold">Kadang-kadang</div>
                      <div className="text-[10px] opacity-80 font-mono">Skor: 2</div>
                    </button>

                    <button
                      onClick={() => handleScoreChange(item.id, 3)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                        currentScore === 3
                          ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-semibold">Sering</div>
                      <div className="text-[10px] opacity-80 font-mono">Skor: 3</div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Score Summary & Counselor Interpretation (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">
          {/* Main Score Board */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hasil Asesmen Anda</p>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {categoryData.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold font-mono tabular-nums text-amber-700">
                  {totalScore}
                </span>
                <span className="text-xs font-mono text-slate-400">/{maxTotalScore}</span>
              </div>
            </div>

            {/* Score Range Indicator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>{categoryData.range}</span>
                <span className="text-slate-700 font-semibold">{categoryData.badge}</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-600 h-full transition-all duration-300"
                  style={{ width: `${((totalScore - minTotalScore) / (maxTotalScore - minTotalScore)) * 100}%` }}
                />
              </div>
            </div>

            {/* Warm Counselor Voice Narration */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Pesan Motivasi Guru BK</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "{categoryData.counselorNarration}"
              </p>
            </div>

            {/* Action Tips */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold text-slate-900">Rekomendasi Aksi Nyata:</p>
              <div className="space-y-2">
                {categoryData.actionTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-amber-700 font-bold shrink-0 mt-0.5">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 Dimensions Breakdown Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Peta 5 Dimensi Sikap Kewirausahaan
            </h4>

            <div className="space-y-3">
              {dimensionStats.map(dim => (
                <div key={dim.type} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-800">{dim.label}</span>
                    <span className="font-mono tabular-nums text-slate-500 text-[11px]">
                      {dim.score} / {dim.max} ({dim.pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-600 h-full transition-all duration-300"
                      style={{ width: `${dim.pct}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">{dim.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guided Self-Reflection Journal Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Reflective Observation</span>
              <span aria-hidden="true">·</span>
              <span>Kolom Refleksi Mandiri Siswa</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Jurnal Refleksi Diri: Menemukan Kompas Pribadiku
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Jawablah 4 pertanyaan panduan berikut untuk mendalami arti skor asesmen bagi langkah nyatamu.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyReflectionToClipboard}
              className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copySuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copySuccess ? 'Tersalin!' : 'Salin Refleksi'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Question 1 */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              1. Dari 5 dimensi sikap di atas, dimensi mana yang menjadi kekuatan terbesarku saat ini? Berikan contohnya!
            </label>
            <textarea
              rows={3}
              value={reflection.strengthDimension}
              onChange={(e) => handleReflectionChange('strengthDimension', e.target.value)}
              placeholder="Contoh: Kekuatan terbesarku ada di kerja sama dan etika. Aku selalu jujur saat menghitung uang kas dan senang membantu teman kelompok..."
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
            />
          </div>

          {/* Question 2 */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              2. Tantangan atau keraguan apa yang paling sering membuatku ragu/menunda untuk mencoba hal baru?
            </label>
            <textarea
              rows={3}
              value={reflection.biggestHesitation}
              onChange={(e) => handleReflectionChange('biggestHesitation', e.target.value)}
              placeholder="Contoh: Aku sering takut ditertawakan jika karya pertamaku jelek atau tidak laku..."
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
            />
          </div>

          {/* Question 3 */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              3. Satu kebiasaan kecil apa yang ingin kuubah mulai minggu ini untuk melatih kemandirian dan manajemen waktu?
            </label>
            <textarea
              rows={3}
              value={reflection.smallActionHabit}
              onChange={(e) => handleReflectionChange('smallActionHabit', e.target.value)}
              placeholder="Contoh: Menyelesaikan tugas sekolah tepat waktu sebelum jam 19.00 agar punya waktu 30 menit melatih hobi desain..."
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
            />
          </div>

          {/* Question 4 */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              4. Apa komitmen etika pribadiku saat nanti menjalankan karya/usaha bersama teman?
            </label>
            <textarea
              rows={3}
              value={reflection.ethicalCommitment}
              onChange={(e) => handleReflectionChange('ethicalCommitment', e.target.value)}
              placeholder="Contoh: Berkomitmen selalu terbuka mencatat penerimaan uang, tidak memakai bahan berbahaya, dan menjaga kebersihan..."
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onProceedToComic}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xl transition-colors shadow-xs flex items-center gap-2"
          >
            <span>Lanjut ke Komik Komparasi</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
