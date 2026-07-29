'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import { useAppStore } from '@/stores/app-store';
import { getTranslations } from '@/i18n';
import Link from 'next/link';

export function CookieConsent() {
  const { cookieConsent, setCookieConsent, locale } = useAppStore();
  const t = getTranslations(locale);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Show banner if consent hasn't been given
    if (cookieConsent === null) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [cookieConsent]);

  const handleAccept = () => {
    setCookieConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookieConsent(false);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{t.cookieConsent.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.cookieConsent.description}
                    <Link href="/legal/cookies" className="text-primary hover:underline ml-1">
                      {t.cookieConsent.learnMore}
                    </Link>
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2 rounded-lg btn-primary text-sm"
                    >
                      {t.cookieConsent.acceptAll}
                    </button>
                    <button
                      onClick={handleDecline}
                      className="px-6 py-2 rounded-lg bg-muted text-foreground text-sm hover:bg-muted/80 transition-colors"
                    >
                      {t.cookieConsent.decline}
                    </button>
                    <Link
                      href="/legal/cookies"
                      className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <Settings className="w-4 h-4" />
                      {t.cookieConsent.manage}
                    </Link>
                  </div>
                </div>
                <button
                  onClick={handleDecline}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
