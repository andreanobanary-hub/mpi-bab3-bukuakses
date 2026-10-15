import React, { useState } from 'react';
import { comicScenarios } from '../data/moduleData';
import { MessageSquare, ArrowRight, UserX, UserCheck, HelpCircle, Check, Sparkles } from 'lucide-react';

interface NarrativeHookProps {
  onProceedToMateri: () => void;
}

export const NarrativeHook: React.FC<NarrativeHookProps> = ({ onProceedToMateri }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario = comicScenarios[selectedScenarioIndex];

  // Notes state for group/student discussion
  const [discussionAnswers, setDiscussionAnswers] = useState<Record<string, string>>({});
  const [savedStatus, setSavedStatus] = useState(false);

  const handleAnswerChange = (idx: number, val: string) => {
    const key = `${currentScenario.id}_q${idx}`;
    setDiscussionAnswers(prev => ({ ...prev, [key]: val }));
  };

  const handleSaveNotes = () => {
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Tahap 02</span>
            <span aria-hidden="true">·</span>
            <span>Narrative Hook & Studi Kasus</span>
            <span aria-hidden="true">·</span>
            <span>Komik Komparasi Remaja</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Dilema Deni vs Rania: Pengamat Pasif vs Penggagas Solutif
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Perhatikan bagaimana dua remaja dengan latar belakang usia yang sama bereaksi saat menghadapi masalah sehari-hari. Apakah masalah membuat kita terjebak dalam keluhan, atau justru membuka jendela ide baru?
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex items-center gap-2 pt-6 overflow-x-auto">
          {comicScenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => setSelectedScenarioIndex(idx)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                selectedScenarioIndex === idx
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>Kasus {idx + 1}</span>
              <span className="hidden sm:inline"> : {sc.title.split(':')[1] || sc.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Comic / Comparison Stage */}
      <div className="space-y-6">
        {/* Situation Banner */}
        <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white rounded-lg border border-slate-200 text-amber-600 shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">Konteks Masalah:</p>
              <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed">
                {currentScenario.situasi}
              </p>
            </div>
          </div>
        </div>

        {/* Dual Split Comic Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deni's Card (Passive/Consumer Mindset) */}
          <div className="bg-white border border-rose-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
                    <UserX className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{currentScenario.karakterDeni.nama}</h4>
                    <p className="text-xs text-rose-600 font-medium">{currentScenario.karakterDeni.tipe}</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tindakan / Sikap Deni:</p>
                <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{currentScenario.karakterDeni.reaksi}"
                </div>
              </div>

              {/* Consequence */}
              <div className="space-y-1 text-xs">
                <p className="font-bold text-slate-500 uppercase tracking-wider">Konsekuensi:</p>
                <p className="text-slate-600 leading-relaxed">
                  {currentScenario.karakterDeni.dampak}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Pola Pikir: Menyalahkan keadaan, bergantung, dan mengeluh tanpa solusi.
            </div>
          </div>

          {/* Rania's Card (Proactive/Entrepreneur Mindset) */}
          <div className="bg-white border border-emerald-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{currentScenario.karakterRania.nama}</h4>
                    <p className="text-xs text-emerald-600 font-medium">{currentScenario.karakterRania.tipe}</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tindakan / Sikap Rania:</p>
                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{currentScenario.karakterRania.reaksi}"
                </div>
              </div>

              {/* Consequence */}
              <div className="space-y-1 text-xs">
                <p className="font-bold text-slate-500 uppercase tracking-wider">Konsekuensi:</p>
                <p className="text-slate-600 leading-relaxed">
                  {currentScenario.karakterRania.dampak}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Pola Pikir: Proaktif, menciptakan nilai (value creation), dan mandiri.
            </div>
          </div>
        </div>

        {/* Counselor Insight Callout */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Kacamata Guru BK (Nilai Kehidupan)</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            {currentScenario.catatanGuruBK}
          </p>
        </div>

        {/* Discussion Prompts & Student Notepad */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-600" />
                <span>Pertanyaan Pemantik Diskusi Kelompok</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Diskusikan bersama rekan sekelompokmu dan tuangkan pandanganmu di bawah ini:
              </p>
            </div>
            <button
              onClick={handleSaveNotes}
              className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {savedStatus ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
              <span>{savedStatus ? 'Tersimpan!' : 'Simpan Respon'}</span>
            </button>
          </div>

          <div className="space-y-4">
            {currentScenario.pertanyaanPemantik.map((pertanyaan, idx) => {
              const key = `${currentScenario.id}_q${idx}`;
              return (
                <div key={idx} className="space-y-2">
                  <label className="text-xs font-semibold text-slate-800 block">
                    {idx + 1}. {pertanyaan}
                  </label>
                  <textarea
                    rows={2}
                    value={discussionAnswers[key] || ''}
                    onChange={(e) => handleAnswerChange(idx, e.target.value)}
                    placeholder="Tuliskan pendapat atau ide kelompokmu di sini..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Forward Action */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onProceedToMateri}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xl transition-colors shadow-xs flex items-center gap-2"
          >
            <span>Lanjut ke Materi Inti & Figur Sukses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
