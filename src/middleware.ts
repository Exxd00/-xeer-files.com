import { type NextRequest, NextResponse } from 'next/server';

// Keep in sync with src/config/locales.ts.
const SUPPORTED_LOCALES = ['en', 'ar', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'tr', 'nl', 'pl', 'hi'];

function detectLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return 'en';

  const candidates = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, qPart] = part.trim().split(';q=');
      return {
        lang: tag.split('-')[0].toLowerCase(),
        quality: qPart ? Number.parseFloat(qPart) : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of candidates) {
    if (SUPPORTED_LOCALES.includes(lang)) return lang;
  }
  return 'en';
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });

  // App is 100% free - no authentication required. We only use middleware to
  // seed a locale cookie from the browser's language on a visitor's first request,
  // so the very first server-rendered page already matches their language.
  if (!request.cookies.has('NEXT_LOCALE')) {
    const detected = detectLocale(request.headers.get('accept-language'));
    response.cookies.set('NEXT_LOCALE', detected, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
