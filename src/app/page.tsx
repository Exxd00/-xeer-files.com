'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, FileText, Image as ImageIcon, Shield, Sparkles, Clock } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useAppStore } from '@/stores/app-store';
import { getTranslations } from '@/i18n';
import { tools, toolCategories, getPDFTools, getImageTools } from '@/config/tools';

// Main category configuration
const mainCategories = {
  pdf: {
    id: 'pdf',
    gradient: 'from-violet-600 to-purple-900',
  },
  image: {
    id: 'image',
    gradient: 'from-purple-600 to-fuchsia-900',
  },
};

interface MainCardProps {
  type: 'pdf' | 'image';
  isExpanded: boolean;
  onToggle: () => void;
  locale: string;
}

function MainCard({ type, isExpanded, onToggle, locale }: MainCardProps) {
  const config = mainCategories[type];
  const t = getTranslations(locale as Parameters<typeof getTranslations>[0]);

  // Get tools based on type
  const categoryTools = type === 'pdf' ? getPDFTools() : getImageTools();

  // Group tools by category
  const groupedTools = toolCategories
    .filter(cat => type === 'pdf' ? !cat.id.startsWith('image') : cat.id.startsWith('image'))
    .map(cat => ({
      ...cat,
      tools: categoryTools.filter(t => t.category === cat.id)
    }))
    .filter(cat => cat.tools.length > 0);

  return (
    <div className="category-card rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a]">
      <button
        type="button"
        onClick={onToggle}
        className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden cursor-pointer group"
        aria-expanded={isExpanded}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} transition-transform duration-700 group-hover:scale-110`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center gap-2 px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-violet-400">
            {type === 'pdf' ? t.hero.pdfToolsTitle : t.hero.imageToolsTitle}
          </h2>
          <p className="text-center text-sm sm:text-base text-[#8a8a8a] tracking-wider">
            {type === 'pdf' ? t.hero.pdfToolsDesc : t.hero.imageToolsDesc}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-[#666] tracking-wider">
              {categoryTools.length} {t.hero.toolsSuffix}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-violet-400" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 sm:p-8 bg-[#0a0a0a]">
              {groupedTools.map((category, catIndex) => (
                <div key={category.id} className={catIndex > 0 ? 'mt-6 pt-6 border-t border-[#1a1a1a]' : ''}>
                  <h3 className="text-violet-400 text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tool/${tool.slug}`}
                        className="flex items-center gap-3 py-3 px-4 text-[#8a8a8a] hover:text-violet-400 hover:bg-[#151515]
                                 transition-all duration-200 text-sm tracking-wide rounded-lg group"
                      >
                        <span
                          className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                          style={{ backgroundColor: tool.color }}
                        />
                        <span className="flex-1">{tool.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const { locale } = useAppStore();
  const t = getTranslations(locale);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(prev => prev === cardId ? null : cardId);
  };

  const pdfToolsCount = getPDFTools().length;
  const imageToolsCount = getImageTools().length;

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f]">
      <Header />

      <main className="flex-1 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-violet-400 text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] font-light uppercase mb-4">
              XEER FILES
            </h1>
            <div className="w-20 h-[1px] bg-[#a855f7] mx-auto mb-6" />
            <p className="text-[#8a8a8a] max-w-xl mx-auto text-sm sm:text-base leading-relaxed tracking-wide">
              {t.hero.tagline.replace('{count}', String(pdfToolsCount + imageToolsCount))}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#555]">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-violet-400" />
                {t.hero.secure}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-400" />
                {t.hero.instant}
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                {t.hero.free}
              </span>
            </div>
          </motion.section>

          {/* Two Main Cards */}
          <div className="space-y-6">
            {/* PDF Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MainCard
                type="pdf"
                isExpanded={expandedCard === 'pdf'}
                onToggle={() => toggleCard('pdf')}
                locale={locale}
              />
            </motion.div>

            {/* Image Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MainCard
                type="image"
                isExpanded={expandedCard === 'image'}
                onToggle={() => toggleCard('image')}
                locale={locale}
              />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
