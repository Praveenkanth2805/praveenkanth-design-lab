'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ArrowRight, Sparkles, X, Sun, Moon,
  Layers, Box, Zap, Grid3x3, Rocket, Disc, Music, Square, Circle,
} from 'lucide-react';

/* ---------- Theme hook ---------- */
function useTheme() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'dark');
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };
  return { theme, toggle };
}

/* ---------- Mini previews (unchanged — keep your existing ones) ---------- */
const GlassPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
    <div className="backdrop-blur-md bg-white/25 border border-white/40 rounded-md px-3 py-1.5 text-[10px] text-white font-medium">Frosted</div>
  </div>
);
const ClayPreview = () => (
  <div className="w-full h-full bg-[#e0e5ec] rounded-lg flex items-center justify-center">
    <div className="bg-[#e0e5ec] shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] rounded-md px-3 py-1.5 text-[10px] text-gray-700 font-semibold">Soft 3D</div>
  </div>
);
const NeumoPreview = () => (
  <div className="w-full h-full bg-[#e0e5ec] rounded-lg flex items-center justify-center">
    <div className="bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] rounded-md px-3 py-1.5 text-[10px] text-gray-700 font-semibold">Embossed</div>
  </div>
);
const BrutalPreview = () => (
  <div className="w-full h-full bg-[#FFFDF5] rounded-lg flex items-center justify-center">
    <div className="bg-[#FFD93D] border-2 border-black shadow-[3px_3px_0_#000] px-3 py-1.5 text-[10px] text-black font-black uppercase">Bold</div>
  </div>
);
const BentoPreview = () => (
  <div className="w-full h-full bg-gray-100 rounded-lg p-2 grid grid-cols-3 grid-rows-2 gap-1">
    <div className="col-span-2 bg-white rounded-md border border-gray-200" />
    <div className="bg-blue-500 rounded-md" />
    <div className="bg-green-500 rounded-md" />
    <div className="col-span-2 bg-purple-500 rounded-md" />
  </div>
);
const DarkLuxePreview = () => (
  <div className="w-full h-full bg-[#0a0a0a] rounded-lg border border-[#d4a574]/20 flex items-center justify-center">
    <div className="bg-[#d4a574] text-black rounded-md px-3 py-1.5 text-[10px] font-serif font-semibold">Luxe</div>
  </div>
);
const RetroPreview = () => (
  <div className="w-full h-full bg-[#1a1a2e] rounded-lg flex items-center justify-center">
    <div className="border-2 border-[#00f5d4] text-[#00f5d4] rounded-md px-3 py-1.5 text-[10px] font-mono shadow-[0_0_12px_rgba(0,245,212,0.5)]">Neon</div>
  </div>
);
const Y2KPreview = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
    <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full px-3 py-1.5 text-[10px] font-bold shadow-lg inline-flex items-center gap-1">
      <Sparkles className="w-3 h-3" /> Y2K
    </div>
  </div>
);
const MemphisPreview = () => (
  <div className="w-full h-full bg-[#FFD93D] rounded-lg flex items-center justify-center relative overflow-hidden">
    <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-[#FF6B6B] rounded-full" />
    <div className="absolute bottom-1.5 right-1.5 w-3 h-3 bg-[#C4B5FD] rotate-45" />
    <div className="bg-white border-2 border-black shadow-[2px_2px_0_#000] px-3 py-1.5 text-[10px] font-black">Fun!</div>
  </div>
);
const MinimalPreview = () => (
  <div className="w-full h-full bg-white rounded-lg border border-gray-200 flex items-center justify-center">
    <div className="border border-gray-300 rounded-md px-3 py-1.5 text-[10px] text-gray-800 font-light">Clean</div>
  </div>
);
const FlatPreview = () => (
  <div className="w-full h-full bg-[#3498db] rounded-lg flex items-center justify-center">
    <div className="bg-white text-[#3498db] rounded-md px-3 py-1.5 text-[10px] font-semibold">Simple</div>
  </div>
);

/* ---------- Data (unchanged) ---------- */
const styles = [
  { slug: 'glassmorphism', title: 'Glassmorphism', description: 'Frosted glass effect with backdrop blur and translucent layers.', icon: Layers, preview: GlassPreview, category: 'Modern' },
  { slug: 'claymorphism', title: 'Claymorphism', description: 'Soft, 3D clay-like elements with friendly inner shadows.', icon: Box, preview: ClayPreview, category: 'Soft' },
  { slug: 'neumorphism', title: 'Neumorphism', description: 'Soft UI with embossed and debossed physical-feel surfaces.', icon: Sun, preview: NeumoPreview, category: 'Soft' },
  { slug: 'brutalism', title: 'Brutalism', description: 'Raw, bold, unapologetic — thick borders and hard shadows.', icon: Zap, preview: BrutalPreview, category: 'Bold' },
  { slug: 'bento', title: 'Bento Grid', description: 'Asymmetric grid compartments inspired by Japanese bento boxes.', icon: Grid3x3, preview: BentoPreview, category: 'Modern' },
  { slug: 'dark-luxe', title: 'Dark Luxe', description: 'Deep blacks, warm gold accents, refined serif typography.', icon: Moon, preview: DarkLuxePreview, category: 'Vintage' },
  { slug: 'retro-futurism', title: 'Retro-Futurism', description: 'Neon glows, synthwave vibes, pixel-perfect arcade aesthetics.', icon: Rocket, preview: RetroPreview, category: 'Vintage' },
  { slug: 'y2k', title: 'Y2K', description: 'Playful, holographic, bubbly early 2000s internet revival.', icon: Disc, preview: Y2KPreview, category: 'Vintage' },
  { slug: 'memphis', title: 'Memphis', description: 'Bold clashing colors, geometric shapes, playful 80s attitude.', icon: Music, preview: MemphisPreview, category: 'Bold' },
  { slug: 'minimalism', title: 'Minimalism', description: 'Clean, functional, content-first — whitespace is the hero.', icon: Square, preview: MinimalPreview, category: 'Clean' },
  { slug: 'flat', title: 'Flat Design', description: 'Simple two-dimensional layouts with solid, bold colors.', icon: Circle, preview: FlatPreview, category: 'Clean' },
];

const categories = ['All', 'Modern', 'Soft', 'Bold', 'Vintage', 'Clean'];

/* ---------- Animation variants ---------- */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------- Dashboard ---------- */
export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const { theme, toggle } = useTheme();

  const filtered = useMemo(() => {
    return styles.filter((s) => {
      const matchCat = category === 'All' || s.category === category;
      const q = query.toLowerCase();
      const matchQuery = s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-pink-500/20 dark:bg-pink-600/20 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,white_80%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,black_75%)]" />
      </div>

      {/* ✨ Theme toggle with morph */}
      <motion.button
        onClick={toggle}
        aria-label="Toggle theme"
        whileTap={{ scale: 0.9 }}
        className="fixed top-5 right-5 z-50 w-11 h-11 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/15 backdrop-blur-xl flex items-center justify-center shadow-lg"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-white/70 mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
          <span>11 UI styles · fully designed pages</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-400 dark:from-white dark:via-white dark:to-white/30 bg-clip-text text-transparent"
        >
          UI Style Showcase
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto mb-10"
        >
          Explore the most popular UI design trends. Click any card to see a full page crafted entirely in that style.
        </motion.p>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-white/40" />
            <input
              type="text"
              placeholder="Search styles…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 outline-none focus:border-gray-400 dark:focus:border-white/30 transition-all backdrop-blur-sm"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* ✨ Filter pills with sliding indicator */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className="relative px-4 py-2 rounded-full text-sm transition-colors duration-200"
                >
                  {active && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active
                        ? 'text-white dark:text-black font-medium'
                        : 'text-gray-600 dark:text-white/60'
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Cards with stagger */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 text-gray-400 dark:text-white/40"
          >
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No styles match your search.</p>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((style, i) => {
              const Preview = style.preview;
              const Icon = style.icon;
              return (
                <motion.div key={style.slug} variants={cardVariants}>
                  <Link
                    href={`/style/${style.slug}`}
                    className="group relative block bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.15)]"
                  >
                    <div className="p-5 pb-4">
                      <div className="h-32 rounded-lg overflow-hidden">
                        <Preview />
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <div className="flex items-start justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-gray-500 dark:text-white/60" />
                          <h3 className="text-lg font-semibold">{style.title}</h3>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/30 font-mono">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-white/50 mb-4 leading-relaxed">{style.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60">
                          {style.category}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-white/40 group-hover:text-gray-900 dark:group-hover:text-white flex items-center gap-1 transition-colors">
                          Explore
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/5 py-10 text-center">
        <p className="text-sm font-medium text-gray-700 dark:text-white/70">
          Created by <span className="text-gray-900 dark:text-white font-semibold">Praveenkanth G</span>
        </p>
        <p className="text-xs text-gray-500 dark:text-white/40 mt-1">Software Developer · Villupuram</p>
        <p className="text-[11px] text-gray-400 dark:text-white/30 mt-3">Built with Next.js + Tailwind CSS</p>
      </footer>
    </main>
  );
}