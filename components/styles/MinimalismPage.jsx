'use client';

import { Circle, ArrowRight, Layers, Star, Minus, Play, Search as SearchIcon, Bell, User, Settings, Heart } from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const MinimalCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'border border-gray-200',
    medium: 'border border-gray-200 shadow-sm',
    heavy: 'border border-gray-200 shadow-md',
  };
  return <div className={`bg-white rounded-2xl ${s[intensity]} ${className}`}>{children}</div>;
};

export default function MinimalismPage() {
  return (
    <StylePageShell
      pageClass="bg-white"
      Card={MinimalCard}
      ambient={null}
      theme={{
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-400',
        accent: 'text-gray-500',
        iconBox: 'bg-gray-50 border border-gray-200',
      }}
      buttonPrimaryClass="bg-black text-white hover:bg-gray-800"
      buttonSecondaryClass="border border-gray-300 bg-white text-gray-900"
      dividerClass="border-gray-200"
      inputClass="placeholder:text-gray-300"
      shortcutClass="border-gray-200 bg-white text-gray-500"
      shortcutActiveClass="border-black bg-black text-white"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-500">
            <Circle className="h-3 w-3" strokeWidth={3} /> Less, but better
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Less is',
        titleAccent: 'more.',
        description: 'Clean, functional, content-first. Whitespace is the hero; ornamentation is the enemy.',
        primaryCta: { label: 'Learn more', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'Overview', href: '#overview', icon: Play },
        tags: [
          { label: 'Whitespace', dotColor: 'bg-gray-300' },
          { label: 'Typography', dotColor: 'bg-gray-500' },
          { label: 'Clarity', dotColor: 'bg-black' },
        ],
        preview: {
          title: 'Quiet surfaces',
          bg: 'bg-gray-50',
          content: (
            <div className="w-full max-w-[250px] border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-6">
                <Circle className="h-5 w-5 text-black" strokeWidth={3} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Minimal</span>
              </div>
              <div className="h-2 w-2/3 bg-gray-900" />
              <div className="mt-3 h-1.5 w-1/2 bg-gray-300" />
              <div className="mt-6 h-px bg-gray-200" />
              <p className="mt-3 text-[10px] text-gray-400">Content first.</p>
            </div>
          ),
          meta: [
            { label: 'Style', value: 'Quiet' },
            { label: 'Radius', value: '12px' },
          ],
        },
        searchPlaceholder: 'Search…',
        featuresSubtitle: 'The details',
        featuresTitle: 'Nothing wasted.',
        features: [
          { icon: Layers, title: 'Whitespace', desc: 'Generous space lets content breathe.' },
          { icon: Star, title: 'Restraint', desc: 'One accent, one weight — nothing more.' },
          { icon: Minus, title: 'Typography', desc: 'Type does the work, not the decoration.' },
        ],
        stats: [
          { label: 'Elements', value: '03' },
          { label: 'Colors', value: '02' },
          { label: 'Noise', value: '00' },
        ],
        shortcuts: [
          { icon: Bell, label: 'Alerts' },
          { icon: User, label: 'Profile' },
          { icon: Settings, label: 'Settings' },
          { icon: Heart, label: 'Saved' },
        ],
        footerLeft: 'Minimalism · Quiet by design',
        footerRight: 'Less · Clean · Clear',
      }}
    />
  );
}