import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ResetPassword() {
  const [status, setStatus] = useState<string>("Prüfe Token …");
  const [isError, setIsError] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleResetCallback = async () => {
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
            setShowForm(true);
            setStatus("");
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
             setShowForm(true);
             setStatus("");
          } else {
             // Let it spin for a bit in case it's doing implicit flow processing automatically
             setTimeout(() => {
                setStatus("Link ungültig oder abgelaufen.");
                setIsError(true);
             }, 3000);
          }
        });
      }
    };

    handleResetCallback();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (password.length < 6) {
      setFormError('Das Passwort muss mindestens 6 Zeichen lang sein.');
      return;
    }

    if (password !== passwordConfirm) {
      setFormError('Die Passwörter stimmen nicht überein.');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setFormError(error.message);
      } else {
        setSuccess(true);
        setShowForm(false);
        setStatus("Dein Passwort wurde gespeichert. Du kannst dich jetzt in der PLYRZ App einloggen.");
      }
    } catch (err: any) {
      setFormError(err.message || 'Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans flex items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto w-full bg-dark-card border border-white/5 p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-primary-neon/10 flex items-center justify-center text-primary-neon mb-2">
           {status === "Prüfe Token …" ? (
             <Loader2 size={32} className="animate-spin" />
           ) : (
             <img src="/logo.png" alt="PLYRZ" className="w-8 h-auto drop-shadow-md" />
           )}
        </div>
        <h1 className="text-2xl font-heading font-bold uppercase tracking-tight text-white mb-2">Passwort zurücksetzen</h1>
        
        {status && !showForm && (
          <p className={`leading-relaxed text-lg font-medium ${isError ? 'text-red-400' : success ? 'text-primary-neon' : 'text-gray-300'}`}>
            {status}
          </p>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
            {formError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
                {formError}
              </div>
            )}
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-400 font-medium">Neues Passwort</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-neon transition-colors"
                placeholder="Mindestens 6 Zeichen"
                required
              />
            </div>
            
            <div className="flex flex-col gap-1.5 mb-2">
              <label className="text-sm text-gray-400 font-medium">Passwort wiederholen</label>
              <input 
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-neon transition-colors"
                placeholder="Passwort wiederholen"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary-neon text-black font-bold uppercase tracking-wide rounded-xl px-6 py-4 flex items-center justify-center hover:bg-[#00e63a] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : 'Passwort speichern'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
