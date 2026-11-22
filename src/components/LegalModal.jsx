import React from 'react';
import { X } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earth-950/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-sand-50 rounded-3xl shadow-float border border-sand-300 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sand-200">
          <h3 className="font-serif text-2xl text-earth-950">
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-sand-200 text-earth-600 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-earth-800 leading-relaxed font-light">
          {type === 'impressum' ? (
            <>
              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h4>
                <p>
                  <strong>Shivani Claudia Siegmund</strong><br />
                  Yoga, Erfahrungsräume &amp; Begleitung<br />
                  Bernhard-Caspar-Straße 10<br />
                  30453 Hannover<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Kontakt</h4>
                <p>
                  Telefon: <a href="tel:+4917623733020" className="text-sage hover:underline">0176 23733020</a><br />
                  E-Mail: <a href="mailto:c.siegmund@gmx.net" className="text-sage hover:underline">c.siegmund@gmx.net</a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV</h4>
                <p>
                  Claudia Siegmund<br />
                  Bernhard-Caspar-Straße 10<br />
                  30453 Hannover
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Berufsbezeichnung</h4>
                <p>
                  Berufsbezeichnung: Yogalehrerin (BYV)<br />
                  Zertifiziert durch: Bund der Yoga Vidya Lehrer/innen (BYV)<br />
                  Verliehen in: Bundesrepublik Deutschland
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Wichtiger rechtlicher Hinweis (Heilmittelwerbegesetz / PsychThG)</h4>
                <p>
                  Die angebotenen Leistungen in den Bereichen Yoga, spirituelle Lebensberatung sowie mediale Begleitung (Readings) 
                  dienen ausschließlich der persönlichen und spirituellen Selbstentwicklung, Entspannung und Gesundheitsförderung. 
                  Sie stellen keine Heilbehandlung, Psychotherapie oder medizinische Diagnostik dar und ersetzen keinesfalls die 
                  Untersuchung oder Behandlung durch einen Arzt, Heilpraktiker oder approbierten Psychotherapeuten. Es werden keine 
                  Heilversprechen abgegeben.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle (§ 36 VSBG)</h4>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Haftung für Inhalte</h4>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder 
                  Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Haftung für Links</h4>
                <p>
                  Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">Urheberrecht</h4>
                <p>
                  Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">1. Datenschutz auf einen Blick</h4>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können. Auf dieser Website werden keine Tracking- oder Marketing-Cookies 
                  eingesetzt.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">2. Verantwortliche Stelle (Art. 4 Nr. 7 DSGVO)</h4>
                <p>
                  Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  <strong>Shivani Claudia Siegmund</strong><br />
                  Bernhard-Caspar-Straße 10<br />
                  30453 Hannover<br />
                  Telefon: 0176 23733020<br />
                  E-Mail: c.siegmund@gmx.net
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">3. Hosting, Server-Log-Dateien &amp; Content Delivery Network (Cloudflare)</h4>
                <p>
                  Diese Website sowie die eingebundenen Bilddateien (Cloudflare R2) werden über die Infrastruktur der 
                  <strong> Cloudflare, Inc.</strong> (101 Townsend St, San Francisco, CA 94107, USA) bereitgestellt. 
                  Beim Aufruf der Website werden durch den Browser automatisch technisch notwendige Verbindungsdaten 
                  (IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp, Betriebssystem, Referrer-URL) verarbeitet, 
                  um die Website sicher und performant auszuliefern und vor Angriffen zu schützen.
                </p>
                <p className="mt-2">
                  Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung 
                  unseres Online-Angebots gemäß Art. 6 Abs. 1 lit. f DSGVO. Cloudflare ist nach dem 
                  <strong> EU-US Data Privacy Framework (DPF)</strong> zertifiziert und setzt die Standardvertragsklauseln 
                  der EU-Kommission gemäß Art. 46 DSGVO ein.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">4. Kontaktaufnahme per E-Mail, Telefon oder Formular</h4>
                <p>
                  Wenn Sie uns per E-Mail, Telefon, WhatsApp oder über ein Kontaktformular kontaktieren, wird Ihre Anfrage 
                  inklusive aller daraus hervorgehenden personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, 
                  Anliegen) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit 
                  der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
                  In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden gelöscht, sobald 
                  sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind und keine gesetzlichen 
                  Aufbewahrungspflichten entgegenstehen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">5. Google Web Fonts</h4>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die von der 
                  Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) bereitgestellt werden. Beim Aufruf 
                  einer Seite lädt Ihr Browser die benötigten Web Fonts in Ihren Browsercache, um Texte und Schriftarten 
                  korrekt anzuzeigen. Zu diesem Zweck nimmt der von Ihnen verwendete Browser Verbindung zu den Servern von 
                  Google auf. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen 
                  wurde. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (einheitliche und ansprechende Darstellung unseres 
                  Online-Angebots). Google ist nach dem EU-US Data Privacy Framework zertifiziert.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">6. SSL- bzw. TLS-Verschlüsselung</h4>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                  des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-earth-950 text-base mb-2">7. Ihre Rechte als betroffene Person (Art. 15–21 DSGVO)</h4>
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO),</li>
                  <li><strong>Berichtigung</strong> unrichtiger oder unvollständiger Daten (Art. 16 DSGVO),</li>
                  <li><strong>Löschung</strong> Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                  <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO),</li>
                  <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) sowie</li>
                  <li><strong>Widerspruch</strong> gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO).</li>
                </ul>
                <p className="mt-2">
                  Zudem steht Ihnen gemäß Art. 77 DSGVO ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. 
                  Zuständige Aufsichtsbehörde in Niedersachsen ist die <em>Landesbeauftragte für den Datenschutz Niedersachsen, 
                  Prinzenstraße 5, 30159 Hannover</em>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-sand-100 border-t border-sand-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-earth-800 bg-sand-200 hover:bg-sand-300 transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
