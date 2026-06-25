import React from 'react';

interface Stats {
  TEM: number;
  SCH: number;
  PAS: number;
  DRI: number;
  DEF: number;
  PHY: number;
}

interface PlayerCardProps {
  name: string;
  rating: number;
  position: string;
  stats: Stats;
  theme?: 'gold' | 'silver' | 'bronze' | 'dark';
  className?: string;
  imagePlaceholder?: boolean;
}

export function PlayerCard({ 
  className = ''
}: { 
  name?: string; 
  rating?: number; 
  position?: string; 
  stats?: any; 
  theme?: string; 
  className?: string; 
  imagePlaceholder?: boolean 
}) {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <img src="/card.png" alt="Player Card" className="w-full h-auto drop-shadow-2xl" />
    </div>
  );
}

function StatRow({ label, value, activeTheme }: { label: string, value: number, activeTheme: any }) {
  return (
    <div className="flex items-center gap-2 font-heading">
      <span className={`text-lg font-bold w-6 text-right ${activeTheme.textMain}`}>{value}</span>
      <span className="text-sm font-medium text-white/80">{label}</span>
    </div>
  );
}
