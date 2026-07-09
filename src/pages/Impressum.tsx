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
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-neon mb-4">1. Anbieter / Betreiber</h2>
            <p className="mb-2"><strong>Einzelunternehmen</strong></p>
            <p className="mb-2">Name/Firmenwortlaut: Matthias Jörgler</p>
            <p className="mb-2">
              Adresse: Hauptplatz 10/1/1<br />
              3202 Hofstetten<br />
              Österreich
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-neon mb-4">2. Kontakt</h2>
            <p className="mb-2">
              E-Mail: <a href="mailto:support@plyrz.at" className="text-primary-neon hover:underline">support@plyrz.at</a>
            </p>
            <p className="mb-2">Website: <a href="https://www.plyrz.at" className="text-primary-neon hover:underline">https://www.plyrz.at</a></p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-neon mb-4">3. Unternehmensgegenstand</h2>
            <p className="mb-2">Betrieb einer digitalen Plattform für Amateurfußball</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-neon mb-4">4. UID / Firmenbuch</h2>
            <p className="mb-2">Umsatzsteuer-Identifikationsnummer (UID): keine</p>
            <p className="mb-2">Firmenbuchnummer: keine</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-neon mb-4">5. Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir übernehmen jedoch keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Inhalte.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-neon mb-4">6. Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-neon mb-4">7. Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div className="mb-8 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-xl">
            <p className="text-yellow-400 text-sm m-0">
              <strong>Hinweis:</strong> Dies ist eine Vorab-Version. Eine finale rechtliche Prüfung durch einen Anwalt wird vor dem offiziellen Launch empfohlen.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
