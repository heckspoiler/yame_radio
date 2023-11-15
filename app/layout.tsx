import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from './components/Header/Header';
import './globals.css';

const bandeins = localFont({
  src: '../public/fonts/bandeins-strange-variable.ttf',
});

export const metadata: Metadata = {
  title: 'Yame Radio',
  description:
    'Sonic Explorers Welcome - carefully curated music for your ears.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bandeins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
