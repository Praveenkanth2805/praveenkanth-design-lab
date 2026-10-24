'use client';

import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, Star, Zap, Layers,
  Search, Bell, User, Settings, Heart, Play, X,
} from 'lucide-react';
import { useState } from 'react';
import PureGlass from '@/components/ui/PureGlass';

const features = [
  { icon: Layers, title: 'Multi-layer', desc: 'Depth in every edge' },
  { icon: Star, title: 'Specular light', desc: 'Highlights that catch the eye' },
  { icon: Zap, title: 'Color diffusion', desc: 'Vibrant colors through glass' },
];

const stats = [
  { label: 'Glass layers', value: '03' },
  { label: 'Light sources', value: '04' },
  { label: 'Blur radius', value: '32px' },
];

const shortcuts = [
  { icon: Bell, label: 'Notifications' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
  { icon: Heart, label: 'Favorites' },
];

export default function GlassmorphismPage() {
  const [search, setSearch] = useState('');
  const [activeShortcut, setActiveShortcut] = useState('Profile');

  const filteredFeatures = features.filter((feature) =>
    `${feature.title} ${feature.desc}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#09091a] px-4 pb-8 pt-24 text-white sm:px-8 sm:pt-28 lg:px-12">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-violet-600/35 blur-[120px]" />
        <div className="absolute -right-24 top-[15%] h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute bottom-[-150px] left-[25%] h-[420px] w-[420px] rounded-full bg-pink-500/25 blur-[130px]" />
        <div className="absolute left-[45%] top-[40%] h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
          <PureGlass className="relative overflow-hidden p-6 sm:p-9 lg:p-11" intensity="heavy">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/[0.08] sm:h-80 sm:w-80" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/[0.08] sm:h-64 sm:w-64" />

            <div className="relative">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200/20 bg-violet-300/10 px-3 py-1.5 text-xs text-violet-100">
                <Sparkles className="h-3.5 w-3.5" />
                Next-generation UI design
              </div>

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 shadow-inner backdrop-blur-xl">
                  <Sparkles className="h-6 w-6 text-violet-100" />
                </div>
                <div>
                  <p className="text-sm text-white/50">DESIGN SYSTEM</p>
                  <p className="font-medium text-white/90">Pure Glass</p>
                </div>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Experience
                <span className="block bg-gradient-to-r from-violet-200 via-cyan-100 to-pink-200 bg-clip-text pb-2 text-transparent">
                  Pure Glass.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                Discover a world of transparency, ambient lighting and
                layered depth. A refined glassmorphism experience crafted
                for modern interfaces.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href="#features"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-violet-950 shadow-xl shadow-black/20"
                >
                  Explore features
                  <ArrowRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  href="#overview"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.15]"
                >
                  <Play className="h-4 w-4" />
                  View overview
                </motion.a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-xs text-white/55">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Frosted surfaces
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  Ambient lighting
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-300" />
                  Layered depth
                </span>
              </div>
            </div>
          </PureGlass>

          {/* Glass preview */}
          <PureGlass className="flex flex-col p-5 sm:p-7" intensity="medium">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs tracking-wider text-white/45">LIVE PREVIEW</p>
                <h2 className="mt-1 text-lg font-semibold">Glass surfaces</h2>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-pink-300" />
                <span className="h-2 w-2 rounded-full bg-amber-200" />
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </div>
            </div>

            <div className="relative flex min-h-[230px] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-indigo-400/10 to-cyan-300/10 p-5">
              <div className="absolute left-4 top-6 h-24 w-24 rounded-full bg-pink-400/30 blur-3xl" />
              <div className="absolute bottom-4 right-4 h-28 w-28 rounded-full bg-cyan-300/25 blur-3xl" />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-[250px] rounded-2xl border border-white/30 bg-white/[0.12] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/15">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-emerald-200/20 bg-emerald-300/10 px-2 py-1 text-[10px] text-emerald-100">
                    ACTIVE
                  </span>
                </div>

                <div className="h-2 w-2/3 rounded-full bg-white/75" />
                <div className="mt-3 h-1.5 w-1/2 rounded-full bg-white/30" />

                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-14 rounded-lg border border-white/15 bg-white/15" />
                  <div className="h-14 rounded-lg border border-white/10 bg-white/[0.07]" />
                  <div className="h-14 rounded-lg border border-white/10 bg-white/[0.07]" />
                </div>
              </motion.div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs text-white/45">Transparency</p>
                <p className="mt-1 text-lg font-semibold">Frosted</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs text-white/45">Visual depth</p>
                <p className="mt-1 text-lg font-semibold">Layered</p>
              </div>
            </div>
          </PureGlass>
        </div>

        {/* Search */}
        <PureGlass className="mt-5 flex items-center gap-3 rounded-2xl p-2" intensity="medium">
          <Search className="ml-3 h-5 w-5 shrink-0 text-white/45" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search glass features..."
            aria-label="Search glass features"
            className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-white/35"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
              className="rounded-lg p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <span className="hidden rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/45 sm:block">
            {filteredFeatures.length} results
          </span>
        </PureGlass>

        {/* Features */}
        <section id="features" className="mt-10 scroll-mt-24">
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-200/70">
              The details
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Designed to feel different.
            </h2>
            <p className="mt-2 text-sm text-white/45">
              Every surface has a purpose. Every detail adds depth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
              >
                <PureGlass className="h-full p-5 sm:p-6" intensity="light">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                      <feature.icon className="h-5 w-5 text-violet-100" />
                    </div>
                    <span className="text-xs text-white/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {feature.desc}
                  </p>
                  <div className="mt-5 h-px bg-gradient-to-r from-violet-300/40 via-white/10 to-transparent" />
                </PureGlass>
              </motion.div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <PureGlass className="p-8 text-center" intensity="light">
              <Search className="mx-auto h-6 w-6 text-white/40" />
              <p className="mt-3 font-medium">No matching features</p>
              <p className="mt-1 text-sm text-white/45">
                Try another search term.
              </p>
            </PureGlass>
          )}
        </section>

        {/* Overview */}
        <section id="overview" className="mt-5 scroll-mt-24">
          <PureGlass className="grid grid-cols-1 divide-y divide-white/10 p-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0" intensity="medium">
            {stats.map((stat) => (
              <div key={stat.label} className="px-5 py-5 text-center sm:py-6">
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-white/45">{stat.label}</p>
              </div>
            ))}
          </PureGlass>
        </section>

        {/* Quick access */}
        <section className="mt-5">
          <PureGlass className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6" intensity="light">
            <div>
              <h2 className="text-sm font-semibold">Quick access</h2>
              <p className="mt-1 text-xs text-white/40">
                Select an interface shortcut
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:flex sm:gap-3">
              {shortcuts.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveShortcut(label)}
                  aria-label={label}
                  aria-pressed={activeShortcut === label}
                  title={label}
                  className={`flex h-11 items-center justify-center rounded-xl border transition sm:w-12 ${
                    activeShortcut === label
                      ? 'border-white/30 bg-white/15 text-white'
                      : 'border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </button>
              ))}
            </div>

            <p aria-live="polite" className="text-xs text-white/40 sm:text-right">
              {activeShortcut} selected
            </p>
          </PureGlass>
        </section>

        <footer className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/35 sm:flex-row">
          <p>Pure Glass · Crafted with light</p>
          <p>Transparency · Depth · Motion</p>
        </footer>
      </div>
    </main>
  );
}
