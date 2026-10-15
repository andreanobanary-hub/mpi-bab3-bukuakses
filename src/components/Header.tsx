import React from 'react';
import { BookOpen, Printer, Sparkles, UserCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isPrintMode: boolean;
  setIsPrintMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isPrintMode,
  setIsPrintMode,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => {
              setIsPrintMode(false);
              setActiveTab('overview');
            }}
            className="text-left font-bold tracking-tight text-slate-900 text-lg hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              BK
            </div>
            <span>Wirausaha Remaja</span>
          </button>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => {
                setIsPrintMode(false);
                setActiveTab('overview');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'overview' && !isPrintMode
                  ? 'border-amber-600 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-600'
              }`}
            >
              Tujuan & Alur
            </button>
            <button
              onClick={() => {
                setIsPrintMode(false);
                setActiveTab('assessment');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'assessment' && !isPrintMode
                  ? 'border-amber-600 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-600'
              }`}
            >
              Asesmen Mandiri
            </button>
            <button
              onClick={() => {
                setIsPrintMode(false);
                setActiveTab('comic');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'comic' && !isPrintMode
                  ? 'border-amber-600 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-600'
              }`}
            >
              Komik Komparasi
            </button>
            <button
              onClick={() => {
                setIsPrintMode(false);
                setActiveTab('materi');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'materi' && !isPrintMode
                  ? 'border-amber-600 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-600'
              }`}
            >
              Materi & Figur
            </button>
            <button
              onClick={() => {
                setIsPrintMode(false);
                setActiveTab('simulation');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                activeTab === 'simulation' && !isPrintMode
                  ? 'border-amber-600 text-slate-900 font-semibold'
                  : 'border-transparent text-slate-600'
              }`}
            >
              Simulasi & Aksi
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPrintMode(!isPrintMode)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 ${
                isPrintMode
                  ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-sm'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
              }`}
            >
              {isPrintMode ? (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mode Modul Interaktif</span>
                </>
              ) : (
                <>
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>RPL BK & Format Cetak</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-slate-100 overflow-x-auto gap-3 text-xs font-medium">
          <button
            onClick={() => {
              setIsPrintMode(false);
              setActiveTab('overview');
            }}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${
              activeTab === 'overview' && !isPrintMode ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Tujuan
          </button>
          <button
            onClick={() => {
              setIsPrintMode(false);
              setActiveTab('assessment');
            }}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${
              activeTab === 'assessment' && !isPrintMode ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Asesmen
          </button>
          <button
            onClick={() => {
              setIsPrintMode(false);
              setActiveTab('comic');
            }}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${
              activeTab === 'comic' && !isPrintMode ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Komik
          </button>
          <button
            onClick={() => {
              setIsPrintMode(false);
              setActiveTab('materi');
            }}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${
              activeTab === 'materi' && !isPrintMode ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Materi
          </button>
          <button
            onClick={() => {
              setIsPrintMode(false);
              setActiveTab('simulation');
            }}
            className={`whitespace-nowrap px-2.5 py-1 rounded ${
              activeTab === 'simulation' && !isPrintMode ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-slate-600'
            }`}
          >
            Simulasi
          </button>
        </div>
      </div>
    </header>
  );
};
