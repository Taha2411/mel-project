
import React from 'react';

export const COLORS = {
  primary: '#FFB800', // Gold
  background: '#121212',
  white: '#FFFFFF',
  gray: '#2A2A2A',
};

// Fix: Added color prop to Waveform component to allow custom coloring across different slides
export const Waveform = ({ color = COLORS.primary }: { color?: string }) => (
  <svg className="absolute w-full h-64 opacity-10 bottom-0 pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill={color}
      fillOpacity="1"
      d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,224C672,245,768,235,864,202.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
);

export const VinylIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" fill="rgba(255,255,255,0.05)" />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="8" fill={COLORS.primary} />
  </svg>
);