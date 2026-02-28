import './globals.css';

export const metadata = {
  title: 'JT Apps – Mobile Apps by JT',
  description: 'Simple, useful apps for everyday life.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
