'use client';

import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, Heart, Star, Music, Smile, Play, Bell, User, Settings,
} from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const Y2KCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'border-2 border-[#c4b5fd]/60 shadow-[0_0_20px_rgba(196,181,253,0.3)]',
    medium: 'border-2 border-[#c4b5fd] shadow-[0_0_30px_rgba(196,181,253,0.4)]',
    heavy: 'border-2 border-[#c4b5fd] shadow-[0_0_50px_rgba(196,181,253,0.6)]',
  };
  return <div className={`bg-white/60 backdrop-blur-xl rounded-3xl ${s[intensity]} ${className}`}>{children}</div>;
};

export default function Y2KPage() {
  return (
    <StylePageShell
      pageClass="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200"
      Card={Y2KCard}
      ambient={
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 left-20 h-32 w-32 rounded-full bg-pink-400/40 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-purple-400/40 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-cyan-300/40 blur-3xl"
          />
        </div>
      }
      theme={{
        textPrimary: 'text-gray-800',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-500',
        accent: 'text-pink-500',
        iconBox: 'bg-gradient-to-br from-purple-300/60 to-pink-300/60 border border-[#c4b5fd]',
      }}
      buttonPrimaryClass="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold shadow-lg hover:from-purple-500 hover:to-pink-500"
      buttonSecondaryClass="bg-white/70 border border-[#c4b5fd] text-gray-700 hover:bg-white"
      dividerClass="border-[#c4b5fd]/60"
      inputClass="placeholder:text-gray-400"
      shortcutClass="border-[#c4b5fd]/60 bg-white/50 text-gray-600"
      shortcutActiveClass="bg-gradient-to-r from-purple-400 to-pink-400 text-white border-transparent shadow-lg"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-300/60 to-pink-300/60 border-2 border-[#c4b5fd] px-3 py-1.5 text-xs text-gray-800">
            <Sparkles className="h-3.5 w-3.5" /> Holographic era
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Bubbly.',
        titleAccent: 'Holographic.',
        description: 'Playful, bubbly, holographic — the early 2000s internet, revived. Chrome textures, pastel gradients, and absolute fun.',
        primaryCta: { label: 'Let\'s go', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'See more', href: '#overview', icon: Play },
        tags: [
          { label: 'Pastel gradient', dotColor: 'bg-gradient-to-r from-purple-400 to-pink-400' },
          { label: 'Floating icons', dotColor: 'bg-cyan-400' },
          { label: 'Bubbly', dotColor: 'bg-pink-400' },
        ],
        preview: {
          title: 'Y2K surfaces',
          bg: 'bg-gradient-to-br from-purple-100 to-pink-100',
          content: (
            <div className="w-full max-w-[250px] bg-white/70 backdrop-blur-md border-2 border-[#c4b5fd] rounded-3xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="rounded-full bg-gradient-to-r from-purple-300 to-pink-300 px-2 py-1 text-[10px] text-white font-bold">
                  Y2K
                </span>
              </div>
              <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <div className="mt-3 h-1.5 w-1/2 rounded-full bg-purple-300/60" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-xl bg-gradient-to-br from-pink-300 to-purple-300" />
                <div className="h-14 rounded-xl bg-gradient-to-br from-blue-300 to-cyan-300" />
                <div className="h-14 rounded-xl bg-gradient-to-br from-yellow-300 to-orange-300" />
              </div>
            </div>
          ),
          meta: [
            { label: 'Vibe', value: 'Playful' },
            { label: 'Era', value: '2000s' },
          ],
        },
        searchPlaceholder: 'Search sparkly features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Fun is the feature.',
        features: [
          { icon: Sparkles, title: 'Holographic', desc: 'Gradients shift. Icons float. Everything glows.' },
          { icon: Heart, title: 'Bubbly', desc: 'Rounded corners, pastel tones, playful shapes.' },
          { icon: Music, title: 'Nostalgic', desc: 'A modern take on the early 2000s web aesthetic.' },
        ],
        stats: [
          { label: 'Gradients', value: '05' },
          { label: 'Blur', value: '12px' },
          { label: 'Fun level', value: '100%' },
        ],
        shortcuts: [
          { icon: Heart, label: 'Faves' },
          { icon: Star, label: 'Starred' },
          { icon: Music, label: 'Music' },
          { icon: Smile, label: 'Mood' },
        ],
        footerLeft: 'Y2K · Holographic revival',
        footerRight: 'Playful · Bubbly · Fun',
      }}
    />
  );
}