import React, { useState } from 'react';
import {
  rolePlayCharacters,
  rolePlayDialogues,
  sociodramaRubric
} from '../data/moduleData';
import { Play, RotateCcw, Check, UserCheck, MessageSquare, Award, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export const SociodramaGuide: React.FC = () => {
  const [activeRoleFilter, setActiveRoleFilter] = useState<'all' | 'seller' | 'buyer' | 'counselor'>('all');
  const [selectedScene, setSelectedScene] = useState<number>(0); // 0 = all, 1, 2, 3

  // Rubric scoring state: criterionId -> score (1, 2, 3, or 4)
  const [rubricScores, setRubricScores] = useState<Record<string, number>>({
    communication: 3,
    resilience: 3,
    teamwork: 4,
    ethics: 4,
  });

  const handleRubricChange = (critId: string, score: number) => {
    setRubricScores(prev => ({ ...prev, [critId]: score }));
  };

  const totalRubricScore = Object.values(rubricScores).reduce((sum, curr) => sum + curr, 0);

  const filteredDialogues = rolePlayDialogues.filter(item => {
    const matchScene = selectedScene === 0 || item.scene === selectedScene;
    const matchRole = activeRoleFilter === 'all' || item.role === activeRoleFilter;
    return matchScene && matchRole;
  });

  return (
    <div className="space-y-10">
      {/* Introduction Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Aktivitas 02</span>
            <span aria-hidden="true">·</span>
            <span>Simulasi Bermain Peran (Role-Play)</span>
            <span aria-hidden="true">·</span>
            <span>Latihan Komunikasi Asertif & Etika</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            Sosiodrama: "Stan Jasa Kreatif & Produk Sehat di Pasar Mini Sekolah"
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Praktikkan interaksi bisnis nyata di hadapan kelas: bagaimana menyapa calon pembeli, menjelaskan nilai produk secara jujur, menghadapi penawaran harga dan komplain secara berkepala dingin, serta menjaga kepuasan bersama.
          </p>
        </div>
      </div>

      {/* Role Briefing Cards */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-slate-900 tracking-tight">
          Deskripsi Peran & Karakter Sosiodrama (3 Tim Peran)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rolePlayCharacters.map((char) => (
            <div
              key={char.roleId}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-amber-700">{char.actorTitle}</span>
                  <span className="text-xs font-mono text-slate-400">{char.roleName}</span>
                </div>
                <div className="text-xs text-slate-700">
                  <span className="font-semibold text-slate-900">Karakteristik: </span>
                  {char.personality}
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Misi Utama: </span>
                  {char.keyObjective}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Kunci Komunikasi:</p>
                <div className="space-y-1">
                  {char.tipsKomunikasi.map((tip, i) => (
                    <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Script & Dialogue Rehearsal Console */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-600" />
              <span>Naskah Sosiodrama 3 Babak Lengkap</span>
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Gunakan naskah ini untuk latihan dialog di kelompok sebelum tampil di panggung kelas.
            </p>
          </div>

          {/* Filter Scene & Role */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            {/* Scene Selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setSelectedScene(0)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  selectedScene === 0 ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua Babak
              </button>
              <button
                onClick={() => setSelectedScene(1)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  selectedScene === 1 ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Babak 1
              </button>
              <button
                onClick={() => setSelectedScene(2)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  selectedScene === 2 ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Babak 2
              </button>
              <button
                onClick={() => setSelectedScene(3)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  selectedScene === 3 ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Babak 3
              </button>
            </div>

            {/* Role Filter */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveRoleFilter('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeRoleFilter === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua Peran
              </button>
              <button
                onClick={() => setActiveRoleFilter('seller')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  activeRoleFilter === 'seller' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Penjual
              </button>
              <button
                onClick={() => setActiveRoleFilter('buyer')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  activeRoleFilter === 'buyer' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pembeli
              </button>
              <button
                onClick={() => setActiveRoleFilter('counselor')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  activeRoleFilter === 'counselor' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Guru BK
              </button>
            </div>
          </div>
        </div>

        {/* Dialogue Stream */}
        <div className="space-y-4">
          {filteredDialogues.map((item) => {
            const isSeller = item.role === 'seller';
            const isBuyer = item.role === 'buyer';
            const isCounselor = item.role === 'counselor';

            return (
              <div
                key={item.id}
                className={`border rounded-xl p-5 space-y-2 transition-all ${
                  isSeller
                    ? 'bg-amber-50/30 border-amber-200/70'
                    : isBuyer
                    ? 'bg-sky-50/30 border-sky-200/70'
                    : 'bg-emerald-50/30 border-emerald-200/70'
                }`}
              >
                {/* Header line */}
                <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{item.speaker}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-[11px] text-slate-500 font-medium">{item.sceneTitle}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Giliran {item.id}</span>
                </div>

                {/* Spoken Line */}
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  "{item.line}"
                </p>

                {/* Stage directions */}
                {item.stageNote && (
                  <p className="text-xs text-slate-500 italic flex items-center gap-1.5 pt-1">
                    <span className="font-sans font-semibold text-slate-600">[Petunjuk Panggung]:</span>
                    <span>{item.stageNote}</span>
                  </p>
                )}

                {/* Counselor Insight Callout */}
                {item.counselorInsight && (
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-start gap-2 text-xs text-amber-900">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="italic">{item.counselorInsight}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Rubrik Evaluasi Sosiodrama Interaktif */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Rubrik Asesmen Teman Sebaya (Peer Assessment)</span>
              <span aria-hidden="true">·</span>
              <span>Skala 1 - 4</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mt-1">
              Rubrik Evaluasi Penampilan Sosiodrama
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Guru atau kelompok pengamat memberikan skor objektif berdasarkan 4 indikator performa:
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">Total Skor Rubrik</span>
            <div className="flex items-baseline justify-end gap-1">
              <span className="text-2xl font-bold font-mono tabular-nums text-amber-700">{totalRubricScore}</span>
              <span className="text-xs font-mono text-slate-400">/ 16</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {sociodramaRubric.map((criterion) => {
            const currentScore = rubricScores[criterion.id] || 3;
            return (
              <div key={criterion.id} className="space-y-3 pb-5 border-b border-slate-100 last:border-b-0">
                <div>
                  <h5 className="text-sm font-bold text-slate-900">{criterion.title}</h5>
                  <p className="text-xs text-slate-500 mt-0.5">{criterion.description}</p>
                </div>

                {/* 4 Score Level Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {criterion.levels.map((lvl) => {
                    const isSelected = currentScore === lvl.score;
                    return (
                      <button
                        key={lvl.score}
                        onClick={() => handleRubricChange(criterion.id, lvl.score)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-100 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between pb-1">
                          <span className={`text-xs font-bold ${isSelected ? 'text-amber-800' : 'text-slate-800'}`}>
                            {lvl.label}
                          </span>
                          <span className={`text-xs font-mono font-bold ${isSelected ? 'text-amber-700' : 'text-slate-400'}`}>
                            Skor {lvl.score}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {lvl.descriptor}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
