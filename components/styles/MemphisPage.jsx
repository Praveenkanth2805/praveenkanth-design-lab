'use client';
import { motion } from 'framer-motion';
import { Zap, Music, Star, Heart, Plus, Circle } from 'lucide-react';

export default function MemphisPage() {
  return (
    <div className="min-h-screen bg-[#FFD93D] p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-12 left-8 w-24 h-24 bg-[#FF6B6B] rounded-full opacity-60"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-12 right-8 w-32 h-32 bg-[#C4B5FD] opacity-60"
      />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-8 border-black rounded-full opacity-30" />

      <div className="relative z-10 w-full max-w-3xl space-y-6">
        <div className="border-4 border-black bg-white shadow-[10px_10px_0_#000] p-8">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-8 h-8" />
            <h1 className="text-4xl font-black tracking-tight">MEMPHIS</h1>
          </div>
          <p className="font-medium mb-6">
            Bold colors, geometric shapes, and playful 80s postmodern attitude.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ rotate: -2, scale: 1.03 }}
              whileTap={{ rotate: 2, x: 2, y: 2 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="px-6 py-3 bg-[#FF6B6B] text-white font-bold uppercase border-4 border-black shadow-[4px_4px_0_#000] inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4" /> Fun!
            </motion.button>
            <motion.button
              whileHover={{ rotate: 3, scale: 1.03 }}
              whileTap={{ rotate: -3, x: 2, y: 2 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className="px-4 py-3 bg-[#C4B5FD] border-4 border-black shadow-[4px_4px_0_#000]"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Star, bg: 'bg-[#FF6B6B]', text: 'text-white' },
            { icon: Heart, bg: 'bg-white', text: 'text-black' },
            { icon: Circle, bg: 'bg-[#C4B5FD]', text: 'text-black' },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ rotate: i % 2 === 0 ? -8 : 8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 500 }}
              className={`${s.bg} ${s.text} border-4 border-black shadow-[6px_6px_0_#000] aspect-square flex items-center justify-center cursor-pointer`}
            >
              <s.icon className="w-10 h-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}