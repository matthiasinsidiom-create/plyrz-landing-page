import React from 'react';
import { Apple, Play } from 'lucide-react';

interface AppStoreButtonProps {
  platform: 'ios' | 'android';
  className?: string;
  outline?: boolean;
}

export function AppStoreButton({ platform, className = '', outline = false }: AppStoreButtonProps) {
  const isIOS = platform === 'ios';
  
  const baseClasses = `relative flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden opacity-90 ${isIOS ? 'cursor-pointer' : 'cursor-default'}`;
  const colorClasses = outline 
    ? "border-2 border-white/20 hover:border-primary-neon text-white hover:bg-white/5" 
    : "bg-white text-black hover:bg-gray-200";

  return (
    <a 
      href={isIOS ? "https://apps.apple.com/app/id6762552423" : "#"} 
      onClick={(e) => { if (!isIOS) e.preventDefault(); }} 
      target={isIOS ? "_blank" : undefined}
      rel={isIOS ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${colorClasses} ${className}`}
    >
      {/* Coming Soon Overlay */}
      {!isIOS && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm z-10">
          <span className="text-primary-neon font-bold text-sm tracking-widest uppercase">Bald verfügbar</span>
        </div>
      )}
      
      {isIOS ? <Apple size={28} /> : <Play size={28} />}
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-medium leading-none uppercase mix-blend-difference">
          {isIOS ? 'Laden im' : 'Jetzt bei'}
        </span>
        <span className="text-xl font-bold leading-none mt-1 whitespace-nowrap mix-blend-difference">
          {isIOS ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </a>
  );
}
