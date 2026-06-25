import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ResetPassword() {
  const [status, setStatus] = useState<string>("Prüfe Token …");

  useEffect(() => {
    // Keep query and hash params intact for Supabase Client or App Deep Linking
    setTimeout(() => {
      setStatus("Bitte öffne den Link direkt auf deinem Smartphone, um dein Passwort in der PLYRZ App zurückzusetzen.");
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans flex items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto bg-dark-card border border-white/5 p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-primary-neon/10 flex items-center justify-center text-primary-neon mb-2">
           {status === "Prüfe Token …" ? (
             <Loader2 size={32} className="animate-spin" />
           ) : (
             <img src="/logo.png" alt="PLYRZ" className="w-8 h-auto drop-shadow-md" />
           )}
        </div>
        <h1 className="text-2xl font-heading font-bold uppercase tracking-tight text-white mb-2">Passwort zurücksetzen</h1>
        <p className="text-gray-300 leading-relaxed text-lg font-medium">{status}</p>
      </div>
    </div>
  );
}
