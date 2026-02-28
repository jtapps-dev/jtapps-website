'use client';

import { useLocale, getDict } from '../../../lib/i18n';

export default function DatenschutzSnapBite() {
  const lang = useLocale();
  const t = getDict(lang).privacy;
  const s = t.sections;

  return (
    <>
      <nav>
        <div className="nav-inner">
          <span className="nav-logo">jt<span>apps</span>.dev</span>
          <ul className="nav-links">
            <li><a href="/#apps">Apps</a></li>
            <li><a href="/impressum">{lang === 'de' ? 'Impressum' : 'Legal Notice'}</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="legal-page">
            <h1>{t.title}</h1>
            <p className="legal-updated">
              App: <strong>SnapBite</strong> &nbsp;·&nbsp; {t.updated}
            </p>

            <div className="legal-section">
              <h2>{s.s1title}</h2>
              <p>{s.s1text}</p>
            </div>

            <div className="legal-section">
              <h2>{s.s2title}</h2>
              <p>{s.s2intro}</p>
              <h2 style={{ marginTop: '16px', fontSize: '0.95rem', color: 'var(--muted)' }}>{s.localTitle}</h2>
              <ul>{s.localItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
              <p style={{ marginTop: '10px' }}>{s.localNote}</p>
              <h2 style={{ marginTop: '16px', fontSize: '0.95rem', color: 'var(--muted)' }}>{s.cloudTitle}</h2>
              <ul>{s.cloudItems.map((item, i) => <li key={i} style={{ marginTop: i > 0 ? '8px' : 0 }}>{item}</li>)}</ul>
            </div>

            <div className="legal-section">
              <h2>{s.s3title}</h2>
              <p>{s.s3text}</p>
            </div>

            <div className="legal-section">
              <h2>{s.s4title}</h2>
              <p>{s.s4text}</p>
              <p>{s.s4text2}</p>
            </div>

            <div className="legal-section">
              <h2>{s.s5title}</h2>
              <ul>{s.s5items.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>

            <div className="legal-section">
              <h2>{s.s6title}</h2>
              <p>{s.s6intro}</p>
              <ul>{s.s6items.map((item, i) => <li key={i}>{item}</li>)}</ul>
              <p style={{ marginTop: '10px' }}>{s.s6contact} <a href="mailto:kontakt@jtapps.dev">kontakt@jtapps.dev</a></p>
            </div>

            <div className="legal-section">
              <h2>{s.s7title}</h2>
              <p>{s.s7text}</p>
            </div>

            <div className="legal-section">
              <h2>{s.s8title}</h2>
              <p>{s.s8text}</p>
            </div>

            <div className="legal-section">
              <h2>{s.s9title}</h2>
              <div className="info-box">
                <p>
                  E-Mail: <a href="mailto:kontakt@jtapps.dev">kontakt@jtapps.dev</a><br />
                  {lang === 'de' ? 'Impressum' : 'Legal Notice'}: <a href="/impressum">jtapps.dev/impressum</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-inner">
          <span className="footer-copy">© {new Date().getFullYear()} JT Apps</span>
          <ul className="footer-links">
            <li><a href="/impressum">{lang === 'de' ? 'Impressum' : 'Legal Notice'}</a></li>
            <li><a href="/datenschutz/snapbite">{lang === 'de' ? 'Datenschutz SnapBite' : 'Privacy Policy SnapBite'}</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
