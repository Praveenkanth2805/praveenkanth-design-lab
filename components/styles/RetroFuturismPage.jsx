'use client';
import { motion } from 'framer-motion';
import { Rocket, Play, Gamepad2, Music, Star } from 'lucide-react';

export default function RetroFuturismPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="border-2 border-[#00f5d4] bg-[#16213e] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,245,212,0.15)]">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-[#00f5d4]" />
            <h1 className="text-4xl font-bold text-[#00f5d4] drop-shadow-[0_0_10px_rgba(0,245,212,0.5)]">
              Retro-Futurism
            </h1>
          </div>
          <p className="text-[#00f5d4]/70 mb-6 font-mono text-sm">
            Neon glows, synthwave vibes, pixel-perfect arcade aesthetics.
          </p>
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 24px rgba(0,245,212,0.8)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="px-6 py-3 border-2 border-[#00f5d4] text-[#00f5d4] font-bold rounded-xl inline-flex items-center gap-2 shadow-[0_0_15px_rgba(0,245,212,0.3)]"
          >
            <Play className="w-4 h-4" /> Insert Coin
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[Gamepad2, Music, Star].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0,245,212,0.6)',
                borderColor: 'rgba(0,245,212,0.8)',
              }}
              transition={{ duration: 0.15 }}
              className="border border-[#00f5d4]/30 bg-[#16213e] rounded-2xl p-5 flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(0,245,212,0.1)]"
            >
              <Icon className="w-8 h-8 text-[#00f5d4]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}