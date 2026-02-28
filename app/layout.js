import './globals.css';
import { getLang, getDict } from '../lib/i18n';

export const runtime = 'edge';

export const metadata = {
  title: 'JT Apps – Mobile Apps by JT',
  description: 'Simple, useful apps for everyday life.',
  metadataBase: new URL('https://jtapps.dev'),
};

export default function RootLayout({ children }) {
  const lang = getLang();
  const t = getDict(lang);

  return (
    <html lang={lang}>
      <body>
        <nav>
          <div className="nav-inner">
            <span className="nav-logo">jt<span>apps</span>.dev</span>
            <ul className="nav-links">
              <li><a href="/#apps">{t.nav.apps}</a></li>
              <li><a href="/impressum">{t.nav.impressum}</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer>
          <div className="footer-inner">
            <span className="footer-copy">© {new Date().getFullYear()} {t.footer.copy}</span>
            <ul className="footer-links">
              <li><a href="/impressum">{t.footer.impressum}</a></li>
              <li><a href="/datenschutz/snapbite">{t.footer.privacy}</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
