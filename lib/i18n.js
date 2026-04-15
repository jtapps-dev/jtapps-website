'use client';

const dict = {
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
      privacy: 'Privacy Policy Snapbity',
    },
    impressum: {
      title: 'Legal Notice',
      subtitle: 'Information according to § 5 TMG (German law)',
      responsible: 'Responsible',
      contact: 'Contact',
      note: 'Note',
      noteText: 'This website serves as an information page for mobile applications published under jtapps.dev.',
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
        s2intro: 'Snapbity processes the following data:',
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
        s8text: 'Snapbity does not require registration and displays no advertisements.',
        s9title: '9. Contact',
      },
    },
  },
};

export function getDict() {
  return dict.en;
}

export function useLocale() {
  return 'en';
}
