import { getLang, getDict } from '../lib/i18n';

export const runtime = 'edge';

export default function HomePage() {
  const lang = getLang();
  const t = getDict(lang);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>
            {t.hero.headline1} <span>{t.hero.headline2}</span> {t.hero.headline3}
          </h1>
          <p>{t.hero.sub}</p>
        </div>
      </section>

      <section className="section" id="apps">
        <div className="container">
          <h2 className="section-title">{t.apps.title}</h2>
          <div className="apps-grid">

            <div className="app-card">
              <div className="app-icon">🍽️</div>
              <div className="app-name">SnapBite</div>
              <div className="app-desc">{t.apps.snapbite.desc}</div>
              <div className="app-badges">
                {t.apps.snapbite.badges.map((b) => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
              <div className="app-links">
                <a href="/datenschutz/snapbite" className="btn btn-outline">
                  {t.apps.snapbite.privacy}
                </a>
              </div>
            </div>

            <div className="app-card coming-soon">
              <div className="app-icon" style={{ background: 'linear-gradient(135deg, #6c63ff, #a78bfa)' }}>🚀</div>
              <div className="app-name">{t.apps.comingSoon.name}</div>
              <div className="app-desc">{t.apps.comingSoon.desc}</div>
              <div className="app-badges">
                <span className="badge">{t.apps.comingSoon.badge}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
