import React, { useState } from 'react';
import { canvasPresets } from '../data/moduleData';
import { OpportunityCanvasData } from '../types';
import { Sparkles, Printer, RotateCcw, Check, Users, Target, Lightbulb, ShieldCheck, Coins, HeartHandshake } from 'lucide-react';

export const OpportunityCanvas: React.FC = () => {
  const [formData, setFormData] = useState<OpportunityCanvasData>(() => {
    const saved = localStorage.getItem('bk_opportunity_canvas');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return canvasPresets[0]; // load default sample preset
  });

  const [savedStatus, setSavedStatus] = useState(false);

  const handleFieldChange = (field: keyof OpportunityCanvasData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    localStorage.setItem('bk_opportunity_canvas', JSON.stringify(updated));
  };

  const handleLoadPreset = (preset: OpportunityCanvasData) => {
    setFormData(preset);
    localStorage.setItem('bk_opportunity_canvas', JSON.stringify(preset));
  };

  const handleReset = () => {
    const blank: OpportunityCanvasData = {
      teamName: '',
      businessName: '',
      problemStatement: '',
      targetUser: '',
      proposedSolution: '',
      uniqueValue: '',
      initialResources: '',
      marketingEthics: ''
    };
    setFormData(blank);
    localStorage.setItem('bk_opportunity_canvas', JSON.stringify(blank));
  };

  const handleSave = () => {
    localStorage.setItem('bk_opportunity_canvas', JSON.stringify(formData));
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Aktivitas 01</span>
              <span aria-hidden="true">·</span>
              <span>LKPD Diskusi Kelompok</span>
              <span aria-hidden="true">·</span>
              <span>Experiential Learning</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Lembar Kerja "Mencari Harta Karun Peluang"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Analisis masalah nyata di lingkungan sekolah/sekitarmu dan rancang solusi kreatif bernilai guna dan beretika.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleSave}
              className="px-3.5 py-2 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              {savedStatus ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
              <span>{savedStatus ? 'Tersimpan!' : 'Simpan LKPD'}</span>
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Kosongkan</span>
            </button>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Muat Contoh Inspirasi:</span>
          </span>
          {canvasPresets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleLoadPreset(preset)}
              className="px-2.5 py-1 text-xs bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-md border border-amber-200/60 transition-colors"
            >
              {preset.businessName.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Team Meta Inputs */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Nama Kelompok / Anggota:</span>
          </label>
          <input
            type="text"
            value={formData.teamName}
            onChange={(e) => handleFieldChange('teamName', e.target.value)}
            placeholder="Contoh: Kelompok 3 (Deni, Rania, Bima, Cinta)"
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/50"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>Nama Gagasan Usaha / Proyek:</span>
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleFieldChange('businessName', e.target.value)}
            placeholder="Contoh: SmartNotes (Rangkuman Rumus Mini Kilat)"
            className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/50"
          />
        </div>
      </div>

      {/* 6 Structured Canvas Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Problem Hunting */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-1 border-b border-slate-100">
              <span className="w-5 h-5 rounded bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-mono">1</span>
              <span>1. Masalah di Sekitar (Problem)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Kesulitan, keluhan, atau kerepotan nyata apa yang sering dialami teman atau guru?
            </p>
          </div>
          <textarea
            rows={4}
            value={formData.problemStatement}
            onChange={(e) => handleFieldChange('problemStatement', e.target.value)}
            placeholder="Tuliskan masalah nyata yang diamati..."
            className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/40"
          />
        </div>

        {/* Card 2: Target User */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-1 border-b border-slate-100">
              <span className="w-5 h-5 rounded bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-mono">2</span>
              <span>2. Siapa yang Membutuhkan? (User)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Siapa kelompok orang yang paling membutuhkan solusi ini? (Siswa kelas berapa, dll)
            </p>
          </div>
          <textarea
            rows={4}
            value={formData.targetUser}
            onChange={(e) => handleFieldChange('targetUser', e.target.value)}
            placeholder="Tuliskan sasaran calon pengguna/pembeli..."
            className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/40"
          />
        </div>

        {/* Card 3: Proposed Solution */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-1 border-b border-slate-100">
              <span className="w-5 h-5 rounded bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-mono">3</span>
              <span>3. Solusi Produk / Jasa Kreatif</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Karya, produk, atau layanan apa yang ingin kamu tawarkan untuk menjawab masalah itu?
            </p>
          </div>
          <textarea
            rows={4}
            value={formData.proposedSolution}
            onChange={(e) => handleFieldChange('proposedSolution', e.target.value)}
            placeholder="Tuliskan bentuk solusi kreatif..."
            className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/40"
          />
        </div>

        {/* Card 4: Unique Value */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-1 border-b border-slate-100">
              <span className="w-5 h-5 rounded bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-mono">4</span>
              <span>4. Nilai Tambah & Keunikan (Value)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Apa yang membuat karyamu berbeda dan lebih memikat dibanding barang pasaran?
            </p>
          </div>
          <textarea
            rows={4}
            value={formData.uniqueValue}
            onChange={(e) => handleFieldChange('uniqueValue', e.target.value)}
            placeholder="Tuliskan keunggulan produk/jasamu..."
            className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/40"
          />
        </div>

        {/* Card 5: Initial Resources & Minimal Budget */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-1 border-b border-slate-100">
              <span className="w-5 h-5 rounded bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-mono">5</span>
              <span>5. Modal Awal & Sumber Daya</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Bahan apa yang sudah dimiliki? Berapa estimasi biaya awal yang sangat minim?
            </p>
          </div>
          <textarea
            rows={4}
            value={formData.initialResources}
            onChange={(e) => handleFieldChange('initialResources', e.target.value)}
            placeholder="Tuliskan barang yang sudah ada dan modal awal sederhana..."
            className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/40"
          />
        </div>

        {/* Card 6: Ethical Marketing & Responsibility */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 pb-1 border-b border-slate-100">
              <span className="w-5 h-5 rounded bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-mono">6</span>
              <span>6. Etika Pemasaran & Tanggung Jawab</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Bagaimana caramu menjaga kejujuran informasi dan kebersihan lingkungan?
            </p>
          </div>
          <textarea
            rows={4}
            value={formData.marketingEthics}
            onChange={(e) => handleFieldChange('marketingEthics', e.target.value)}
            placeholder="Tuliskan komitmen etika dan transparansi..."
            className="w-full text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50/40"
          />
        </div>
      </div>
    </div>
  );
};
