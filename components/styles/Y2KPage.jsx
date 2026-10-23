'use client';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Music, Smile } from 'lucide-react';

export default function Y2KPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-white/60 backdrop-blur-md border-2 border-[#c4b5fd] rounded-3xl p-8 shadow-[0_0_30px_rgba(196,181,253,0.5)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Y2K
              </h1>
              <p className="text-gray-600 text-sm">Holographic · Playful</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            Playful, bubbly, holographic — the early 2000s internet, revived.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold rounded-full shadow-lg inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Let's Go
          </motion.button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: Heart, bg: 'from-pink-300 to-purple-300' },
            { icon: Star, bg: 'from-yellow-300 to-orange-300' },
            { icon: Music, bg: 'from-blue-300 to-teal-300' },
            { icon: Smile, bg: 'from-green-300 to-cyan-300' },
          ].map((s, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`aspect-square bg-gradient-to-br ${s.bg} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
            >
              <s.icon className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}