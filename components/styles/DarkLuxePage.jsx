'use client';

import {
  Crown, ArrowUpRight, Gem, Star, Play, Award, Bell, User, Settings, Sparkles,
} from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const LuxeCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'border border-[#d4a574]/15',
    medium: 'border border-[#d4a574]/25',
    heavy: 'border border-[#d4a574]/35 shadow-[0_0_60px_-20px_rgba(212,165,116,0.3)]',
  };
  return <div className={`bg-[#111111] rounded-3xl ${s[intensity]} ${className}`}>{children}</div>;
};

export default function DarkLuxePage() {
  return (
    <StylePageShell
      pageClass="bg-[#0a0a0a]"
      Card={LuxeCard}
      ambient={
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#d4a574]/8 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d4a574]/5 blur-[120px]" />
        </div>
      }
      theme={{
        textPrimary: 'text-[#f5f5f5] font-serif',
        textSecondary: 'text-gray-400',
        textMuted: 'text-gray-500',
        accent: 'text-[#d4a574]',
        iconBox: 'bg-[#d4a574]/10 border border-[#d4a574]/30',
      }}
      buttonPrimaryClass="bg-[#d4a574] text-black font-semibold hover:bg-[#c49767]"
      buttonSecondaryClass="border border-[#d4a574]/40 text-[#d4a574] hover:bg-[#d4a574]/10"
      dividerClass="border-[#d4a574]/20"
      inputClass="placeholder:text-gray-600"
      shortcutClass="border-[#d4a574]/20 bg-[#111111] text-gray-500 hover:border-[#d4a574]/40"
      shortcutActiveClass="border-[#d4a574] bg-[#d4a574] text-black"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d4a574]/30 bg-[#d4a574]/5 px-3 py-1.5 text-xs text-[#d4a574]">
            <Sparkles className="h-3.5 w-3.5" /> Quiet luxury
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Deep.',
        titleAccent: 'Refined.',
        description: 'Deep blacks, warm golds, and refined serif typography convey a sense of quiet luxury. Less noise. More weight.',
        primaryCta: { label: 'Explore collection', href: '#features', icon: ArrowUpRight },
        secondaryCta: { label: 'View overview', href: '#overview', icon: Play },
        tags: [
          { label: 'Deep blacks', dotColor: 'bg-[#0a0a0a] border border-[#d4a574]/50' },
          { label: 'Warm gold', dotColor: 'bg-[#d4a574]' },
          { label: 'Serif type', dotColor: 'bg-[#f5f5f5]' },
        ],
        preview: {
          title: 'Luxe surfaces',
          bg: 'bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]',
          content: (
            <div className="w-full max-w-[250px] border border-[#d4a574]/30 bg-[#111111] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4a574]/15 border border-[#d4a574]/30">
                  <Crown className="h-5 w-5 text-[#d4a574]" />
                </div>
                <span className="rounded-full bg-[#d4a574]/10 border border-[#d4a574]/30 px-2 py-1 text-[10px] text-[#d4a574]">
                  LUXE
                </span>
              </div>
              <div className="h-2 w-2/3 rounded-full bg-[#d4a574]/60" />
              <div className="mt-3 h-1.5 w-1/2 rounded-full bg-[#d4a574]/25" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg border border-[#d4a574]/20" />
                <div className="h-14 rounded-lg border border-[#d4a574]/20 bg-[#d4a574]/5" />
                <div className="h-14 rounded-lg border border-[#d4a574]/20" />
              </div>
            </div>
          ),
          meta: [
            { label: 'Palette', value: 'Gold' },
            { label: 'Feel', value: 'Luxe' },
          ],
        },
        searchPlaceholder: 'Search luxe features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Crafted, not designed.',
        features: [
          { icon: Gem, title: 'Warm gold', desc: 'A single accent tone used sparingly.' },
          { icon: Star, title: 'Deep blacks', desc: 'True #0a0a0a for maximum contrast.' },
          { icon: Award, title: 'Serif type', desc: 'Refined serifs carry the luxury weight.' },
        ],
        stats: [
          { label: 'Accent colors', value: '01' },
          { label: 'Font families', value: '02' },
          { label: 'Glow radius', value: '60px' },
        ],
        shortcuts: [
          { icon: Gem, label: 'Collection' },
          { icon: Star, label: 'Rated' },
          { icon: Award, label: 'Awards' },
          { icon: Crown, label: 'Premium' },
        ],
        footerLeft: 'Dark Luxe · Quiet by design',
        footerRight: 'Deep · Gold · Refined',
      }}
    />
  );
}