'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/stores/app-store';
import { getTranslations } from '@/i18n';

export function WelcomeSplash() {
  const { hasSeenWelcome, setHasSeenWelcome, locale } = useAppStore();
  const [hydrated, setHydrated] = useState(false);
  const t = getTranslations(locale);

  // Wait for the persisted store to rehydrate before deciding whether to show the
  // splash, otherwise returning visitors would see a flash of it every load.
  useEffect(() => {
    if (useAppStore.persist.hasHydrated()) {
      setHydrated(true);
      return;
    }
    return useAppStore.persist.onFinishHydration(() => setHydrated(true));
  }, []);

  const show = hydrated && !hasSeenWelcome;

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setHasSeenWelcome(true), 2500);
    return () => clearTimeout(timer);
  }, [show, setHasSeenWelcome]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 px-6 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <span className="text-white font-bold text-4xl">X</span>
            </div>
            <h1 className="text-violet-400 text-2xl sm:text-3xl tracking-[0.15em] font-light uppercase">
              {t.welcome.title}
            </h1>
            <p className="text-[#8a8a8a] max-w-sm text-sm sm:text-base">
              {t.welcome.message}
            </p>
            <button
              type="button"
              onClick={() => setHasSeenWelcome(true)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium"
            >
              {t.welcome.continue}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
