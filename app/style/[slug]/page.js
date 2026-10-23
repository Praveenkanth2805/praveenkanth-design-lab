import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

import GlassmorphismPage from '@/components/styles/GlassmorphismPage';
import ClaymorphismPage from '@/components/styles/ClaymorphismPage';
import NeumorphismPage from '@/components/styles/NeumorphismPage';
import BrutalismPage from '@/components/styles/BrutalismPage';
import BentoPage from '@/components/styles/BentoPage';
import DarkLuxePage from '@/components/styles/DarkLuxePage';
import RetroFuturismPage from '@/components/styles/RetroFuturismPage';
import Y2KPage from '@/components/styles/Y2KPage';
import MemphisPage from '@/components/styles/MemphisPage';
import MinimalismPage from '@/components/styles/MinimalismPage';
import FlatPage from '@/components/styles/FlatPage';

const styleComponents = {
  glassmorphism: GlassmorphismPage,
  claymorphism: ClaymorphismPage,
  neumorphism: NeumorphismPage,
  brutalism: BrutalismPage,
  bento: BentoPage,
  'dark-luxe': DarkLuxePage,
  'retro-futurism': RetroFuturismPage,
  y2k: Y2KPage,
  memphis: MemphisPage,
  minimalism: MinimalismPage,
  flat: FlatPage,
};

const styleList = [
  { slug: 'glassmorphism', title: 'Glassmorphism' },
  { slug: 'claymorphism', title: 'Claymorphism' },
  { slug: 'neumorphism', title: 'Neumorphism' },
  { slug: 'brutalism', title: 'Brutalism' },
  { slug: 'bento', title: 'Bento Grid' },
  { slug: 'dark-luxe', title: 'Dark Luxe' },
  { slug: 'retro-futurism', title: 'Retro-Futurism' },
  { slug: 'y2k', title: 'Y2K' },
  { slug: 'memphis', title: 'Memphis' },
  { slug: 'minimalism', title: 'Minimalism' },
  { slug: 'flat', title: 'Flat Design' },
];

export default function StylePage({ params }) {
  const StyleComponent = styleComponents[params.slug];

  if (!StyleComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="text-2xl mb-4">Style not found</p>
          <Link href="/" className="text-purple-400 underline">Back to dashboard</Link>
        </div>
      </div>
    );
  }

  const idx = styleList.findIndex((s) => s.slug === params.slug);
  const prev = styleList[(idx - 1 + styleList.length) % styleList.length];
  const next = styleList[(idx + 1) % styleList.length];

  return (
    <div className="relative">
      <StyleComponent />

      {/* Floating pill nav */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-xl border border-white/15 rounded-full p-1.5 shadow-2xl">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white/80 hover:bg-white/10 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <div className="w-px h-5 bg-white/15" />
          <Link
            href={`/style/${prev.slug}`}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={`Previous: ${prev.title}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <span className="px-3 text-xs text-white font-medium whitespace-nowrap min-w-[110px] text-center">
            {styleList[idx].title}
          </span>
          <Link
            href={`/style/${next.slug}`}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={`Next: ${next.title}`}
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Credit watermark — visible on every style page */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-none">
        <div className="text-[10px] text-white bg-black/50 backdrop-blur-md border border-white/15 rounded-full px-3 py-1">
          Created by Praveenkanth G · Software Developer, Villupuram
        </div>
      </div>
    </div>
  );
}