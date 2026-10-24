'use client';

import {
  Rocket, ArrowRight, Gamepad2, Music, Star, Play, Zap, Bell, User, Settings,
} from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const RetroCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'border border-[#00f5d4]/25 shadow-[0_0_15px_rgba(0,245,212,0.08)]',
    medium: 'border border-[#00f5d4]/40 shadow-[0_0_25px_rgba(0,245,212,0.15)]',
    heavy: 'border-2 border-[#00f5d4] shadow-[0_0_50px_rgba(0,245,212,0.25)]',
  };
  return <div className={`bg-[#16213e] rounded-2xl ${s[intensity]} ${className}`}>{children}</div>;
};

export default function RetroFuturismPage() {
  return (
    <StylePageShell
      pageClass="bg-[#1a1a2e]"
      Card={RetroCard}
      ambient={
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-10 h-2 w-2 rounded-full bg-[#00f5d4] shadow-[0_0_20px_#00f5d4]" />
          <div className="absolute top-32 right-1/4 h-1.5 w-1.5 rounded-full bg-[#ff00aa] shadow-[0_0_15px_#ff00aa]" />
          <div className="absolute bottom-20 left-1/3 h-2 w-2 rounded-full bg-[#00f5d4] shadow-[0_0_20px_#00f5d4]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      }
      theme={{
        textPrimary: 'text-[#00f5d4] font-mono',
        textSecondary: 'text-[#00f5d4]/60',
        textMuted: 'text-[#00f5d4]/40',
        accent: 'text-[#ff00aa]',
        iconBox: 'bg-[#00f5d4]/10 border border-[#00f5d4]/40',
      }}
      buttonPrimaryClass="border-2 border-[#00f5d4] text-[#00f5d4] font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)] hover:bg-[#00f5d4]/10"
      buttonSecondaryClass="border border-[#00f5d4]/40 text-[#00f5d4]/70 hover:border-[#00f5d4]/70"
      dividerClass="border-[#00f5d4]/20"
      inputClass="placeholder:text-[#00f5d4]/30 font-mono"
      shortcutClass="border-[#00f5d4]/30 bg-[#16213e] text-[#00f5d4]/60"
      shortcutActiveClass="border-[#00f5d4] bg-[#00f5d4]/10 text-[#00f5d4] shadow-[0_0_15px_rgba(0,245,212,0.4)]"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 border border-[#00f5d4]/40 bg-[#00f5d4]/5 px-3 py-1.5 text-xs text-[#00f5d4] font-mono">
            <Rocket className="h-3.5 w-3.5" /> ARCADE_SYSTEM v2.0
          </div>
        ),
        label: 'DESIGN_SYSTEM',
        title: 'Neon.',
        titleAccent: 'Synthwave.',
        description: 'Neon glows, synthwave vibes, and pixel-perfect arcade aesthetics. Cyberpunk dreams rendered in cyan and magenta.',
        primaryCta: { label: 'INSERT_COIN', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'VIEW_DATA', href: '#overview', icon: Play },
        tags: [
          { label: 'Neon glow', dotColor: 'bg-[#00f5d4] shadow-[0_0_8px_#00f5d4]' },
          { label: 'Grid lines', dotColor: 'bg-[#ff00aa]' },
          { label: 'Mono type', dotColor: 'bg-[#00f5d4]/60' },
        ],
        preview: {
          title: 'NEO_CARD.exe',
          bg: 'bg-[#1a1a2e] border border-[#00f5d4]/30',
          content: (
            <div className="w-full max-w-[250px] border-2 border-[#00f5d4] bg-[#16213e] rounded-lg p-4 shadow-[0_0_25px_rgba(0,245,212,0.3)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-[#00f5d4]">
                  <Rocket className="h-5 w-5 text-[#00f5d4]" />
                </div>
                <span className="border border-[#00f5d4] px-2 py-1 text-[10px] text-[#00f5d4] font-mono">
                  ONLINE
                </span>
              </div>
              <div className="h-2 w-2/3 bg-[#00f5d4] shadow-[0_0_10px_#00f5d4]" />
              <div className="mt-3 h-1.5 w-1/2 bg-[#00f5d4]/40" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-14 border border-[#00f5d4]/50" />
                <div className="h-14 border border-[#00f5d4]/30 bg-[#00f5d4]/5" />
                <div className="h-14 border border-[#00f5d4]/50" />
              </div>
            </div>
          ),
          meta: [
            { label: 'MODE', value: 'NEON' },
            { label: 'YEAR', value: '1985' },
          ],
        },
        searchPlaceholder: '> SEARCH_SYSTEM...',
        featuresSubtitle: '// SYSTEM_FEATURES',
        featuresTitle: 'Built for the arcade.',
        features: [
          { icon: Zap, title: 'NEON_GLOW', desc: 'Every border emits cyan light. Every surface hums.' },
          { icon: Gamepad2, title: 'PIXEL_PERFECT', desc: 'Monospace type. Snappy interactions. Zero compromise.' },
          { icon: Star, title: 'SYNTHWAVE_UI', desc: 'Magenta + cyan duotone on deep space navy.' },
        ],
        stats: [
          { label: 'GLOW_RADIUS', value: '50px' },
          { label: 'GRID_SIZE', value: '40px' },
          { label: 'FRAME_RATE', value: '60fps' },
        ],
        shortcuts: [
          { icon: Gamepad2, label: 'Play' },
          { icon: Music, label: 'Audio' },
          { icon: Star, label: 'Rank' },
          { icon: Bell, label: 'Alerts' },
        ],
        footerLeft: 'RETRO_FUTURISM · SYSTEM_ONLINE',
        footerRight: 'NEON · SYNTHWAVE · ARCADE',
      }}
    />
  );
}