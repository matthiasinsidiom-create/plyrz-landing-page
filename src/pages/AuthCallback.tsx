import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AuthCallback() {
  const [status, setStatus] = useState<string>("E-Mail wird bestätigt …");
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const handleAuthCallback = async () => {
      const url = new URL(window.location.href);
      const code = url.searchParams.get('code');
      const error = url.searchParams.get('error');
      const errorDescription = url.searchParams.get('error_description');

      if (error) {
        setIsError(true);
        setStatus(`Ein Fehler ist aufgetreten: ${errorDescription || error}`);
        return;
      }

      if (code) {
        try {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          
          if (exchangeError) {
            setIsError(true);
            setStatus(`Ein Fehler ist aufgetreten: ${exchangeError.message}`);
          } else {
            setIsError(false);
            setStatus("E-Mail bestätigt. Du kannst jetzt die PLYRZ App öffnen und dich einloggen.");
          }
        } catch (err: any) {
          setIsError(true);
          setStatus(`Ein Fehler ist aufgetreten: ${err.message}`);
        }
      } else {
        // Fallback or hash based
        supabase.auth.getSession().then(({ data: { session } }) => {
          if (session) {
             setIsError(false);
             setStatus("E-Mail bestätigt. Du kannst jetzt die PLYRZ App öffnen und dich einloggen.");
          } else {
             // Let it spin for a bit in case it's doing implicit flow processing automatically
             setTimeout(() => {
                setStatus("Falls du nicht automatisch weitergeleitet wirst, öffne die PLYRZ App und melde dich an.");
             }, 3000);
          }
        });
      }
    };

    handleAuthCallback();
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
        <p className={`leading-relaxed text-lg font-medium ${isError ? 'text-red-400' : 'text-gray-300'}`}>{status}</p>
      </div>
    </div>
  );
}
