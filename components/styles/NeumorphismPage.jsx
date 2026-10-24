'use client';

import {
  Sun, ArrowRight, Layers, Star, Play, Bell, User, Settings, Moon,
} from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const NeumoCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]',
    medium: 'shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]',
    heavy: 'shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff]',
  };
  return (
    <div className={`bg-[#e0e5ec] rounded-3xl ${s[intensity]} ${className}`}>
      {children}
    </div>
  );
};

export default function NeumorphismPage() {
  return (
    <StylePageShell
      pageClass="bg-[#e0e5ec]"
      Card={NeumoCard}
      ambient={null}
      theme={{
        textPrimary: 'text-gray-700',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-500',
        accent: 'text-gray-700',
        iconBox: 'bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]',
      }}
      buttonPrimaryClass="bg-[#e0e5ec] shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] text-gray-700 active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]"
      buttonSecondaryClass="bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] text-gray-600"
      dividerClass="border-[#b8b9be]/50"
      inputClass="placeholder:text-gray-500"
      shortcutClass="border-transparent bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] text-gray-600"
      shortcutActiveClass="bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] text-gray-800"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] px-3 py-1.5 text-xs text-gray-600">
            <Sun className="h-3.5 w-3.5" /> Soft UI evolution
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Soft.',
        titleAccent: 'Embossed.',
        description: 'Interfaces that mimic physical surfaces through subtle highlights and shadows. Elements feel carved from the same material as the background.',
        primaryCta: { label: 'Explore features', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'View overview', href: '#overview', icon: Play },
        tags: [
          { label: 'Raised surfaces', dotColor: 'bg-gray-400' },
          { label: 'Inset states', dotColor: 'bg-gray-500' },
          { label: 'Monochrome', dotColor: 'bg-gray-600' },
        ],
        preview: {
          title: 'Soft surfaces',
          bg: 'bg-[#e0e5ec]',
          content: (
            <div className="w-full max-w-[250px] bg-[#e0e5ec] rounded-2xl shadow-[6px_6px_14px_#b8b9be,-6px_-6px_14px_#ffffff] p-4">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff]">
                  <Sun className="h-5 w-5 text-gray-700" />
                </div>
                <span className="rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] px-2 py-1 text-[10px] text-gray-500">
                  SOFT
                </span>
              </div>
              <div className="h-2 w-2/3 rounded-full bg-[#b8b9be]/50" />
              <div className="mt-3 h-1.5 w-1/2 rounded-full bg-[#b8b9be]/30" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]" />
                <div className="h-14 rounded-lg bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]" />
                <div className="h-14 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]" />
              </div>
            </div>
          ),
          meta: [
            { label: 'Style', value: 'Soft' },
            { label: 'Depth', value: 'Embossed' },
          ],
        },
        searchPlaceholder: 'Search soft features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Softness with logic.',
        features: [
          { icon: Layers, title: 'Dual shadows', desc: 'Light from one side, shadow from the other.' },
          { icon: Star, title: 'Monochrome', desc: 'Same-color surfaces create physical feel.' },
          { icon: Sun, title: 'Inset states', desc: 'Pressed buttons become debossed holes.' },
        ],
        stats: [
          { label: 'Shadow pairs', value: '02' },
          { label: 'Surface tones', value: '01' },
          { label: 'Blur radius', value: '12px' },
        ],
        shortcuts: [
          { icon: Bell, label: 'Alerts' },
          { icon: User, label: 'Profile' },
          { icon: Settings, label: 'Settings' },
          { icon: Moon, label: 'Theme' },
        ],
        footerLeft: 'Neumorphism · One surface, one light',
        footerRight: 'Soft · Embossed · Monochrome',
      }}
    />
  );
}