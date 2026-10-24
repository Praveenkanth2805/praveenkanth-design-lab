'use client';

import {
  Palette, ArrowRight, Heart, Star, Zap, Check, Play, Bell, User, Settings,
} from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const FlatCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'shadow-sm',
    medium: 'shadow',
    heavy: 'shadow-lg',
  };
  return <div className={`bg-white rounded-2xl ${s[intensity]} ${className}`}>{children}</div>;
};

export default function FlatPage() {
  return (
    <StylePageShell
      pageClass="bg-[#f0f2f5]"
      Card={FlatCard}
      ambient={null}
      theme={{
        textPrimary: 'text-gray-800',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-400',
        accent: 'text-[#3498db]',
        iconBox: 'bg-[#3498db]/10',
      }}
      buttonPrimaryClass="bg-[#2ecc71] text-white font-semibold hover:bg-[#27ae60]"
      buttonSecondaryClass="bg-[#3498db] text-white font-semibold hover:bg-[#2980b9]"
      dividerClass="border-gray-200"
      inputClass="placeholder:text-gray-300"
      shortcutClass="border-gray-200 bg-white text-gray-500"
      shortcutActiveClass="border-[#3498db] bg-[#3498db] text-white"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#3498db]/10 px-3 py-1.5 text-xs text-[#3498db]">
            <Palette className="h-3.5 w-3.5" /> Simple & bold
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Simple.',
        titleAccent: 'Clear.',
        description: 'Two-dimensional layouts with bold solid colors — no gradients, no shadows. Iconography and typography do all the work.',
        primaryCta: { label: 'Get started', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'See more', href: '#overview', icon: Play },
        tags: [
          { label: 'Solid colors', dotColor: 'bg-[#3498db]' },
          { label: 'No shadows', dotColor: 'bg-[#2ecc71]' },
          { label: 'Flat icons', dotColor: 'bg-[#e74c3c]' },
        ],
        preview: {
          title: 'Flat surfaces',
          bg: 'bg-gray-50',
          content: (
            <div className="w-full max-w-[250px] bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3498db]">
                  <Palette className="h-5 w-5 text-white" />
                </div>
                <span className="rounded-full bg-[#2ecc71] px-2 py-1 text-[10px] text-white font-semibold">
                  FLAT
                </span>
              </div>
              <div className="h-2 w-2/3 rounded-full bg-[#3498db]" />
              <div className="mt-3 h-1.5 w-1/2 rounded-full bg-gray-300" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg bg-[#e74c3c]" />
                <div className="h-14 rounded-lg bg-[#f39c12]" />
                <div className="h-14 rounded-lg bg-[#9b59b6]" />
              </div>
            </div>
          ),
          meta: [
            { label: 'Style', value: 'Flat' },
            { label: 'Depth', value: '0px' },
          ],
        },
        searchPlaceholder: 'Search flat features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Nothing to hide behind.',
        features: [
          { icon: Palette, title: 'Solid colors', desc: 'Vibrant flat fills. No gradients, no blends.' },
          { icon: Check, title: 'Clean shapes', desc: 'Simple icons and geometry — no skeuomorphism.' },
          { icon: Zap, title: 'Instant feel', desc: 'No shadows means no waiting for depth cues.' },
        ],
        stats: [
          { label: 'Colors', value: '04' },
          { label: 'Shadows', value: '00' },
          { label: 'Radius', value: '12px' },
        ],
        shortcuts: [
          { icon: Heart, label: 'Faves' },
          { icon: Star, label: 'Starred' },
          { icon: Zap, label: 'Quick' },
          { icon: Check, label: 'Done' },
        ],
        footerLeft: 'Flat Design · Clarity wins',
        footerRight: 'Simple · Bold · Fast',
      }}
    />
  );
}