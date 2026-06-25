import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, CheckCircle2, Trophy, ArrowRight, ShieldCheck, BarChart3, Users, PlaySquare } from 'lucide-react';
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
            <a href="#top10" className="hover:text-primary-neon transition-colors">Top 10</a>
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
              <a href="#top10" onClick={() => setMobileMenuOpen(false)} className="text-lg">Top 10</a>
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
                className="relative w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-dark-card border-[6px] border-[#1f2428] rounded-[3rem] shadow-[20px_20px_60px_rgba(0,0,0,0.5)] z-10 overflow-hidden ring-1 ring-white/10 md:ml-32 hover:!rotate-y-0 transition-transform duration-700 ease-in-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-7 bg-[#1f2428] rounded-b-3xl z-50"></div>
                {/* Fake App Content */}
                <div className="w-full h-full bg-[#0a0a0c] rounded-[2.5rem] p-4 flex flex-col pt-12 relative overflow-hidden">
                  
                  {/* Background burst inside app */}
                  <div className="absolute top-0 left-0 w-full h-[300px] overflow-hidden -z-0">
                     <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full h-full">
                       {[...Array(20)].map((_, i) => (
                         <div key={i} className="absolute top-1/2 left-1/2 w-[2px] h-[300px] bg-gradient-to-t from-transparent to-primary-gold/40 origin-top" style={{ transform: `rotate(${i * 18}deg)` }}></div>
                       ))}
                     </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6 z-20 relative opacity-80 pt-2 px-2">
                    <button className="p-2 bg-white/10 rounded-full"><ChevronRight className="text-white transform rotate-180" size={20}/></button>
                    <div className="flex-1 text-center font-heading font-bold text-lg tracking-wider">
                      YANNIK JUNG
                    </div>
                    <button className="p-2"><Menu className="text-white" size={20}/></button>
                  </div>
                  
                  <div className="flex justify-center z-20 relative mb-2">
                     <div className="relative w-48">
                       <PlayerCard 
                          name="JUNG" 
                          rating={64} 
                          position="STU" 
                          stats={{TEM: 54, SCH: 56, PAS: 55, DRI: 54, DEF: 50, PHY: 50}} 
                          theme="gold"
                        />
                     </div>
                  </div>

                  <div className="mt-8 z-20 relative px-2 flex-grow bg-[#14161a] -mx-4 pb-4">
                     <div className="flex justify-between border-b mx-4 mb-4 pt-4 border-white/10 text-[10px] text-gray-500 font-bold tracking-wider">
                        <span className="text-white border-b-2 border-primary-neon pb-2">ÜBERSICHT</span>
                        <span>STATS</span>
                        <span>MVPS</span>
                        <span>VERLAUF</span>
                     </div>
                     <div className="flex items-center justify-center gap-2 mb-4 text-xs font-bold text-gray-400">
                        <ChevronRight className="transform rotate-180" size={14}/>
                        <span className="tracking-widest">SAISON 2025/26</span>
                        <ChevronRight size={14}/>
                     </div>
                     <div className="grid grid-cols-4 gap-2 text-center text-[10px] px-2">
                        <div><span className="block text-gray-500 mb-1">SPIELE</span><span className="text-xl font-heading font-bold text-white">18</span></div>
                        <div><span className="block text-gray-500 mb-1">TORE</span><span className="text-xl font-heading font-bold text-white">7</span></div>
                        <div><span className="block text-gray-500 mb-1">ASSISTS</span><span className="text-xl font-heading font-bold text-white">4</span></div>
                        <div><span className="block text-primary-gold mb-1">Ø NOTE</span><span className="text-xl font-heading font-bold text-primary-gold">6.8</span></div>
                     </div>
                  </div>
                  
                  {/* Bottom App Nav */}
                  <div className="h-16 border-t border-white/5 flex justify-between items-center px-6 absolute bottom-0 left-0 w-full bg-[#14161a] z-50">
                    <div className="flex flex-col items-center opacity-100 text-primary-neon"><span className="text-xs mb-1">⊕</span><span className="text-[8px]">Home</span></div>
                    <div className="flex flex-col items-center opacity-50"><span className="text-xs mb-1">◯</span><span className="text-[8px]">Live</span></div>
                    <div className="flex flex-col items-center opacity-50"><span className="text-xs mb-1">◯</span><span className="text-[8px]">Votings</span></div>
                    <div className="flex flex-col items-center opacity-50"><span className="text-xs mb-1">◯</span><span className="text-[8px]">Ranking</span></div>
                    <div className="flex flex-col items-center opacity-50"><span className="text-xs mb-1">◯</span><span className="text-[8px]">Menü</span></div>
                  </div>

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
              <FeatureItem icon={<BarChart3 size={48} className="text-white" strokeWidth={1} className="transform -scale-y-100" />} title="SAISONSTATISTIKEN" desc="Verfolge deine gesamte Saison im Detail." />
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

      {/* Top 10 Podium */}
      <section id="top10" className="py-24 bg-dark-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[20%] w-full max-w-4xl h-[300px] bg-primary-gold/10 blur-[150px] rounded-[100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-[2.75rem] font-heading font-bold mb-6 uppercase leading-none tracking-tight">
                TOP SPIELER<br/><span className="text-primary-neon">DER SAISON</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-[200px] mx-auto lg:mx-0">
                Die besten Spieler. Eine Rangliste.<br/> Ein Ziel.
              </p>
              <a href="#download" className="inline-block px-10 py-3 border border-primary-neon text-primary-neon font-bold hover:bg-primary-neon hover:text-black transition-colors rounded-lg tracking-wide uppercase">
                Top 10 Ansehen
              </a>
            </motion.div>

            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-4 md:gap-0 h-[600px] md:h-[450px]">
                
                 {/* Rank 2 - Silver */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10 flex flex-col items-center transform md:-translate-y-8 md:mr-[-30px]"
                >
                  <PlayerCard 
                    name="MAYER" rating={63} position="STU" 
                    stats={{TEM: 53, SCH: 53, PAS: 53, DRI: 51, DEF: 49, PHY: 49}} 
                    theme="silver" className="scale-[0.8] origin-bottom md:scale-[0.85] drop-shadow-2xl"
                  />
                  <div className="w-40 h-20 bg-gradient-to-t from-dark-bg to-gray-800 hidden md:flex items-center justify-center font-heading text-4xl font-bold text-gray-400 rounded-t-lg shadow-[0_-5px_15px_rgba(0,0,0,0.5)] mt-6 border-b-0 border-t border-x border-gray-700">2</div>
                </motion.div>

                {/* Rank 1 - Gold */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative z-30 flex flex-col items-center order-first md:order-none mb-8 md:mb-0"
                >
                  <PlayerCard 
                    name="JUNG" rating={64} position="STU" 
                    stats={{TEM: 54, SCH: 56, PAS: 55, DRI: 54, DEF: 50, PHY: 50}} 
                    theme="gold" className="scale-[0.95] origin-bottom md:scale-100 drop-shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                  />
                  <div className="w-48 h-32 bg-gradient-to-t from-dark-bg via-[#3a2f00] to-primary-gold hidden md:flex items-center justify-center font-heading text-6xl font-black text-[#151A1E] rounded-t-lg mt-6 relative overflow-hidden shadow-[0_-10px_30px_rgba(255,215,0,0.15)] border-t border-x border-primary-gold/50">
                    <div className="absolute inset-x-0 top-0 h-1 bg-white/40 blur-[1px]"></div>
                    1
                  </div>
                </motion.div>

                {/* Rank 3 - Bronze */}
                 <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative z-10 flex flex-col items-center transform md:-translate-y-12 md:ml-[-30px]"
                >
                  <PlayerCard 
                    name="HUBER" rating={62} position="STU" 
                    stats={{TEM: 51, SCH: 52, PAS: 52, DRI: 51, DEF: 47, PHY: 48}} 
                    theme="bronze" className="scale-[0.8] origin-bottom md:scale-[0.8]"
                  />
                   <div className="w-40 h-16 bg-gradient-to-t from-dark-bg to-[#3d2314] hidden md:flex items-center justify-center font-heading text-4xl font-bold text-[#cd7f32] rounded-t-lg mt-6 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] border-t border-x border-[#5a341d]">3</div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
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
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-white/10 pb-16">
             <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-neon uppercase tracking-wide text-sm">MATTHIAS JÖRGLER</h4>
                    <a href="mailto:matthias.insidiom@gmail.com" className="text-gray-300 hover:text-white transition-colors">matthias.insidiom@gmail.com</a>
                  </div>
                </div>
             </div>

             <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-neon uppercase tracking-wide text-sm">SUPPORT</h4>
                    <a href="mailto:support@plyrz.at" className="text-gray-300 hover:text-white transition-colors">support@plyrz.at</a>
                  </div>
                </div>
             </div>

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

