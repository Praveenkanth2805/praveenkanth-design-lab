'use client';

import { motion } from 'framer-motion';

export default function PureGlass({
  children,
  className = '',
  intensity = 'medium',
  hover = true,
  rounded = 'rounded-3xl',
}) {
  const intensities = {
    light: 'bg-white/[0.06] border-white/[0.15]',
    medium: 'bg-white/[0.10] border-white/[0.22]',
    heavy: 'bg-white/[0.15] border-white/[0.28]',
    ultra: 'bg-white/[0.20] border-white/[0.35]',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`
        relative overflow-hidden ${rounded}
        backdrop-blur-2xl backdrop-saturate-150
        border ${intensities[intensity]}
        ${className}
      `}
      style={{
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.55),
          inset 0 -1px 0 rgba(0,0,0,0.06),
          inset 1px 0 0 rgba(255,255,255,0.18),
          inset -1px 0 0 rgba(0,0,0,0.04),
          0 20px 50px -12px rgba(0,0,0,0.30)
        `,
      }}
    >
      {/* Specular highlight — top-left shine (the "wow" bit) */}
      <div
        className={`pointer-events-none absolute inset-0 ${rounded} bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.45),transparent_45%)]`}
      />

      {/* Bottom sheen — subtle reflected light from below */}
      <div
        className={`pointer-events-none absolute inset-0 ${rounded} bg-[radial-gradient(circle_at_80%_110%,rgba(255,255,255,0.12),transparent_40%)]`}
      />

      {/* Noise texture — kills the "too smooth" plasticky look */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content sits above all the glass layers */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}