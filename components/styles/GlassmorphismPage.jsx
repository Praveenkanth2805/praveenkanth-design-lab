'use client';

import { motion } from 'framer-motion';  
import { Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

export default function GlassmorphismPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Glassmorphism</h1>
              <p className="text-white/70 text-sm">Frosted · Translucent · Layered</p>
            </div>
          </div>
          <p className="text-white/85 mb-6 leading-relaxed">
            Frosted glass panels with backdrop blur, semi-transparent fills, and subtle borders create depth without opacity.
          </p>

          {/* 🎬 animated button */}
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(255,255,255,0.45)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Star, title: 'Blurred', desc: 'Backdrop blur' },
            { icon: Zap, title: 'Fast', desc: 'GPU-accelerated' },
            { icon: Sparkles, title: 'Elegant', desc: 'Premium feel' },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-5 text-white"
            >
              <f.icon className="w-6 h-6 mb-3 opacity-90" />
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-xs text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}