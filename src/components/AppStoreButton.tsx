import React from 'react';
import { Apple, Play } from 'lucide-react';

interface AppStoreButtonProps {
  platform: 'ios' | 'android';
  className?: string;
  outline?: boolean;
}

export function AppStoreButton({ platform, className = '', outline = false }: AppStoreButtonProps) {
  const isIOS = platform === 'ios';
  
  const baseClasses = "relative flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden cursor-pointer hover:opacity-100 opacity-95";

  return (
    <a 
      href={isIOS ? "https://apps.apple.com/app/id6762552423" : "https://play.google.com/store"} 
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
    >
      {isIOS ? (
        <img src="/app_store_badge.png" alt="Download on the App Store" className="h-14 w-auto object-contain" />
      ) : (
        <img src="/google_play_badge.png" alt="Get it on Google Play" className="h-14 w-auto object-contain" />
      )}
    </a>
  );
}
