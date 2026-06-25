import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function AuthCallback() {
  const [status, setStatus] = useState<string>("E-Mail wird bestätigt …");

  // Keep query and hash params intact for Supabase Client or App Deep Linking
  useEffect(() => {
    // In a real Supabase Auth setup, you might exchange the token here on the web,
    // but since the actual app handles it, we just display the message.
    // Deep linking on iOS/Android should intercept the URL before the web page loads,
    // but if the user opens it in a browser, they see this fallback page.
    setTimeout(() => {
      setStatus("Falls du nicht automatisch weitergeleitet wirst, öffne die PLYRZ App und melde dich an.");
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans flex items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto bg-dark-card border border-white/5 p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-primary-neon/10 flex items-center justify-center text-primary-neon mb-2">
          {status === "E-Mail wird bestätigt …" ? (
            <Loader2 size={32} className="animate-spin" />
          ) : (
            <img src="/logo.png" alt="PLYRZ" className="w-8 h-auto drop-shadow-md" />
          )}
        </div>
        <h1 className="text-2xl font-heading font-bold uppercase tracking-tight text-white mb-2">Supabase Auth</h1>
        <p className="text-gray-300 leading-relaxed text-lg font-medium">{status}</p>
      </div>
    </div>
  );
}
