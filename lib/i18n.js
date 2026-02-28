'use client';

import { useState, useEffect } from 'react';

const dict = {
  de: {
    nav: {
      apps: 'Apps',
      impressum: 'Impressum',
    },
    hero: {
      headline1: 'Apps, die',
      headline2: 'wirklich',
      headline3: 'nützlich sind.',
      sub: 'Einfache, schnelle Mobile-Apps für den Alltag – ohne Abo, ohne Tracking, ohne Bullshit.',
    },
    apps: {
      title: 'Apps',
      snapbite: {
        desc: 'Kalorien & Nährwerte tracken – einfach Foto machen oder Mahlzeit eingeben. KI-gestützte Analyse mit Google Gemini.',
        badges: ['Android', 'iOS', 'Kostenlos'],
        privacy: 'Datenschutz',
      },
      comingSoon: {
        name: 'Nächste App',
        desc: 'In Entwicklung. Stay tuned.',
        badge: 'Coming Soon',
      },
    },
    footer: {
      copy: 'JT Apps',
      impressum: 'Impressum',
      privacy: 'Datenschutz SnapBite',
    },
    impressum: {
      title: 'Impressum',
      subtitle: 'Angaben gemäß § 5 TMG',
      responsible: 'Verantwortlich',
      contact: 'Kontakt',
      note: 'Hinweis',
      noteText: 'Diese Website dient als Informationsseite für die unter jtapps.dev veröffentlichten mobilen Anwendungen. Es findet kein kommerzieller Handel statt.',
      liability: 'Haftung für Inhalte',
      liabilityText: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
      dispute: 'Streitschlichtung',
      disputeText: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    },
    privacy: {
      title: 'Datenschutzerklärung',
      updated: 'Stand: März 2026',
      sections: {
        s1title: '1. Verantwortlicher',
        s1text: 'Verantwortlich im Sinne der DSGVO ist der Betreiber dieser App (Impressum: jtapps.dev/impressum).',
        s2title: '2. Welche Daten werden verarbeitet?',
        s2intro: 'SnapBite verarbeitet folgende Daten:',
        localTitle: '📱 Lokal auf deinem Gerät gespeichert',
        localItems: [
          'Körperdaten (Gewicht, Größe, Alter) – nur für die Kalorienberechnung',
          'Mahlzeiten, Nährwerte und Fotos von Mahlzeiten',
          'Gewichtsverlauf und Aktivitätsdaten',
          'Eine anonyme Geräte-ID (UUID) zur Speicherung deiner Datenschutzeinwilligung',
        ],
        localNote: 'Diese Daten verlassen dein Gerät nicht, außer in den unten genannten Fällen.',
        cloudTitle: '☁️ An externe Dienste übertragen',
        cloudItems: [
          'Google Gemini AI: Fotos von Mahlzeiten und Texteingaben werden zur Analyse der Nährwerte an die Google Gemini API übermittelt. Die Daten werden nicht dauerhaft gespeichert.',
          'Supabase (EU-Server): Die anonyme Geräte-ID sowie Zeitstempel der Einwilligung werden gespeichert. Kein personenbezogenes Daten.',
        ],
        s3title: '3. Rechtsgrundlage',
        s3text: 'Die Verarbeitung erfolgt auf Grundlage deiner ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.',
        s4title: '4. Einwilligung und Widerruf',
        s4text: 'Beim ersten Start der App wird deine Einwilligung eingeholt. Du kannst diese jederzeit in den Einstellungen unter „Rechtliches" widerrufen.',
        s4text2: 'Eine anonyme Geräte-ID (UUID) wird zur Nachweisbarkeit generiert. Sie enthält keine personenbezogenen Daten.',
        s5title: '5. Speicherdauer',
        s5items: [
          'Lokale Daten: Bis zur Deinstallation der App',
          'Einwilligungsnachweis (Supabase): Wird nach Widerruf mit Zeitstempel versehen, aber nicht gelöscht',
        ],
        s6title: '6. Deine Rechte',
        s6intro: 'Du hast folgende Rechte gemäß DSGVO:',
        s6items: [
          'Auskunft über deine gespeicherten Daten (Art. 15)',
          'Berichtigung unrichtiger Daten (Art. 16)',
          'Löschung deiner Daten (Art. 17)',
          'Widerruf der Einwilligung (Art. 7 Abs. 3)',
          'Beschwerderecht bei einer Aufsichtsbehörde (Art. 77)',
        ],
        s6contact: 'Zur Ausübung deiner Rechte:',
        s7title: '7. Keine Weitergabe an Dritte',
        s7text: 'Keine Weitergabe außer an Google Gemini und Supabase, die für die App-Funktion notwendig sind.',
        s8title: '8. Kein Account, keine Werbung',
        s8text: 'SnapBite erfordert keine Registrierung und schaltet keine Werbung.',
        s9title: '9. Kontakt',
      },
    },
  },
  en: {
    nav: {
      apps: 'Apps',
      impressum: 'Legal Notice',
    },
    hero: {
      headline1: 'Apps that are',
      headline2: 'actually',
      headline3: 'useful.',
      sub: 'Simple, fast mobile apps for everyday life – no subscription, no tracking, no BS.',
    },
    apps: {
      title: 'Apps',
      snapbite: {
        desc: 'Track calories & nutrition – just take a photo or enter your meal. AI-powered analysis with Google Gemini.',
        badges: ['Android', 'iOS', 'Free'],
        privacy: 'Privacy Policy',
      },
      comingSoon: {
        name: 'Next App',
        desc: 'In development. Stay tuned.',
        badge: 'Coming Soon',
      },
    },
    footer: {
      copy: 'JT Apps',
      impressum: 'Legal Notice',
      privacy: 'Privacy Policy SnapBite',
    },
    impressum: {
      title: 'Legal Notice',
      subtitle: 'Information according to § 5 TMG (German law)',
      responsible: 'Responsible',
      contact: 'Contact',
      note: 'Note',
      noteText: 'This website serves as an information page for mobile applications published under jtapps.dev. No commercial trading takes place.',
      liability: 'Liability for Content',
      liabilityText: 'As a service provider, we are responsible for our own content on these pages in accordance with general laws. We are not obligated to monitor transmitted or stored third-party information.',
      dispute: 'Dispute Resolution',
      disputeText: 'The European Commission provides a platform for online dispute resolution (ODR). We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: March 2026',
      sections: {
        s1title: '1. Data Controller',
        s1text: 'The controller within the meaning of the GDPR is the operator of this app (Legal Notice: jtapps.dev/impressum).',
        s2title: '2. What data is processed?',
        s2intro: 'SnapBite processes the following data:',
        localTitle: '📱 Stored locally on your device',
        localItems: [
          'Body data (weight, height, age) – only for calorie calculation',
          'Meals, nutritional values and photos of meals',
          'Weight history and activity data',
          'An anonymous device ID (UUID) to store your privacy consent',
        ],
        localNote: 'This data does not leave your device, except in the cases mentioned below.',
        cloudTitle: '☁️ Transferred to external services',
        cloudItems: [
          'Google Gemini AI: Photos of meals and text entries are transmitted to the Google Gemini API for nutritional analysis. Data is not permanently stored.',
          'Supabase (EU servers): The anonymous device ID and consent timestamps are stored. No personal data is transmitted.',
        ],
        s3title: '3. Legal Basis',
        s3text: 'Processing is based on your explicit consent pursuant to Art. 6 para. 1 lit. a GDPR.',
        s4title: '4. Consent and Revocation',
        s4text: 'When the app is first launched, your consent is obtained. You can withdraw this at any time in the app settings under "Legal".',
        s4text2: 'An anonymous device ID (UUID) is generated as proof of consent. It contains no personal data.',
        s5title: '5. Retention Period',
        s5items: [
          'Local data: Until the app is uninstalled',
          'Consent record (Supabase): Marked with a timestamp upon revocation but not deleted',
        ],
        s6title: '6. Your Rights',
        s6intro: 'You have the following rights under GDPR:',
        s6items: [
          'Right of access (Art. 15 GDPR)',
          'Right to rectification (Art. 16 GDPR)',
          'Right to erasure (Art. 17 GDPR)',
          'Right to withdraw consent (Art. 7 para. 3 GDPR)',
          'Right to lodge a complaint (Art. 77 GDPR)',
        ],
        s6contact: 'To exercise your rights:',
        s7title: '7. No Disclosure to Third Parties',
        s7text: 'No data is disclosed to third parties, except Google Gemini and Supabase which are essential for app functionality.',
        s8title: '8. No Account, No Advertising',
        s8text: 'SnapBite does not require registration and displays no advertisements.',
        s9title: '9. Contact',
      },
    },
  },
};

export function getDict(lang) {
  return dict[lang] || dict.en;
}

export function useLocale() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    setLang(browserLang.toLowerCase().startsWith('de') ? 'de' : 'en');
  }, []);
  return lang;
}
