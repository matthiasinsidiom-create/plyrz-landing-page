import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-neon hover:text-white transition-colors mb-8 font-bold">
          <ArrowLeft size={20} />
          ZURÜCK ZUR STARTSEITE
        </Link>
        <h1 className="text-4xl font-heading font-bold mb-6 text-white uppercase tracking-tight">Datenschutz</h1>
        <div className="prose prose-invert prose-p:text-gray-300">
          <p className="mb-4">
            Dies ist ein Platzhalter für die Datenschutzerklärung. Der finale Rechtstext wird hier zu einem späteren Zeitpunkt ergänzt.
          </p>
          <p className="mb-4">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </div>
      </div>
    </div>
  );
}
