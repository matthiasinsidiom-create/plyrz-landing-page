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
        <h1 className="text-4xl font-heading font-bold mb-6 text-white uppercase tracking-tight">Datenschutzerklärung</h1>
        <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-primary-neon prose-a:text-primary-neon hover:prose-a:underline">
          
          <p className="mb-6 font-bold">Stand: Juni 2026</p>

          <p className="mb-8">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. 
            PLYRZ ist eine digitale Plattform/App für Amateurfußball, auf der Nutzer einen Lieblingsverein wählen, Spielerprofile ansehen oder beanspruchen, Matchdaten verfolgen und nach Spielen voten können.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Verantwortlicher</h2>
          <p className="mb-4">
            Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
            Matthias Jörgler<br />
            Hauptplatz 10/1/1<br />
            3202 Hofstetten<br />
            Österreich<br />
            E-Mail: <a href="mailto:support@plyrz.at">support@plyrz.at</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Allgemeines zur Datenverarbeitung</h2>
          <p className="mb-4">
            Wir verarbeiten personenbezogene Daten der Nutzer nur, soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer Inhalte und Leistungen erforderlich ist. 
            Wir verwenden keine nicht notwendigen Marketing-Cookies und setzen keine Web-Analytics- oder Tracking-Tools zur Analyse des Nutzerverhaltens ein.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Welche Daten wir verarbeiten</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Registrierungsdaten:</strong> E-Mail-Adresse und Passwort (verschlüsselt).</li>
            <li><strong>Profildaten:</strong> Name bzw. Anzeigename, Nutzerrolle (Spieler, Fan, Admin), gewählter Lieblingsverein, verknüpftes Spielerprofil / geclaimte Spielerkarte.</li>
            <li><strong>Aktivitätsdaten:</strong> Von Ihnen abgegebene Votes, erstellte Ratings sowie Match- und Lineup-Daten im Rahmen des Spielbetriebs.</li>
            <li><strong>Push-Benachrichtigungen:</strong> Push-Token (Geräte-ID), um Ihnen Mitteilungen an Ihr Endgerät senden zu können.</li>
            <li><strong>Technische Daten:</strong> IP-Adresse, Gerätedaten, Betriebssystem und Logdaten (bei Nutzung der App oder Website).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Zwecke der Verarbeitung</h2>
          <p className="mb-4">Wir verarbeiten Ihre Daten zu folgenden Zwecken:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li>Bereitstellung, Funktion und Sicherheit der PLYRZ App und Website</li>
            <li>Nutzerregistrierung, Login-Verwaltung und Profilerstellung</li>
            <li>E-Mail-Bestätigung und Versand von Passwort-Reset-Links</li>
            <li>Zuweisung und Verwaltung von Spielerprofilen (Claiming) und Lieblingsvereinen</li>
            <li>Matchanzeige, Abwicklung von Votings, Berechnung von Ratings, MVPs und Top-Performern</li>
            <li>Zustellung relevanter Push-Benachrichtigungen (z. B. Matchbeginn, Voting-Start)</li>
            <li>Sicherheit und Fehleranalyse zur Aufrechterhaltung des Systembetriebs</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Rechtsgrundlagen (Art. 6 DSGVO)</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Vertragserfüllung und vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO):</strong> Für die Registrierung, Nutzung der App-Funktionen, Votings und Profilverwaltung.</li>
            <li><strong>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO):</strong> Für den sicheren und fehlerfreien Betrieb der Plattform, Abwehr von Missbrauch sowie Weiterentwicklung der App.</li>
            <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Für den Erhalt von Push-Benachrichtigungen. Diese Einwilligung kann jederzeit in den Geräteeinstellungen widerrufen werden.</li>
            <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</strong> Sofern gesetzliche Aufbewahrungsfristen bestehen.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Eingesetzte Dienste und Auftragsverarbeiter</h2>
          <p className="mb-4">Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zur Bereitstellung unserer Dienste erforderlich. Wir nutzen folgende Dienstleister (Auftragsverarbeiter), mit denen entsprechende Datenschutzvereinbarungen bestehen:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Supabase:</strong> Datenbank, Nutzerauthentifizierung, Verwaltung von App-Daten und Speicherung von Profil-/Matchdaten.</li>
            <li><strong>Brevo:</strong> Versand von systemrelevanten Transaktions-E-Mails (z. B. Bestätigungs-Mails, Passwort-Reset).</li>
            <li><strong>Vercel:</strong> Hosting dieser Landingpage und Web-Infrastruktur.</li>
            <li><strong>Apple Push Notification Service (APNs) & Firebase Cloud Messaging (FCM):</strong> Zustellung von Push-Benachrichtigungen an iOS- und Android-Geräte.</li>
            <li><strong>Codemagic:</strong> CI/CD-Dienst für App-Builds und Bereitstellung (verarbeitet Code und Konfigurationen).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Datenübermittlung in Drittländer</h2>
          <p className="mb-4">
            Einige der von uns eingesetzten Dienstleister (wie z.B. Supabase, Vercel) haben ihren Sitz möglicherweise außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR). Soweit personenbezogene Daten in Drittländer (z. B. USA) übermittelt werden, stellen wir sicher, dass dies auf Basis von Angemessenheitsbeschlüssen der EU-Kommission (z. B. Data Privacy Framework) oder geeigneten Garantien (wie Standardvertragsklauseln) geschieht, um ein angemessenes Datenschutzniveau zu gewährleisten.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Speicherdauer</h2>
          <p className="mb-4">
            Wir speichern Ihre Daten nur so lange, wie es für die Erfüllung der genannten Zwecke notwendig ist oder wie es gesetzliche Aufbewahrungsfristen vorgeben. Wenn Sie Ihr Benutzerkonto löschen, werden Ihre personenbezogenen Profil- und Login-Daten gelöscht oder irreversibel anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Bereits abgegebene, anonymisierte oder aggregierte Match-Votes können aus Gründen der Datenintegrität für die Match-Historie bestehen bleiben.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Cookies und Tracking</h2>
          <p className="mb-4">
            Unsere Website und App verwenden keine nicht notwendigen Marketing-, Werbe- oder Tracking-Cookies. Wir setzen lediglich technisch absolut notwendige Session-Cookies oder Tokens (z. B. von Supabase) ein, um Ihren Login-Status aufrechtzuerhalten und die Funktionalität der Plattform zu gewährleisten. Eine Einwilligung für diese technisch notwendigen Dienste ist nach geltendem Recht nicht erforderlich.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Ihre Rechte</h2>
          <p className="mb-4">Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li><strong>Recht auf Auskunft:</strong> Sie können Informationen darüber verlangen, welche Daten wir von Ihnen verarbeiten.</li>
            <li><strong>Recht auf Berichtigung:</strong> Sie können fehlerhafte Daten korrigieren lassen.</li>
            <li><strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer Daten verlangen ("Recht auf Vergessenwerden").</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung:</strong> Unter bestimmten Voraussetzungen können Sie die Einschränkung der Verarbeitung fordern.</li>
            <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten.</li>
            <li><strong>Recht auf Widerspruch:</strong> Sie können Verarbeitungen, die auf berechtigtem Interesse beruhen, widersprechen.</li>
            <li><strong>Recht auf Widerruf der Einwilligung:</strong> Erteilte Einwilligungen (z. B. für Push-Nachrichten) können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
          </ul>
          <p className="mb-4">
            Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter <a href="mailto:support@plyrz.at">support@plyrz.at</a>.
          </p>
          <p className="mb-4">
            Zudem haben Sie das <strong>Beschwerderecht bei einer Aufsichtsbehörde</strong>. In Österreich ist dies die Datenschutzbehörde (Barichgasse 40-42, 1030 Wien, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>).
          </p>

          <div className="mt-12 mb-8 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-xl">
            <p className="text-yellow-400 text-sm m-0">
              <strong>Hinweis:</strong> Dies ist eine Arbeitsversion der Datenschutzerklärung. Eine finale rechtliche Prüfung durch einen Anwalt wird vor dem offiziellen Launch empfohlen.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
