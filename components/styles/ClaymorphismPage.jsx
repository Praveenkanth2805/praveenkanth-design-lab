'use client';

import { Sparkles, ArrowRight, Layers, Star, Zap, Bell, User, Settings, Heart, Play } from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const ClayCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'shadow-[4px_4px_10px_#b8b9be,-4px_-4px_10px_#ffffff]',
    medium: 'shadow-[6px_6px_14px_#b8b9be,-6px_-6px_14px_#ffffff]',
    heavy: 'shadow-[10px_10px_22px_#b8b9be,-10px_-10px_22px_#ffffff]',
  };
  return <div className={`bg-[#e0e5ec] rounded-3xl ${s[intensity]} ${className}`}>{children}</div>;
};

export default function ClaymorphismPage() {
  return (
    <StylePageShell
      pageClass="bg-[#e0e5ec]"
      Card={ClayCard}
      ambient={
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-purple-300/30 blur-[120px]" />
          <div className="absolute -right-24 top-[30%] h-96 w-96 rounded-full bg-pink-300/30 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-300/30 blur-[130px]" />
        </div>
      }
      theme={{
        textPrimary: 'text-gray-700',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-500',
        accent: 'text-purple-500',
        iconBox: 'bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff]',
      }}
      buttonPrimaryClass="bg-[#e0e5ec] shadow-[4px_4px_10px_#b8b9be,-4px_-4px_10px_#ffffff] text-gray-700 hover:shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]"
      buttonSecondaryClass="bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] text-gray-600"
      dividerClass="border-[#b8b9be]/40"
      inputClass="placeholder:text-gray-400"
      shortcutClass="border-transparent bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] text-gray-500"
      shortcutActiveClass="bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] text-purple-500"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] px-3 py-1.5 text-xs text-gray-600">
            <Sparkles className="h-3.5 w-3.5" /> Soft & tactile design
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Friendly.',
        titleAccent: 'Claymorphic.',
        description: 'Soft 3D surfaces with dual shadows mimic the friendly feel of hand-sculpted clay. Every element feels touchable.',
        primaryCta: { label: 'Explore features', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'View overview', href: '#overview', icon: Play },
        tags: [
          { label: 'Soft shadows', dotColor: 'bg-purple-400' },
          { label: 'Rounded forms', dotColor: 'bg-pink-400' },
          { label: '3D depth', dotColor: 'bg-blue-400' },
        ],
        preview: {
          title: 'Clay surfaces',
          bg: 'bg-[#e0e5ec]',
          content: (
            <div className="w-full max-w-[250px] bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] p-4">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff]">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                </div>
                <span className="rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] px-2 py-1 text-[10px] text-gray-500">SOFT</span>
              </div>
              <div className="h-2 w-2/3 rounded-full bg-[#b8b9be]/60" />
              <div className="mt-3 h-1.5 w-1/2 rounded-full bg-[#b8b9be]/40" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]" />
                <div className="h-14 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]" />
                <div className="h-14 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]" />
              </div>
            </div>
          ),
          meta: [
            { label: 'Feel', value: 'Soft' },
            { label: 'Depth', value: '3D' },
          ],
        },
        searchPlaceholder: 'Search clay features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Softness with structure.',
        features: [
          { icon: Layers, title: 'Dual shadows', desc: 'Light from two sides creates real clay depth.' },
          { icon: Star, title: 'Friendly look', desc: 'Rounded forms make interfaces feel approachable.' },
          { icon: Zap, title: 'Tactile response', desc: 'Press animations mimic squishing real clay.' },
        ],
        stats: [
          { label: 'Shadow layers', value: '02' },
          { label: 'Radius', value: '24px' },
          { label: 'Feather', value: '16px' },
        ],
        shortcuts: [
          { icon: Bell, label: 'Notifications' },
          { icon: User, label: 'Profile' },
          { icon: Settings, label: 'Settings' },
          { icon: Heart, label: 'Favorites' },
        ],
        footerLeft: 'Claymorphism · Sculpted with care',
        footerRight: 'Soft · Friendly · Tactile',
      }}
    />
  );
}