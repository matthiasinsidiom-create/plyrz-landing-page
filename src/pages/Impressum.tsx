import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-neon hover:text-white transition-colors mb-8 font-bold">
          <ArrowLeft size={20} />
          ZURÜCK ZUR STARTSEITE
        </Link>
        <h1 className="text-4xl font-heading font-bold mb-6 text-white uppercase tracking-tight">Impressum</h1>
        <div className="prose prose-invert prose-p:text-gray-300">
          <p className="mb-4">
            Dies ist ein Platzhalter für das Impressum. Der finale Rechtstext wird hier zu einem späteren Zeitpunkt ergänzt.
          </p>
          <div className="mb-6 mb-4">
            <strong className="block text-primary-neon mb-2">Angaben gemäß § 5 TMG:</strong>
            <p>
              Matthias Jörgler<br />
              (Adresse folgt)<br />
              (PLZ Ort folgt)<br />
            </p>
          </div>
          <div className="mb-6">
            <strong className="block text-primary-neon mb-2">Kontakt:</strong>
            <p>
              E-Mail: <a href="mailto:support@plyrz.at" className="text-primary-neon hover:underline">support@plyrz.at</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
