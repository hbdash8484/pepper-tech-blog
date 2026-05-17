import type { Metadata } from 'next';
import { headers } from 'next/headers';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Pepper — A Build Log',
  description:
    'A build log documenting the development of an AI assistant named Pepper. By Danny Kim.',
  authors: [{ name: 'Danny Kim', url: 'https://kimsheritage.com' }],
  metadataBase: new URL('https://pepper.kimsheritage.com'),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const lang = headersList.get('x-lang') ?? 'ko';

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cormorant+SC:wght@300;400;500&family=Raleway:wght@200;300;400&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
