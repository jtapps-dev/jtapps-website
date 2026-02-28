'use client';

import { useLocale, getDict } from '../../lib/i18n';

export default function ImpressumPage() {
  const lang = useLocale();
  const t = getDict(lang).impressum;

  return (
    <>
      <nav>
        <div className="nav-inner">
          <span className="nav-logo">jt<span>apps</span>.dev</span>
          <ul className="nav-links">
            <li><a href="/#apps">{lang === 'de' ? 'Apps' : 'Apps'}</a></li>
            <li><a href="/impressum">{t.title}</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="legal-page">
            <h1>{t.title}</h1>
            <p className="legal-updated">{t.subtitle}</p>

            <div className="legal-section">
              <h2>{t.responsible}</h2>
              <div className="info-box">
                <p>
                  [Dein Vor- und Nachname]<br />
                  [Straße und Hausnummer]<br />
                  [PLZ Ort]<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div className="legal-section">
              <h2>{t.contact}</h2>
              <p>E-Mail: <a href="mailto:kontakt@jtapps.dev">kontakt@jtapps.dev</a></p>
            </div>

            <div className="legal-section">
              <h2>{t.note}</h2>
              <p>{t.noteText}</p>
            </div>

            <div className="legal-section">
              <h2>{t.liability}</h2>
              <p>{t.liabilityText}</p>
            </div>

            <div className="legal-section">
              <h2>{t.dispute}</h2>
              <p>
                {t.disputeText}{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-inner">
          <span className="footer-copy">© {new Date().getFullYear()} JT Apps</span>
          <ul className="footer-links">
            <li><a href="/impressum">{t.title}</a></li>
            <li><a href="/datenschutz/snapbite">{lang === 'de' ? 'Datenschutz SnapBite' : 'Privacy Policy SnapBite'}</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
