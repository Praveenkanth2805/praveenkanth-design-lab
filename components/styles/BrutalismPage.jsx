'use client';

import { Zap, ArrowRight, Layers, Star, Play, Bell, User, Settings, Heart } from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const BrutalCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'shadow-[4px_4px_0_#000]',
    medium: 'shadow-[6px_6px_0_#000]',
    heavy: 'shadow-[10px_10px_0_#000]',
  };
  return (
    <div className={`bg-[#FFFDF5] border-4 border-black ${s[intensity]} ${className}`}>
      {children}
    </div>
  );
};

export default function BrutalismPage() {
  return (
    <StylePageShell
      pageClass="bg-[#FFD93D]"
      Card={BrutalCard}
      ambient={
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF6B6B] rounded-full opacity-40" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#C4B5FD] rotate-45 opacity-40" />
        </div>
      }
      theme={{
        textPrimary: 'text-black',
        textSecondary: 'text-gray-800',
        textMuted: 'text-gray-600',
        accent: 'text-[#FF6B6B]',
        iconBox: 'bg-black border-2 border-black',
      }}
      buttonPrimaryClass="bg-black text-white font-black uppercase border-4 border-black shadow-[4px_4px_0_#FF6B6B]"
      buttonSecondaryClass="bg-white text-black font-bold uppercase border-4 border-black"
      dividerClass="border-black"
      inputClass="placeholder:text-gray-500 font-mono"
      shortcutClass="border-2 border-black bg-white text-black shadow-[3px_3px_0_#000]"
      shortcutActiveClass="border-2 border-black bg-black text-white shadow-[3px_3px_0_#FF6B6B]"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5" /> Raw design philosophy
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Bold.',
        titleAccent: 'Unapologetic.',
        description: 'Thick borders, hard shadows, zero gradients. Brutalism rejects polish in favour of honest, raw structure.',
        primaryCta: { label: 'See features', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'Overview', href: '#overview', icon: Play },
        tags: [
          { label: 'Hard shadows', dotColor: 'bg-black' },
          { label: 'Thick borders', dotColor: 'bg-[#FF6B6B]' },
          { label: 'No gradients', dotColor: 'bg-[#C4B5FD]' },
        ],
        preview: {
          title: 'Brutal blocks',
          bg: 'bg-[#FFFDF5] border-2 border-black',
          content: (
            <div className="w-full max-w-[250px] bg-[#FF6B6B] border-4 border-black shadow-[6px_6px_0_#000] p-4 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center bg-black">
                  <Zap className="h-5 w-5 text-[#FFD93D]" />
                </div>
                <span className="bg-black px-2 py-1 text-[10px] font-black">RAW</span>
              </div>
              <div className="h-3 w-2/3 bg-black" />
              <div className="mt-2 h-2 w-1/2 bg-black/60" />
            </div>
          ),
          meta: [
            { label: 'Style', value: 'Raw' },
            { label: 'Border', value: '4px' },
          ],
        },
        searchPlaceholder: 'Search brutal features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Structure over style.',
        features: [
          { icon: Layers, title: 'Hard shadows', desc: 'No blur — offset shadows in pure black.' },
          { icon: Star, title: 'Thick borders', desc: 'Everything is framed, nothing floats.' },
          { icon: Zap, title: 'Instant snap', desc: 'No easing. Interactions feel tactile and immediate.' },
        ],
        stats: [
          { label: 'Border weight', value: '4px' },
          { label: 'Shadow offset', value: '10px' },
          { label: 'Radius', value: '0px' },
        ],
        shortcuts: [
          { icon: Bell, label: 'Alerts' },
          { icon: User, label: 'Profile' },
          { icon: Settings, label: 'Settings' },
          { icon: Heart, label: 'Favorites' },
        ],
        footerLeft: 'Brutalism · Structure is style',
        footerRight: 'Raw · Bold · Honest',
      }}
    />
  );
}