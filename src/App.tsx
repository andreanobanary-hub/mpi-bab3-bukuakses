import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewHero } from './components/OverviewHero';
import { SelfAssessment } from './components/SelfAssessment';
import { NarrativeHook } from './components/NarrativeHook';
import { Conceptualization } from './components/Conceptualization';
import { OpportunityCanvas } from './components/OpportunityCanvas';
import { SociodramaGuide } from './components/SociodramaGuide';
import { PrintableRplModule } from './components/PrintableRplModule';
import { BookOpen, Sparkles, HeartHandshake, Compass } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);
  const [simulationSubTab, setSimulationSubTab] = useState<'canvas' | 'sociodrama'>('canvas');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isPrintMode={isPrintMode}
        setIsPrintMode={setIsPrintMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {isPrintMode ? (
          <PrintableRplModule onBackToApp={() => setIsPrintMode(false)} />
        ) : (
          <>
            {activeTab === 'overview' && (
              <OverviewHero onStartAssessment={() => setActiveTab('assessment')} />
            )}

            {activeTab === 'assessment' && (
              <SelfAssessment onProceedToComic={() => setActiveTab('comic')} />
            )}

            {activeTab === 'comic' && (
              <NarrativeHook onProceedToMateri={() => setActiveTab('materi')} />
            )}

            {activeTab === 'materi' && (
              <Conceptualization onProceedToSimulation={() => setActiveTab('simulation')} />
            )}

            {activeTab === 'simulation' && (
              <div className="space-y-8">
                {/* Simulation Sub-Tab Navigator */}
                <div className="bg-white border border-slate-200 rounded-xl p-2 flex items-center gap-2 max-w-md shadow-xs">
                  <button
                    onClick={() => setSimulationSubTab('canvas')}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors text-center ${
                      simulationSubTab === 'canvas'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Aktivitas 1: Harta Karun Peluang
                  </button>
                  <button
                    onClick={() => setSimulationSubTab('sociodrama')}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors text-center ${
                      simulationSubTab === 'sociodrama'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Aktivitas 2: Sosiodrama Pasar Mini
                  </button>
                </div>

                {simulationSubTab === 'canvas' ? (
                  <OpportunityCanvas />
                ) : (
                  <SociodramaGuide />
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer Area (hidden in print) */}
      <footer className="no-print bg-white border-t border-slate-200 py-8 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Modul Bimbingan dan Konseling (BK)</span>
            <span aria-hidden="true">·</span>
            <span>Kurikulum Merdeka (Fase D/E)</span>
            <span aria-hidden="true">·</span>
            <span>Experiential Learning</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setIsPrintMode(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-amber-700 transition-colors"
            >
              RPL Lengkap & Format Cetak
            </button>
            <span aria-hidden="true">·</span>
            <span>Pendidikan Kewirausahaan Beretika</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
