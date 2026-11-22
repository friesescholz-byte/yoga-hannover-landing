import React, { useState } from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { MEDIA } from './data/media';
import LotusIcon from './components/LotusIcon';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModalType, setLegalModalType] = useState(null);

  return (
    <div className="min-h-screen bg-sand-100 text-earth-950 flex flex-col justify-between relative overflow-hidden selection:bg-sage/15 selection:text-earth-950 font-sans">
      
      {/* Atmosphärischer Hintergrund (Zen / Wasser / Naturstein) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={MEDIA.zen}
          alt=""
          className="w-full h-full object-cover object-center opacity-20 filter blur-[0.5px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-100/90 via-sand-100/85 to-sand-100" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 border-b border-sand-200/80 bg-sand-50/70 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sand-200/80 border border-sand-300 flex items-center justify-center text-sage">
              <LotusIcon className="w-4 h-4 text-sage" />
            </div>
            <div>
              <span className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-earth-950">
                Shivani Claudia Siegmund
              </span>
              <span className="block text-[11px] text-earth-600 font-serif italic">
                Yoga, Erfahrungsräume &amp; Begleitung
              </span>
            </div>
          </div>

          <a
            href="mailto:c.siegmund@gmx.net"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-sand-50 bg-sage hover:bg-sage-dark shadow-sm transition-all"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Main Content – Kompakt, reduziert & zentriert */}
      <main className="relative z-10 flex-grow flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="max-w-2xl w-full mx-auto text-center">
          
          {/* Ankündigung */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <LotusIcon className="w-5 h-5 text-sage" />
              <span className="text-xs uppercase tracking-[0.25em] text-sage font-semibold">
                Neue Website in Entstehung
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-earth-950 font-normal leading-[1.15] tracking-tight mb-4">
              Hier entsteht die neue Internetpräsenz von{' '}
              <span className="italic text-sage">Shivani Claudia Siegmund</span>.
            </h1>

            <p className="text-base sm:text-xl font-serif italic text-earth-700 leading-relaxed max-w-xl mx-auto">
              „Ich öffne einen Raum, in dem du deinen eigenen Boden wieder wahrnehmen kannst.“
            </p>
          </div>

          {/* Kompakte Direkt-Kontaktkarte */}
          <div className="bg-sand-50/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-card text-left">
            <div className="text-center mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage block mb-1.5">
                Persönlicher Kontakt
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-earth-950 mb-1.5">
                Hast du Fragen oder möchtest du einen Termin vereinbaren?
              </h2>
              <p className="text-xs sm:text-sm text-earth-700 font-light">
                Melde dich gern direkt per Telefon, WhatsApp oder E-Mail bei mir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="tel:+4917623733020"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-sand-100/80 border border-sand-300/80 hover:border-sage transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sage/10 text-sage flex items-center justify-center flex-shrink-0 group-hover:bg-sage group-hover:text-sand-50 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                    Telefon &amp; WhatsApp
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-earth-950 group-hover:text-sage transition-colors flex items-center gap-1 mt-0.5">
                    0176 23733020
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </span>
                </div>
              </a>

              <a
                href="mailto:c.siegmund@gmx.net"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-sand-100/80 border border-sand-300/80 hover:border-sage transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sage/10 text-sage flex items-center justify-center flex-shrink-0 group-hover:bg-sage group-hover:text-sand-50 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                    E-Mail-Adresse
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-earth-950 group-hover:text-sage transition-colors flex items-center gap-1 mt-0.5">
                    c.siegmund@gmx.net
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Rechtssicherer Footer mit Impressum & Datenschutz */}
      <footer className="relative z-10 bg-sand-50/80 border-t border-sand-300/80 py-5 px-4 sm:px-6 text-earth-700">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <LotusIcon className="w-4 h-4 text-sage" />
            <span>© {new Date().getFullYear()} Shivani Claudia Siegmund · Hannover</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <button
              onClick={() => setLegalModalType('impressum')}
              className="hover:text-sage transition-colors underline underline-offset-4"
            >
              Impressum
            </button>
            <button
              onClick={() => setLegalModalType('datenschutz')}
              className="hover:text-sage transition-colors underline underline-offset-4"
            >
              Datenschutzerklärung
            </button>
          </div>
        </div>
      </footer>

      {/* Rechtliches Modal (Impressum & Datenschutz nach § 5 DDG & DSGVO) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
