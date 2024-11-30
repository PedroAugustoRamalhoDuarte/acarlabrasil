import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Aprendizado Acelerado 3.0 - Carla Brasil',
  description: 'Aprenda mais rápido com técnicas comprovadas de aceleração cognitiva. Descubra como otimizar seu aprendizado com Carla Brasil.',
  keywords: [
    'Aprendizado Acelerado',
    'Carla Brasil',
    'Técnicas de Estudo',
    'Aceleração Cognitiva',
    'Aprendizagem Eficiente',
    'Metodologia de Estudo',
    'Desenvolvimento Pessoal',
    'Educação',
  ],
  authors: [{ name: 'Carla Brasil' }],
  creator: 'Carla Brasil',
  publisher: 'Carla Brasil',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://acarlabrasil.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aprendizado Acelerado 3.0 - Carla Brasil',
    description: 'Aprenda mais rápido com técnicas comprovadas de aceleração cognitiva. Descubra como otimizar seu aprendizado com Carla Brasil.',
    url: 'https://aprendizado.acarlabrasil.',
    siteName: 'Aprendizado Acelerado 3.0',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Aprendizado Acelerado 3.0 com Carla Brasil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aprendizado Acelerado 3.0 - Carla Brasil',
    description: 'Aprenda mais rápido com técnicas comprovadas de aceleração cognitiva. Descubra como otimizar seu aprendizado com Carla Brasil.',
    images: ['/og-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#cc1300" />
      </head>
      <body className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}