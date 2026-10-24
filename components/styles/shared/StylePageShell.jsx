'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

export default function StylePageShell({
  pageClass = '',
  ambient = null,
  Card,
  theme = {},
  content = {},
  buttonPrimaryClass = '',
  buttonSecondaryClass = '',
  inputClass = '',
  dividerClass = '',
  shortcutActiveClass = '',
  shortcutClass = '',
}) {
  const {
    badge, label, title, titleAccent, description,
    primaryCta, secondaryCta, tags = [],
    preview, searchPlaceholder = 'Search...',
    featuresSubtitle, featuresTitle, features = [],
    stats = [], shortcuts = [],
    footerLeft, footerRight,
  } = content;

  const t = {
    primary: theme.textPrimary || 'text-white',
    secondary: theme.textSecondary || 'text-white/70',
    muted: theme.textMuted || 'text-white/50',
    accent: theme.accent || 'text-violet-200',
  };

  const [search, setSearch] = useState('');
  const [activeShortcut, setActiveShortcut] = useState(shortcuts[0]?.label || '');
  const filtered = features.filter(f =>
    `${f.title} ${f.desc}`.toLowerCase().includes(search.toLowerCase())
  );

  const PrimaryIcon = primaryCta?.icon;
  const SecondaryIcon = secondaryCta?.icon;

  return (
    <main className={`relative isolate min-h-screen overflow-hidden px-4 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-12 ${pageClass}`}>
      {ambient}
      <div className="mx-auto max-w-6xl">
        {/* Hero row */}
        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
          <Card intensity="heavy" className="relative overflow-hidden p-6 sm:p-9 lg:p-11">
            {badge}
            {label && <p className={`text-sm ${t.muted}`}>{label}</p>}
            <h1 className={`text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${t.primary}`}>
              {title}
              {titleAccent && <span className={`block ${t.accent}`}>{titleAccent}</span>}
            </h1>
            <p className={`mt-5 max-w-lg text-sm leading-7 sm:text-base ${t.secondary}`}>{description}</p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && (
                  <motion.a
                    href={primaryCta.href}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ${buttonPrimaryClass}`}
                  >
                    {primaryCta.label}
                    {PrimaryIcon && <PrimaryIcon className="h-4 w-4" />}
                  </motion.a>
                )}
                {secondaryCta && (
                  <motion.a
                    href={secondaryCta.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ${buttonSecondaryClass}`}
                  >
                    {SecondaryIcon && <SecondaryIcon className="h-4 w-4" />}
                    {secondaryCta.label}
                  </motion.a>
                )}
              </div>
            )}

            {tags.length > 0 && (
              <div className={`mt-9 flex flex-wrap gap-x-5 gap-y-3 pt-5 text-xs border-t ${dividerClass} ${t.muted}`}>
                {tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${tag.dotColor}`} />
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </Card>

          {preview && (
            <Card intensity="medium" className="flex flex-col p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className={`text-xs tracking-wider ${t.muted}`}>LIVE PREVIEW</p>
                  <h2 className={`mt-1 text-lg font-semibold ${t.primary}`}>{preview.title}</h2>
                </div>
              </div>
              <div className={`relative flex min-h-[230px] flex-1 items-center justify-center overflow-hidden rounded-2xl p-5 ${preview.bg || ''}`}>
                {preview.content}
              </div>
              {preview.meta && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {preview.meta.map((m, i) => (
                    <div key={i} className={`rounded-xl border ${dividerClass} p-3`}>
                      <p className={`text-xs ${t.muted}`}>{m.label}</p>
                      <p className={`mt-1 text-lg font-semibold ${t.primary}`}>{m.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          )}
        </div>

        {/* Search */}
        <Card intensity="medium" className="mt-5 flex items-center gap-3 rounded-2xl p-2">
          <Search className={`ml-3 h-5 w-5 shrink-0 ${t.muted}`} />
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className={`min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none ${t.primary} ${inputClass}`}
          />
          {search && (
            <button onClick={() => setSearch('')} className={`rounded-lg p-2 ${t.muted}`}>
              <X className="h-4 w-4" />
            </button>
          )}
          <span className={`hidden rounded-lg border ${dividerClass} px-3 py-2 text-xs sm:block ${t.muted}`}>
            {filtered.length} results
          </span>
        </Card>

        {/* Features */}
        <section id="features" className="mt-10 scroll-mt-24">
          <div className="mb-5">
            <p className={`text-xs font-medium uppercase tracking-[0.2em] ${t.accent}`}>{featuresSubtitle}</p>
            <h2 className={`mt-2 text-2xl font-semibold tracking-tight sm:text-3xl ${t.primary}`}>{featuresTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {filtered.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  whileHover={{ y: -4 }}
                >
                  <Card intensity="light" className="h-full p-5 sm:p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${theme.iconBox || ''}`}>
                        <Icon className={`h-5 w-5 ${t.accent}`} />
                      </div>
                      <span className={`text-xs ${t.muted}`}>0{index + 1}</span>
                    </div>
                    <h3 className={`font-semibold ${t.primary}`}>{feature.title}</h3>
                    <p className={`mt-2 text-sm leading-6 ${t.secondary}`}>{feature.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <Card intensity="light" className="p-8 text-center">
              <Search className={`mx-auto h-6 w-6 ${t.muted}`} />
              <p className={`mt-3 font-medium ${t.primary}`}>No matching features</p>
            </Card>
          )}
        </section>

        {/* Stats */}
        <section id="overview" className="mt-5 scroll-mt-24">
          <Card intensity="medium" className="grid grid-cols-1 sm:grid-cols-3 p-2">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-5 py-5 text-center sm:py-6 ${i < stats.length - 1 ? `border-b sm:border-b-0 sm:border-r ${dividerClass}` : ''}`}>
                <p className={`text-2xl font-semibold tracking-tight sm:text-3xl ${t.primary}`}>{s.value}</p>
                <p className={`mt-2 text-xs ${t.muted}`}>{s.label}</p>
              </div>
            ))}
          </Card>
        </section>

        {/* Shortcuts */}
        <section className="mt-5">
          <Card intensity="light" className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className={`text-sm font-semibold ${t.primary}`}>Quick access</h2>
              <p className={`mt-1 text-xs ${t.muted}`}>Select an interface shortcut</p>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:flex sm:gap-3">
              {shortcuts.map(({ icon: Icon, label: l }) => (
                <button
                  key={l}
                  onClick={() => setActiveShortcut(l)}
                  className={`flex h-11 items-center justify-center rounded-xl border transition sm:w-12 ${
                    activeShortcut === l ? shortcutActiveClass : shortcutClass
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </button>
              ))}
            </div>
            <p className={`text-xs sm:text-right ${t.muted}`}>{activeShortcut} selected</p>
          </Card>
        </section>

        <footer className={`flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row ${t.muted}`}>
          <p>{footerLeft}</p>
          <p>{footerRight}</p>
        </footer>
      </div>
    </main>
  );
}