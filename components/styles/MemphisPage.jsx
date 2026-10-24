'use client';

import { motion } from 'framer-motion';
import {
  Zap, ArrowRight, Star, Heart, Music, Play, Circle, Bell, User, Settings,
} from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const MemphisCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'shadow-[4px_4px_0_#000]',
    medium: 'shadow-[6px_6px_0_#000]',
    heavy: 'shadow-[10px_10px_0_#000]',
  };
  return <div className={`bg-white border-4 border-black ${s[intensity]} ${className}`}>{children}</div>;
};

export default function MemphisPage() {
  return (
    <StylePageShell
      pageClass="bg-[#FFD93D]"
      Card={MemphisCard}
      ambient={
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 left-10 h-32 w-32 rounded-full bg-[#FF6B6B] opacity-50"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 right-10 h-40 w-40 bg-[#C4B5FD] opacity-50"
          />
          <div className="absolute top-1/3 right-1/4 h-20 w-20 rounded-full border-8 border-black opacity-20" />
        </div>
      }
      theme={{
        textPrimary: 'text-black font-black',
        textSecondary: 'text-gray-800',
        textMuted: 'text-gray-600',
        accent: 'text-[#FF6B6B]',
        iconBox: 'bg-[#FFD93D] border-2 border-black',
      }}
      buttonPrimaryClass="bg-[#FF6B6B] text-white font-black uppercase border-4 border-black shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
      buttonSecondaryClass="bg-[#C4B5FD] text-black font-bold uppercase border-4 border-black shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
      dividerClass="border-black"
      inputClass="placeholder:text-gray-500 font-medium"
      shortcutClass="border-2 border-black bg-white text-black shadow-[2px_2px_0_#000]"
      shortcutActiveClass="border-2 border-black bg-black text-white shadow-[2px_2px_0_#FF6B6B]"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5" /> Playful 80s attitude
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Playful.',
        titleAccent: 'Postmodern.',
        description: 'Bold clashing colors, geometric shapes, and playful 80s postmodern attitude. Nothing makes sense — that is the point.',
        primaryCta: { label: 'Let\'s play', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'See more', href: '#overview', icon: Play },
        tags: [
          { label: 'Bold color', dotColor: 'bg-[#FF6B6B]' },
          { label: 'Geometry', dotColor: 'bg-[#C4B5FD]' },
          { label: 'Hard shadows', dotColor: 'bg-black' },
        ],
        preview: {
          title: 'Memphis blocks',
          bg: 'bg-[#FFD93D]',
          content: (
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-[250px] bg-white border-4 border-black shadow-[6px_6px_0_#000] p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center bg-[#FF6B6B] border-2 border-black">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="bg-black text-white px-2 py-1 text-[10px] font-black">
                  FUN
                </span>
              </div>
              <div className="h-3 w-2/3 bg-black" />
              <div className="mt-2 h-2 w-1/2 bg-[#FF6B6B]" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-14 bg-[#FF6B6B] border-2 border-black" />
                <div className="h-14 bg-[#C4B5FD] border-2 border-black" />
                <div className="h-14 bg-[#FFD93D] border-2 border-black" />
              </div>
            </motion.div>
          ),
          meta: [
            { label: 'Style', value: '80s' },
            { label: 'Mood', value: 'Fun' },
          ],
        },
        searchPlaceholder: 'Search playful features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Serious design, playful soul.',
        features: [
          { icon: Star, title: 'Bold colors', desc: 'Clashing reds, yellows, and lavenders. On purpose.' },
          { icon: Circle, title: 'Geometry', desc: 'Circles, triangles, and squiggles — everywhere.' },
          { icon: Zap, title: 'Playful', desc: 'Hard shadows, blocky buttons, springy motion.' },
        ],
        stats: [
          { label: 'Border', value: '4px' },
          { label: 'Shadow', value: '6px' },
          { label: 'Colors', value: '04' },
        ],
        shortcuts: [
          { icon: Star, label: 'Stars' },
          { icon: Heart, label: 'Faves' },
          { icon: Music, label: 'Music' },
          { icon: Zap, label: 'Fun' },
        ],
        footerLeft: 'Memphis · Chaos is art',
        footerRight: 'Playful · Geometric · Bold',
      }}
    />
  );
}