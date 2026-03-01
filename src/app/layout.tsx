import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Suspense } from 'react';
import { Inter, Plus_Jakarta_Sans, Tajawal } from 'next/font/google';
import { CookieConsent } from '@/components/shared/CookieConsent';
import { AnalyticsProvider } from '@/components/shared/AnalyticsProvider';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { FloatingBackButton } from '@/components/shared/FloatingBackButton';
import './globals.css';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// Arabic font is only used when dir="rtl" is applied (see ThemeProvider + globals.css)
const fontArabic = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Xeer Files - Free Online PDF Tools',
    template: '%s | Xeer Files',
  },
  description:
    'Free online PDF tools to merge, split, compress, convert, rotate, unlock and watermark PDFs. Fast, secure, and easy to use. All files auto-deleted after 20 minutes.',
  keywords: [
    'PDF',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'PDF tools',
    'free PDF editor',
    'online PDF',
    'PDF to Word',
    'Word to PDF',
    'OCR PDF',
  ],
  authors: [{ name: 'Xeer Files' }],
  creator: 'Xeer Files',
  publisher: 'Xeer Files',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xeer-files.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Xeer Files - Free Online PDF Tools',
    description:
      'Free online PDF tools to merge, split, compress, convert, rotate, unlock and watermark PDFs. Fast, secure, and easy to use.',
    url: 'https://xeer-files.com',
    siteName: 'Xeer Files',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xeer Files - PDF Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xeer Files - Free Online PDF Tools',
    description:
      'Free online PDF tools to merge, split, compress, convert and edit PDFs.',
    images: ['/og-image.png'],
    creator: '@xeerfiles',
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
  icons: {
    icon: '/icons/icon.svg',
    shortcut: '/icons/icon.svg',
    apple: '/icons/icon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontInter.variable} ${fontArabic.variable}`}
    >
      <head>
        <meta name="theme-color" content="#7C3AED" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Suspense fallback={null}>
          <ThemeProvider>
            <AnalyticsProvider>
              {children}
              <FloatingBackButton />
              <CookieConsent />
            </AnalyticsProvider>
          </ThemeProvider>
        </Suspense>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              color: 'hsl(var(--foreground))',
            },
          }}
        />
      </body>
    </html>
  );
}
