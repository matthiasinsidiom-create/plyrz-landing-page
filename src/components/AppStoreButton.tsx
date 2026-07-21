import React from 'react';

interface AppStoreButtonProps {
  platform: 'ios' | 'android';
  className?: string;
  outline?: boolean;
}

export function AppStoreButton({ platform, className = '', outline = false }: AppStoreButtonProps) {
  const isIOS = platform === 'ios';
  
  const baseClasses = "inline-block transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer hover:opacity-100 opacity-95";

  return (
    <a 
      href={isIOS ? "https://apps.apple.com/app/id6762552423" : "https://play.google.com/store/apps/details?id=at.plyrz.app"} 
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
    >
      {isIOS ? (
        <img src="/ios_btn.svg" alt="Download on the App Store" className="h-[46px] w-auto" />
      ) : (
        <img src="/android_btn.svg" alt="Get it on Google Play" className="h-[46px] w-auto" />
      )}
    </a>
  );
}
