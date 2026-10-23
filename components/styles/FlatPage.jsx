'use client';
import { motion } from 'framer-motion';
import { Palette, ArrowRight, Heart, Star, Zap, Check } from 'lucide-react';

export default function FlatPage() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="w-14 h-14 bg-[#3498db] rounded-2xl flex items-center justify-center mb-6">
            <Palette className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Flat Design</h1>
          <p className="text-gray-600 mb-6">
            Simple, two-dimensional layouts with bold solid colors — no gradients, no shadows.
          </p>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="px-6 py-3 bg-[#2ecc71] text-white font-semibold rounded-lg inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="px-4 py-3 bg-[#e74c3c] text-white font-semibold rounded-lg"
            >
              <Check className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Heart, color: 'bg-[#e74c3c]' },
            { icon: Star, color: 'bg-[#f39c12]' },
            { icon: Zap, color: 'bg-[#9b59b6]' },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className={`${s.color} rounded-xl p-6 aspect-square flex items-center justify-center cursor-pointer`}
            >
              <s.icon className="w-10 h-10 text-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}