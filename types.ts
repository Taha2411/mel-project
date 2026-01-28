
import React from 'react';

export interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export interface NavItemProps {
  label: string;
  // Fix: Added React import to define the React namespace for React.ReactNode
  icon: React.ReactNode;
  active?: boolean;
}
