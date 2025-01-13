import Script from 'next/script';
import './[locale]/globals.css';

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <html lang={params.locale ?? 'nl'}>
      <head>
        <Script src='https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js' />
      </head>
      <body>{children}</body>
    </html>
  );
}
