'use client';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Star, Heart, Plus, X } from 'lucide-react';

export default function BrutalismPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="border-4 border-black bg-[#FFD93D] shadow-[10px_10px_0_#000] p-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-10 h-10" />
            <h1 className="text-4xl font-black uppercase tracking-tight">Brutalism</h1>
          </div>
          <p className="font-mono text-sm mb-6 border-l-4 border-black pl-4">
            Raw, bold, unapologetic. Thick borders, hard shadows, zero gradients.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* 🎬 hard snap button — no easing, instant translate */}
            <motion.button
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 4, y: 4 }}
              transition={{ duration: 0 }}
              className="px-6 py-3 bg-black text-white font-bold uppercase border-4 border-black inline-flex items-center gap-2"
            >
              Click Me <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ x: -1, y: -1 }}
              whileTap={{ x: 4, y: 4 }}
              transition={{ duration: 0 }}
              className="px-4 py-3 bg-white font-bold border-4 border-black shadow-[4px_4px_0_#000]"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[Star, Heart, X].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ x: -3, y: -3 }}
              whileTap={{ x: 3, y: 3 }}
              transition={{ duration: 0 }}
              className="border-4 border-black bg-white shadow-[6px_6px_0_#000] aspect-square flex items-center justify-center cursor-pointer"
            >
              <Icon className="w-10 h-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}