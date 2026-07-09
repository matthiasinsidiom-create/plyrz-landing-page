import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, CheckCircle2, Trophy, ArrowRight, ShieldCheck, BarChart3, Users, PlaySquare, Home, Calendar, ThumbsUp, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppStoreButton } from '../components/AppStoreButton';
import { PlayerCard } from '../components/PlayerCard';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-primary-neon/30 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="PLYRZ Logo" className="h-16 w-auto drop-shadow-[0_0_15px_rgba(0,255,65,0.3)]" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-white uppercase tracking-wider">
            <a href="#features" className="hover:text-primary-neon transition-colors">Home</a>
            <a href="#features" className="hover:text-primary-neon transition-colors">Funktionen</a>
            <a href="#spieler" className="hover:text-primary-neon transition-colors">Für Spieler</a>
            <a href="#fans" className="hover:text-primary-neon transition-colors">Für Fans</a>
            <a href="#vereine" className="hover:text-primary-neon transition-colors">Für Vereine</a>
            <a href="#download" className="hover:text-primary-neon transition-colors">Download</a>
            <a href="#kontakt" className="hover:text-primary-neon transition-colors">Kontakt</a>
            <a href="#download" className="px-5 py-2 rounded-lg border border-primary-neon text-primary-neon hover:bg-primary-neon hover:text-black transition-colors font-bold tracking-wide">
              JETZT DOWNLOADEN
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-dark-card border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg">Home</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg">Funktionen</a>
              <a href="#spieler" onClick={() => setMobileMenuOpen(false)} className="text-lg">Für Spieler</a>
              <a href="#fans" onClick={() => setMobileMenuOpen(false)} className="text-lg">Für Fans</a>
              <a href="#vereine" onClick={() => setMobileMenuOpen(false)} className="text-lg">Für Vereine</a>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="text-lg">Download</a>
              <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-lg">Kontakt</a>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="px-5 py-3 mt-4 text-center rounded-xl bg-primary-neon text-black font-bold text-lg">
                JETZT DOWNLOADEN
              </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="/background.png" alt="Hero Background" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-dark-bg/90 to-dark-bg"></div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-neon/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-[60%] w-[600px] h-[600px] bg-primary-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] italic font-sans font-black leading-[1.0] tracking-tighter mb-6">
                DEINE SAISON.<br />
                <span className="text-primary-neon">DEINE KARTE.</span><br />
                <span className="text-primary-gold">DEIN RATING.</span>
              </h1>
              
              <p className="text-xl md:text-[1.75rem] text-white tracking-tight mb-8">
                Für Spieler, Fans und Vereine im Amateurfußball.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-gray-300 text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary-neon" size={24}/> Spielerkarte</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary-neon" size={24}/> Live-Matches</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary-neon" size={24}/> MVP Voting</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary-neon" size={24}/> Saisonranking</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <AppStoreButton platform="ios" />
                <AppStoreButton platform="android" />
              </div>
            </motion.div>

            {/* Hero Visualization */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center items-center lg:justify-end pr-0 md:pr-8 mt-12 md:mt-0"
              style={{ perspective: 1200 }}
            >
              
              {/* App Mockup base container */}
              <motion.div 
                animate={{ rotateY: -15, rotateZ: 5, rotateX: 10 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="relative w-[300px] h-[650px] md:w-[330px] md:h-[714px] bg-dark-card border-[6px] border-[#1f2428] rounded-[2.5rem] shadow-[20px_20px_60px_rgba(0,0,0,0.5)] z-10 overflow-hidden ring-1 ring-white/10 md:ml-32 hover:!rotate-y-0 transition-transform duration-700 ease-in-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-7 bg-[#1f2428] rounded-b-3xl z-50"></div>
                {/* App Screenshot */}
                <div className="w-full h-full bg-[#0a0a0c] rounded-[2rem] relative overflow-hidden flex flex-col items-center">
                  {/* Mockup Image */}
                  <img src="/mockup.png" alt="PLYRZ App Mockup" className="absolute inset-0 w-full h-full object-cover object-top mt-2" />
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Was ist PLYRZ Section */}
      <section id="features" className="py-24 bg-dark-card relative border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-[2.5rem] font-heading font-bold mb-6 tracking-tight uppercase">
                WAS IST <span className="text-primary-neon">PLYRZ?</span>
              </h2>
              <p className="text-[1.1rem] text-white font-bold mb-6 leading-relaxed">
                PLYRZ verbindet Amateurfußball mit modernen Spielerkarten.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Jeder Spieler erhält seine eigene Karte,<br/> 
                verbessert sein Rating,<br/>
                wird von Fans bewertet<br/> 
                und kämpft um den MVP Titel.
              </p>
            </motion.div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
              <FeatureItem icon={<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1"><img src="https://api.iconify.design/mdi:soccer.svg?color=%23151A1E" alt="Ball" className="w-full h-full"/></div>} title="LIVE SPIELE" desc="Echte Matches. Echte Bewertungen." />
              <FeatureItem icon={<Trophy size={48} className="text-white" strokeWidth={1}/>} title="MVP VOTING" desc="Die Fans entscheiden den besten Spieler." />
              <FeatureItem icon={<BarChart3 size={48} className="text-white" strokeWidth={1} />} title="RATING SYSTEM" desc="Verbessere dein Rating von Spiel zu Spiel." />
              <FeatureItem icon={<ShieldCheck size={48} className="text-white" strokeWidth={1} />} title="EIGENE SPIELERKARTE" desc="Deine Karte. Deine Performance." />
              <FeatureItem icon={<BarChart3 size={48} className="text-white transform -scale-y-100" strokeWidth={1} />} title="SAISONSTATISTIKEN" desc="Verfolge deine gesamte Saison im Detail." />
              <FeatureItem icon={<Users size={48} className="text-white" strokeWidth={1} />} title="SPIELERRANKING" desc="Sieh wer im Ranking vorne ist" />
            </div>
          </div>
        </div>
      </section>

      {/* Für Spieler, Fans & Vereine */}
      <section className="py-24" id="spieler">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Für Spieler */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-start"
            >
              <div className="absolute -right-10 top-20 opacity-[0.03] text-primary-neon pointer-events-none">
                <Trophy size={300} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold text-center text-primary-neon mb-10 tracking-wider uppercase">FÜR SPIELER</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <PlayerFeature icon={<div className="w-16 h-16 bg-primary-neon/20 rounded-full flex items-center justify-center"><Users size={32} className="text-primary-neon" strokeWidth={1} /></div>} title="SPIELERKARTE" desc="Verbessere dein Rating von Spiel zu Spiel." />
                  <PlayerFeature icon={<div className="w-16 h-16 bg-primary-neon/20 rounded-full flex items-center justify-center"><Trophy size={32} className="text-primary-neon" strokeWidth={1} /></div>} title="MVP TITEL" desc="Werde Spieler des Spiels." />
                  <PlayerFeature icon={<div className="w-16 h-16 bg-primary-neon/20 rounded-full flex items-center justify-center"><BarChart3 size={32} className="text-primary-neon" strokeWidth={1} /></div>} title="STATISTIKEN" desc="Verfolge Tore, Assists, Spiele, MVPs und mehr." />
                  <PlayerFeature icon={<div className="w-16 h-16 bg-primary-neon/20 rounded-full flex items-center justify-center"><ShieldCheck size={32} className="text-primary-neon" strokeWidth={1} /></div>} title="PREMIUM" desc="Physische Saisonkarten und exklusive Inhalte." />
                </div>
              </div>
            </motion.div>

            {/* Für Fans */}
            <motion.div 
              id="fans"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-card border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-start"
            >
              <div className="absolute -right-10 top-20 opacity-[0.03] text-primary-neon pointer-events-none">
                <Users size={300} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold text-center text-primary-neon mb-10 tracking-wider uppercase">FÜR FANS</h2>
                
                <p className="text-white leading-relaxed mb-6 font-bold text-[1.05rem]">
                  Sei näher am Spiel als je zuvor. Folge deinem Lieblingsverein, verfolge Spieltage und stimme nach dem Match für die Spieler ab, die für dich den Unterschied gemacht haben.
                </p>
                <p className="text-gray-400 leading-relaxed mb-10 text-sm">
                  Mit deinem Voting beeinflusst du MVP, Spielerbewertungen und die Top-Performer des Spieltags. So wird aus jedem Match mehr als nur ein Ergebnis – die Fans werden Teil der Bewertung.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-neon/20 flex items-center justify-center flex-shrink-0 text-primary-neon font-bold mt-1">1</div>
                    <div className="pt-1.5">
                      <h4 className="text-white font-bold leading-none">Lieblingsverein wählen</h4>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-neon/20 flex items-center justify-center flex-shrink-0 text-primary-neon font-bold mt-1">2</div>
                    <div className="pt-1.5">
                      <h4 className="text-white font-bold leading-none">Match live verfolgen</h4>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-neon/20 flex items-center justify-center flex-shrink-0 text-primary-neon font-bold mt-1">3</div>
                    <div className="pt-1.5">
                      <h4 className="text-white font-bold leading-none">Spieler bewerten</h4>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Für Vereine */}
             <motion.div 
              id="vereine"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-card border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Jersey Background */}
              <div className="absolute -right-20 top-10 opacity-70 pointer-events-none mix-blend-lighten">
                 <div className="w-[400px] h-[500px] bg-gradient-to-b from-[#111] to-dark-card mask-image-[url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=800')] mask-size-contain mask-no-repeat relative">
                    <div className="absolute inset-0 bg-primary-neon/10 mix-blend-color"></div>
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                       <span className="text-2xl font-bold tracking-widest text-[#2a3036] opacity-80 uppercase z-10">PLYRZ</span>
                       <span className="text-8xl font-heading font-black text-primary-neon opacity-20 -mt-2">10</span>
                    </div>
                 </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold text-center text-primary-neon mb-10 tracking-wider uppercase">FÜR VEREINE</h2>
                <ul className="space-y-4 mb-20 text-gray-300">
                  {["Sponsorenintegration", "Match Präsentationen", "MVP Sponsoren", "Live Spielverwaltung", "Vereinsstatistiken"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[1.05rem]">
                      <div className="w-5 h-5 rounded-full bg-primary-neon flex items-center justify-center flex-shrink-0">
                         <CheckCircle2 color="white" fill="#00ff41" size={24} className="border-none" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 bg-transparent border border-primary-gold rounded-xl p-4 flex items-center gap-6 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                <div className="flex-shrink-0">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11L12 14L22 4" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary-gold mb-1 uppercase tracking-wider text-xl">Pilotphase 2026/27</h4>
                  <p className="text-[15px] text-gray-300 leading-tight">Vereine der 1. Klasse West-Mitte<br/>nehmen kostenlos teil.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Spieler Saison Image */}
      <section className="w-full relative bg-dark-bg border-y border-white/5">
        <img src="/top_spieler_saison.png" alt="Top Spieler der Saison" className="w-full h-auto object-cover" />
      </section>

      {/* Download Section */}
      <section id="download" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

             <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 flex-1 w-full lg:w-1/3"
            >
              <h2 className="text-4xl md:text-[3rem] font-heading font-bold mb-4 uppercase leading-none tracking-tight">
                JETZT<br/><span className="text-primary-neon">HERUNTERLADEN</span>
              </h2>
              <p className="text-[1.25rem] text-gray-300 font-medium mb-12 mt-6">
                Werde Teil von PLYRZ.<br/>Deine Saison beginnt jetzt.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col items-center lg:items-start gap-4 mb-4 lg:mb-0"
            >
               <AppStoreButton platform="ios" />
               <AppStoreButton platform="android" outline />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center lg:justify-end gap-6 relative z-10"
            >
              {[1, 2].map(i => (
                <div key={i} className="w-48 h-48 bg-white p-3 flex items-center justify-center relative overflow-hidden border border-white/20">
                  {/* Decorative corner brackets */}
                  <div className="absolute top-1 left-1 w-4 h-4 border-t-4 border-l-4 border-primary-neon"></div>
                  <div className="absolute top-1 right-1 w-4 h-4 border-t-4 border-r-4 border-primary-neon"></div>
                  <div className="absolute bottom-1 left-1 w-4 h-4 border-b-4 border-l-4 border-primary-neon"></div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 border-b-4 border-r-4 border-primary-neon"></div>
                  
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://plyrz.at&color=000000`} alt="QR Code" className="w-full h-full" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="kontakt" className="border-t border-white/10 pt-16 pb-8 bg-dark-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-end items-start gap-12 mb-16 border-b border-white/10 pb-16">
             <div className="opacity-90 w-48 -mr-8 -mt-10 self-center md:self-end">
               <div className="relative flex justify-center items-center">
                 {/* Radial burst behind logo area */}
                 <div className="absolute inset-0 bg-primary-neon/10 blur-[40px] rounded-full scale-150"></div>
                 <img src="/logo.png" alt="PLYRZ" className="w-[200px] h-auto relative z-10 drop-shadow-[0_0_30px_rgba(0,255,65,0.2)]" />
               </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
             <div className="flex items-center gap-2">
                <img src="/logo.png" alt="PLYRZ Logo" className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
             </div>
            <div className="flex gap-8 font-medium mx-auto">
              <Link to="/impressum" className="hover:text-white transition-colors uppercase">IMPRESSUM</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors uppercase">DATENSCHUTZ</Link>
              <a href="mailto:support@plyrz.at" className="hover:text-white transition-colors uppercase">SUPPORT</a>
            </div>
            <div className="uppercase">
              © 2026 PLYRZ
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

// Helper Components

function FeatureItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-heading font-bold text-primary-neon text-[1.1rem] mb-2 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-200 leading-relaxed text-[0.95rem]">{desc}</p>
    </div>
  );
}

function PlayerFeature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="border border-white/5 bg-transparent rounded-2xl p-4 md:p-6 text-center flex flex-col items-center h-full gap-4">
       {icon}
       <div className="flex-1 w-full flex flex-col">
          <h4 className="font-heading font-bold text-white mb-2 uppercase tracking-wide">{title}</h4>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[80%] mx-auto">{desc}</p>
       </div>
    </div>
  );
}

