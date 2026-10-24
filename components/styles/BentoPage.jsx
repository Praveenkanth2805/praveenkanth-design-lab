'use client';

import {
  Grid3x3, ArrowRight, BarChart3, Users, Target, Play, Zap, TrendingUp, Bell, User, Settings,
} from 'lucide-react';
import StylePageShell from './shared/StylePageShell';

const BentoCard = ({ children, className = '', intensity = 'medium' }) => {
  const s = {
    light: 'border border-gray-200',
    medium: 'border border-gray-200 shadow-sm',
    heavy: 'border border-gray-200 shadow-lg',
  };
  return <div className={`bg-white rounded-3xl ${s[intensity]} ${className}`}>{children}</div>;
};

export default function BentoPage() {
  return (
    <StylePageShell
      pageClass="bg-gray-100"
      Card={BentoCard}
      ambient={
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 h-80 w-80 rounded-full bg-blue-300/30 blur-[100px]" />
          <div className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full bg-purple-300/30 blur-[100px]" />
        </div>
      }
      theme={{
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-600',
        textMuted: 'text-gray-400',
        accent: 'text-blue-600',
        iconBox: 'bg-blue-50 border border-blue-100',
      }}
      buttonPrimaryClass="bg-gray-900 text-white hover:bg-gray-800"
      buttonSecondaryClass="border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
      dividerClass="border-gray-200"
      inputClass="placeholder:text-gray-300"
      shortcutClass="border-gray-200 bg-white text-gray-500"
      shortcutActiveClass="border-gray-900 bg-gray-900 text-white"
      content={{
        badge: (
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs text-blue-700">
            <Grid3x3 className="h-3.5 w-3.5" /> Asymmetric layout system
          </div>
        ),
        label: 'DESIGN SYSTEM',
        title: 'Compartments.',
        titleAccent: 'Balanced.',
        description: 'Asymmetric grid compartments inspired by Japanese bento boxes. Every panel holds purpose, every gap holds rhythm.',
        primaryCta: { label: 'See layout', href: '#features', icon: ArrowRight },
        secondaryCta: { label: 'Overview', href: '#overview', icon: Play },
        tags: [
          { label: 'Bento grid', dotColor: 'bg-blue-500' },
          { label: 'Modular', dotColor: 'bg-purple-500' },
          { label: 'Responsive', dotColor: 'bg-green-500' },
        ],
        preview: {
          title: 'Bento blocks',
          bg: 'bg-gray-50',
          content: (
            <div className="grid w-full max-w-[260px] grid-cols-3 grid-rows-3 gap-1.5">
              <div className="col-span-2 row-span-2 rounded-xl bg-blue-500 p-2 text-white flex flex-col justify-between">
                <BarChart3 className="h-4 w-4" />
                <p className="text-[10px] font-bold">+42%</p>
              </div>
              <div className="rounded-xl bg-purple-500 p-2 text-white">
                <Users className="h-3.5 w-3.5" />
              </div>
              <div className="rounded-xl bg-green-500 p-2 text-white">
                <Target className="h-3.5 w-3.5" />
              </div>
              <div className="col-span-3 rounded-xl bg-orange-500 p-2 text-white flex items-center justify-between">
                <p className="text-[10px] font-semibold">Trending up</p>
                <TrendingUp className="h-3.5 w-3.5" />
              </div>
            </div>
          ),
          meta: [
            { label: 'Cells', value: '05' },
            { label: 'Gap', value: '6px' },
          ],
        },
        searchPlaceholder: 'Search bento features...',
        featuresSubtitle: 'The details',
        featuresTitle: 'Every cell earns its space.',
        features: [
          { icon: Grid3x3, title: 'Asymmetric', desc: 'Uneven compartments — no rigid 3-column trap.' },
          { icon: Zap, title: 'Purposeful', desc: 'Each panel has a single job. No filler.' },
          { icon: Target, title: 'Responsive', desc: 'Collapses gracefully on small screens.' },
        ],
        stats: [
          { label: 'Grid columns', value: '04' },
          { label: 'Gap size', value: '12px' },
          { label: 'Radius', value: '24px' },
        ],
        shortcuts: [
          { icon: BarChart3, label: 'Analytics' },
          { icon: Users, label: 'Users' },
          { icon: Target, label: 'Goals' },
          { icon: Bell, label: 'Alerts' },
        ],
        footerLeft: 'Bento · Every cell counts',
        footerRight: 'Modular · Balanced · Adaptive',
      }}
    />
  );
}