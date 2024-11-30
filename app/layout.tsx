import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Footer } from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Aprendizado Acelerado 3.0 - Carla Brasil',
  description: 'Aprenda mais rápido com técnicas comprovadas de aceleração cognitiva.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}