'use client';
import { motion } from 'framer-motion';
import { Crown, Star, ArrowUpRight, Gem, Award } from 'lucide-react';

export default function DarkLuxePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="border border-[#d4a574]/30 bg-[#111111] rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-[#d4a574]" />
            <h1 className="text-4xl font-serif text-[#d4a574]">Dark Luxe</h1>
          </div>
          <p className="text-gray-400 mb-6 font-light leading-relaxed">
            Deep blacks, warm gold accents, and refined serif typography convey quiet luxury.
          </p>
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 24px rgba(212,165,116,0.55)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="px-6 py-3 bg-[#d4a574] text-black font-semibold rounded-xl inline-flex items-center gap-2"
          >
            Explore <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Gem, label: 'Premium', value: '24' },
            { icon: Star, label: 'Rated', value: '5.0' },
            { icon: Award, label: 'Awards', value: '12' },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -3,
                borderColor: 'rgba(212,165,116,0.5)',
              }}
              transition={{ duration: 0.25 }}
              className="border border-[#d4a574]/20 bg-[#111111] rounded-2xl p-5 cursor-pointer"
            >
              <s.icon className="w-5 h-5 text-[#d4a574] mb-3" />
              <p className="text-2xl font-serif text-white">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}