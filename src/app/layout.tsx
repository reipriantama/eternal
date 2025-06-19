import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ETERNAL Band',
  description: 'Official website of ETERNAL - modern band from Bandung',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-8 bg-black text-white'>
          {children}
        </main>
      </body>
    </html>
  );
}
