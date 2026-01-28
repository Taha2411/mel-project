
import React, { useState } from 'react';
import MiroToolbar from './components/MiroToolbar';
import CoverSlide from './components/CoverSlide';
import VisionSlide from './components/VisionSlide';
import ArchitectureSlide from './components/ArchitectureSlide';
import ProblemSolutionSlide from './components/ProblemSolutionSlide';
import DecisionPathsSlide from './components/DecisionPathsSlide';
import GHLOverviewSlide from './components/GHLOverviewSlide';
import GHLFeaturesSlide from './components/GHLFeaturesSlide';
import GHLLimitationsSlide from './components/GHLLimitationsSlide';
import GHLVerdictSlide from './components/GHLVerdictSlide';
import GHLCostTimelineSlide from './components/GHLCostTimelineSlide';
import CustomPlatformOverviewSlide from './components/CustomPlatformOverviewSlide';
import HybridArchitectureSlide from './components/HybridArchitectureSlide';
import IntegrationArchitectureSlide from './components/IntegrationArchitectureSlide';
import PathBIntegratedSlide from './components/PathBIntegratedSlide';
import InvestmentRequiredSlide from './components/InvestmentRequiredSlide';

const App: React.FC = () => {
  const [zoom, setZoom] = useState(0.85);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 15;

  const nextSlide = () => setCurrentSlide(prev => Math.min(totalSlides, prev + 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(1, prev - 1));

  const renderSlide = () => {
    switch(currentSlide) {
      case 1: return <CoverSlide />;
      case 2: return <VisionSlide />;
      case 3: return <ArchitectureSlide />;
      case 4: return <ProblemSolutionSlide />;
      case 5: return <DecisionPathsSlide />;
      case 6: return <GHLOverviewSlide />;
      case 7: return <GHLFeaturesSlide />;
      case 8: return <GHLLimitationsSlide />;
      case 9: return <GHLVerdictSlide />;
      case 10: return <GHLCostTimelineSlide />;
      case 11: return <CustomPlatformOverviewSlide />;
      case 12: return <HybridArchitectureSlide />;
      case 13: return <IntegrationArchitectureSlide />;
      case 14: return <PathBIntegratedSlide />;
      case 15: return <InvestmentRequiredSlide />;
      default: return <CoverSlide />;
    }
  };

  return (
    <div className="relative w-screen h-screen miro-grid overflow-hidden bg-[#121212]">
      {/* Miro Top Bar */}
      <div className="fixed top-0 left-0 w-full h-16 px-6 flex items-center justify-between border-b border-white/5 bg-[#121212]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          <h1 className="text-sm font-bold text-white/90">MusicDaily / Strategy / Technical_Arch_2026</h1>
          <span className="px-2 py-0.5 rounded bg-[#FFB800]/20 text-[#FFB800] text-[10px] font-bold uppercase">Public</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img key={i} src={`https://picsum.photos/seed/${i + 20}/32/32`} className="w-8 h-8 rounded-full border-2 border-[#121212]" alt="collaborator" />
            ))}
          </div>
          <button className="bg-[#FFB800] text-black text-sm font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all">Share</button>
        </div>
      </div>

      <MiroToolbar />

      {/* Main Board Canvas */}
      <div 
        className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
        style={{ transform: `scale(${zoom})` }}
      >
        <div className="w-[1200px] h-[750px] transition-all">
          {renderSlide()}
        </div>
      </div>

      {/* Miro Bottom Controls */}
      <div className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#2A2A2A] rounded-xl p-2 border border-white/10 shadow-xl z-50">
        <button 
          onClick={() => setZoom(Math.max(0.3, zoom - 0.1))}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
        </button>
        <span className="text-white/80 font-mono text-sm min-w-[50px] text-center">{Math.round(zoom * 100)}%</span>
        <button 
          onClick={() => setZoom(Math.min(1.5, zoom + 0.1))}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>

      {/* Slide Navigator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#2A2A2A] rounded-2xl p-3 border border-white/10 shadow-2xl z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className={`p-2 transition-colors ${currentSlide === 1 ? 'text-white/10 cursor-not-allowed' : 'text-white/80 hover:text-[#FFB800]'}`}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="px-4 py-1.5 bg-white/5 rounded-lg">
            <span className="text-white font-bold">{currentSlide} <span className="text-white/30 mx-1">/</span> {totalSlides}</span>
        </div>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className={`p-2 transition-colors ${currentSlide === totalSlides ? 'text-white/10 cursor-not-allowed' : 'text-white/80 hover:text-[#FFB800]'}`}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Presentation Mode Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-white/5 text-white/80 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-3 transition-all backdrop-blur-sm shadow-xl">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
           <span className="text-sm font-bold uppercase tracking-wider">Present</span>
        </button>
      </div>
    </div>
  );
};

export default App;
